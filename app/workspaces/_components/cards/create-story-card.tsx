"use client";

import React, { useState } from "react";
import { AddBacklogForm } from "@/components/forms/backlog/add-backlog-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TAddBacklogValidator } from "@/lib/validators/add-backlog.validator";

interface CreateStoryCardProps {
  onCreateStory: (newStory: TAddBacklogValidator) => void;
  onClose: () => void; 
}

const CreateStoryCard: React.FC<CreateStoryCardProps> = ({ onCreateStory, onClose }) => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleFormSubmit = (formData: TAddBacklogValidator) => {
    console.log("Form submitted:", formData);
    onCreateStory(formData);
    setIsFormVisible(false);
  };

  const handleCancel = () => {
    setIsFormVisible(false);
    onClose(); 
  };

  if (!isFormVisible) {
    return null; 
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <Card className="relative z-10 w-full max-w-md">
        <CardHeader>
          <CardTitle>Create New Story</CardTitle>
        </CardHeader>
        <CardContent>
          <AddBacklogForm onSubmitForm={handleFormSubmit} onCancel={handleCancel} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateStoryCard;
