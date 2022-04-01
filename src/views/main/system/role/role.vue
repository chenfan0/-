<template>
  <div class="role">
    <PageSearch
      :form-search-config="formSearchConfig"
      @resetClick="handleResetClick"
      @searchClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :table-content-config="tableContentConfig"
      page-name="role"
      @edit-click="handleEditClick"
      @new-click="handleNewClick"
    />
    <PageModal
      ref="pageModalRef"
      :modal-config="modalConfig"
      page-name="role"
      :other-info="otherInfo"
    >
      <el-tree
        ref="elTreeRef"
        class="tree"
        :data="entireMenu"
        node-key="id"
        :props="defaultProps"
        show-checkbox
        @check="handleCheckChange"
        :default-checked-keys="defaultKeys"
      />
    </PageModal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'
import { useStore } from 'vuex'

import { formSearchConfig } from './config/form-search-config'
import { tableContentConfig } from './config/table-content-config'
import { modalConfig } from './config/modal-config'
import { menuMapLeafKeys } from '@/utilis/mapMenu'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageContent } from '@/hooks/usePageContent'
import { usePageModal } from '@/hooks/usePageModal'
import { ElTree } from 'element-plus'

const [pageContentRef, handleQueryClick, handleResetClick] = usePageContent()
const [pageModalRef, handleEditClick, handleNewClick] = usePageModal(newCb, editCb)

const store = useStore()

const entireMenu = computed(() => store.state.entireMenu)

const elTreeRef = ref<InstanceType<typeof ElTree>>()

// 保存默认选中的节点
const defaultKeys: any = ref([])
function editCb(item: any) {
  defaultKeys.value = menuMapLeafKeys(item.menuList)

  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(defaultKeys.value, false)
  })
}
function newCb() {
  defaultKeys.value = []
}
// 保存树型控件的数据
const otherInfo = ref({})

// 选中树型空间节点时会回调该函数
const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys

  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]

  otherInfo.value = { menuList }
}

const defaultProps = {
  children: 'children',
  label: 'name',
  disabled: 'disabled'
}
</script>

<style scoped>
.tree {
  margin-left: 20px;
}
</style>
