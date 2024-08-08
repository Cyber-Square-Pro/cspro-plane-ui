// backlog icons 
import { BacklogGroupIcon  } from '@/components/createIssue/issue-icons/backlog-group-icon';
import { CancelledGroupIcon } from '@/components/createIssue/issue-icons/cancelled-group-icon';
import { CompletedGroupIcon } from '@/components/createIssue/issue-icons/completed-group-icon';
import { StartedGroupIcon } from '@/components/createIssue/issue-icons/started-group-icon';
import { UnstartedGroupIcon } from '@/components/createIssue/issue-icons/unstarted-group-icon';

// priority icons 
import { AlertCircle, Ban, SignalHigh, SignalLow, SignalMedium } from "lucide-react";

//User-group icon
import { UserGroupIcon } from '@/components/createIssue/issue-icons/user-group-icon';

//Labels icon
import { Tag } from 'lucide-react';
import { Plus } from 'lucide-react';

//cycle icon
import { ContrastIcon } from '@/components/createIssue/issue-icons/contrast-icon';

//module / dice icon
import { Dice4Icon } from 'lucide-react';

// parent / layout icon
import { LayoutPanelTopIcon } from 'lucide-react';

// backlog dropdown items 
  export const backlog_options = ['Backlog', 'Todo', 'In Progress', 'Done', 'Cancelled'];
  export const backlog_defaultValue = 'Backlog';
  export const backlog_icons = {
    Backlog: <BacklogGroupIcon />,
    Todo: <UnstartedGroupIcon />,
    'In Progress': <StartedGroupIcon />,
    Done: <CompletedGroupIcon />,
    Cancelled: <CancelledGroupIcon />,
    };

  // priority dropdown items 
  export const priority_options = ['Urgent', 'High', 'Medium', 'Low', 'None'];
  export const priority_defaultValue = 'None';
  export const priority_icons = {
    Urgent: <AlertCircle className='h-3 w-3 text-red-600' />,
    High: <SignalHigh className='h-4 w-4 text-red-400'/>,
    Medium: <SignalMedium className='h-4 w-4 text-yellow-400'/>,
    Low: <SignalLow className='h-4 w-4 text-sky-500'/>,
    None: <Ban className='h-3 w-3'/>,
    };

    //Assignees dropdown items
    export const usergroup_options = ['You'];
    export const usergroup_defaultValue = 'Assignees';
    export const usergroup_icon = {
        Assignees: <UserGroupIcon className='h-3.5 w-3.5'/>,
        You: <button className=" relative flex place-items-center overflow-hidden justify-center rounded-full bg-blue-900 h-2 w-2 text-white p-2.5 text-sm"> Y </button>
    };

    //Labels dropdown items
    export const label_options = ['Create new label'];
    export const label_defaultValue = 'Labels';
    export const label_icon = {
      Labels: <Tag className='h-3 w-3'/>,
      'Create new label': <Plus className='h-3 w-3' />
    };

    //cycles dropdown items
    export const cycle_options = ['No cycle'];
    export const cycle_defaultValue = 'Cycle';
    export const cycle_icon = {
        'Cycle': <ContrastIcon className='h-3 w-3'/>,
        'No cycle': <ContrastIcon className='h-2.5 w-2.5' />
    };

    //Modules dropdown items
    export const module_options = [];
    export const module_defaultValue = 'Modules';
    export const module_icon = {
        'Modules': <Dice4Icon className='h-3 w-3'/>
    };

    //add parent dropdown items
    export const parent_options = [];
    export const parent_defaultValue = 'Add parent';
    export const parent_icon = {
        'Add parent': <LayoutPanelTopIcon className='h-3.5 w-3.5'/>
    };

