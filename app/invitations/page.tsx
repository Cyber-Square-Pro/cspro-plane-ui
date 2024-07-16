import React from 'react'
import { Navbar } from '@/components/navbar';
import {EmptyState} from '@/components/modal/empty-state';

/*
  Author: Ridhwan on May 30th, 2024
  Purpose: Renders a page for displaying invitations to workspaces
  Props: None
*/

const WorkspaceInvitationPage = () => {
  return (
    <div className='h-full w-full'>
        <div className='h-full w-full'>
            <Navbar email='user@gmail.com' />
            <div className="absolute top-[60px] left-20 bottom-0 border border-gray-200"></div>
          <EmptyState
              title="No pending invites" 
              description="You can see here if someone invites you to a workspace."
              imgSrc="/images/invitation.svg"
              btnText="Back to home"
              linkPath="/workspaces/test/"
        />
        </div>
    </div>
  )
}
export default WorkspaceInvitationPage;
