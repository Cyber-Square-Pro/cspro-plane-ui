"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props{
  height: number
  width: number
}

export const Logo:React.FC<Props> = (props) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_LOCAL_ASSET_BASE_URL}cs-pro-logo.jpeg`;

  const { height, width } = props
  return (
    <Link href="/">
      <div className="pt-7">
        <Image src={imageUrl} alt="logo" height= {height} width={width} />
      </div>
    </Link>
  );
};
