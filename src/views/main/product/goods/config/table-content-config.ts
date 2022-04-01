import { ITableContentConfig } from '@/components/page-content'

export const tableContentConfig: ITableContentConfig = {
  title: '商品列表',
  propList: [
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '100'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '40'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '40'
    },
    {
      prop: 'desc',
      label: '商品描述',
      minWidth: '100'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100'
    },
    {
      prop: 'saleCount',
      label: '销量',
      minWidth: '100'
    },
    {
      prop: 'inventoryCount',
      label: '库存',
      minWidth: '100'
    },
    {
      prop: 'favorCount',
      label: '收藏',
      minWidth: '100'
    },
    {
      prop: 'address',
      label: '地址',
      minWidth: '100'
    },
    {
      prop: 'categoryId',
      label: '商品类别',
      minWidth: '100'
    },
    {
      prop: 'operation',
      label: '操作',
      minWidth: '120'
    }
  ],
  showIndex: true
}
