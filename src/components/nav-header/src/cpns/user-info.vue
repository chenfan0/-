<template>
  <div class="user-info">
    <el-avatar
      :size="35"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    ></el-avatar>
    <div class="user-name">
      <el-dropdown>
        <span class="el-dropdown-link"> {{ name }} </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitLogin">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { IRootStateType } from '@/store/type'
import localCatch from '@/utilis/cache'

const store = useStore<IRootStateType>()
const name = computed(() => store.state.login?.userInfo.name)

const router = useRouter()
// 退出登录函数
function handleExitLogin() {
  // 清除localStorage中的除了name和password的数据
  localCatch.deleteCache('token')
  localCatch.deleteCache('userInfo')
  localCatch.deleteCache('userMenu')

  // 跳转到登录页面
  router.push('/login')
}
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  align-items: center;
  padding-right: 20px;

  .user-name {
    padding: 0 5px 0 10px;
    cursor: pointer;
  }
}
</style>
