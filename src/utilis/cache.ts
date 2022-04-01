import CryptoJS from 'crypto-js'

const secretKey = 'sdkfjklsdjfkljaskldfjlasdjfklsdjfklasdjfjaskdfjklsdjfkl'

function encrypt(message: string) {
  return CryptoJS.AES.encrypt(message, secretKey).toString()
}
function decrypt(cryptText: string) {
  const bytes = CryptoJS.AES.decrypt(cryptText, secretKey)
  return bytes.toString(CryptoJS.enc.Utf8)
}

class LocalCache {
  setCatch(key: string, value: any) {
    const item = encrypt(JSON.stringify(value))
    window.localStorage.setItem(`cms:${key}`, item)
  }

  getCatch(key: string) {
    const result = window.localStorage.getItem(`cms:${key}`)
    if (result) {
      return JSON.parse(decrypt(result))
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(`cms:${key}`)
  }

  clearCatch() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
