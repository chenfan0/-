<template>
  <div class="cf-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-form-item :label="item.label" :style="itemStyle" v-if="!item.isHidden">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :showPassword="item.type === 'password'"
                  v-model="formData[item.field]"
                >
                </el-input>
              </el-form-item>
            </template>

            <template v-else-if="item.type === 'select'">
              <el-form-item :label="item.label" :style="itemStyle" v-if="!item.isHidden">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  v-model="formData[item.field]"
                >
                  <template v-for="iten in item.options" :key="iten.label">
                    <el-option v-bind="iten"></el-option>
                  </template>
                </el-select>
              </el-form-item>
            </template>

            <template v-else-if="item.type === 'datePicker'">
              <el-form-item :label="item.label" :style="itemStyle" v-if="!item.isHidden">
                <el-date-picker
                  type="daterange"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                >
                </el-date-picker>
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType, ref, watch, defineEmits } from 'vue'

import { IFormItemDataType } from '../type'

const props = defineProps({
  modelValue: {
    type: Object,
    require: true
  },
  formItems: {
    type: Array as PropType<IFormItemDataType[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '80px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 30px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xs: 24,
      sm: 24,
      md: 12,
      lg: 8,
      xl: 8
    })
  }
})

const emits = defineEmits(['update:modelValue'])

const formData = ref({ ...props.modelValue })
watch(
  formData.value,
  (newValue) => {
    emits('update:modelValue', newValue)
  },
  {
    deep: true
  }
)
</script>

<style lang="less" scoped>
.cf-form {
  padding-top: 20px;
}
</style>
