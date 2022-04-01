<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbData" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'

import { IBreadCrumb } from '../type'

defineProps({
  breadcrumbData: {
    type: Array as PropType<IBreadCrumb[]>,
    default: () => []
  }
})
</script>

<style lang="less" scoped></style>
