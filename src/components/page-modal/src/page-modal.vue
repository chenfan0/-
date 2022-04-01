<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建" width="30%" center destroy-on-close>
      <span>
        <CFForm v-bind="modalConfig" v-model="modalData" />
        <slot></slot>
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineExpose, computed } from 'vue'

import { useStore } from 'vuex'

import CFForm from '@/base-ui/form'

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  },
  otherInfo: {
    type: Object,
    dafault: () => ({})
  }
})

const dialogVisible = ref(false)
const modalData: any = ref({})
// 判断是发送编辑，还是新建的网络请求
const type = ref()

// 获取编辑或新建的数据
const editData = computed(() => {
  const data: any = {}
  props.modalConfig.formItems.forEach((item: any) => {
    if (modalData.value[item.field]) {
      data[item.field] = modalData.value[item.field]
    }
  })
  return data
})

const store = useStore()

function handleConfirmClick() {
  if (type.value === 'edit') {
    store.dispatch('system/editPageDataAction', {
      id: modalData.value.id,
      editData: { ...editData.value, ...props.otherInfo },
      pageName: props.pageName
    })
  }
  if (type.value === 'new') {
    store.dispatch('system/createPageDataAction', {
      newData: { ...editData.value, ...props.otherInfo },
      pageName: props.pageName
    })
  }

  dialogVisible.value = false
}

defineExpose({
  dialogVisible,
  modalData,
  handleConfirmClick,
  type
})
</script>

<style lang="less" scoped></style>
