import React from 'react'
import { DashboardOverView } from '../_components/dashboard-overview'

/*
  Author: Fidha on May 21st, 2024
  Purpose: Displays the DashboardOverView components.
  Props: None
  Updated by: - Muhammed Adnan on May 25th, 2024 - Enhanced page layout
 */ 

const WorkspacePage = () => {
  return (
      <div className='h-screen flex flex-col overflow-hidden'>
      <DashboardOverView/>
    </div>
  )
}

export default WorkspacePage
