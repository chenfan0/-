import { ITableContentConfig } from '@/components/page-content'

export const tableContentConfig: ITableContentConfig = {
  title: '商品类别列表',
  propList: [
    {
      prop: 'name',
      label: '商品类别',
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
  showIndex: true
}
