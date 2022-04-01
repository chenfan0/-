<template>
  <div class="user">
    <PageSearch
      :formSearchConfig="formSearchConfig"
      @resetClick="handleResetClick"
      @searchClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :tableContentConfig="tableContentConfig"
      pageName="users"
      @editClick="handleEditClick"
      @newClick="handleNewClick"
    />
    <PageModal ref="pageModalRef" :modalConfig="modalConfigRef" pageName="users" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { formSearchConfig } from './config/form-search-config'
import { tableContentConfig } from './config/table-content-config'
import { modalConfig } from './config/modal-config'
// 导入组件
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
// 导入hooks
import { usePageContent } from '@/hooks/usePageContent'
import { usePageModal } from '@/hooks/usePageModal'

const [pageContentRef, handleQueryClick, handleResetClick] = usePageContent()

// 处理新建与编辑密码隐藏与显示
function newCallback() {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  passwordItem!.isHidden = false
}
function editCallback() {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  passwordItem!.isHidden = true
}

const store = useStore()
// 给选择框添加数据
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
  departmentItem!.options = store.state.entireDepartment.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
  roleItem!.options = store.state.entireRole.map((item: any) => {
    return { label: item.name, value: item.id }
  })

  return modalConfig
})
const [pageModalRef, handleEditClick, handleNewClick] = usePageModal(newCallback, editCallback)
</script>

<style lang="less" scoped></style>
