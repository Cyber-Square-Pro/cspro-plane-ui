import React from 'react'
import Image from "next/image";

const NoProject = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-64 h-64 relative mb-6">
        <Image
          src="/no-project.png"  
          alt="No Projects Found"
          fill
          className="object-contain"
        />
      </div>
      
    </div>
  )
}

export default NoProject