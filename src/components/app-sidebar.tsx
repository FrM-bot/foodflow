import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Routes } from '@/routes'
import {
  IconBook,
  IconHelp,
  IconHome,
  IconPizza,
  IconSettings,
  IconShoppingCart,
  IconTable,
  IconTag,
  // IconUser,
  IconUsers,
} from '@tabler/icons-react'
import { NavSidebar } from './nav-sidebar'
import { Link } from './ui/link'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Home',
      url: Routes.dashboard.home,
      icon: IconHome,
    },
    {
      title: 'Mozos',
      url: Routes.dashboard.waiters,
      icon: IconUsers,
    },
    // {
    //   title: 'Usuarios',
    //   url: Routes.dashboard.users,
    //   icon: IconUser,
    // },
    {
      title: 'Mesas',
      url: Routes.dashboard.tables,
      icon: IconTable,
    },
  ],
  navRestaurant: [
    {
      title: 'Productos',
      url: Routes.dashboard.products,
      icon: IconShoppingCart,
    },
    {
      title: 'Categorías',
      url: Routes.dashboard.categories,
      icon: IconBook,
    },
    {
      title: 'Promociones',
      url: Routes.dashboard.discounts,
      icon: IconTag,
    },
    // {
    //   title: 'Carta',
    //   url: Routes.dashboard.menu,
    //   icon: IconBook,
    // },
  ],
  navSecondary: [
    {
      title: 'Configuración',
      url: Routes.dashboard.settings,
      icon: IconSettings,
    },
    {
      title: 'Obtener ayuda',
      url: Routes.dashboard.help,
      icon: IconHelp,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href={Routes.dashboard.home} className="flex items-center gap-2">
                <IconPizza className="!size-5" />
                <span className="text-base font-semibold">Foodflow</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavSidebar items={data.navMain} labelGroup="Principal" />
        <NavSidebar items={data.navRestaurant} labelGroup="Restaurante" />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
