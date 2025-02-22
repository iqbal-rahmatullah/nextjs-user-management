import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"

export const UserDropdown = async () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='icon' className='rounded-full'>
          <Avatar className='h-8 w-8'>
            <AvatarImage
              src={"https://ui-avatars.com/api/?name=admin"}
              alt='@shadcn'
            />
            <AvatarFallback>Admin</AvatarFallback>
          </Avatar>
          <span className='sr-only'>Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end'>
        <DropdownMenuLabel>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm leading-none text-secondary-foreground'>
              Admin
            </p>
            <p className='text-xs leading-none text-muted-foreground'>
              admin@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
