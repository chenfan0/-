import cfRequest from '../index'

import { IResultType } from '../type'

export function getPageListData(url: string, queryInfo: any) {
  return cfRequest.post<IResultType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return cfRequest.delete<IResultType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return cfRequest.post<IResultType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return cfRequest.patch<IResultType>({
    url: url,
    data: editData
  })
}
