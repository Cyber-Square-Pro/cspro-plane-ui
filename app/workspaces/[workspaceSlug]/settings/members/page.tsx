"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const MemberSettingsPage = () => {
    const { workspaceSlug } = useParams()
     
    console.log('slug', workspaceSlug)
  return (
      <div className='h-screen flex flex-col overflow-hidden'>
       <p>memberss</p>
    </div>
  )
}

export default MemberSettingsPage
