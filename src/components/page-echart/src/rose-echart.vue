<template>
  <div class="rose-echart">
    <Echart :option="option" title="分类商品数量(玫瑰图)" />
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
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
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.data
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
