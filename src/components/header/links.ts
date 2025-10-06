import { $SessionStatus } from '@/enums'
import { Routes } from '@/routes'

export const NavLinks = {
  [$SessionStatus.unauthenticated]: [
    {
      label: 'Registrarse',
      href: Routes.signUp,
    },
    {
      label: 'Iniciar sesión',
      href: Routes.logIn,
    },
  ],
  [$SessionStatus.authenticated]: [
    {
      label: 'Inicio',
      href: Routes.dashboard.home,
    },
    {
      label: 'Mesas',
      href: Routes.dashboard.tables,
    },
    {
      label: 'Categorías',
      href: Routes.dashboard.categories,
    },
    {
      label: 'Productos',
      href: Routes.dashboard.products,
    },
    {
      label: 'Camareros',
      href: Routes.dashboard.waiters,
    },
  ],
}
