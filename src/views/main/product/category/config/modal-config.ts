import { IFormType } from '@/base-ui/form/type'
export const modalConfig: IFormType = {
  labelWidth: '100px',
  formItems: [
    {
      field: 'name',
      label: '类别名称',
      type: 'input',
      placeholder: '请输入类别名称'
    }
  ],
  colLayout: {
    xl: 24
  },
  itemStyle: {}
}
