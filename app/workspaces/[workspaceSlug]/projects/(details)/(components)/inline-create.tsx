"use client";
import React, { useState, useRef, useEffect } from "react";
import { Plus, BookAIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InlineCreateIssue = ({ onSave }: { onSave: (title: string) => void }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus the input when it appears
  useEffect(() => {
    if (isCreating) {
      inputRef.current?.focus();
    }
  }, [isCreating]);

  const handleCreate = () => {
    if (title.trim()) {
      onSave(title);
      setTitle("");
      setIsCreating(false);
    }
  };

  if (!isCreating) {
    return (
      <button
        onClick={() => setIsCreating(true)}
        className="w-full flex items-center gap-2 px-12 py-3 text-sm text-slate-500 hover:bg-slate-50 transition-colors group"
      >
        <Plus size={16} className="group-hover:text-blue-600" />
        <span>Create issue</span>
      </button>
    );
  }

  return (
    <div className="px-4 py-2 border-2 border-blue-500 bg-white shadow-sm mx-2 my-1 rounded-sm">
      <div className="flex items-center gap-3">
        {/* Issue Type Icon */}
        <BookAIcon size={14} className="text-green-600 shrink-0" />
        
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCreate()}
          placeholder="What needs to be done?"
          className="flex-1 text-sm outline-none border-none py-1 placeholder:text-slate-400"
        />

        <div className="flex items-center gap-1">
          <Button 
            size="sm" 
            className="h-7 bg-blue-600 hover:bg-blue-700 text-xs px-3"
            onClick={handleCreate}
          >
            Create
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-7 w-7 p-0" 
            onClick={() => setIsCreating(false)}
          >
            <X size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};