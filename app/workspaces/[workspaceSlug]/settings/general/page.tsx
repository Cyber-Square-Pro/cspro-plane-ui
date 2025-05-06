import { WorkspaceForm } from "@/components/forms/account/workspace-form";
import React from "react";

const GeneralSettingsPage = () => {
     const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div>
        <WorkspaceForm
          onSubmit={async (formData) => {}}
          isSubmitting={false}
        />  
      </div>
    </div>
  );
};

export default GeneralSettingsPage;
