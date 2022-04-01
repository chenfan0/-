import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CFRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface CFRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: CFRequestInterceptors<T>
  showLoading?: boolean
}
