import { IFormType } from '@/base-ui/form/type'
export const formSearchConfig: IFormType = {
  formItems: [
    {
      field: 'id',
      label: 'id',
      type: 'input',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      label: '部门名称',
      type: 'input'
    },
    {
      field: 'leader',
      label: '部门领导',
      type: 'input'
    }
  ]
}
