import { IFormType } from '@/base-ui/form/type'
export const modalConfig: IFormType = {
  labelWidth: '100px',
  formItems: [
    {
      field: 'name',
      label: '部门名',
      type: 'input',
      placeholder: '请输入部门名'
    },
    {
      label: '部门管理者',
      type: 'input',
      field: 'leader',
      placeholder: '请输入部门管理者'
    },
    {
      label: '上级部门',
      type: 'select',
      field: 'parentId',
      placeholder: '请选择上级部门'
    }
  ],
  colLayout: {
    xl: 24
  },
  itemStyle: {}
}
