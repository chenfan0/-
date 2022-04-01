import { IFormType } from '@/base-ui/form/type'
export const modalConfig: IFormType = {
  labelWidth: '100px',
  formItems: [
    {
      field: 'name',
      label: '商品名称',
      type: 'input',
      placeholder: '请输入商品名称'
    },
    {
      label: '原价',
      type: 'input',
      field: 'oldPrice',
      placeholder: '请输入原价'
    },
    {
      label: '现价',
      type: 'input',
      field: 'newPrice',
      placeholder: '请输入现价'
    },
    {
      label: '商品描述',
      type: 'input',
      field: 'desc',
      placeholder: '请输入商品描述'
    },
    {
      label: '图片地址',
      type: 'input',
      field: 'imgUrl',
      placeholder: '图片地址'
    },
    {
      label: '销量',
      type: 'input',
      field: 'saleCount',
      placeholder: '请输入销量'
    },
    {
      label: '库存',
      type: 'input',
      field: 'inventoryCount',
      placeholder: '请输入库存'
    },
    {
      label: '收藏',
      type: 'input',
      field: 'favorCount',
      placeholder: '请输入收藏'
    },
    {
      label: '商品类别',
      type: 'select',
      field: 'categoryId',
      placeholder: '请选择商品类别'
    },
    {
      label: '地址',
      type: 'input',
      field: 'address',
      placeholder: '请输入地址'
    }
  ],
  colLayout: {
    xl: 24
  },
  itemStyle: {}
}
