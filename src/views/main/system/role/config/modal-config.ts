import { IFormType } from '@/base-ui/form/type'
export const modalConfig: IFormType = {
  labelWidth: '100px',
  formItems: [
    {
      field: 'name',
      label: '角色名',
      type: 'input',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      label: '角色介绍',
      type: 'input',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: {
    xl: 24
  },
  itemStyle: {}
}
