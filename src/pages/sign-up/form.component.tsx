import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Routes } from '@/routes'
import { type SignUp, SignUpSchema } from '@/schemas/sign-up.schema'
import { logIn as logInService } from '@/services/logIn'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

function useLogIn() {
  const { mutateAsync: logIn, isPending } = useMutation({
    mutationFn: logInService,
  })

  return { logIn, isPending }
}

export default function SignUpForm() {
  // const navigate = useNavigate()
  const { logIn, isPending } = useLogIn()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: zodResolver(SignUpSchema),
  })
  const onSubmit: SubmitHandler<SignUp> = async (data) => {
    const [error, result] = await logIn(data)
    if (error) toast.error(error)
    if (result) toast.success(result)
  }
  console.log(watch('email'))
  return (
    <main>
      <div className="mb-4 flex gap-1 items-center">
        <span className="text-xl font-semibold text-center">Registrarse</span>
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
          <p>¿Ya tienes una cuenta?</p>
          <Link className="underline" to={Routes.logIn}>
            Iniciar sesión
          </Link>
        </div>

        <Button type="submit" className="w-full" loading={isPending}>
          Registrarse
        </Button>
      </form>
    </main>
  )
}
