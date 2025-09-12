import { Avatar } from '@/components/avatar'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from '@/components/ui/link'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatNumber } from '@/lib/utils/formatNumber'
import { Routes } from '@/routes'
import { IconDots, IconEdit, IconFilter2, IconPlus, IconSearch, IconTrash } from '@tabler/icons-react'

const products = [
  {
    id: 'INV001',
    name: 'Hamburguesa con queso',
    price: 23.5,
    category: 'Comida Rápida',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 'INV002',
    name: 'Pizza Margherita',
    price: 15.0,
    category: 'Comida Rápida',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 'INV003',
    name: 'Ensalada César',
    price: 12.0,
    category: 'Comida Rápida',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 'INV004',
    name: 'Taco al Pastor',
    price: 10.0,
    category: 'Comida Rápida',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 'INV005',
    name: 'Bebida',
    price: 5.0,
    category: 'Bebidas',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 'INV006',
    name: 'Producto 6',
    price: 20.0,
    category: 'Categoría 6',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 'INV007',
    name: 'Producto 7',
    price: 30.0,
    category: 'Categoría 7',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
]
export function TableProducts() {
  return (
    <Card className="p-4">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead className="text-right">Precio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <Link href={Routes.dashboard.editProduct(product.id)} key={product.id} className="contents">
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <Avatar src={product.image} alt={product.name} />
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right">{formatNumber(product.price)}</TableCell>
              </Link>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="p-1">
                      <IconDots className="size-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-40 p-1">
                    <div className="flex flex-col">
                      <Link
                        href={Routes.dashboard.editProduct(product.id)}
                        variant="ghost"
                        size="sm"
                        className="justify-start mb-2 w-full"
                      >
                        <IconEdit className="size-4 mr-2" />
                        Editar
                      </Link>
                      <Button variant="ghost" size="sm" className="justify-start w-full text-destructive">
                        <IconTrash className="size-4 mr-2" />
                        Eliminar
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default function ProductsPage() {
  return (
    <div>
      <SiteHeader title="Productos" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-2 py-4 md:gap-4 md:py-6 px-4 lg:px-6">
            <div className="flex justify-between w-full">
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="aspect-square">
                  <IconSearch className="size-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <IconFilter2 className="size-4 mr-2" />
                  Filtros
                </Button>
              </div>
              <div>
                <Link variant="button" size="sm" href={Routes.dashboard.addProduct}>
                  <IconPlus className="size-4 mr-2" />
                  Agregar nuevo producto
                </Link>
              </div>
            </div>
            <TableProducts />
          </div>
        </div>
      </div>
    </div>
  )
}
