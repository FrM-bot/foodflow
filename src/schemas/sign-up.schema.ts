import zod from 'zod'
import { passwordRules } from '.'
import { LogInSchema } from './login.schema'

export const SignUpSchema = LogInSchema.extend({
  _repeatPassword: zod
    .string()
    .min(8, 'Requerido, por favor ingrese la contraseña')
    .regex(
      passwordRules,
      'Debe contener 8 caracteres, una mayúscula, una minúscula, un numero y un carácter especial: : ! @ # . * % & @'
    ),
})

export type SignUp = zod.infer<typeof SignUpSchema>
