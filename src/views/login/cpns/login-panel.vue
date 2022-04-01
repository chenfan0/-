<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>

    <el-tabs class="el-tabs" type="border-card" stretch v-model="loginMode">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登录</span>
        </template>
        <AccountPanel ref="accountRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="handle-password">
      <el-checkbox v-model="isRemember" label="记住密码"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { AccountType } from '../type'

import AccountPanel from './account-panel.vue'

// 记录是否选择记住密码
const isRemember = ref(true)
// 获取AccountPanel组件
const accountRef = ref<AccountType>()
// 记录登录模式
const loginMode = ref('account')

// 处理点击立即登录按钮函数
function handleLoginClick() {
  if (loginMode.value === 'account') {
    accountRef.value?.handleAccountLogin(isRemember.value)
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 380px;
  height: 200px;
  transform: translateY(-50%);
  .title {
    text-align: center;
  }
  .el-tabs {
    height: 100%;
  }
  .handle-password {
    display: flex;
    justify-content: space-between;
    margin: 5px 0 5px 0;
  }
  .login-btn {
    width: 100%;
    font-weight: 700;
  }
}
</style>
