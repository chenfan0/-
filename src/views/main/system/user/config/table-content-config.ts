import { ITableContentConfig } from '@/components/page-content'

export const tableContentConfig: ITableContentConfig = {
  title: '用户列表',
  propList: [
    {
      prop: 'name',
      label: '用户名',
      minWidth: '100'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '100'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      minWidth: '120'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '180'
    },
    {
      prop: 'operation',
      label: '操作',
      minWidth: '100'
    }
  ],
  showIndex: true,
  showSelection: true
}
