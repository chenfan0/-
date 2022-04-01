import { ITableContentConfig } from '@/components/page-content'

export const tableContentConfig: ITableContentConfig = {
  title: '菜单列表',
  showPagination: false,
  propList: [
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: '100'
    },
    {
      prop: 'icon',
      label: '菜单图标',
      minWidth: '100'
    },
    {
      prop: 'url',
      label: 'url',
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
    }
    // {
    //   prop: 'operation',
    //   label: '操作',
    //   minWidth: '100'
    // }
  ],
  showTree: true
}
