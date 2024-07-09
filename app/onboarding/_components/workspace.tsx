import React, { useState } from "react";
import { WorkspaceForm } from "@/components/forms/account/workspace-form";
import { ToastContainer } from "react-toastify";
import { IWorkspace } from "@/types/workspace";
import { Toast } from "@/lib/toast/toast";
import { RESTRICTED_URLS } from "@/constants/workspace";
import { IUser, TOnboardingSteps } from "@/types/user";
import { useMobxStore } from "@/store/store.provider";
import { FormHeading } from "@/components/form-elements/form-heading";
import { observer } from "mobx-react-lite";
import { useUserAuth } from "@/hooks/use-user-auth";
import { WorkspaceService } from "@/services/workspace";

interface Props {
  user: IUser;
  handleStepChange: (onboardingStep: Partial<TOnboardingSteps>) => void;
}

export const Workspace: React.FC<Props> = observer((props) => {
  const toast = new Toast();
  const { user, handleStepChange } = props;
  // const { user: userStore } = useMobxStore();
  const { mutateUser } = useUserAuth("onboarding");
  const workspaceService = new WorkspaceService();
  const { workspace: workspaceStore } = useMobxStore();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); 
  
  const handleCreateWorkspace = async (formData: Partial<IWorkspace>) => {
    
    setIsSubmitting(true)
    if (RESTRICTED_URLS.includes(formData?.slug ?? "")) {
      toast.showToast("error", "Invalid Workspace name");
      setIsSubmitting(false)
      return;
    }

  //   const apiResponse = await fetch(
  //     `/api/workspace-slug-check?slug=${formData.slug}`
  //   );
  //   const data = await apiResponse.json();


  //   if (data.status == true) {
  
  //     await workspaceStore.createWorkspace(formData).then((response: any) => {
  //       toast.showToast("success", response?.message);
  //       setTimeout(() => {
  //         mutateUser();
  //       }, 1000);
  //     });
  //   } else {
  //     toast.showToast("error", "Workspace Exists");
  //   }
  // };
    await workspaceService
    .workspaceSlugCheck(formData?.slug ?? "")
    .then(async (response) => {
      
      if (response.status === true) {
        await workspaceStore
          .createWorkspace(formData)
          .then((response: any) => {

            toast.showToast("success", response?.message);
            setTimeout(() => {
              mutateUser()
            }, 2000);

          });
      } else {
        toast.showToast("error", "Workspace Exists");
        setIsSubmitting(false)
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-xl px-4 w-full">
        <FormHeading headingText="What will your workspace be?" />
        <div>
          <WorkspaceForm
           onSubmit={handleCreateWorkspace}
           isSubmitting={isSubmitting}
           />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
});
