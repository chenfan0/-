<template>
  <div class="goods">
    <PageSearch
      :form-search-config="formSearchConfig"
      @search-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <PageContent
      ref="pageContentRef"
      :table-content-config="tableContentConfig"
      page-name="goods"
      @edit-click="handleEditClick"
      @new-click="handleNewClick"
    >
      <template #imgUrl="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
    </PageContent>
    <PageModal ref="pageModalRef" :modal-config="modalConfigRef" page-name="goods" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { formSearchConfig } from './config/form-search-config'
import { tableContentConfig } from './config/table-content-config'
import { modalConfig } from './config/modal-config'

import { usePageContent } from '@/hooks/usePageContent'
import { usePageModal } from '@/hooks/usePageModal'

const store = useStore()
// 给选择框添加数据
const modalConfigRef = computed(() => {
  const goodCategory = modalConfig.formItems.find((item) => item.field === 'categoryId')
  goodCategory!.options = store.state.system.categoryList.map((item: any) => {
    return { label: item.name, value: item.id }
  })

  return modalConfig
})

const [pageContentRef, handleQueryClick, handleResetClick] = usePageContent()
const [pageModalRef, handleEditClick, handleNewClick] = usePageModal()
</script>

<style scoped></style>
