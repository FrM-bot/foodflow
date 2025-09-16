import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Routes } from '@/routes'
import { type LogIn, LogInSchema } from '@/schemas/login.schema'
import { logIn as logInService } from '@/services/logIn'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Link } from '../../components/ui/link'
import { Typography } from '../../components/ui/typography'

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  const { mutateAsync: logIn, isPending } = useMutation({
    mutationFn: logInService,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogIn>({
    resolver: zodResolver(LogInSchema),
  })
  const onSubmit: SubmitHandler<LogIn> = async (data) => {
    const [error, result] = await logIn(data)
    if (error) toast.error(error)
    if (result) toast.success(result)
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Inicia sesión</CardTitle>
          <CardDescription>Ingresa tus datos para iniciar sesión en FoodFlow</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">Bienvenido de vuelta</span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <Label htmlFor="email">Email</Label>
                  <div>
                    <Input {...register('email')} placeholder="john@example.com" />
                    {errors.email && (
                      <Typography theme="error" size="small">
                        {errors.email.message}
                      </Typography>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <Label htmlFor="password" className="col-span-1">
                    Contraseña
                  </Label>
                  <Link
                    href={Routes.forgotPassword.home}
                    className="ml-auto text-sm underline-offset-4 hover:underline col-span-2 h-fit"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                  {/* <div className="flex items-center">
                  </div> */}
                  <div className="col-span-full">
                    <Input type="password" {...register('password')} placeholder="********" />
                    {errors.password && (
                      <Typography theme="error" size="small">
                        {errors.password.message}
                      </Typography>
                    )}
                  </div>
                </div>
                <Button type="submit" className="w-full" loading={isPending}>
                  Inicia sesión
                </Button>
              </div>
              <p className="text-center text-sm">
                ¿No tienes una cuenta?{' '}
                <Link href={Routes.signUp} className="underline underline-offset-4">
                  Regístrate
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
