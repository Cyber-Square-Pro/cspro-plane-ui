import React, { FC } from "react";
import SidebarRoutes from "./sidebar-routes";

type Props = {
  workspaceSlug?: string;
  isOnboarded: boolean
};
const SideBar: FC<Props> = (props) => {
  
  const { workspaceSlug, isOnboarded } = props;
  console.log('//', workspaceSlug)
  return (
    <>
      <SidebarRoutes itemLink={workspaceSlug} isDisabled = {!isOnboarded}  />
    </>
  );
};

export default SideBar;
