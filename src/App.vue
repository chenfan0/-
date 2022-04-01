<template>
  <el-config-provider :locale="locale">
    <div class="App"><router-view></router-view></div>
  </el-config-provider>
</template>
<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = zhCn
</script>

<style lang="less" scoped>
.App {
  height: 100%;
}
</style>
