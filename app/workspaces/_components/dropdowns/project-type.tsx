import React, {useState} from 'react'
import {
    Check,
    Earth, 
    Lock,
  } from "lucide-react";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { NETWORK_CHOICES } from '@/constants/workspace';

interface Props {
    selectedType: string,
    onSelect: (selectedItem: string) => void;
    register:any
      }
export const ProjectTypeDropdown:React.FC<Props> = (props) => {
    const [item, setItem] = useState("Private");
    const { onSelect , register } = props
    
    const handleSelectItem = (selectedItem: string) => {
        setItem(selectedItem);
        // const selectedChoice = NETWORK_CHOICES.find(choice => choice.label === selectedItem);
        // if (selectedChoice) {
        //   console.log(selectedChoice.key,'QQQQQ')

        // }
        onSelect(selectedItem);

    console.log(selectedItem,'----')
        // onChange(selectedItem); // Invoke the callback function with the selected item
    };

  return (

   <div className="flex">
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      {item === "Private" ? (
                        <Lock className="pe-1" size={18} />
                      ) : (
                        <Earth className="pe-1" size={18} />
                      )}
                      {item}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="bottom" align="start" className="w-62 p-0">
            {NETWORK_CHOICES.map((choice) => (
              <DropdownMenuRadioItem
                key={choice.key}
                className="flex items-center p-2 pl-4 hover:bg-gray-100"
                onSelect={() => handleSelectItem(choice.label)}
                value={choice.key.toString()}
              >
                <div className="flex gap-3 items-center w-full">
                  {choice.key === 0 ? <Lock size={14} /> : <Earth size={14} />}
                  <div className="flex-col flex">
                    <span className="ps-1 text-[13px] text-gray-900">{choice.label}</span>
                    <span className="text-[12px] text-gray-400">{choice.key === 0 ? "Accessible only by invite" : "Anyone in the workspace can join"}</span>
                  </div>
                  {item === choice.label && (
                    <div className="ml-auto">
                      <span className="text-gray-500">
                        <Check size={18} />
                      </span>
                    </div>
                  )}
                </div>
              </DropdownMenuRadioItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
  )
}
