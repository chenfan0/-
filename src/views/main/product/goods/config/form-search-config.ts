import { IFormType } from '@/base-ui/form/type'
export const formSearchConfig: IFormType = {
  formItems: [
    {
      field: 'name',
      label: '商品名称',
      type: 'input',
      placeholder: '商品名称'
    },
    {
      field: 'address',
      label: '地址',
      type: 'input',
      placeholder: '请输入地址'
    }
  ]
}
