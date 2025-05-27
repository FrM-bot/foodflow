import type { $SessionStatus, $UserRole } from '@/enums'

export type UserRole = (typeof $UserRole)[keyof typeof $UserRole]

export type SessionStatus = (typeof $SessionStatus)[keyof typeof $SessionStatus]

export type Session = {
  email: string
  id: string
  username: string
  fullName: string
  role: UserRole
}
