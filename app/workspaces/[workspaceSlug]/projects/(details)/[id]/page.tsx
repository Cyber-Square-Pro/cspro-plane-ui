"use client";
import { ProjectService } from '@/services/project.service';
import React, { useEffect } from 'react'

const ProjectDetails = () => {

  useEffect(() => {
    const service = new ProjectService();
    service.fetchProjectDetails(1).then((data) => {
    // store data here
    })

    
  })

  return (
    <div> hello world</div>
  )
}

export default ProjectDetails