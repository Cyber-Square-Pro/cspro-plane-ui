import { Logo } from "@/components/logo";
import React from "react";

/*
  Author: Mohammed Rifad on March 2024
  Purpose: Renders a navigation bar for the application, displaying the logo and user email.
  Props:
     - email?: string - Optional. The email address of the user to display.
  updated by: 
    - Ridhwan on May 30th, 2024 - Adjusted logo size.
*/

interface Props{
  email?: string
}

export const Navbar:React.FC<Props> = (props) => {

  const { email } = props

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo height={150} width={150}/> 
        
        <div>{ email }</div>
      </div>
    </div>
  );
};
