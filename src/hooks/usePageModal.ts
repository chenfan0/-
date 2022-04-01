import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type callBackFn = (param?: any) => void

export function usePageModal(newCb?: callBackFn, editCb?: callBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  function handleEditClick(data: any) {
    pageModalRef.value.modalData = { ...data }
    editCb && editCb(data)
    ;(pageModalRef.value as any).dialogVisible = true
    ;(pageModalRef.value as any).type = 'edit'
  }

  function handleNewClick() {
    pageModalRef.value.modalData = {}
    newCb && newCb()
    ;(pageModalRef.value as any).dialogVisible = true
    ;(pageModalRef.value as any).type = 'new'
  }
  return [pageModalRef, handleEditClick, handleNewClick]
}
