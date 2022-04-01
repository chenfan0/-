import axios from 'axios'
import { AxiosInstance } from 'axios'
import { CFRequestInterceptors, CFRequestConfig } from './type'

import { ElLoading, ILoadingInstance, ElMessage } from 'element-plus'

class CFRequest {
  instance: AxiosInstance
  interceptors?: CFRequestInterceptors
  loadingInstance?: ILoadingInstance
  isLoading: boolean

  constructor(config: CFRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.isLoading = config.showLoading ?? true

    this.handleGlobalInterceptors()
    this.handleInstanceInterceptors()
  }

  // 配置全局拦截器
  handleGlobalInterceptors(): void {
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isLoading) {
          this.loadingInstance = ElLoading.service({
            text: '正在加载数据中~',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log(err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loadingInstance?.close()

        if (res.data.code === 400) {
          ElMessage.error(res.data.data)
        }
        return res.data
      },
      () => {
        this.loadingInstance?.close()
      }
    )
  }

  // 配置实例拦截器
  handleInstanceInterceptors(): void {
    // 配置实例请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 配置实例响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request<T>(config: CFRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单独请求的请求成功拦截器
      if (config.interceptors?.requestInterceptor) {
        // 执行配置传入的函数
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          //  单独请求的响应成功拦截器
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: CFRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: CFRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  patch<T>(config: CFRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
  delete<T>(config: CFRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'delete' })
  }
}

export default CFRequest
