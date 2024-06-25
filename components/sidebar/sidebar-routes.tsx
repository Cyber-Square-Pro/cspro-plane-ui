"use client"
import React, { FC } from 'react'
import { LucideIcon } from 'lucide-react'
import SidebarItem from './sidebar-item'

interface Route{
  label: string,
  href: string,
  icon?: LucideIcon,
 
};

interface Props {
  dashboardLink?: string,
  isDisabled?: boolean,
  routes: Route[],
  onItemClick: (label: string) => void,
};

const SidebarRoutes:FC<Props> = (props) => {
   
  const {dashboardLink, isDisabled,routes, onItemClick } = props


    if (dashboardLink) {
      const dashboardItem = routes.find((route) => route.label === 'Dashboard');
      if (dashboardItem) {
        dashboardItem.href = `/workspaces/${dashboardLink}`;
      }
    }
    
  return (
    <div className={`flex flex-col w-full ${isDisabled ? 'pointer-events-none opacity-50' : ''}`}>
        {
            routes.map((route) => (
                <SidebarItem
                key = { route.href }
                icon = { route.icon }
                label = { route.label }
                href = { route.href }
                onItemClick={onItemClick}
                />
            ))
        }
    </div>
  )
}

export default SidebarRoutes