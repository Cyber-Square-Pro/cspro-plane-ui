import { ProfileForm } from "@/components/forms/account/profile-form";
import { User } from "lucide-react";
import React, { useState } from "react";
import { ICreateProfile, IProfile, IUser, TOnboardingSteps } from "@/types/user";
import { observer } from "mobx-react-lite";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";
import { FormHeading } from "@/components/form-elements/form-heading";
import FormDescription from "@/components/form-elements/form.description";
import { useMobxStore } from "@/store/store.provider";


/*
  Author: Mohammed Rifad on April 18th, 2024
  Purpose: Renders Profile form
  Props:
    user - current user
    handleStepChange - function to handle user onboarding steps

*/


interface Props {
  user: IUser;
  handleStepChange: (onboardingStep: Partial<TOnboardingSteps>) => void;
}

export const Profile: React.FC<Props> = observer((props) => {
  const { user: userStore } = useMobxStore();
  const { user, handleStepChange } = props;
  const toast = new Toast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);  

  /*
  Purpose: Submit user profile data
  Parameters: first_name, last_name, role
  Return: Updated user data


   */
  const submitForm = async (formData:Partial<ICreateProfile>) => {
    
    const payload: Partial<IUser> = {
      ...formData,
      onboarding_step: {
        ...user.onboarding_step,
        email_verified:true,
        profile_complete: true,
      },
    };

    await userStore.updateCurrentUser(payload)
    toast.showToast("success", "Profile Updated");
    setIsSubmitting(true)
    
      setTimeout(() => {
        handleStepChange(payload.onboarding_step as Partial<TOnboardingSteps>);
        setIsSubmitting(false)
      }, 1000);
      setIsSubmitting(false)
    
  };



  return (
    <div className="flex justify-center px-20 items-center h-full">
      <div className="max-w-2xl px-4 w-full">
        <div className="flex space-x-10">
          <FormHeading headingText="Setup your profile" />
          <div>
            <User className="mt-3" />
          </div>
        </div>

        <FormDescription descriptionText="Create your profile for the plane account." />
        <div>
          <ProfileForm
           onSubmit={submitForm} 
           isSubmitting={isSubmitting}
           />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
});
