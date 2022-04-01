<template>
  <div class="department">
    <PageSearch
      :form-search-config="formSearchConfig"
      @search-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <PageContent
      page-name="department"
      :table-content-config="tableContentConfig"
      @edit-click="handleEditClick"
      @new-click="handleNewClick"
      ref="pageContentRef"
    />
    <PageModal ref="pageModalRef" :modal-config="modalConfigRef" page-name="department" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { formSearchConfig } from './config/form-search-config'
import { tableContentConfig } from './config/table-content-config'
import { modalConfig } from './config/modal-config'

import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { usePageContent } from '@/hooks/usePageContent'
import { usePageModal } from '@/hooks/usePageModal'

const [pageContentRef, handleQueryClick, handleResetClick] = usePageContent()

const store = useStore()
// 处理select框的数据
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find((item) => item.field === 'parentId')
  departmentItem!.options = store.state.entireDepartment.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  return modalConfig
})

const [pageModalRef, handleEditClick, handleNewClick] = usePageModal()
</script>

<style scoped></style>
