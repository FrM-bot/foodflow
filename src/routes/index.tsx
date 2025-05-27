export * from './paths'
import AppLayout from '@/layout/App.layout'
import AuthLayout from '@/layout/Auth.layout'
import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: AppRoutes,
  },
  {
    element: <AuthLayout />,
    children: AuthRoutes,
  },
  {
    path: '*',
    lazy: () => import('@/pages/404'),
  },
])
