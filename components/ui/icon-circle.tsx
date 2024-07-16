import React from 'react';
import { Circle } from 'lucide-react';

const IconCircle = () => {
  return (
    <div className="relative inline-block w-16 h-16">
      <Circle className="absolute inset-0 w-10 h-10 text-gray-300 m-auto" />
      <span className="absolute inset-0 flex items-center justify-center text-sm ">
        0%
      </span>
    </div>
  );
};

export default IconCircle;

