// import { $UserRole } from '@/modules/auth/enum'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Container } from '@/components/ui/container'
import { Link } from '@/components/ui/link'
import { ProtectedRoute } from '@/context/protected-route.provider'
import { Routes } from '@/routes'
import type { UserRole } from '@/types'
import { Outlet } from 'react-router-dom'

const Common = () => {
  return (
    <>
      <Header />
      <Container component="main" className="min-h-[80dvh] my-4 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}
export default function AppLayout(
  { rolesAllowed, redirect, validate }: { rolesAllowed?: UserRole[]; redirect?: string; validate?: boolean } = {
    redirect: Routes.logIn,
    validate: true,
  }
) {
  if (validate === false) {
    return <Common />
  }

  if (validate && rolesAllowed) {
    return (
      <ProtectedRoute redirect={redirect} rolesAllowed={rolesAllowed}>
        <Common />
      </ProtectedRoute>
    )
  }

  return (
    <>
      <Header />
      <Container component="main" className="min-h-[80dvh] my-4 px-4 sm:px-6 lg:px-8 text-center grid place-content-center">
        <div className="flex flex-col gap-2">
          <p>No tiene permisos para acceder a la ruta.</p>
          <Link variant="outline" href={redirect}>
            iniciar sesión
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  )
}
