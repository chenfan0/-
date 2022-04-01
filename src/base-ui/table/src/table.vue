<template>
  <div class="cf-table">
    <slot name="header">
      <h2>{{ title }}</h2>
    </slot>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      align="center"
      row-key="id"
      :tree-props="showTree ? { children: 'children' } : { children: 'nononon' }"
    >
      <el-table-column v-if="showSelection" type="selection" align="center"></el-table-column>
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        width="80"
        align="center"
      ></el-table-column>
      <template v-for="item in propList" :key="item.id">
        <el-table-column show-overflow-tooltip v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.prop" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <slot name="footer">
      <el-pagination
        v-if="showPagination"
        class="pagination"
        :page-sizes="[10, 20, 30]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataListCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array as any,
    required: true
  },
  showIndex: {
    type: Boolean,
    default: false
  },
  showSelection: {
    type: Boolean,
    default: false
  },
  dataListCount: {
    type: Number,
    default: 0
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  showTree: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['pageSizeChange', 'currentPageChange'])

const pageSize = ref(10)

function handleSizeChange(size: number) {
  // 1 改变pageSize
  pageSize.value = size
  // 2 向外发出事件
  emits('pageSizeChange', size)
}
function handleCurrentChange(currentPage: number) {
  emits('currentPageChange', currentPage, pageSize.value)
}
</script>

<style lang="less" scoped>
.cf-table {
  border-top: 20px solid #f5f5f5;
  padding: 40px 20px 30px 20px;

  .pagination {
    margin-top: 30px;
    text-align: right;
  }
}
</style>
