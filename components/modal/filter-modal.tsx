import React, { useState } from 'react';

import CustomDropdown from '../custom-dropdown';
import { AssigneeDropDownItems, PriorityDropDownItems, StateDropDownItems } from '@/constants/dropdown-items';
import { ChevronDown, Search } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priority, setPriority] = useState(PriorityDropDownItems[0]);
  const [state, setState] = useState(StateDropDownItems[0]);
  const [assignee, setAssignee] = useState(AssigneeDropDownItems[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Filter Options
              </h3>
              <div className="mt-2">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="text-gray-400" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="mb-4">
                    <CustomDropdown
                      dropDownTitle="Priority"
                      dropDownItems={PriorityDropDownItems}
                      onSelect={setPriority}
                    />
                  </div>
                  <div className="mb-4">
                    <CustomDropdown
                      dropDownTitle="State"
                      dropDownItems={StateDropDownItems}
                      onSelect={setState}
                    />
                  </div>
                  <div className="mb-4">
                    <CustomDropdown
                      dropDownTitle="Assignee"
                      dropDownItems={AssigneeDropDownItems}
                      onSelect={setAssignee}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;