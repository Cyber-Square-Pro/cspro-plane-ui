"use client";
import React from 'react'
import AddTeamForm from '@/components/forms/team/add-team-form'
import { ITeam } from '@/types/team';
import { TeamService } from '@/services/team.service';
const Team = () => {
  const teamService = new TeamService()
  const onSubmit = (data: ITeam) => {
    // Simulate a network request
    console.log(data)
    alert("error")
    return teamService.addTeam(data).then((response) => {
      console.log(response?.message)
    } )
  }
  return (
    <div className='w-full'>
      <AddTeamForm onFormSubmit={onSubmit}/>
    </div>
  )
}

export default Team



