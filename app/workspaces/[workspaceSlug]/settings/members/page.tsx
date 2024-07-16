"use client"
import {AddMemberModal} from "@/app/workspaces/_components/modals/add-member-modal";
import { Button } from "@/components/ui/button";
import { Search,Dot } from "lucide-react";
import React, { useState } from "react";


/*
  Author: Sreethu on June 2nd, 2024
  Purpose: Renders Members pages 
*/

const MembersPage = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className="p-4">
      <div className="flex items-center justify-between gap-4 border-b border-custom-border-100 py-3.5">
        <h4 className="text-xl font-medium">Members</h4>
        <div className="ml-auto flex items-center gap-1.5 rounded-md border border-custom-border-200 bg-custom-background-100 px-2.5 py-1.5">
        <Search className="h-3.5 w-3.5 text-custom-text-400" />
          <input className="w-full max-w-[234px] border-none bg-transparent text-sm outline-none placeholder:text-custom-text-400" placeholder="Search..." value="" />
        </div>
        <Button type="button" className="h-[30px]" onClick={toggleModal}>
          Add member
        </Button>
      </div>
     
      <AddMemberModal isOpen={modalOpen} onClose={toggleModal}/>

      <div className="flex items-center gap-x-4 gap-y-2 mt-2 p-2 hover:text-slate-600 hover:bg-slate-300/20">
        <a href="#">
        <button className=" grid place-items-center overflow-hidden rounded bg-slate-500 text-white outline-none"
                        style={{ height: "42px", width: "42px"}}>S</button>
        </a>
        <div>
          <a href="#">
            <span className="text-sm font-medium">Sreethu </span>
          </a>
          <div className="flex items-center">
            <p className="text-xs text-custom-text-300">sreethuv007</p>
            <Dot />
            <p className="text-xs text-custom-text-300">sreethuv0007@gmail.com</p>
          </div>
        </div>
       
      </div>
      {/* <Join/> */}
    </div>
  );
};

export default MembersPage;