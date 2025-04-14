"use client"
import ChangePasswordForm from "@/components/forms/account/change-password-form";
import { Toast } from "@/lib/toast/toast";
import { TChangePasswordValidator } from "@/lib/validators/account/changepassword.validator";

import { ProfileService } from "@/services/profile.service";
import { ToastContainer } from "react-toastify";
/*
  Author: Fathima Swabri on July 10, 2024
  Purpose: Display security page under profile settings. 
  Props: None 
*/

const ChangePassword: React.FC = () => {

  const profileService = new ProfileService();
  const toast = new Toast();
  const handleFormSubmit = async (formData: TChangePasswordValidator) => {
    try {
        await profileService.updateUserPassword(formData).then((res) => {
        console.log(res, "Password updated successfully");  
        res?.statusCode == 200
      ? toast.showToast("success", res?.message)
      : toast.showToast("error", res?.message);
    })
      
    } catch (error) {
      console.error("Error updating password", error);
    }
  };
  
  
  return (
    <>
       <ToastContainer />
       <div className="w-full h-full p-6 bg-white rounded-md ml-[100px]">
      <div className="w-2/5 p-7">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Change password</h1>
      <ChangePasswordForm onFormSubmit={handleFormSubmit}/>
      </div>
    </div>
       </>
    
  );
};

export default ChangePassword;
 