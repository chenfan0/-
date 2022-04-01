import { ref } from 'vue'
import { useStore } from 'vuex'

import PageContent from '@/components/page-content'

export function usePageContent() {
  const store = useStore()
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  function handleResetClick() {
    ;(pageContentRef.value as any).getListData()
  }

  function handleQueryClick(queryInfo: any = {}) {
    store.commit('system/changeTotalQueryInfo', { ...queryInfo })
    ;(pageContentRef.value as any).getListData(store.state.system.totalQueryInfo)
  }
  return [pageContentRef, handleQueryClick, handleResetClick]
}
