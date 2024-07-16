"use client";
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useMobxStore } from '@/store/store.provider';
import { Button } from "@/components/ui/button";
import { ToggleSwitch } from '@/components/ui/toggle-switch';
import Dropdown from '@/components/createIssue/create-issue-dropdown';
import CustomDatePicker from '@/components/createIssue/date-dropdown';
import { 
  backlog_options, backlog_defaultValue, backlog_icons, 
  priority_options, priority_defaultValue, priority_icons,
  usergroup_defaultValue, usergroup_icon, usergroup_options,
  label_defaultValue, label_options, label_icon,
  cycle_defaultValue, cycle_icon, cycle_options,
  module_defaultValue, module_icon, module_options,
  parent_defaultValue, parent_icon, parent_options
} from '@/constants/create-issue-drop-items';

/*
  Author: Adnan on May 10th, 2024
  Purpose: Popover for 'New Issue' button
  Props: None
  Updated by: - Nisha J on July 1st, 2024 - Added File attachment field, 
                  Implemented mobX to display modal for 'New Issue' button.

*/

export const CreateIssueModal: React.FC = () => {
const { commandPalette: commandPaletteStore } = useMobxStore();
console.log("Inside modal")
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 cursor-default">
      {/* Overlay with onClick handler */}
      <div className="modal-overlay fixed inset-0 bg-black opacity-20" ></div>
      {/* Modal content with shadow, rounded border, and full width */}
      <div className="modal-content bg-white p-5 border w-full md:w-[90%] max-w-4xl rounded-lg max-h-[80vh] relative shadow-md mt-[-150px] overflow-visible min-h-[200px]">
        {/* Modal content */}
        <div className='flex gap-2'>
          <Dropdown options={['test_project']} defaultValue='test_project' />
          <h3 className='font-bold text-xl leading-6'>Create issue</h3>
        </div>
        <input type="text"
          className='border border-color-text-slate-400 outline-none w-full h-10 pl-3 pr-3 rounded-md mt-5 text-xl'
          placeholder='Issue Title' 
          autoFocus
        />
        <textarea
          className='border border-color-text-slate-400 align-text-top outline-none w-full h-[150px] pl-3 pr-3 rounded-md mt-5 text-md flex resize-none pt-2'
          placeholder='Click to add description' 
        />
        {/* File attachment field */}
        <input type="file"
          className='border border-color-text-slate-400 outline-none w-full pl-3 pr-3 rounded-sm my-2 text-sm'
        />
        {/* dropDown items */}
        <div className="flex flex-wrap justify-start items-start mt-2 gap-2">
          <Dropdown options={backlog_options} defaultValue={backlog_defaultValue} icons={backlog_icons} /> 
          <Dropdown options={priority_options} defaultValue={priority_defaultValue} icons={priority_icons} /> 
          <Dropdown options={usergroup_options} defaultValue={usergroup_defaultValue} icons={usergroup_icon} />
          <Dropdown options={label_options} defaultValue={label_defaultValue} icons={label_icon} />
          <CustomDatePicker startDateText='Start date'/>
          <CustomDatePicker startDateText='Due date'/>
          <Dropdown options={cycle_options} defaultValue={cycle_defaultValue} icons={cycle_icon} />
          <Dropdown options={module_options} defaultValue={module_defaultValue} icons={module_icon} />
          <Dropdown options={parent_options} defaultValue={parent_defaultValue} icons={parent_icon} />
        </div>

        <hr className='opacity-50 mt-3 mb-4 ml-[-20px] mr-[-20px]'/>

        <div className='flex justify-between'>
          <div>
            <ToggleSwitch value={false} size="sm"/>
            <span className="text-xs ml-1">Create more</span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className='h-[27px] bg-white rounded-sm text-slate-600 border hover:bg-gray-100 text-[12px]' onClick={() => commandPaletteStore.toggleCreateIssueModal(false)}>
              Discard
            </Button>
            <Button size="sm" className='h-[27px] rounded-sm bg-blue-500 text-[12px]'>
              Create issue
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
