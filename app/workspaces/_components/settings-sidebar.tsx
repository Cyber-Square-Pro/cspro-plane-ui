'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import clsx from 'clsx'

const tabs = [
  { name: 'General', path: '' },
  { name: 'Members', path: 'members' },
  { name: 'Billing & Plans', path: 'billing' },
  // add more sections like "Integrations", "API", etc.
]

interface Props {
    workspaceSlug: string;
  }
const SettingsSidebar: React.FC<Props> = (props) => {
    const { workspaceSlug } = props
    const pathname = usePathname()
 

  return (
    <aside className="w-64 border-r p-6 space-y-4 bg-gray-50">
      <h2 className="text-lg font-semibold">Settings</h2>
      <nav className="space-y-2">
        {tabs.map(({ name, path }) => {
          const href = `/workspaces/${workspaceSlug}/settings${path ? `/${path}` : ''}`
          const active = pathname === href

          return (
            <Link
              key={name}
              href={href}
              className={clsx(
                'block px-3 py-2 rounded text-sm',
                active ? 'bg-blue-100 font-semibold' : 'hover:bg-gray-100'
              )}
            >
              {name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default SettingsSidebar;