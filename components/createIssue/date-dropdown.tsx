import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarDaysIcon, XIcon } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@/components/ui/button';
interface CustomDatePickerProps {
  startDateText?: string; 
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ startDateText = "Start date" }) => { 
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleDateChange = (date: Date | null): void => {
  setSelectedDate(date);
  setIsOpen(false);
  };

  const clearDate = () => setSelectedDate(null);

  function handleClickOutside(event: MouseEvent) {
    if (refContainer.current && !refContainer.current.contains(event.target as Node)) {
    setIsOpen(false);
      }
    }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);

  return (
  <div className='relative' ref={refContainer}>
    <Button className='h-[27px] bg-white rounded-sm text-slate-800 border hover:bg-gray-200 text-[12px] flex justify-between px-2 pt-2'
     onClick={toggleDropdown}>
    <span className='flex items-center gap-1'>
      <CalendarDaysIcon className='h-3 w-3' />
      {selectedDate ? selectedDate.toDateString() : startDateText} 
      {selectedDate && (
        <button onClick={clearDate} className=''>
          <XIcon className='h-2.5 w-2.5 hover:text-red-500' />
        </button>
      )}
    </span>
    </Button>

  {isOpen && (
    <div className="absolute z-50 rounded-md shadow-lg bg-white max-h-70 overflow-y-auto border p-2">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline
        calendarClassName="react-datepicker-custom"
      />
    </div>
  )}
</div>
);
};

export default CustomDatePicker;