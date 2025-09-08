// import { SectionCards } from '@/components/section-cards'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { IconAlertTriangle, IconCircle, IconClock, IconPlus, IconQrcode, IconTable, IconUser } from '@tabler/icons-react'

const $TableStatus = {
  available: 'available',
  occupied: 'occupied',
  urgent: 'urgent',
  maintenance: 'maintenance',
} as const

type TableStatus = (typeof $TableStatus)[keyof typeof $TableStatus]

export function SectionCards({
  data,
}: {
  data: { [K in TableStatus]: number }
}) {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Disponible</CardDescription>

          <CardAction>
            <span className="bg-green-500/5 p-2 flex rounded-md">
              <IconCircle className="text-green-500" />
            </span>
          </CardAction>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{data.available}</CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            de {data.available + data.occupied + data.urgent + data.maintenance} mesas
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Ocupada</CardDescription>

          <CardAction>
            <span className="bg-sky-500/5 p-2 flex rounded-md">
              <IconUser className="text-sky-500" />
            </span>
          </CardAction>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{data.occupied}</CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">generando ingresos</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Por limpiar</CardDescription>

          <CardAction>
            <span className="bg-yellow-500/5 p-2 flex rounded-md">
              <IconClock className="text-yellow-500" />
            </span>
          </CardAction>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{data.maintenance}</CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">requieren atención</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Urgente</CardDescription>

          <CardAction>
            <span className="bg-red-500/5 p-2 flex rounded-md">
              <IconAlertTriangle className="text-red-500" />
            </span>
          </CardAction>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{data.urgent}</CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">clientes esperando</div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default function TablesPage() {
  const TableStatus = {
    available: {
      status: $TableStatus.available,
      label: 'Disponible',
    },
    occupied: {
      status: $TableStatus.occupied,
      label: 'Ocupada',
    },
    maintenance: {
      status: $TableStatus.maintenance,
      label: 'Por limpiar',
    },
    urgent: {
      status: $TableStatus.urgent,
      label: 'Urgente',
      theme: 'yellow',
    },
  } as const

  const Tables = [
    {
      number: 1,
      status: TableStatus.available.status,
      people: 1,
    },
    {
      number: 2,
      status: TableStatus.occupied.status,
      people: 3,
    },
    {
      number: 3,
      status: TableStatus.urgent.status,
      people: 2,
    },
    {
      number: 4,
      status: TableStatus.maintenance.status,
      people: 4,
    },
    {
      number: 1,
      status: TableStatus.available.status,
      people: 1,
    },
    {
      number: 2,
      status: TableStatus.available.status,
      people: 3,
    },
    {
      number: 3,
      status: TableStatus.occupied.status,
      people: 2,
    },
    {
      number: 4,
      status: TableStatus.occupied.status,
      people: 4,
    },
  ]

  const data = Tables.reduce(
    (acc, table) => {
      acc[table.status] = (acc[table.status] || 0) + 1
      return acc
    },
    {} as Record<TableStatus, number>
  )

  return (
    <div>
      <SiteHeader title="Mesas" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            <SectionCards data={data} />
            <Card>
              <CardHeader className="flex justify-between items-center">
                <h2 className="font-bold">Disposición de las mesas</h2>
                <Button className="flex gap-2 items-center">
                  <IconPlus />
                  <span>Agregar mesa</span>
                </Button>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-6 gap-6">
                  {Tables.map((table) => (
                    <li
                      key={table.number}
                      className={cn(
                        'flex flex-col items-center justify-center gap-2 border aspect-square rounded-xl p-4 relative',
                        table.status === $TableStatus.available && 'bg-green-500/5 border-green-500/80',
                        table.status === $TableStatus.occupied && 'bg-sky-500/5 border-sky-500/80',
                        table.status === $TableStatus.urgent && 'bg-red-500/5 border-red-500/80',
                        table.status === $TableStatus.maintenance && 'bg-yellow-500/5 border-yellow-500/80'
                      )}
                    >
                      <span className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 cursor-pointer">
                        <IconQrcode />
                      </span>
                      <IconTable
                        className={cn(
                          'size-5 rounded',
                          table.status === $TableStatus.available && 'text-green-500',
                          table.status === $TableStatus.occupied && 'text-sky-500',
                          table.status === $TableStatus.urgent && 'text-red-500',
                          table.status === $TableStatus.maintenance && 'text-yellow-500'
                        )}
                      />
                      <Typography size="title">{table.number}</Typography>
                      <Typography size="body">({table.people} personas)</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t">
                <ul className="flex gap-4 mx-auto">
                  {Object.values(TableStatus).map((table) => (
                    <li key={table.status} className="flex items-center gap-2 p-2">
                      <div
                        className={cn(
                          'size-5 rounded',
                          table.status === $TableStatus.available && 'bg-green-500',
                          table.status === $TableStatus.occupied && 'bg-sky-500',
                          table.status === $TableStatus.urgent && 'bg-red-500',
                          table.status === $TableStatus.maintenance && 'bg-yellow-500'
                        )}
                      />{' '}
                      <span className="font-medium">{table.label}</span>
                    </li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
