"use client"
import ChangePasswordForm from "@/components/forms/account/change-password-form";
import { TChangePasswordValidator } from "@/lib/validators/account/changepassword.validator";
/*
  Author: Fathima Swabri on July 10, 2024
  Purpose: Display security page under profile settings. 
  Props: None 
*/

const ChangePassword: React.FC = () => {
  const handleFormSubmit = (formData: TChangePasswordValidator) => {
    console.log("Form Data:", formData);
  };
  
  return (
    <div className="w-full h-full p-6 bg-white rounded-md ml-[100px]">``
      <div className="w-2/5 p-7">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Change password</h1>
      <ChangePasswordForm onFormSubmit={handleFormSubmit}/>
      </div>
    </div>
  );
};

export default ChangePassword;
 