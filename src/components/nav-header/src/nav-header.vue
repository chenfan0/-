<template>
  <div class="nav-header">
    <div
      class="logo"
      @click="handleFold"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    ></div>

    <CFBreadcrumb :breadcrumb-data="breadcrumbData" />
    <UserInfo />
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import emitter from '@/utilis/eventBus'
import { mapPathToBreadcrumb } from '@/utilis/mapMenu'

import CFBreadcrumb from '@/base-ui/breadcrumb'
import UserInfo from './cpns/user-info.vue'

// 存储是菜单状态（是否折叠）
const isFold = ref(false)

// 折叠菜单处理
function handleFold() {
  isFold.value = !isFold.value
  emitter.emit('clickFold', isFold.value)
}

// 处理面包屑数据
const breadcrumbData = computed(() => {
  const store = useStore()
  const userMenus = store.state.login?.userMenu
  const route = useRoute()
  const path = route.path
  return mapPathToBreadcrumb(userMenus, path, [])
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  height: 100%;

  .logo {
    width: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    &:hover {
      cursor: pointer;
    }
  }

  .breadcrumb {
    flex: 1;
  }
}
</style>
