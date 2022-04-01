<template>
  <div class="bar-echart">
    <Echart :option="option" title="分类商品的收藏" />
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
import * as echart from 'echarts'
import { EChartsOption } from 'echarts'
import Echart from '@/base-ui/echart'

const props = defineProps({
  dataAxis: {
    type: Array as PropType<any[]>,
    required: true
  },
  data: {
    type: Array as PropType<any[]>,
    required: true
  }
})
const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      data: props.dataAxis,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echart.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echart.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.data
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
