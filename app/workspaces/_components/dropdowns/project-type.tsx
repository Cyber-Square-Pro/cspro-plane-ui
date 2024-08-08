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

interface Props {
    selectedType: string,
    onChange: (selectedType: string) => void // Callback function to handle selected type change
}
export const ProjectTypeDropdown:React.FC<Props> = (props) => {
    const [item, setItem] = useState("Private");
    const { selectedType, onChange } = props
    
    const handleSelectItem = (selectedItem: string) => {
        setItem(selectedItem); // Update local state
        onChange(selectedItem); // Invoke the callback function with the selected item
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
                  <DropdownMenuContent
                    side="bottom"
                    align="start"
                    className="w-62 p-0"
                  >
                    <DropdownMenuRadioItem
                      className="flex items-center p-2 pl-4 hover:bg-gray-100"
                      onSelect={() =>  handleSelectItem("Private")}
                      value="Private"
                    >
                      <div className="flex gap-3 items-center  w-full">
                        <Lock size={14} />
                        <div className="flex-col flex">
                          <span className="ps-1 text-[13px] text-gray-900">
                            Private
                          </span>
                          <span className="text-[12px] text-gray-400">
                            Accessible only by invite
                          </span>
                        </div>

                        {item === "Private" && (
                          <div className="ml-auto  ">
                            <span className=" text-gray-500">
                              <Check size={18} />
                            </span>
                          </div>
                        )}
                      </div>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                      onSelect={() =>  handleSelectItem("Public")}
                      className="flex items-center p-2 pl-4 hover:bg-gray-100"
                      value="Public"
                    >
                      <div className="flex gap-3 items-center  w-full">
                        <Lock size={14} />
                        <div className="flex-col flex">
                          <span className="ps-1 text-[13px] text-gray-900">
                            Public
                          </span>
                          <span className="text-[12px] text-gray-400">
                            Anyone in the workspace can join
                          </span>
                        </div>
                        {item === "Public" && (
                          <div className="ml-auto  ">
                            <span className=" text-gray-500">
                              <Check size={18} />
                            </span>
                          </div>
                        )}
                      </div>
                    </DropdownMenuRadioItem>
                    <DropdownMenuSeparator />
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
  )
}
