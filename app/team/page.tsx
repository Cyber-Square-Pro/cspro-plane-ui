
"use client";
import React from 'react';
import AddTeamForm from '@/components/forms/team/add-team-form';
import { ITeam } from '@/types/team';
import { TeamService } from '@/services/team.service';

const Team = () => {
  const teamService = new TeamService();

  const onSubmit = async (data: ITeam) => {
    try {
      console.log("Submitting data:", data);
      const response = await teamService.addTeam(data);
      
    } catch (error) {
      console.error("An error occurred while adding the team:", error);
    }
  };

  return (
    <div className='w-full'>
      <AddTeamForm onFormSubmit={onSubmit} />
    </div>
  );
};

export default Team;




