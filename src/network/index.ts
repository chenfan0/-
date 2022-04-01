import CFRequest from './request'

import localCatch from '@/utilis/cache'

import { BASE_URL } from './request/config'

const cfRequest = new CFRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor(config) {
      const token = localCatch.getCatch('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    }
  }
})

export default cfRequest
