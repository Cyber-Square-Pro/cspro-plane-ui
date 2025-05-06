// /workspace/[workspaceSlug]/settings/layout.tsx

import React from 'react'
import SettingsSidebar from '../../_components/settings-sidebar'
 

export default function SettingsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { workspaceSlug: string }
}) {
  const { workspaceSlug } = params

  return (
    <div className="flex h-screen">
      <SettingsSidebar workspaceSlug={workspaceSlug} />
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  )
}
