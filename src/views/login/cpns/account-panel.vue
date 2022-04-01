<template>
  <div class="account-panel">
    <el-form :model="account" ref="elFormRef">
      <el-form-item label="账号" prop="name" :rules="rules.name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="rules.password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineExpose } from 'vue'
import { useStore } from 'vuex'

import localCatch from '@/utilis/cache'

import { ElForm } from 'element-plus'

const store = useStore()
// 存储表单收集的数据
const account = ref({
  name: localCatch.getCatch('name') ?? '',
  password: localCatch.getCatch('password') ?? ''
})
// 设置验证规则
const rules = {
  name: [
    {
      required: true,
      message: '用户名必须输入',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,10}$/,
      message: '用户名必须是3到10个字符或数字',
      tirgger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必须输入',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,10}$/,
      message: '密码必须是3到10个字符或数字',
      tirgger: 'blur'
    }
  ]
}
// 获取el-form
const elFormRef = ref<InstanceType<typeof ElForm>>()

// 处理登录函数
function handleAccountLogin(isRemember: boolean) {
  elFormRef.value?.validate((valid) => {
    if (valid) {
      // 表单验证规则通过
      // 判断是否选择记住密码
      if (isRemember) {
        // 将数据保存到localStorage中
        localCatch.setCatch('name', account.value.name)
        localCatch.setCatch('password', account.value.password)
        // 调用dispath发送网络请求
        store.dispatch('login/accountLoginAction', { ...account.value })
      } else {
        // 删除localStorage中保存的
        localCatch.deleteCache('name')
        localCatch.deleteCache('password')
        // 调用dispath发送网络请求
        store.dispatch('login/accountLoginAction', { ...account.value })
      }
    }
  })
}

defineExpose({
  handleAccountLogin
})
</script>

<style lang="less" scoped></style>
