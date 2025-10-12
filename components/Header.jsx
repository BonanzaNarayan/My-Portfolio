import { nav } from '@/data/nav'
import { Pacifico } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './ModeToggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: '400'
});


export default function Header() {
    const dev_sign = ""
  return (
    <header className='border-b border-neutral-500/30 sticky top-0 py-4 bg-background/50 px-6 backdrop-blur-xl z-50'>
        <div className='mx-2 md:mx-12 flex items-center justify-between'>
            {/* Logo */}
            <Link href={'/'}>
                <h1 className={`text-2xl md:text-3xl font-medium ${pacifico.className}`}>bonanza{dev_sign}</h1>
            </Link>

            {/* nav */}
            {/* Desktop */}
            <nav className='hidden md:flex list-none items-center justify-center gap-5'>
                {
                    nav.map((nav, index)=>(
                        <li key={index} className='hover:scale-110 duration-300 transition-all hover:text-primary/70'>
                            <Link href={nav.url}>{nav.label}</Link>
                        </li>
                    ))
                }
            </nav>

            <div className='flex items-center gap-2'>
                <ModeToggle />
                <Link href={'#contact'}>
                    <Button>Contact</Button>
                </Link>
                <div className={'md:hidden'}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {
                                nav.map((nav, index)=>(
                                    <DropdownMenuItem key={index}>
                                        <Link href={nav.url}>{nav.label}</Link>
                                    </DropdownMenuItem>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    </header>
  )
}
