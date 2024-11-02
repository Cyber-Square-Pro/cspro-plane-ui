import React from "react";

type DialogProps = {
  open: boolean;
  onOpenChange: () => void;
  children: React.ReactNode;
  title?: string;
};

export const Dialog = ({ open, onOpenChange, children, title }: DialogProps) => { 
if (!open) return null;

  return (
    <div
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-transparent" 
     
      onClick={onOpenChange}
    >
      <div
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
         
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};
