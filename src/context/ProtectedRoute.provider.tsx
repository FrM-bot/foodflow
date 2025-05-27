import { useSession } from '@/hooks/auth'
import { Routes } from '@/routes'
// import type { UserRole } from "@/types"
import { type PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type ProtectedRouteProps = PropsWithChildren & {
  redirect?: string
  // rolesAllowed?: UserRole[]
}

export const ProtectedRoute = ({ children, redirect }: ProtectedRouteProps) => {
  const { user } = useSession()
  const navigate = useNavigate()

  useEffect(() => {
    const redirectTo = redirect ?? Routes.logIn
    if (user === null) {
      // if (user === null || !rolesAllowed?.includes(user.role)) {

      navigate(redirectTo)
    }
  }, [user, navigate, redirect])

  return children
}
