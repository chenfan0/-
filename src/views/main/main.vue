<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="asideWidth" class="el-aside">
        <NavMenu />
      </el-aside>
      <el-container>
        <el-header class="header" height="60px">
          <NavHeader />
        </el-header>
        <el-main>
          <div class="router-wrapper">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import emitter from '@/utilis/eventBus'

import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

// 设置aside的宽度
const asideWidth = ref('210px')

// 监听是否点击折叠菜单按钮
emitter.on('clickFold', (isFold) => {
  isFold ? (asideWidth.value = '60px') : (asideWidth.value = '210px')
})
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  background-color: #f0f2f5;

  .main-container {
    height: 100%;

    .el-aside {
      transition: all 0.4s;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    .header {
      background-color: #fff;
    }

    .router-wrapper {
      background-color: #fff;
      border-radius: 5px;
    }
  }
}
</style>
