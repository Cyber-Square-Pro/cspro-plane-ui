import React from "react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { CircleUserRound, Settings, LogOut } from "lucide-react";
import { useMobxStore } from "@/store/store.provider";

/* 
  Author: Sreethu EA on May 23, 2024
  Purpose: Popover for profile details 
  Props: None
  Updated by: Mohammed Rifad on June 2nd, 2024 - implemented mobX to display
             current user data.
             - Muhammed Adnan on June 3rd, 2024 - Adjust trigger style as needed.
*/

const ProfilePopover: React.FC = () => {

  const {user: { currentUser },} = useMobxStore();
  
  const displayChar = currentUser?.first_name[0].toUpperCase()
  const email = currentUser?.email
  
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <button className="bg-blue-900 text-white px-2 py-1 mt-1 rounded w-6 h-6 outline-none flex items-center justify-center text-sm">
          { displayChar }
          </button>
        </PopoverTrigger>

        <PopoverContent>
          <div className="px-4 py-5 border-2 border-grey-500 bg-white">
            <div className="flex items-center text-sm text-slate-600">
              { email }
            </div>
            <br />

            <div className="flex items-center">
              <CircleUserRound />
              <span className="ml-2 text-sm max-w-prose text-slate-600">
                My activity
              </span>
            </div>
            <br />

            <div className="flex items-center">
              <Link href="/profile" passHref>
                <div className="flex items-center">
                  <Settings />
                  <span className="ml-2 text-sm max-w-prose text-slate-600">
                    Settings
                  </span>
                </div>
              </Link>
            </div>

            <br />
            <hr />
            <div className="flex items-center">
              <LogOut />
              <span className="ml-2 text-sm max-w-prose text-slate-600">
                Sign Out
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ProfilePopover;
