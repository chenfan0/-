<template>
  <div class="line-echart">
    <Echart :option="option" title="分类商品的销量" />
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
import { EChartsOption } from 'echarts'
import Echart from '@/base-ui/echart'

const props = defineProps({
  xAxisData: {
    type: Array as PropType<any[]>,
    required: true
  },
  seriesData: {
    type: Array as PropType<any[]>,
    required: true
  }
})

const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xAxisData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.seriesData,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
