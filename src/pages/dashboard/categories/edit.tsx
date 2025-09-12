import { Arrow } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Link } from '@/components/ui/link'
import { Typography } from '@/components/ui/typography'
import { Routes } from '@/routes'
import { ImageInput } from '../categories'
import { DashboardContainer } from '../products/add'

const EditCategoryForm = () => {
  return (
    <Card>
      <form className="max-w-xl mx-auto w-full">
        <div className="mb-6">
          <Typography size="subtitle">Editar categoría</Typography>
          <p className="text-sm text-muted-foreground">Complete todos los campos para editar la categoría.</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Nombre del producto
            </label>
            <Input type="text" id="name" placeholder="Ej: Bebidas" />
          </div>
          <ImageInput />
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

export default function EditCategoryPage() {
  return (
    <DashboardContainer title="Editar categoría">
      <div>
        <Link size="sm" variant="secondary" href={Routes.dashboard.products}>
          <Arrow direction="left" className="mr-2" />
          Volver
        </Link>
      </div>
      <EditCategoryForm />
    </DashboardContainer>
  )
}
