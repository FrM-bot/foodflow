import AccessDenied from '@/components/access-denied'
import { Loader } from '@/components/icons'
import { useSession } from '@/store/session'
import type { UserRole } from '@/types'
import type { PropsWithChildren } from 'react'

type ProtectedRouteProps = PropsWithChildren & {
  redirect?: string
  rolesAllowed?: UserRole[]
}

export const ProtectedRoute = ({ children, rolesAllowed }: ProtectedRouteProps) => {
  const { session, isLoading } = useSession()

  if (isLoading)
    return (
      <div className="w-screen h-screen grid place-items-center">
        <Loader />
      </div>
    )

  if (!session?.id || !rolesAllowed?.includes(session?.role)) {
    return <AccessDenied />
  }

  return children
}
