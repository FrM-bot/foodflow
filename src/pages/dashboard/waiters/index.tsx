import { Avatar } from '@/components/avatar'
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
import { Routes } from '@/routes'
import { IconDots, IconEdit, IconFilter2, IconPlus, IconSearch, IconTrash } from '@tabler/icons-react'
import { DashboardContainer } from '../products/add'

const waiters = [
  {
    id: 'INV001',
    name: 'Alberto el trainer',
    email: 'alberta@example.com',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 'INV001',
    name: 'Franco el senior',
    email: 'franco@example.com',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
]
export function TableWaiters() {
  return (
    <Card className="p-4">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {waiters.map((waiter) => (
            <TableRow key={waiter.id}>
              <Link href={Routes.dashboard.editWaiter(waiter.id)} key={waiter.id} className="contents">
                <TableCell>{waiter.id}</TableCell>
                <TableCell>
                  <Avatar src={waiter.image} alt={waiter.name} />
                </TableCell>
                <TableCell>{waiter.name}</TableCell>
                <TableCell>{waiter.email}</TableCell>
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
                        href={Routes.dashboard.editWaiter(waiter.id)}
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

export default function WaitersPage() {
  return (
    <DashboardContainer title="Editar producto">
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
          <Link variant="button" size="sm" href={Routes.dashboard.addWaiter}>
            <IconPlus className="size-4 mr-2" />
            Agregar nuevo mozo
          </Link>
        </div>
      </div>
      <TableWaiters />
    </DashboardContainer>
  )
}
