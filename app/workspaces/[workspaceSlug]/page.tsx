"use client"
import React, { useEffect } from 'react'
import { DashboardOverView } from '../_components/dashboard-overview'
import { useParams } from 'next/navigation'

/*
  Author: Fidha on May 21st, 2024
  Purpose: Displays the DashboardOverView components.
  Props: None
  Updated by: - Muhammed Adnan on May 25th, 2024 - Enhanced page layout
 */ 


const WorkspacePage = () => {
  const { workspaceSlug } = useParams()
  console.log(workspaceSlug,'workspaceSlug')

  useEffect(() => {
    if (workspaceSlug) {
      // Make API call when the page loads
      const fetchProjects = async () => {
        // setLoading(true)
        try {
          // const response = await axios.get(`http://127.0.0.1:8000/api/projects/${workspaceSlug}/`)
          // setProjects(response.data.projects)
        } catch (err) {
          // setError('Failed to fetch projects.')
          console.error(err)
        } finally {
          // setLoading(false)
        }
      }

      fetchProjects()
    }
  }, [workspaceSlug]) // Dependency array to re-run the effect when workspaceSlug changes

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div>{error}</div>
  // }



  return (
      <div className='h-screen flex flex-col overflow-hidden'>
      <DashboardOverView/>
    </div>
  )
}

export default WorkspacePage
