import zod from 'zod'
import { email, passwordRules } from '.'

export const LogInSchema = zod.object({
  email,
  password: zod
    .string()
    .min(8, 'Requerido, por favor ingrese la contraseña')
    .regex(
      passwordRules,
      'Debe contener 8 caracteres, una mayúscula, una minúscula, un numero y un carácter especial: : ! @ # . * % & @'
    ),
})

export type LogIn = zod.infer<typeof LogInSchema>
