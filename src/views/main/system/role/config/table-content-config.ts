import { ITableContentConfig } from '@/components/page-content'

export const tableContentConfig: ITableContentConfig = {
  title: '角色列表',
  propList: [
    {
      prop: 'name',
      label: '职位名称',
      minWidth: '100'
    },
    {
      prop: 'intro',
      label: '职位介绍',
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
