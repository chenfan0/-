import { ILoginStateType } from './login/type'
import { ISystemType } from './main/system/type'

export interface IRootStateType {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: []
  login?: ILoginStateType
  system?: ISystemType
}
