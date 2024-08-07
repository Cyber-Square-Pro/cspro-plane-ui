import React, { FC } from "react";
import SidebarRoutes from "./sidebar-routes";
import { SidebarType } from "@/constants/sidebarx";


 

type Props = {
  workspaceSlug?: string;
  isOnboarded: boolean;
  type: SidebarType;
};
const SideBar: FC<Props> = (props) => {
  
  const { workspaceSlug, isOnboarded ,type } = props;
  
  return (
    <>
      <SidebarRoutes itemLink={workspaceSlug} isDisabled = {!isOnboarded} type={type}/>
    </>
  );
};

export default SideBar;
