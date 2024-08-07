"use client"
import React, { FC } from 'react'
import { Compass, Layout } from 'lucide-react'
import SidebarItem from './sidebar-item'
import { usePathname } from 'next/navigation'
import { OnboardingRouteList , AttendanceRouteList } from '@/constants/sidebar'
import { SidebarType } from '@/types/sidebar'
import { SidebarTypes } from '@/constants/sidebarx'



/*
  Author: Mohammed Rifad on April 22nd, 2024
  Updated by: - Mohammed Rifad on June 5th, 2024 - made the routes dynamic.yy
*/


type Props = {
  itemLink?: string,
  isDisabled: boolean
  type: typeof SidebarTypes[keyof typeof SidebarTypes];
}
const SidebarRoutes:FC<Props> = (props) => {
   
  const {itemLink, isDisabled,type} = props

    const routes = type == SidebarTypes.ONBOARDING ? OnboardingRouteList : AttendanceRouteList
  
  return (
    <div className={`flex flex-col w-full ${isDisabled ? 'pointer-events-none opacity-50' : ''}`}>
        {
            routes.map((route) => (
                <SidebarItem
                key = { route.href }
                icon = { route.icon }
                label = { route.label }
                href={`/workspaces/${itemLink}/${route.href}`}
                />
            ))
        }
    </div>
  )
}

export default SidebarRoutes
