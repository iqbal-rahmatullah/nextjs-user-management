import React from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"
import Link from "next/link"
import { UserDropdown } from "./user-dropdown"
import { Icons } from "@/components/icons"
import { HeaderBreadcrumb } from "./breadcrumb"
import { Skeleton } from "@/components/ui/skeleton"

export const Header = async () => {
  return (
    <header className=' flex h-[var(--header-height)] items-center gap-4 py-2 md:py-0 border-b bg-muted/20 px-4 lg:h-[60px] lg:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Icons.Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='flex flex-col'>
          <SheetTitle>
            <Link
              href='#'
              className='flex items-center gap-2 text-lg font-semibold'
            >
              <Icons.Package2 className='h-6 w-6' />
              <span className='sr-only'>User Management</span>
            </Link>
          </SheetTitle>
          <nav className='grid gap-2 text-lg font-medium'>
            <Link
              href='#'
              className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
            >
              <Icons.Home className='h-5 w-5' />
              Dashboard
            </Link>
            <Link
              href='/user'
              className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
            >
              <Icons.User className='h-5 w-5' />
              User Management
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className='w-full flex-1'>
        <HeaderBreadcrumb />
      </div>

      <UserDropdown />
    </header>
  )
}

export const HeaderSkeleton = () => {
  return <Skeleton className='h-[var(--header-height)] w-full' />
}
