import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Routes } from '@/routes'
import { email } from '@/schemas'
// import { LogInSchema, type LogIn } from '@/schemas/login.schema'
// import { logIn as logInService } from '@/services/logIn'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
// import { toast } from 'sonner'
import { object } from 'zod'

// function useLogIn() {
//     const { mutateAsync: logIn, isPending } = useMutation({
//         mutationFn: logInService,
//     })

//     return { logIn, isPending }
// }

export default function ForgotPasswordForm() {
  // const navigate = useNavigate()
  // const { logIn, isPending } = useLogIn()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(object({ email })),
  })
  const onSubmit: SubmitHandler<{ email: string }> = async (data) => {
    // const [error, result] = await logIn(data)
    // if (error) toast.error(error)
    // if (result) toast.success(result)
    console.log(data)
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <span className="text-xl font-bold text-white mt-2 mb-1">Recuperar contraseña</span>
          <span className="text-sm text-[#A0AEC0] mb-2 text-center">
            Ingresa tu email y enviaremos un enlace para restablecer tu contraseña
          </span>
        </div>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="col-span-2 flex flex-col gap-1">
            <Label className="text-white" htmlFor="email">
              Email
            </Label>
            <Input {...register('email')} placeholder="john@example.com" />
            {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
          </div>
          {/* Botón */}
          <Button
            type="submit"
            className="col-span-2 bg-gradient-to-r from-cyan-400 to-blue-950 hover:shadow-lg hover:shadow-blue-950 border border-neutral-700"
            size="lg"
            // loading={isPending}
          >
            Enviar enlace de recuperación
          </Button>
        </form>
        <div className="flex mt-4">
          <Link className="underline text-[#1CB5E0] font-semibold" to={Routes.logIn}>
            Volver al log in
          </Link>
        </div>
      </div>
    </main>
  )
}
