import AccountPanel from '../cpns/account-panel.vue'

export interface AccountType extends InstanceType<typeof AccountPanel> {
  handleAccountLogin: (x: boolean) => void
}
