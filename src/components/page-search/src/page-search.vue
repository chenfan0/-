<template>
  <div class="page-search">
    <CFForm v-bind="formSearchConfig" v-model="formData">
      <template #header>
        <h1 class="header">查询</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="el-icon-search" @click="handleQuqeryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </CFForm>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'

import CFForm from '@/base-ui/form'

const props = defineProps({
  formSearchConfig: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['resetClick', 'searchClick'])

// 根据传入配置中不同的field设置不同的formData属性
const formDataType: any = {}
props.formSearchConfig.formItems.forEach((item: any) => {
  formDataType[item.field] = ''
})

const formData = ref(formDataType)

// 处理点击重置按钮
function handleResetClick() {
  // 重置操作
  for (let key in formDataType) {
    formData.value[key] = ''
  }
  // 向外发出点击重置按钮事件
  emits('resetClick')
}
// 处理点击搜索按钮
function handleQuqeryClick() {
  emits('searchClick', formData.value)
}
</script>

<style lang="less" scoped>
.page-search {
  .header {
    text-align: center;
  }

  .footer {
    text-align: right;
    padding: 0 50px 20px 0;
  }
}
</style>
