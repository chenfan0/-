<template>
  <div class="category">
    <PageSearch
      :form-search-config="formSearchConfig"
      @reset-click="handleResetClick"
      @search-click="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :table-content-config="tableContentConfig"
      page-name="category"
      @edit-click="handleEditClick"
      @new-click="handleNewClick"
    />
    <PageModal ref="pageModalRef" :modal-config="modalConfig" page-name="category" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { formSearchConfig } from './config/form-search-config'
import { tableContentConfig } from './config/table-content-config'
import { modalConfig } from './config/modal-config'

import { usePageContent } from '@/hooks/usePageContent'
import { usePageModal } from '@/hooks/usePageModal'

const [pageContentRef, handleQueryClick, handleResetClick] = usePageContent()
const [pageModalRef, handleEditClick, handleNewClick] = usePageModal()
</script>

<style scoped></style>
