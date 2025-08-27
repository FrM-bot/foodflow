// React
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Others
export * from './paths'
import { Loader } from '@/components/icons'
import { $UserRole } from '@/enums'
import AppLayout from '@/layout/App.layout'
import AuthLayout from '@/layout/Auth.layout'
// Pages (dynamic imports)
const NotFoundPage = lazy(() => import('@/pages/404'))
const Home = lazy(() => import('@/pages/home'))
const LogIn = lazy(() => import('@/pages/log-in'))
const Profile = lazy(() => import('@/pages/profile'))
const ResetPassword = lazy(() => import('@/pages/reset-password'))
const SignUp = lazy(() => import('@/pages/sign-up'))
import { Routes as Pathnames } from './paths'

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full grid place-content-center bg-gradient-to-br from-[lch(8_13.7_275.28)] to-[lch(8_13.7_275.28)]">
          <Loader />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          {/* Auth routes */}
          <Route element={<AuthLayout />}>
            <Route path={Pathnames.logIn} element={<LogIn />} />
            <Route path={Pathnames.signUp} element={<SignUp />} />
            <Route path={Pathnames.resetPassword()} element={<ResetPassword />} />
          </Route>
          {/* Auth routes */}

          {/* Common routes */}
          <Route element={<AppLayout validate={false} />}>
            <Route path={Pathnames.home} element={<Home />} />
          </Route>
          {/* Common routes */}

          {/* User routes */}
          <Route element={<AppLayout rolesAllowed={[$UserRole.user]} redirect={Pathnames.logIn} validate />}>
            <Route path={Pathnames.user.profile} element={<Profile />} />
          </Route>
          {/* User routes */}

          {/* Not found */}
          <Route path="*" element={<NotFoundPage />} />
          {/* Not found */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
