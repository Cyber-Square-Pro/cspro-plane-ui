import React, { FC, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IWSidebarItem } from '@/types/workspace';


/*
  Author: Sreethu EA on June 22nd, 2024
  Purpose: Provides a reusable sidebar component that renders a list of sidebar items and handles item navigation and active state.
  Props: 
    - RouteList: IWSidebarItem[] - An array of sidebar items to be displayed.
    - workspaceSlug: string - Define workspaceSlug as a prop
*/

interface Props {
  RouteList: IWSidebarItem[];
  workspaceSlug: string; 
}

const WSidebar: FC<Props> = ({ RouteList, workspaceSlug }) => {
  const pathname = usePathname(); 
  const router = useRouter(); 
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Function to handle sidebar item click
  const handleClick = (href: string, key: string) => {
    router.push(href); 
    setActiveItem(key); 
  };

  return (
    <div className='flex flex-col w-full'>
      {RouteList.map(({ key, label, href }) => {
        // Replace [workspaceSlug] placeholder with actual workspaceSlug
        const processedHref = href.replace('[workspaceSlug]', workspaceSlug);

        // Determine if the current item is active based on activeItem state
        const isActive = activeItem === key;

        return (
          <button
            key={key}
            onClick={() => handleClick(processedHref, key)} 
            className={cn(
              'flex items-center gap-x-2 text-[13px] font-[500] pl-3 transition-all hover:bg-gray-200 rounded-md mt-1',
              isActive && 'text-sky-600 bg-blue-200/30 hover:bg-blue-200/30 hover:text-sky-600'
            )}
          >
            <div className='flex items-center gap-x-2 py-2'>
              {label}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default WSidebar;
