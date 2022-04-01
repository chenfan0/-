import { IFormType } from '@/base-ui/form/type'
export const formSearchConfig: IFormType = {
  formItems: [
    {
      field: 'id',
      label: 'id',
      type: 'input',
      placeholder: '请输入查询id'
    },
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      label: '真实姓名',
      type: 'input',
      field: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      label: '电话号码',
      type: 'input',
      field: 'cellphone',
      placeholder: '请输入手机号'
    }
  ]
}
