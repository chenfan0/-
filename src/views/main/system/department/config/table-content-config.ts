import { ITableContentConfig } from '@/components/page-content'

export const tableContentConfig: ITableContentConfig = {
  title: '部门列表',
  propList: [
    {
      prop: 'name',
      label: '部门名称',
      minWidth: '100'
    },
    {
      prop: 'leader',
      label: '部门管理者',
      minWidth: '100'
    },
    {
      prop: 'parentId',
      label: '上级部门',
      minWidth: '100'
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
