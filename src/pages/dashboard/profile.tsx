import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IconUser } from '@tabler/icons-react'

export default function ProfilePage() {
  return (
    <div>
      <SiteHeader title="Perfil" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            <form className="max-w-2xl mx-auto w-full">
              <div className="space-y-12">
                <div className="border-b border-white/10 pb-12">
                  <div className="col-span-full">
                    <label htmlFor="photo" className="block text-sm/6 font-medium text-white">
                      Avatar
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <Label className="bg-neutral-900 p-2 rounded-full border border-primary relative">
                        <IconUser className="size-7" />
                        <input type="file" className="w-0 h-0 absolute" />
                      </Label>
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                        Nombre
                      </label>
                      <div className="mt-2">
                        <Input id="first-name" type="text" name="first-name" autoComplete="given-name" />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm/6 font-medium text-white">
                        Apellido
                      </label>
                      <div className="mt-2">
                        <Input id="last-name" type="text" name="last-name" autoComplete="family-name" />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                        Email
                      </label>
                      <div className="mt-2">
                        <Input id="email" type="email" name="email" autoComplete="email" />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="country" className="block text-sm/6 font-medium text-white">
                        Número de teléfono
                      </label>
                      <div className="mt-2">
                        <Input id="phone" type="tel" name="phone" autoComplete="tel" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-white/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="country" className="block text-sm/6 font-medium text-white">
                        Contraseña actual
                      </label>
                      <div className="mt-2">
                        <Input id="currentPassword" type="password" name="currentPassword" autoComplete="current-password" />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="country" className="block text-sm/6 font-medium text-white">
                        Nueva contraseña
                      </label>
                      <div className="mt-2">
                        <Input id="newPassword" type="password" name="newPassword" autoComplete="new-password" />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="country" className="block text-sm/6 font-medium text-white">
                        Confirmar nueva contraseña
                      </label>
                      <div className="mt-2">
                        <Input
                          id="newPasswordConfirmation"
                          type="password"
                          name="newPasswordConfirmation"
                          autoComplete="new-password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <Button variant="outline">Cancelar</Button>
                <Button>Guardar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
