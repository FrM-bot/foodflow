import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Routes } from '@/routes'
import { type LogIn, LogInSchema } from '@/schemas/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function LogInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LogIn>({
    resolver: zodResolver(LogInSchema),
  })
  const onSubmit: SubmitHandler<LogIn> = (data) => console.log(data)
  console.log(watch('email'))
  return (
    <main>
      <div className="mb-4 flex gap-1 items-center">
        <span className="text-xl font-semibold text-center">Iniciar sesión</span>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Input Email */}
        <label className="flex flex-col gap-1" htmlFor="email">
          <span>Correo</span>
          <Input {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        {/* Input Email */}

        {/* Input Password */}
        <label className="flex flex-col gap-1" htmlFor="password">
          <span>Password</span>
          <Input {...register('password')} />
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        {/* Input Password */}
        <div className="flex gap-1">
          <p>¿No tienes una cuenta?</p>
          <Link className="underline" to={Routes.signUp}>
            Crear cuenta
          </Link>
        </div>

        <Button type="submit" className="w-full" loading={null}>
          Ingresar
        </Button>
      </form>
    </main>
  )
}
