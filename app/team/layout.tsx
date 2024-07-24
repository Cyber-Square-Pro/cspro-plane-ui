"use client"
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import SideBar from "@/components/sidebar/sidebar";
import { AttendanceRouteList } from "@/constants/sidebar";
import { SidebarTypes } from "@/constants/sidebarx";
import { useMobxStore } from "@/store/store.provider";
import "react-toastify/dist/ReactToastify.css";

/*
  Author: Sreethu on July 24th, 2024
  Purpose: Renders layout for team pages 
*/
 
export default function AttendanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    user: { currentUser },
  } = useMobxStore();

  return (
    <div className="h-full w-full">
      {/* Navbar Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 xl:px-12">
        <div className="mb-4 lg:mb-0">
        <Logo height={120} width={120} />
        </div>

       
      </div>

       
      <div className="flex  flex-col lg:flex-row lg:justify-between  px-2 lg:px-8 xl:px-16 pt-5">
         
        <div className="hidden lg:block lg:w-1/4">
          <SideBar isOnboarded={true} type = {SidebarTypes.ATTENDANCE} />
        </div>

        
        <div className="w-full py-10 flex items-center justify-center  px-20 md:px-40">
            {children}
        </div>
      </div>
    </div>
  );
}
