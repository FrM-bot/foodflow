import type { Icon } from '@tabler/icons-react'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { useLocation, useNavigate } from 'react-router-dom'

export function NavSidebar({
  items,
  labelGroup,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
  labelGroup?: string
}) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {labelGroup ? <SidebarGroupLabel>{labelGroup}</SidebarGroupLabel> : null}
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                className={cn(location.pathname === item.url && 'bg-background')}
                onClick={() => navigate(item.url)}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
