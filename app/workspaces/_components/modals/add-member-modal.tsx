import React, { useState } from "react";
import CustomDropdown from "@/components/custom-dropdown";
import { ToastContainer } from "react-toastify";
import { observer } from "mobx-react-lite";
import { useMobxStore } from "@/store/store.provider";
import { Toast } from "@/lib/toast/toast";
import FormDescription from "@/components/form-elements/form.description";
import { IAddMemberFormValues } from "@/types/user";
import { EmailService } from "@/services/email.service";
import AddMemberForm from "@/components/forms/account/add-member-form";

/*
Author:  SreethuEA on May 23, 2024
Purpose: Popover for Workspace details 
*/

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AddMemberModal: React.FC<Props> = observer(({ isOpen, onClose }) => {
  const toast = new Toast();
  const emailService = new EmailService();
  if (!isOpen) return null;
  
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (formData: IAddMemberFormValues) => {
    console.log("Form Data:", formData); // Log form data here
    try {
      const response = await emailService.addMemberService(formData);
      console.log("Response is",response)
      if (response?.statusCode === 200) {
        toast.showToast("success",response?.message);
      } else {
        toast.showToast("error", response?.message);
      }
    } catch (error) {
      toast.showToast("error", "An error occurred while sending the invitation.");
    }
  };

  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={handleOverlayClick}></div>

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl z-20 text-sm">
      <h2 className="text-md font-bold mb-4 text-slate-700">Invite people to collaborate</h2>
        <p className="text-slate-700 text-sm">Invite members to work on your workspace</p>

        
        <AddMemberForm onClose={onClose} onSubmit={handleSubmit} /> {/* Use the AddMemberForm component */}

       
      </div>
      <ToastContainer />
    </div>
  );
});


