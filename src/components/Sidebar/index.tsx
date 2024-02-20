'use client'

import { Logo } from '@/components/Sidebar/Logo'
import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'
import { NavItem } from './MainNavigation/NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'
import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <Collapsible.Root className="scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-hidden border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6 text-zinc-500" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        asChild
        forceMount
        className="data-[state=closed]:animate-slideUpAndFade data-[state=closed]:hidden data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex"
      >
        <div className="flex flex-1 flex-col gap-6">
          <Input.Root className="mx-1 flex w-auto items-center gap-2">
            <Input.Prefix>
              <Search className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control type="text" placeholder="Search" />
          </Input.Root>

          <MainNavigation />

          <div className="mt-auto flex flex-col gap-6">
            <nav className="flex flex-col gap-1">
              <NavItem icon={LifeBuoy} title="Support" />
              <NavItem icon={Cog} title="Settings" />
            </nav>

            <UsedSpaceWidget />
            <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
            <Profile />
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
