import type { $CookieKey } from '@/enums'
import { useState } from 'react'

type CookieKey = (typeof $CookieKey)[keyof typeof $CookieKey]

export const getCookie = ({
  key,
}: {
  key: CookieKey
}) => {
  if (!window.document.cookie) {
    return null
  }
  const decodedCookie = decodeURIComponent(window.document.cookie)
  const listOfCookies = decodedCookie.split('; ')
  const cookieKeyValue = listOfCookies.find((cookie) => cookie.startsWith(key))
  return cookieKeyValue?.split('=').at(1)
}

type CookieOptions = {
  name: CookieKey
  value?: string | null
  expires?: string | Date
  maxAge?: number
  path?: string
  secure?: boolean
  httpOnly?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
}

export const setCookieFn = ({ name, value, maxAge, expires, path, secure, httpOnly, sameSite }: CookieOptions) => {
  const day = 60 * 60 * 24
  const baseCookie = {
    value: `${name}=${value}`,
  }
  if (path) {
    baseCookie.value += `;path=${path}`
  }
  if (maxAge && maxAge >= 0) {
    baseCookie.value += `;max-age=${day * maxAge}`
  }
  if (expires) {
    baseCookie.value += `;expires=${expires}`
  }
  if (sameSite) {
    baseCookie.value += `;SameSite=${sameSite}`
  }
  if (secure) {
    baseCookie.value += ';Secure'
  }
  if (httpOnly) {
    baseCookie.value += ';HttpOnly'
  }
  if (path) {
    baseCookie.value += `;path=${path}`
  }
  document.cookie = baseCookie.value
}

export default function useCookies() {
  const [cookies, setCookie] = useState<Record<CookieKey, string | null | undefined>>(() => {
    const cookies = document.cookie.split('; ').reduce(
      (acc, cookie) => {
        const { 0: key, 1: value } = cookie.split('=') as [CookieKey, string]
        acc[key] = value
        return acc
      },
      {} as Record<CookieKey, string | null | undefined>
    )
    return cookies
  })

  const setCookieHandler = (cookie: CookieOptions) => {
    setCookieFn(cookie)
    setCookie((prev) => ({ ...prev, [cookie.name]: cookie.value }))
  }

  return {
    cookies,
    setCookie: setCookieHandler,
  }
}
