import { useStore } from 'vuex'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permission = store.state.login.userPermission
  const verfyPermission = `system:${pageName}:${handleName}`

  return !!permission.find((item: string) => item === verfyPermission)
}
