export const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.*%&@\$%\^&\*])(?=.{8,})/
export const usernameSignUp = /^(\S+$)/g
export const emailRules = /^[^@]+@[^@]+\.[^@]+$/
import zod from 'zod'

export const email = zod
  .string()
  .min(5, 'El nombre de usuario debe contener al menos 5 caracteres')
  .max(25, 'El nombre de usuario debe tener un máximo de 25 caracteres')
  .email('Requerido, por favor introduzca su nombre de usuario')
