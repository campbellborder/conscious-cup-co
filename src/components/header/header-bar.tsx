'use client'

import Link from 'next/link'
// import { DarkModeToggle } from './dm-toggle'
import useMobile from '@/hooks/useMobile'
import { ReactElement } from 'react'
import { Menu } from "lucide-react"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function MobileNavMenu({ children }: { children: ReactElement }) {
  const mobile = useMobile()

  if (!mobile) return children
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon">
          <Menu className='scale-[0.9]'/>
        </Button>
        </SheetTrigger>
      <SheetContent side="left" className='z-[30]'>
        {children}
      </SheetContent>
    </Sheet>
  )
}

export default function HeaderBar() {

  const navClasses = "ml-16 font-bold hover:bg-accent/50 rounded p-2"

  return (
    <header className="fixed border-b bg-inherit w-full top-0 z-[1000] !bg-[#a1e0f2]">
      <div className="container flex h-[100px]">
        <Link href="/" legacyBehavior passHref>
          <Image src="/logo.png" alt="logo" width="250" height="100" className='cursor-pointer'></Image>
        </Link>
        <MobileNavMenu>
          <>
          <NavigationMenu>
            <NavigationMenuList className='flex-col md:flex-row'>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navClasses}>
                    about us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/cups" legacyBehavior passHref>
                  <NavigationMenuLink className={navClasses}>
                    cups
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink className={navClasses}>
                    resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className='grow'></div>
          <Link href="/shop" legacyBehavior passHref>
            <div className='ml-16 font-bold hover:bg-accent/50 rounded p-2 my-auto cursor-pointer'>shop</div>
          </Link>
          </>
        </MobileNavMenu>
        
        {/* <DarkModeToggle /> */}
      </div>
    </header>
  )
}