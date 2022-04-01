<template>
  <div class="echart">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <div ref="divRef" :style="{ width: '100%', height: '350px' }"></div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineProps, PropType, watchEffect } from 'vue'
import * as echarts from 'echarts'
import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData)

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  option: {
    type: Object as PropType<echarts.EChartsOption>,
    required: true
  }
})

const divRef = ref<HTMLElement>()

onMounted(() => {
  const echartInstance = echarts.init(divRef.value!)
  watchEffect(() => {
    echartInstance.setOption(props.option)
  })

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
</script>

<style lang="less" scoped>
.box-card {
  margin: 10px 10px;
}
</style>
