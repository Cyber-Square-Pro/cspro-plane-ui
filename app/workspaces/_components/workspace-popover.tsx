"use client";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import {
  Check,
  MessageSquarePlus,
  Mails,
  CircleUserRound,
  Settings,
  LogOut,
} from "lucide-react";
import { AuthService } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useMobxStore } from "@/store/store.provider";
import { IWorkspace } from "@/types/workspace";
import Link from "next/link";

/* 
Author:  SreethuEA on May 23, 2024
Purpose: Popover for Workspace details 
Props: None
Updated by: - Sreethu EA on May 24th, 2024 - Added Sign-out Fuctionality.
            - Mohammed Rifad on June 2nd, 2024 - implemented mobX to display
              workspaces and user data. Also made changes in signout button UI.               
            - Muhammed Adnan on June 3rd, 2024 - Adjusted Trigger style as needed.
            - Sreethu EA on June 27th, 2024 - handleItemClick function is added 
              to handle the closing of the popover when any item within the 
              popover content is clicked.
*/

interface Props {
  slug: string;
}

const WorkspacePopover: React.FC<Props> = (props) => {
  const { slug } = props;
  const [open, setOpen] = useState(false);
  const authService = new AuthService();
  const router = useRouter();

  const {
    workspace: { workspaces },
    user: { currentUser, updateUserOnLogout },
  } = useMobxStore();

  const workspaceDisplayTxt = workspaces
    ? workspaces[0].name[0].toUpperCase()
    : "";
  const email = currentUser?.email;

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await authService.userLogout();
      updateUserOnLogout();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Function to handle item click
  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Popover isOpen={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <button className="mx-1 px-1 py-1 rounded-md flex items-center space-x-2 hover:bg-zinc-200 w-[210px] outline-none">
            <span className="bg-blue-900 text-white px-2 py-1 text-sm rounded w-6 h-6 flex items-center justify-center">
              {workspaceDisplayTxt}
            </span>
            <span className="text-black truncate text-base font-medium">
              {workspaces && workspaces[0].name.replace(/\s+/g, "-")}
            </span>
          </button>
        </PopoverTrigger>

        <PopoverContent>
          <div className="px-1 py-3 border-2 border-grey-500 bg-white">
            <div className="flex items-center text-sm text-slate-600 pl-2">
              {email}
            </div>
            <br />
            {workspaces && workspaces.length > 0 ? (
              workspaces.map((workspace: IWorkspace) => (
                <div
                  key={workspace.id}
                  className="flex items-center py-3 cursor-pointer"
                  onClick={handleItemClick}
                >
                  <button
                    className="grid place-items-center overflow-hidden rounded bg-blue-500 text-white outline-none"
                    style={{ height: "24px", width: "24px" }}
                  >
                    {workspace.name[0].toUpperCase()}
                  </button>
                  <span className="truncate text-base text-sm font-medium text-slate-600 pl-2">
                    {workspace.name}
                  </span>
                  <div style={{ marginLeft: "70px" }}></div>
                  <Check />
                </div>
              ))
            ) : (
              <div className="text-sm text-slate-600">No workspaces found</div>
            )}

            <br />

            <div className="flex items-center cursor-pointer" onClick={handleItemClick}>
              <MessageSquarePlus />
              <span className="ml-2 text-sm max-w-prose text-slate-600">
                Create Workspace
              </span>
            </div>
            <br />
            <div className="flex items-center cursor-pointer" onClick={handleItemClick}>
              <Link href={"/invitations"} className="flex items-center">
                <Mails />
                <span className="ml-2 text-sm max-w-prose text-slate-600">
                  Workspace Invites
                </span>
              </Link>
            </div>
            <br />
            <div className="flex items-center cursor-pointer" onClick={handleItemClick}>
              <CircleUserRound />
              <span className="ml-2 text-sm max-w-prose text-slate-600">
                View profile
              </span>
            </div>
            <br />
            <div className="flex items-center cursor-pointer" onClick={handleItemClick}>
              <Link href={`/workspaces/${slug}/settings`} className="flex items-center">  
                <Settings />
                <span className="ml-2 text-sm max-w-prose text-slate-600">Settings</span>
              </Link>
            </div>
            <br />
            <hr />
            <div className="flex items-center cursor-pointer">
              <button
                onClick={() => { handleLogout(); handleItemClick(); }}
                className="flex items-center text-red-500"
              >
                <LogOut className="mr-2" color="red" />
                <span className="text-sm max-w-prose">Sign Out</span>
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default WorkspacePopover;
