// import type { UserRole } from "@/types"
// import { $UserRole } from "@/enums"
import { ProtectedRoute } from '@/context/ProtectedRoute.provider'
import Profile from '@/pages/profile'
import type { RouteObject } from 'react-router-dom'
import { Routes } from './paths'

// const rolesAllowed: UserRole[] = [$UserRole.USER]

// Rutas de la aplicación
export const AppRoutes = [
  {
    path: Routes.home,
    async lazy() {
      // Forma larga de importar - El componente no debe ser exportado por defecto y no importa el nombre
      const module = await import('@/pages/home')
      return { Component: module.default, loader: module.loader }
    },
  },
  {
    path: Routes.user.profile,
    element: (
      <ProtectedRoute redirect={Routes.logIn as unknown as string}>
        <Profile />
      </ProtectedRoute>
    ),
  },
] as RouteObject[]
