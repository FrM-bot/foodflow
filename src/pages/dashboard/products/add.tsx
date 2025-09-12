import { Arrow } from '@/components/icons'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from '@/components/ui/link'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { Routes } from '@/routes'
import { IconPlus } from '@tabler/icons-react'
import { ImageInput } from '../categories'

export function SelectCategory() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categoría</SelectLabel>
          <SelectItem value="food">Comida</SelectItem>
          <SelectItem value="beverage">Bebida</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const AddProductForm = () => {
  return (
    <Card>
      <form className="max-w-xl mx-auto w-full">
        <div className="mb-6">
          <Typography size="subtitle">Agregar producto</Typography>
          <p className="text-sm text-muted-foreground">Complete todos los campos para agregar un nuevo producto.</p>
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
        <Button type="submit" className="mt-6">
          <IconPlus className="mr-2" />
          Agregar producto
        </Button>
      </form>
    </Card>
  )
}

export const DashboardContainer = ({ children, title }: { children: React.ReactNode; title?: string }) => {
  return (
    <div>
      <SiteHeader title={title} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-2 py-4 md:gap-4 md:py-6 px-4 lg:px-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function AddProductPage() {
  return (
    <DashboardContainer title="Agregar un nuevo producto">
      <div>
        <Link size="sm" variant="secondary" href={Routes.dashboard.products}>
          <Arrow direction="left" className="mr-2" />
          Volver
        </Link>
      </div>
      <AddProductForm />
    </DashboardContainer>
  )
}
