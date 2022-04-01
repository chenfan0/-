<template>
  <div class="nav-menu">
    <div class="logo">
      <div class="logo">
        <img class="img" src="~@/assets/img/logo.jpg" alt="logo" />
        <span class="title" v-show="!isMenuFold">Vue3 + TS</span>
      </div>
    </div>

    <el-menu
      class="el-menu"
      :default-active="defaultValue + ''"
      background-color="#001529"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="isMenuFold"
    >
      <template v-for="item in userMenu" :key="item.id">
        <!-- 判断是否为一级菜单 -->
        <!-- 不是一级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <!-- 文字和图标 -->
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                class="el-menu-item"
                :index="subItem.id + ''"
                @click="handleMenuClick(subItem.url)"
              >
                {{ subItem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 是一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            {{ item.name }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

import { IRootStateType } from '@/store/type'
import emitter from '@/utilis/eventBus'
import { mapPathToMenuId, filterMenu } from '@/utilis/mapMenu'

const store = useStore<IRootStateType>()
const router = useRouter()
const route = useRoute()

const userMenu = computed(() => store.state.login?.userMenu)

// 记录菜单折叠状态
const isMenuFold = ref(false)
// 记录默认展开的菜单项
const defaultValue = ref('2')
// 当前路径
const path = route.path

defaultValue.value = mapPathToMenuId(userMenu.value, path)

// 处理点击菜单进行路由跳转
function handleMenuClick(url: string) {
  router.push(url)
}

// 监听是否点击折叠按钮
emitter.on('clickFold', (isFold) => {
  isMenuFold.value = isFold as boolean
})
</script>

<style lang="less" scoped>
.nav-menu {
  width: 100%;
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    align-items: center;
    height: 60px;
    padding-top: 10px;

    .img {
      width: 45px;
      margin: 0 10px 0 10px;
      border-radius: 50%;
    }

    .title {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .el-menu {
    // width: 100%;
    border-right: none;

    .el-menu-item {
      background-color: #0c2135 !important;
    }

    .is-active {
      background-color: #0a60bd !important;
      color: #fff !important;
    }
  }
}
</style>
