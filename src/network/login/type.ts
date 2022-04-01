export interface ILoginParamsType {
  name: string
  password: string
}

export interface ILoingResultDataType {
  id: number
  name: string
  token: string
}

export interface IRole {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export interface IDepartment {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

export interface IUserInfoResultType {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: IRole
  department: IDepartment
}

export interface IUserMenuChild2 {
  id: number
  url?: any
  name: string
  sort?: any
  type: number
  parentId: number
  permission: string
}

export interface IUserMenuChild {
  id: number
  url: string
  name: string
  sort: number
  type: number
  children: IUserMenuChild2[]
  parentId: number
}

export interface IUserMenuType {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: IUserMenuChild[]
}
