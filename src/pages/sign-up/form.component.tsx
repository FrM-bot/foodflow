import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from '@/components/ui/link'
import { cn } from '@/lib/utils'
import { Routes } from '@/routes'
import { type SignUp, SignUpSchema } from '@/schemas/sign-up.schema'
import { signUp as signUpService } from '@/services/signUp'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function SignUpForm({ className, ...props }: React.ComponentProps<'div'>) {
  const { mutateAsync: signUp, isPending } = useMutation({
    mutationFn: signUpService,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: zodResolver(SignUpSchema),
  })
  const onSubmit: SubmitHandler<SignUp> = async (data) => {
    const [error, result] = await signUp(data)
    if (error) toast.error(error)
    if (result) toast.success(result)
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Regístrate</CardTitle>
          <CardDescription>Ingresa tus datos para crear una cuenta en FoodFlow</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">Bienvenido</span>
              </div>
              <div className="grid gap-6">
                {/* Nombre y Apellido */}
                <div className="col-span-1 flex flex-col gap-1">
                  <Label className="text-white" htmlFor="name">
                    Nombre
                  </Label>
                  <Input {...register('name')} placeholder="Nombre" />
                  {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
                </div>
                <div className="col-span-1 flex flex-col gap-1">
                  <Label className="text-white" htmlFor="lastName">
                    Apellido
                  </Label>
                  <Input {...register('lastName')} placeholder="Apellido" />
                  {errors.lastName && <span className="text-red-400 text-xs">{errors.lastName.message}</span>}
                </div>
                {/* Email */}
                <div className="col-span-2 flex flex-col gap-1">
                  <Label className="text-white" htmlFor="email">
                    Email
                  </Label>
                  <Input {...register('email')} placeholder="john@example.com" />
                  {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                </div>
                {/* Password */}
                <div className="col-span-2 flex flex-col gap-1">
                  <Label className="text-white" htmlFor="password">
                    Contraseña
                  </Label>
                  <Input type="password" {...register('password')} placeholder="********" />
                  {errors.password && <span className="text-red-400 text-xs">{errors.password.message}</span>}
                </div>
                {/* Confirm Password */}
                <div className="col-span-2 flex flex-col gap-1">
                  <Label className="text-white" htmlFor="_password">
                    Repite la contraseña
                  </Label>
                  <Input type="password" {...register('_password')} placeholder="********" />
                  {errors._password && <span className="text-red-400 text-xs">{errors._password.message}</span>}
                </div>

                <Button type="submit" className="col-span-2" loading={isPending}>
                  Regístrate
                </Button>
              </div>
              <p className="text-center text-sm">
                ¿Tienes una cuenta?{' '}
                <Link href={Routes.logIn} className="underline underline-offset-4">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
      {/* <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div> */}
    </div>
  )
}
