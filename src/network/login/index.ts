import cfRequest from '../index'

import { ILoginParamsType, ILoingResultDataType, IUserInfoResultType, IUserMenuType } from './type'
import { IResultType } from '../type'

enum LoginApi {
  login = '/login',
  userInfo = '/users/',
  userMenu = '/role/'
}

export function accountLoginRequest(data: ILoginParamsType) {
  return cfRequest.post<IResultType<ILoingResultDataType>>({
    url: LoginApi.login,
    data
  })
}

export function requestUserInfoById(id: number) {
  return cfRequest.get<IResultType<IUserInfoResultType>>({
    url: LoginApi.userInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return cfRequest.get<IResultType<IUserMenuType>>({
    url: LoginApi.userMenu + id + '/menu'
  })
}
