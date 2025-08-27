import zod from 'zod'
import { passwordRules } from '.'
import { LogInSchema } from './login.schema'

export const SignUpSchema = LogInSchema.extend({
  name: zod.string().min(2, 'Requerido, por favor ingrese su nombre').max(100, 'El nombre no puede exceder los 100 caracteres'),
  lastName: zod
    .string()
    .min(2, 'Requerido, por favor ingrese su apellido')
    .max(100, 'El apellido no puede exceder los 100 caracteres'),
  _password: zod
    .string()
    .min(8, 'Requerido, por favor ingrese la contraseña')
    .regex(
      passwordRules,
      'Debe contener 8 caracteres, una mayúscula, una minúscula, un numero y un carácter especial: : ! @ # . * % & @'
    ),
})

export type SignUp = zod.infer<typeof SignUpSchema>
