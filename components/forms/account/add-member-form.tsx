import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomDropdown from "@/components/custom-dropdown";
import { AddMembersDropdownItems } from "@/constants/dropdown-items";
import { IAddMemberFormValues } from "@/types/user";
import { useMobxStore } from "@/store/store.provider";


interface Props {
  onSubmit: (formData: IAddMemberFormValues) => Promise<void>;
  onClose: () => void;
}

const AddMemberForm: React.FC<Props> = ({ onSubmit, onClose }) => {

  // Extract workspaces from Mobx store
  const {
    workspace: { workspaces },
  } = useMobxStore();

   // Get the first workspace if available
  const workspace = workspaces && workspaces.length > 0 ? workspaces[0] : null;

  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle role selection from dropdown
  const handleSelectRole = (selectedItem: string) => {
    setSelectedRole(selectedItem);
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form fields
    if (!email || !selectedRole || !workspace) {
      console.error("Validation error: Email, role, and workspace must be provided.");
      return;
    }
    
    // Set loading state
    setIsLoading(true);

    console.log("Email:", email);
    console.log("Selected Role:", selectedRole);
    console.log("Workspace Name:", workspace.name);
    
    try {
      // Call onSubmit function passed as prop
      await onSubmit({ email, role: selectedRole, workspace_name: workspace.name });

      // Clear form fields after submission
      setEmail("");
      setSelectedRole("");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex items-center mb-4 text-sm mt-2">
        <Input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <span className="border border-gray-300 p-2 ml-2 rounded pr-4 text-slate-700">
          <CustomDropdown
            dropDownTitle={selectedRole || "Member"}
            dropDownItems={AddMembersDropdownItems}
            onSelect={handleSelectRole}
          />
        </span>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm mr-2 p-1"
          onClick={onClose}
          disabled={isLoading}
        >
          Cancel
        </button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Member"}
        </Button>
      </div>
    </form>
  );
};

export default AddMemberForm;
