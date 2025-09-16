import { Arrow } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from '@/components/ui/link'
import { Typography } from '@/components/ui/typography'
import { Routes } from '@/routes'
import { IconPlus } from '@tabler/icons-react'
import { ImageInput } from '../categories'
import { DashboardContainer } from '../products/add'

const AddWaiterForm = () => {
  return (
    <Card>
      <form className="max-w-xl mx-auto w-full">
        <div className="mb-6">
          <Typography size="subtitle">Agregar mozo</Typography>
          <p className="text-sm text-muted-foreground">Complete todos los campos para agregar un nuevo mozo.</p>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-full">
            <Label htmlFor="name" className="block text-sm font-medium">
              Nombre completo
            </Label>
            <Input type="text" id="name" placeholder="Jon Doe" />
          </div>
          <div className="col-span-full">
            <Label htmlFor="email" className="block text-sm font-medium">
              Email
            </Label>
            <Input type="email" id="email" placeholder="alberto@example.com" />
          </div>
          <div className="col-span-3">
            <Label htmlFor="password" className="block text-sm font-medium">
              Contraseña
            </Label>
            <Input type="password" id="password" placeholder="********" />
          </div>
          <div className="col-span-3">
            <Label htmlFor="_password" className="block text-sm font-medium">
              Repite la contraseña
            </Label>
            <Input type="password" id="_password" placeholder="********" />
          </div>
          <div className="col-span-full">
            <ImageInput />
          </div>
        </div>
        <Button type="submit" className="mt-6">
          <IconPlus className="mr-2" />
          Agregar mozo
        </Button>
      </form>
    </Card>
  )
}

export default function AddWaiterPage() {
  return (
    <DashboardContainer title="Agregar un nuevo mozo">
      <div>
        <Link size="sm" variant="secondary" href={Routes.dashboard.waiters}>
          <Arrow direction="left" className="mr-2" />
          Volver
        </Link>
      </div>
      <AddWaiterForm />
    </DashboardContainer>
  )
}
