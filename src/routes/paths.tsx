// Declaración de rutas
export const Routes = {
  home: '/',
  logIn: '/log-in',
  signUp: '/sign-up',
  user: {
    profile: '/profile',
  },
  resetPassword: (id = ':id') => `/reset/${id}`,
} as const
