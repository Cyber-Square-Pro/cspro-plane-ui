import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Check } from "lucide-react";

interface DropdownProps {
  options: string[];
  defaultValue?: string;
  icons?: { [key: string]: React.ReactNode }; // Define prop for icons mapping
}

const Dropdown: React.FC<DropdownProps> = ({ options, defaultValue, icons }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(defaultValue || null);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchQuery(''); // Clear search query on selection
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        className='h-[27px] bg-white rounded-sm text-slate-800 border hover:bg-gray-200 text-[12px] flex justify-between px-2'
        onClick={toggleDropdown}
      >
        <span className='flex items-center gap-1'>
          {icons && icons[selectedOption || defaultValue || '']}
          {selectedOption || defaultValue || 'Select an option'}
        </span>
      
      </Button>
      {isOpen && (
        <div className="absolute z-50 w-48 rounded-md shadow-lg bg-white max-h-60 overflow-y-auto border p-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-6 py-1 mb-2 text-sm bg-gray-100 rounded-md h-[25px] outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute top-[-4px] left-0 flex items-center h-full px-2 pointer-events-none">
              <Search className="text-gray-400 h-3 w-3" />
            </div>
          </div>
          {filteredOptions.map((option, index) => (
            <button
              key={index}
              className={`block w-full text-left px-2 py-[3px] hover:bg-gray-200 rounded-sm text-[12px] `}
              onClick={() => handleOptionClick(option)}
            >
              <span className='flex items-center'>
                {/* Render icon for each option if available */}
                {icons && icons[option] && (
                  <span className="mr-2">{icons[option]}</span>
                )}
                <span>{option}</span>
              {option === selectedOption && <Check className="inline-block ml-auto h-3 w-3 text-black-500" />} 
              </span>
            </button>
          ))}
          {filteredOptions.length === 0 && (
            <div className="text-[11px] text-slate-500 italic">No matches found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
