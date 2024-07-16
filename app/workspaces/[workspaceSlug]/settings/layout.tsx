"use client"
import "react-toastify/dist/ReactToastify.css";
import { UserWrapper } from "../wrapper/user-wrapper";
import SettingsHeader from "../../_components/headers/settings-header";
import WSidebar from "@/components/sidebar/workspace-settings-sidebar/sidebar";
import { WORKSPACESETTINGS_LINKS } from "@/constants/workspace";
import { useMobxStore } from "@/store/store.provider";

/*
  Author: Sreethu on June 20nth, 2024
  Purpose: Renders layout for Settings pages 
*/

const SettingsLayout = ({
  children,
  params,

}: {
  children: React.ReactNode;
  params: { workspaceSlug: string };

}) => {

  const { workspaceSlug } = params;
   return (
    <UserWrapper>
    
     <SettingsHeader  />  
    <div className="min-h-screen flex">

      <aside className="w-60 m-2 p-4">
      <div className="text-sm font-semibold text-slate-400">
      SETTINGS
    </div>
      
        <nav>  
        <WSidebar RouteList={WORKSPACESETTINGS_LINKS}  workspaceSlug={workspaceSlug}/>
       </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <main className="pt-10 sm:pt-0 pb-20 h-full mt-5">{children}</main>
      </div>
    </div>
    </UserWrapper>
  );
};

export default SettingsLayout;
