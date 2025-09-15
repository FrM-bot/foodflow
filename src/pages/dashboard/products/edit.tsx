import { Arrow } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from '@/components/ui/link'
import { Typography } from '@/components/ui/typography'
import { Routes } from '@/routes'
import { ImageInput } from '../categories'
import { DashboardContainer, SelectCategory } from './add'

const EditProductForm = () => {
  return (
    <Card>
      <form className="max-w-xl mx-auto w-full">
        <div className="mb-6">
          <Typography size="subtitle">Editar producto</Typography>
          <p className="text-sm text-muted-foreground">Complete todos los campos para editar el producto.</p>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-full">
            <Label htmlFor="name" className="block text-sm font-medium">
              Nombre
            </Label>
            <Input type="text" id="name" placeholder="Ej: Bebidas" />
          </div>
          <div className="col-span-4">
            <Label className="block text-sm font-medium">Categoría</Label>
            <SelectCategory />
          </div>
          <div className="col-span-2">
            <Label htmlFor="price" className="block text-sm font-medium">
              Precio
            </Label>
            <Input type="number" id="price" placeholder="Ej: 100" />
          </div>
          <div className="col-span-full">
            <ImageInput />
          </div>
        </div>
        <div className="flex gap-2">
          <Button type="submit" className="mt-6">
            Guardar
          </Button>
          <Button type="submit" className="mt-6 text-destructive" variant="outline">
            Descartar cambios
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default function EditProductPage() {
  return (
    <DashboardContainer title="Editar producto">
      <div>
        <Link size="sm" variant="secondary" href={Routes.dashboard.products}>
          <Arrow direction="left" className="mr-2" />
          Volver
        </Link>
      </div>
      <EditProductForm />
    </DashboardContainer>
  )
}
