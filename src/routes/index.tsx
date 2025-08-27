export * from './paths'
import { Loader } from '@/components/icons'
import { $UserRole } from '@/enums'
import AppLayout from '@/layout/App.layout'
import AuthLayout from '@/layout/Auth.layout'
import NotFoundPage from '@/pages/404'
import Home from '@/pages/home'
import LogIn from '@/pages/log-in'
import Profile from '@/pages/profile'
import SignUp from '@/pages/sign-up'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Routes as Pathnames } from './paths'

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full grid place-content-center">
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
