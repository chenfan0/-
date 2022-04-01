type FormItemType = 'input' | 'select' | 'password' | 'datePicker'

export interface IFormItemDataType {
  field: any
  label: string
  type: FormItemType
  rules?: any
  placeholder?: string
  options?: any[]
  otherOptions?: any
  isHidden?: boolean
}

export interface IFormType {
  formItems: IFormItemDataType[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
