"use client"
import { LucideIcon } from 'lucide-react'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

/*
    Author: Mohammed Rifad
    Purpose: Renders a sidebar navigation item that changes style when active and navigates to the 
            specified href when clicked.
    Props:
     - icon: LucideIcon - The icon to display in the sidebar item.
     - label: string - The label text for the sidebar item.
     - href: string - The target URL for the sidebar item.
    Updated by: Muhammed Adnan on 21st May 2024 - Adjusted sidebar style as needed. 
                                                 for selected item.
 */

interface ISidebarItem {
    icon: LucideIcon
    label: string
    href: string
}

const SidebarItem = ({
    icon: Icon,
    label,
    href
}: ISidebarItem) => {

    const pathname = usePathname()
    const router = useRouter()
    const isActive = 
    (pathname === '/' && href === '/') ||
    (pathname == href || pathname?.startsWith(`${href}/`))

    const onClick = () => {
        router.push(href)
    }
 

    return (
       <button
       onClick={onClick}
       type='button'
       className={cn(
        'flex items-center gap-x-2 text-[13px] text-slate-800 font-[500] pl-3 transition-all hover:text-slate-800 hover:bg-gray-200 mb-1 rounded-md',
        isActive && 'text-sky-600 bg-blue-200/30 hover:bg-blue-200/30 hover:text-sky-600'
       )}
       >
        <div className='flex items-center gap-x-2 py-2'>
            <Icon 
            size={16}
            className={cn('text-slate-800', isActive &&'text-sky-600')}
            />
            {label}
        </div>

       </button>
    )
}

export default SidebarItem
