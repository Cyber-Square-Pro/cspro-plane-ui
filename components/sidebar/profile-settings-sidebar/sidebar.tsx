"use client";
import React, { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ISidebarItem } from '@/types/workspace';

/*
  Author: Muhammed Adnan on June 2nd, 2024
  Purpose: Provides a reusable sidebar component that renders a list of sidebar items and handles item navigation and active state.
  Props: 
    - RouteList: ISidebarItem[] - An array of sidebar items to be displayed.
*/

interface SidebarProps {
  RouteList: ISidebarItem[];
}

const Sidebar: FC<SidebarProps> = ({ RouteList }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className='flex flex-col w-full'>
      {RouteList.map(({ key, Icon, label, href }) => {
        const isActive = 
          (pathname === '/' && href === '/') ||
          (pathname === href || pathname?.startsWith(`${href}/`));

        const onClick = () => {
          router.push(href);
        };

        return (
          <button
            key={key}
            onClick={onClick}
            className={cn(
              'flex items-center gap-x-2 text-[13px] font-[500] pl-3 transition-all hover:bg-gray-200 rounded-md mt-1',
              isActive && 'text-sky-600 bg-blue-200/30 hover:bg-blue-200/30 hover:text-sky-600'
            )}
          >
            <div className='flex items-center gap-x-2 py-2'>
              <Icon
                size={15}
                className={cn('text-slate-700', isActive && 'text-blue-600')}
              />
              {label}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
