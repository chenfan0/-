import { IFormType } from '@/base-ui/form/type'
export const modalConfig: IFormType = {
  labelWidth: '100px',
  formItems: [
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      label: '密码',
      type: 'password',
      placeholder: '请输入密码'
    },
    {
      label: '真实姓名',
      type: 'input',
      field: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      label: '手机号码',
      type: 'input',
      field: 'cellphone',
      placeholder: '请输入手机号'
    },
    {
      field: 'departmentId',
      label: '请选择部门',
      type: 'select',
      placeholder: '请选择部门'
    },
    {
      field: 'roleId',
      label: '请选择角色',
      type: 'select',
      placeholder: '请选择角色'
    }
  ],
  colLayout: {
    xl: 24
  },
  itemStyle: {}
}
