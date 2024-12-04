"use client";
import React, { useState } from "react";
import { ChevronRight, Zap, ArrowRight, Info, Minimize2 } from "lucide-react";
import CreateEpic from "./create-epic";
import { Button } from "@/components/ui/button";

/*
  Author: Fathima swabri on october 27, 2024
  Purpose:Displays sprint information and lets users create epics. 
  Props: None
 */ 


type Epic = {
  id: number;
  name: string;
  details?: string;
  progress: number;
};

const Sprint = () => {
  const [epics, setEpics] = useState<Epic[]>([
    { id: 1, name: "PLN-1 Update CS Pro Plane App with key features of Scrum", progress: 50 }
  ]);

  const [isCreatingEpic, setIsCreatingEpic] = useState(false); 
  const [timeScale, setTimeScale] = useState("Months"); 

  
  const handleCreateEpic = (newEpic: Epic) => {
    setEpics((prevEpics) => [...prevEpics, newEpic]); 
    setIsCreatingEpic(false); 
  };

  const handleCancel = () => {
    setIsCreatingEpic(false); 
  };

  return (
    <div className="p-4 space-y-6">
      <div className="border rounded-lg">
        <div className="table w-full border-collapse">
          
          <div className="table-row bg-gray-100 border-b">
            <div className="table-cell p-4 text-lg font-bold">Sprint</div>
          </div>

         
          {epics.map((epic) => (
            <div className="table-row border-b" key={epic.id}>
              <div className="table-cell p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-white border border-gray-600 rounded"></div>
                  <ChevronRight size={16} className="text-gray-700" />
                  <div className="w-4 h-4 bg-purple-600 text-white flex items-center justify-center rounded-sm">
                    <Zap size={13} />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {epic.name}
                  </span>
                </div>
                <div className="relative w-36 h-2 bg-white-200 rounded-full mt-2 ml-12 p-1 flex items-center justify-between space-x-1">
                  <div className="h-1 bg-green-500" style={{ width: '50%' }}></div> 
                  <div className="h-1 bg-blue-500" style={{ width: '30%' }}></div> 
                  <div className="h-1 bg-gray-400" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-cell bg-gray-100 p-4">
              <Button variant="link" className="text-blue-600 hover:underline" onClick={() => setIsCreatingEpic(true)}>
                + Create Epic
              </Button>
              {isCreatingEpic && (
                <CreateEpic onCreateEpic={handleCreateEpic} onCancel={handleCancel} />
              )}
            </div>
          </div>
        </div>
      </div>
       <div 
        className="fixed bottom-0 right-0 w-1/3 bg-white shadow-md border-t p-1 flex items-center justify-center space-x-2 cursor-pointer" 
        onClick={() => console.log("Timeline View clicked")}
      >
        <div 
          className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white"
          onClick={(e) => { e.stopPropagation(); console.log("Go Back"); }}
        >
          <ArrowRight size={16} className="cursor-pointer" />
        </div> 
        <div className="h-4 w-px bg-gray-300 mx-1" /> 
        {["Today", "Weeks", "Months", "Quarters"].map((scale, index) => (
          <React.Fragment key={scale}>
            <Button
              variant="ghost"
              className={`px-2 py-1 text-base ${timeScale === scale ? "bg-gray-200" : ""}`}
              onClick={(e) => { e.stopPropagation(); setTimeScale(scale); }}
            >
              {scale}
            </Button>
            
            {index < 3 && <div className="h-4 w-px bg-gray-300 mx-1" />}
          </React.Fragment>
        ))}

        <div className="h-4 w-px bg-gray-300 mx-1" />

        <div 
          className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white"
          onClick={(e) => { e.stopPropagation(); console.log("Info clicked"); }}
        >
          <Info size={16} className="cursor-pointer" />
        </div>

        
        <div className="h-4 w-px bg-gray-300 mx-1" />

        
        <div 
          className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white"
          onClick={(e) => { e.stopPropagation(); console.log("Settings clicked"); }}
        >
          <Minimize2 size={16} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sprint;
