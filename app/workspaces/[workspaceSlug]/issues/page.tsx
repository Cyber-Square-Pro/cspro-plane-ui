"use client"
import { AllIssuesTabs } from '@/app/workspaces/_components/all-issues-tabs'
import { Button } from '@/components/ui/button'
import { LucideLayers, Plus } from 'lucide-react'
import React, { useState } from 'react'
import DashboardHeader from '../../_components/headers/dashboard-header'
import { useMobxStore } from '@/store/store.provider'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

/*
  Author: NishaJ on May 23rd, 2024
  Purpose: Renders UI for All Issues page
  Props:
    icon - LucideLayers (lucide react)
    title - display title
    optionList - optional list of items to display on the header.
                 for eg: dropdown, button, icon etc

*/

const AllIssuesPage = () => {
  const { commandPalette: commandPaletteStore } = useMobxStore();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  const issueHeaderOptions = [
    <div className="flex gap-2">
<DropdownMenu>
  <DropdownMenuTrigger className="border rounded-md p-1 pl-7 pr-7">Filter</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Priority</DropdownMenuLabel>
    <DropdownMenuItem>Urgent</DropdownMenuItem>
    <DropdownMenuItem>High</DropdownMenuItem>
    <DropdownMenuItem>Medium</DropdownMenuItem>
    <DropdownMenuItem>Low</DropdownMenuItem>
    <DropdownMenuItem>None</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuLabel>State group</DropdownMenuLabel>
    <DropdownMenuItem>Backlog</DropdownMenuItem>
    <DropdownMenuItem>Unstarted</DropdownMenuItem>
    <DropdownMenuItem>Started</DropdownMenuItem>
    <DropdownMenuItem>Completed</DropdownMenuItem>
    <DropdownMenuItem>Cancelled</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
<DropdownMenu>
  <DropdownMenuTrigger className="border rounded-md p-1 pl-5 pr-5">Display</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Display Properties</DropdownMenuLabel>
      <ToggleGroup  variant="outline" type="multiple">
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="assignee">Assignee</ToggleGroupItem>
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2 " value="startdate">Start Date</ToggleGroupItem>
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="due-date">Due Date</ToggleGroupItem>
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="id">ID</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup  variant="outline" type="multiple">
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="labels">Labels</ToggleGroupItem>
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="priority">Priority</ToggleGroupItem>
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="state">State</ToggleGroupItem>
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="sub-issue-count">Sub issue count</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup  variant="outline" type="multiple">
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="attachment-count">Attachment count</ToggleGroupItem>
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="link">Link</ToggleGroupItem>
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="link">Link</ToggleGroupItem>
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="estimate">Estimate</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup  variant="outline" type="multiple">
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="modules">Modules</ToggleGroupItem>
        <ToggleGroupItem className="text-[11px] h-[25px] mb-2" value="cycle">Cycle</ToggleGroupItem>
      </ToggleGroup>      
  </DropdownMenuContent>
</DropdownMenu>
    <Button key="addIssueBtn" className="gap-2 h-[30px] text-[12px]" onClick={() => commandPaletteStore.toggleCreateIssueModal(true)}>
      <Plus className="h-3 w-3" />Add Issue
    </Button>,
    </div>
  ];
  return (
    <>
      <DashboardHeader
        icon={LucideLayers}
        title="All Issues"
        optionList={issueHeaderOptions}
      />
        <AllIssuesTabs/>
    </>
  )
}

export default AllIssuesPage