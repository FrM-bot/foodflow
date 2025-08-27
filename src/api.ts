import { env } from '@/config/env'
import { $CookieKey } from '@/enums'
import { getCookie } from '@/hooks/useCookies'
import axios from 'axios'

const api = axios.create({
  baseURL: env.BASE_SERVER_URL,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = getCookie({ key: $CookieKey.session_token })
  return config
})

export { api }
