import Image from "next/image";
import Link from "next/link";
import React from "react";

/*
  Author: Mohammed Rifad on March 2024
  Purpose: Created logo.
  Props:
     - height: number - The height of the logo.
     - width: number - The width of the logo.
  updated by: 
    - Navya on July 10th, 2024 - Changed logo.
*/

interface Props{
  height: number
  width: number
}

export const Logo:React.FC<Props> = (props) => {
  const { height, width } = props
  return (
    <Link href="/">
      <div className="pt-7">
         <Image src="/cs-pro-logo.jpg" alt="logo" height= {height} width={width} />
      </div>
    </Link>
  );
};


