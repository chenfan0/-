let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://152.136.185.210:4000/'
  BASE_URL = 'http://81.71.36.158:10001'
  // BASE_URL = 'http://localhost:10001'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://81.71.36.158:10001'
} else {
  BASE_URL = ''
}

export { BASE_URL }
