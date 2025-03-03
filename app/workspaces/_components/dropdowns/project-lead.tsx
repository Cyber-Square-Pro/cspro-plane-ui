import React, { useState } from "react";
import { Check, Earth, Lock, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Props {
  selectedType: string[];
  onChange: (selectedType: string) => void;
  register:any // Callback function to handle selected type change
}
export const ProjectLeadDropdown: React.FC<Props> = (props) => {
  const { selectedType, onChange, register } = props;
  const [item, setItem] = useState(selectedType[0]);

  const handleSelectItem = (selectedItem: string) => {
    console.log(selectedItem)
    setItem(selectedItem); // Update local state
    onChange(selectedItem); // Invoke the callback function with the selected item
  };

  return (
    <div className="flex">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild  {...register("projectLead")}>
            <Button variant="outline">
              <User />{item} 
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start" className="w-62 p-0">
            {selectedType.map((type) => (
              <DropdownMenuRadioItem
                onSelect={() => handleSelectItem(type)}
                className="flex items-center p-2 pl-4 hover:bg-gray-100"
                value={type}
              >
                <div className="flex gap-3 items-center  w-full">
                   
                  <div className="flex-col flex">
                    <span className="ps-1 text-[13px] text-gray-900">
                      {type}
                    </span>
                     
                  </div>
                   
                </div>
              </DropdownMenuRadioItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
          
    </div>
  );
};
