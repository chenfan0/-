<template>
  <div class="pie-echart">
    <Echart :option="option" title="分类商品数量(饼图)" />
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType, computed } from 'vue'
import { EChartsOption } from 'echarts'

import Echart from '@/base-ui/echart'

const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true
  }
})

const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
