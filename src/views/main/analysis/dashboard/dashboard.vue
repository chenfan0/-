<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="7"><PieEchart :data="categoryGoodsCount" /></el-col>
      <el-col :span="10"><MapEchart :map-data="addressGoodsSale" /></el-col>
      <el-col :span="7"><RoseEchart :data="categoryGoodsCount" /></el-col>
      <el-col :span="12"
        ><LineEchart
          :x-axis-data="categoryGoodsSale.xAxisData"
          :series-data="categoryGoodsSale.seriesData"
      /></el-col>
      <el-col :span="12">
        <BarEchart :data-axis="categoryGoodsFavor.dataAxis" :data="categoryGoodsFavor.data" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

import PieEchart from '@/components/page-echart/src/pie-echart.vue'
import RoseEchart from '@/components/page-echart/src/rose-echart.vue'
import LineEchart from '@/components/page-echart/src/line-echart.vue'
import BarEchart from '@/components/page-echart/src/bar-echart.vue'
import MapEchart from '@/components/page-echart/src/map-echart.vue'

const store = useStore()

// 请求数据
store.dispatch('dashboard/getDashboardDataAction')

const categoryGoodsCount = computed(() => {
  return store.state.dashboard.categoryGoodsCount.map((item: any) => {
    return { name: item.name, value: item.goodsCount }
  })
})

const categoryGoodsSale = computed(() => {
  const xAxisData: any[] = []
  const seriesData: any[] = []
  for (let item of store.state.dashboard.categoryGoodsSale) {
    xAxisData.push(item.name)
    seriesData.push(item.goodsCount)
  }
  return { xAxisData, seriesData }
})

const categoryGoodsFavor = computed(() => {
  const dataAxis: any[] = []
  const data: any[] = []
  for (let item of store.state.dashboard.categoryGoodsFavor) {
    dataAxis.push(item.name)
    data.push(item.goodsFavor)
  }
  return { dataAxis, data }
})
const addressGoodsSale = computed(() => {
  return store.state.dashboard.addressGoodsSale.map((item: any) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped></style>
