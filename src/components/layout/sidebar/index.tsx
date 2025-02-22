import { Icons } from "@/components/icons"
import { MenuItem, SidebarContainer } from "./sidebar-container"
import { Skeleton } from "@/components/ui/skeleton"

const menus: MenuItem[] = [
  {
    path: "/",
    label: "Home",
    children: [],
  },
  {
    path: "/users",
    label: "User Management",
    children: [],
  },
]

function buildMenu(): MenuItem[] {
  return menus.map((menu) => {
    const Icon = Icons.Package
    return {
      path: menu.path,
      label: menu.label,
      icon: <Icon className='size-4' />,
      children: [],
    }
  })
}

export const Sidebar = async () => {
  const routes = buildMenu()
  return <SidebarContainer routes={routes} />
}

export const SidebarSkeleton = () => {
  return (
    <div className='h-screen w-72 border-r'>
      <div className='border-b'>
        <Skeleton className='h-12 w-4/5 mx-auto my-4' />
      </div>
      <div className='mx-auto px-4 space-y-2 my-4'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className='h-8 w-4/5 mx-auto' />
        ))}
      </div>
    </div>
  )
}
