// Declaración de rutas
export const Routes = {
  home: '/',
  logIn: '/log-in',
  signUp: '/sign-up',
  user: {
    profile: '/profile',
  },
  forgotPassword: (id = ':id') => `/forgot-password/${id}`,
  dashboard: {
    home: '/dashboard/home',
    waiters: '/dashboard/waiters',
    users: '/dashboard/waiters',
    tables: '/dashboard/tables',
    products: '/dashboard/products',
    discounts: '/dashboard/discounts',
    menu: '/dashboard/menu',
    categories: '/dashboard/categories',
    settings: '/dashboard/settings',
    profile: '/dashboard/profile',
    billing: '/dashboard/billing',
    help: '/dashboard/help',
    notifications: '/dashboard/notifications',
  },
} as const
