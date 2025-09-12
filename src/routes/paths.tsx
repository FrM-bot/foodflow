// Declaración de rutas
export const Routes = {
  home: '/',
  logIn: '/log-in',
  signUp: '/sign-up',
  user: {
    profile: '/profile',
  },
  forgotPassword: {
    home: '/forgot-password',
    token: (token = ':token') => `/forgot-password/${token}`,
  },
  dashboard: {
    home: '/dashboard/home',
    waiters: '/dashboard/waiters',
    addWaiter: '/dashboard/waiters/add',
    editWaiter: (id = ':id') => `/dashboard/waiters/${id}`,
    users: '/dashboard/waiters',
    tables: '/dashboard/tables',
    products: '/dashboard/products',
    addProduct: '/dashboard/products/add',
    editProduct: (id = ':id') => `/dashboard/products/${id}`,
    discounts: '/dashboard/discounts',
    menu: '/dashboard/menu',
    categories: '/dashboard/categories',
    editCategory: (id = ':id') => `/dashboard/categories/${id}`,
    addCategory: '/dashboard/categories/add',
    settings: '/dashboard/settings',
    profile: '/dashboard/profile',
    billing: '/dashboard/billing',
    help: '/dashboard/help',
    notifications: '/dashboard/notifications',
  },
} as const
