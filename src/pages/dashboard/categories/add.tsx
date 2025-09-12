import { Arrow } from '@/components/icons'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Link } from '@/components/ui/link'
import { Typography } from '@/components/ui/typography'
import { Routes } from '@/routes'
import { IconPlus } from '@tabler/icons-react'
import { ImageInput } from '../categories'

const AddCategoryForm = () => {
  return (
    <Card>
      <form className="max-w-xl mx-auto w-full">
        <div className="mb-6">
          <Typography size="subtitle">Agregar categoría</Typography>
          <p className="text-sm text-muted-foreground">Complete todos los campos para agregar una nueva categoría.</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Nombre de la categoría
            </label>
            <Input type="text" id="name" placeholder="Ej: Bebidas" />
          </div>
          <ImageInput />
        </div>
        <Button type="submit" className="mt-6">
          <IconPlus className="mr-2" />
          Agregar categoría
        </Button>
      </form>
    </Card>
  )
}

export default function AddCategoryPage() {
  return (
    <div>
      <SiteHeader title="Agregar una nueva categoría" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-2 py-4 md:gap-4 md:py-6 px-4 lg:px-6">
            <div>
              <Link size="sm" variant="secondary" href={Routes.dashboard.categories}>
                <Arrow direction="left" className="mr-2" />
                Volver
              </Link>
            </div>
            <AddCategoryForm />
          </div>
        </div>
      </div>
    </div>
  )
}
