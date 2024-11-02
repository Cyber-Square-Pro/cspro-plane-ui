import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuickBacklogCreateForm } from "@/components/forms/project/quick-backlog-create-form";
import { Dialog } from "@/components/ui/dialog";

type CreateSprintProps = {
  isSprintModalOpen: boolean;
  onCloseSprintModal: () => void;
};

export const CreateSprint: React.FC<CreateSprintProps> = ({ isSprintModalOpen, onCloseSprintModal }) => {
  const [isSprintStarted, setIsSprintStarted] = useState(false); 

  const handleStartSprint = () => {
    setIsSprintStarted(true); 
    onCloseSprintModal(); 
  };

  return (
    <div className="h-52 bg-zinc-100 flex flex-col items-center justify-center mb-5 px-2">
      <div className="flex items-center justify-between w-full text-[13px] text-zinc-600 font-bold py-2 px-2">
        <span>Sprint</span>
        <Button
          className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm"
        >
          {isSprintStarted ? "Complete Sprint" : "Start Sprint"} 
        </Button>
      </div>

      <div className="border-dashed border-2 border-gray-300 rounded-md h-36 w-full mx-5 flex flex-col items-center justify-center">
        <div className="w-96">
          <h2 className="text-[12px] font-semibold text-gray-700 mb-1">
            Plan your sprint
          </h2>
          <p className="text-[12px] font-medium">
            Drag issues from the <span className="font-bold">Backlog</span>{" "}
            section, or create new issues, to plan the work for this sprint.
            Select <span className="font-bold">Start sprint</span> when you&apos;re
            ready.
          </p>
        </div>
      </div>

      {isSprintModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <Dialog open={isSprintModalOpen} onOpenChange={onCloseSprintModal}>
            <div className="p-8 bg-white rounded-lg shadow-md w-[500px] z-60"> 
              <h2 className="text-lg font-bold text-gray-700 mb-3">Start Sprint </h2>
              <p className="text-sm text-black-500 mb-4">
                Required fields are marked with an asterisk{" "}
                <span className="text-red-500">*</span>
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium">
                    Sprint Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter sprint name"
                    className="border p-2 rounded text-sm w-1/2 focus:border-blue-500 focus:border-2  focus:outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium">
                    Duration <span className="text-red-500">*</span>
                  </label>
                  <select className="border p-2 rounded text-sm w-1/2 focus:border-blue-500 focus:border-2  focus:outline-none">
                    <option value="1-week">1 Week</option>
                    <option value="2-weeks">2 Weeks</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    className="border p-2 rounded text-sm w-1/2 focus:border-blue-500 focus:border-2  focus:outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium">
                    End Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    className="border p-2 rounded text-sm w-1/2 focus:border-blue-500 focus:border-2  focus:outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium">Sprint Goals </label>
                  <textarea
                    placeholder="Enter sprint goals"
                    className="border p-2 rounded text-sm w-full h-20 focus:border-blue-500 focus:border-2  focus:outline-none"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end mt-5 space-x-4">
                <Button
                  className="p-2 bg-gray-300 text-black text-sm rounded-sm w-24"
                  onClick={onCloseSprintModal}
                >
                  Cancel
                </Button>
                <Button
                  className="p-2 bg-blue-500 text-white text-sm rounded-sm w-24"
                  onClick={handleStartSprint} 
                >
                  Start
                </Button>
              </div>
            </div>
          </Dialog>
        </div>
      )}
      <QuickBacklogCreateForm />
    </div>
  );
};
