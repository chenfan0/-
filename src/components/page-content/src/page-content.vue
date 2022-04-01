<template>
  <div class="page-content">
    <CFTable
      :list-data="dataList"
      :data-list-count="dataListCount"
      v-bind="tableContentConfig"
      @current-page-change="handleCurrentPageChange"
      @page-size-change="handlePageSizeChange"
    >
      <template #header>
        <slot name="header">
          <div class="header">
            <div class="title">{{ tableContentConfig.title }}</div>
            <el-button type="primary" size="medium" v-if="isCreate" @click="handleNewClick">
              新建
            </el-button>
          </div>
        </slot>
      </template>

      <template #enable="scope">
        <el-button size="mini" :type="scope.row.enable === 1 ? 'success' : 'danger'" plain>{{
          scope.row.enable === 1 ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <strong>{{ $filter.format(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filter.format(scope.row.updateAt) }}</strong>
      </template>
      <template #operation="scope">
        <el-button
          size="mini"
          icon="el-icon-edit"
          type="text"
          v-if="isUpdate"
          :key="isUpdate"
          @click="handleEditClick(scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          icon="el-icon-delete"
          type="text"
          :key="isDelete"
          v-if="isDelete"
          @click="handleDeleteClick(scope.row)"
          >删除</el-button
        >
      </template>
      <template v-for="item in otherPropsSlot" :key="item.prop" #[item.prop]="scope">
        <slot :name="item.prop" :row="scope.row"></slot>
      </template>
    </CFTable>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, defineEmits, PropType, defineExpose } from 'vue'
import { useStore } from 'vuex'

import { IRootStateType } from '@/store/type'
import { ITableContentConfig } from '@/components/page-content'

import { usePermission } from '@/hooks/usePermission'

import CFTable from '@/base-ui/table'

const props = defineProps({
  tableContentConfig: {
    type: Object as PropType<ITableContentConfig>,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['editClick', 'newClick'])

const store = useStore<IRootStateType>()

// 从vuex中获取数据
const dataList: any = computed(() => (store.state.system as any)[props.pageName + 'List'])
const dataListCount = computed(() => (store.state.system as any)[props.pageName + 'Count'])

// 获取用户权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')

// 发送获取列表数据的网络请求
function getListData(queryInfos: any = {}) {
  if (!isQuery) return
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: 0,
      size: 10,
      ...queryInfos
    }
  })
}
getListData()

// 处理分页器页面改变
function handleCurrentPageChange(currentPage: number, size: number) {
  // 保存当前分页器查询条件
  store.commit('system/changeTotalQueryInfo', { offset: (currentPage - 1) * size, size })
  getListData(store.state.system?.totalQueryInfo)
}

// 处理分页器页面size改变
function handlePageSizeChange(size: number) {
  // 保存当前分页器查询条件
  store.commit('system/changeTotalQueryInfo', { size })
  getListData(store.state.system?.totalQueryInfo)
}

// 处理点击删除按钮
function handleDeleteClick(data: any) {
  // 发送网络请求
  store.dispatch('system/deletePageDataAction', { pageName: props.pageName, id: data.id })
}
// 处理点击编辑按钮
function handleEditClick(data: any) {
  emits('editClick', data)
}
// 处理点击新建按钮
function handleNewClick() {
  emits('newClick')
}

// 动态获取插槽
const otherPropsSlot = props.tableContentConfig.propList.filter((item) => {
  if (item.prop === 'enable') return false
  if (item.prop === 'createAt') return false
  if (item.prop === 'updateAt') return false
  if (item.prop === 'operation') return false
  return true
})

defineExpose({
  getListData
})
</script>

<style lang="less" scoped>
.page-content {
  .header {
    display: flex;
    justify-content: space-between;
    margin: 10px 10px;

    .title {
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>
