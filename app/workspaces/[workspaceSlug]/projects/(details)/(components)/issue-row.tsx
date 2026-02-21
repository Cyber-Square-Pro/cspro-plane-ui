import { BookAIcon } from "lucide-react";
import React from "react";

const IssueRow = ({ code, title, status, initials }: any) => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
       
        <div className="flex items-center gap-3 min-w-0">
          <input
            type="checkbox"
            className="h-3 w-3 rounded border-slate-300 opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <BookAIcon size={14} className="text-green-600 shrink-0" />
          <span className="text-xs text-slate-500 font-medium shrink-0 uppercase tracking-tight">
            {code}
          </span>
          <span className="text-sm text-slate-800 truncate">{title}</span>
        </div>

        
        <div className="flex items-center gap-4 shrink-0">
          <div className="px-2 py-0.5 bg-slate-200 text-[10px] font-bold rounded uppercase text-slate-600">
            {status}
          </div>
          <div className="h-6 w-6 rounded-full bg-teal-700 text-white flex items-center justify-center text-[10px] font-bold">
            {initials}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueRow;
