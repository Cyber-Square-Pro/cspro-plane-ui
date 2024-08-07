import { EmailVerificationForm } from "@/components/forms/account/email-verification";
import React from "react";
import { FormHeading } from "@/components/form-elements/form-heading";
import { useMobxStore } from "@/store/store.provider";
import { ToastContainer } from "react-toastify";
import { IVerificationCode, TOnboardingSteps } from "@/types/user";
import { Toast } from "@/lib/toast/toast";
import { observer } from "mobx-react-lite";
import { EmailService } from "@/services/email.service";
import FormDescription from "@/components/form-elements/form.description";

interface Props {
  handleStepChange: (onboardingStep: Partial<TOnboardingSteps>) => void;
  userEmail: string;
}

export const VerifyEmail: React.FC<Props> = observer((props) => {
  const { handleStepChange, userEmail } = props;

  const emailService = new EmailService();
  const toast = new Toast();

 
    const submitCode = async (formData: IVerificationCode) => {
      return emailService.verifyEmail(formData).then(async (response) => {
        
        if (response?.statusCode == 200) {
          toast.showToast("success", response?.message);
        
          setTimeout(() => {
            handleStepChange({ email_verified: true });
          }, 1000);
           
        } else {
          toast.showToast("error", response?.message);
        }
      });
    };
 
  

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-xl px-4 w-full">
        <FormHeading headingText="Moving to the runway" />

        <FormDescription descriptionText="paste your code you got at" />

        <FormDescription
          descriptionText={
            <>
              <span className="text-blue-700 font-bold px-2">{userEmail}</span>{" "}
              below
            </>
          }
        />

        <div>
          <EmailVerificationForm onSubmit={submitCode} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
});
