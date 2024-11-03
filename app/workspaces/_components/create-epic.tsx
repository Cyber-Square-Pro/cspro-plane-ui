
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/*
  Author: Fathima swabri on october 27, 2024
  Purpose: Provides a form to create a new epic.
  Props: None
 */ 

const CreateEpic = ({
  onCreateEpic,
  onCancel,
}: {
  onCreateEpic: (epic: { id: number; name: string; details: string; progress: number }) => void;
  onCancel: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title) {
      setError("Title is required");
      return;
    }

    const newEpic = {
      id: Date.now(), 
      name: title,
      details: details,
      progress: 0, 
    };

    onCreateEpic(newEpic); 
  };

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Create New Epic</h2>
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-4">
        <Label className="block text-sm font-medium text-gray-700 mb-2">Epic Title</Label>
        <Input
          type="text"
          className="border rounded p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <Label className="block text-sm font-medium text-gray-700 mb-2">Epic Details</Label>
        <textarea
          className="border rounded p-2 w-full"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Create</Button>
      </div>
    </div>
  );
};

export default CreateEpic;
