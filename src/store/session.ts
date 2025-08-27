import { $CookieKey, $SessionStatus } from '@/enums'
import { setCookieFn } from '@/hooks/useCookies'
import type { Session, SessionStatus } from '@/types'
import { create } from 'zustand'

type State = {
  session: Session | null
  status: SessionStatus
  isLoading: boolean
}

type SessionActions = {
  setSession: (user: State['session']) => void
  signOut: () => void
  setSessionStatus: (status: SessionStatus) => void
  setIsLoading: (isLoading: boolean) => void
  setSessionToken: (sessionToken: string, options?: { rememberMe?: boolean }) => void
}

const SESSION_DAYS = 1

const state = {
  session: null,
  status: $SessionStatus.unauthenticated,
  isLoading: false,
}

export const useSession = create<State & SessionActions>((set) => ({
  ...state,
  setSession: (session) => set({ session }),
  // updateSession: (session) => set({ session: ...session }),
  signOut: () =>
    set((state) => {
      const date = new Date()
      date.setTime(date.getTime() - 1)
      const expires = date.toUTCString()
      setCookieFn({
        name: $CookieKey.session_token,
        expires,
        value: '',
        secure: true,
        path: '/',
      })
      return { ...state, session: null, status: $SessionStatus.unauthenticated }
    }),
  setSessionStatus: (status) => set({ status }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setSessionToken: (sessionToken, { rememberMe } = {}) =>
    set((currentState) => {
      if (rememberMe) {
        const date = new Date()
        date.setTime(date.getTime() + SESSION_DAYS * 24 * 60 * 60 * 1000)
        const expires = date.toUTCString()
        setCookieFn({
          name: $CookieKey.session_token,
          value: sessionToken,
          expires,
          sameSite: 'strict',
          secure: true,
          path: '/',
        })
      } else {
        setCookieFn({
          name: $CookieKey.session_token,
          value: sessionToken,
          secure: true,
          path: '/',
        })
      }
      return {
        ...currentState,
      }
    }),
}))
