import { App } from 'vue'

import { formatUtcString } from '@/utilis/format'

export function registerGlobalProps(app: App) {
  app.config.globalProperties.$filter = {
    format(utcString: string, formatType: string) {
      return formatUtcString(utcString, formatType)
    }
  }
}
