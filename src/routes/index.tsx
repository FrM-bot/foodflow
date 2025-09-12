// React
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Others
export * from './paths'
import { Loader } from '@/components/icons'
import { $UserRole } from '@/enums'
import AppLayout from '@/layout/App.layout'
import DashboardLayout from '@/layout/Dashboard.layout'
// import AuthLayout from '@/layout/Auth.layout'
// Pages (dynamic imports)
const NotFoundPage = lazy(() => import('@/pages/404'))
// const Home = lazy(() => import('@/pages/home'))
const Profile = lazy(() => import('@/pages/profile'))
const ForgotPassword = lazy(() => import('@/pages/forgot-password'))
const LogIn = lazy(() => import('@/pages/log-in'))
const SignUp = lazy(() => import('@/pages/sign-up'))
// Dashboard
const DashboardHome = lazy(() => import('@/pages/dashboard/home'))
const AccountProfile = lazy(() => import('@/pages/dashboard/profile'))
const TablesPage = lazy(() => import('@/pages/dashboard/tables'))
const CategoriesPage = lazy(() => import('@/pages/dashboard/categories'))
const ProductsPage = lazy(() => import('@/pages/dashboard/products'))
const AddProductPage = lazy(() => import('@/pages/dashboard/products/add'))
const EditProductPage = lazy(() => import('@/pages/dashboard/products/edit'))
const AddCategoryPage = lazy(() => import('@/pages/dashboard/categories/add'))
const EditCategoryPage = lazy(() => import('@/pages/dashboard/categories/edit'))
const WaitersPage = lazy(() => import('@/pages/dashboard/waiters'))
const AddWaiterPage = lazy(() => import('@/pages/dashboard/waiters/add'))
import EditWaiterPage from '@/pages/dashboard/waiters/edit'
// Paths
import { Routes as Pathnames } from './paths'

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full grid place-content-center bg-gradient-to-br from-background to-neutral-900">
          <Loader />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          {/* Auth routes */}
          <Route>
            <Route path={Pathnames.logIn} element={<LogIn />} />
            <Route path={Pathnames.signUp} element={<SignUp />} />
            <Route path={Pathnames.forgotPassword.home} element={<ForgotPassword />} />
          </Route>
          {/* Auth routes */}

          {/* Common routes */}
          <Route element={<DashboardLayout />}>
            {/* <Route path={Pathnames.home} element={<Home />} /> */}
            <Route path={Pathnames.dashboard.home} element={<DashboardHome />} />
            <Route path={Pathnames.dashboard.profile} element={<AccountProfile />} />
            <Route path={Pathnames.dashboard.tables} element={<TablesPage />} />
            <Route path={Pathnames.dashboard.categories} element={<CategoriesPage />} />
            <Route path={Pathnames.dashboard.products} element={<ProductsPage />} />
            <Route path={Pathnames.dashboard.addProduct} element={<AddProductPage />} />
            <Route path={Pathnames.dashboard.editProduct()} element={<EditProductPage />} />
            <Route path={Pathnames.dashboard.addCategory} element={<AddCategoryPage />} />
            <Route path={Pathnames.dashboard.editCategory()} element={<EditCategoryPage />} />
            <Route path={Pathnames.dashboard.waiters} element={<WaitersPage />} />
            <Route path={Pathnames.dashboard.addWaiter} element={<AddWaiterPage />} />
            <Route path={Pathnames.dashboard.editWaiter()} element={<EditWaiterPage />} />
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
