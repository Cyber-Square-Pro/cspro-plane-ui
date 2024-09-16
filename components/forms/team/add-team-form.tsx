
// "use client";
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from "@/components/ui/button";
// import { AddTeamValidator, TAddTeamValidator } from '@/lib/validators/account/add-team.validation';
// import { FormHeading } from '@/components/form-elements/form-heading';
// import FormDescription from '@/components/form-elements/form.description';
// import { ITeam } from '@/types/team';

// interface Props {
//   onFormSubmit: (formData: ITeam) => void;
// //   isSubmitting: boolean;
// }
// const AddTeamForm: React.FC<Props> = (props) => {
//   const { register, handleSubmit, formState: { errors } } = useForm<TAddTeamValidator>({
//     resolver: zodResolver(AddTeamValidator),
//   });
//   const { onFormSubmit } = props;


  

//   return (
//     <div className="w-full max-w-lg mx-auto p-4">
//       <div className="text-center mb-6">
//       <FormHeading headingText="Create Your Team" />
//       <FormDescription descriptionText="Build your team to manage projects efficiently." />
//       </div>
//       <form onSubmit={handleSubmit(onFormSubmit)}>
//         <div className="py-2">
//           <Label className="block mb-2">Team Name</Label>
//           <Input
//             {...register('team_name')}
//             className="w-full border rounded-md"
//             placeholder="Enter Your Team Name"
//           />
//           {errors.team_name && <span className="text-red-500 mt-1 block">{errors.team_name.message}</span>}
//         </div>

//         <div className="py-2">
//           <Label className="block mb-2">Description</Label>
//           <Textarea
//             {...register('team_description')}
//             className="w-full border rounded-md"
//             placeholder="Description"
//           />
//           {errors.team_description && <span className="text-red-500 mt-1 block">{errors.team_description.message}</span>}
//         </div>

//         <div className="py-2 flex justify-center">
//           <Button
//             className="w-auto px-4 py-2 text-sm border rounded-sm"
//             type="submit"
//           >
//             Add Team
//           </Button>
//         </div>
//       </form>

//     </div>
//   );
// };

// export default AddTeamForm;


"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";
import { AddTeamValidator, TAddTeamValidator } from '@/lib/validators/account/add-team.validation';
import { FormHeading } from '@/components/form-elements/form-heading';
import FormDescription from '@/components/form-elements/form.description';
import { ITeam } from '@/types/team';

interface Props {
  onFormSubmit: (formData: ITeam) => void;
}

const AddTeamForm: React.FC<Props> = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<TAddTeamValidator>({
    resolver: zodResolver(AddTeamValidator),
  });
  
  const { onFormSubmit } = props;

  // Watch the values of the team name and description fields
  const watchTeamName = watch('team_name');
  const watchTeamDescription = watch('team_description');

  // Button is disabled if either team name or description is empty
  const isButtonDisabled = !watchTeamName || !watchTeamDescription;

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="text-center mb-6">
        <FormHeading headingText="Create Your Team" />
        <FormDescription descriptionText="Build your team to manage projects efficiently." />
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="py-2">
          <Label className="block mb-2">Team Name</Label>
          <Input
            {...register('team_name')}
            className="w-full border rounded-md"
            placeholder="Enter Your Team Name"
          />
          {errors.team_name && <span className="text-red-500 mt-1 block">{errors.team_name.message}</span>}
        </div>

        <div className="py-2">
          <Label className="block mb-2">Description</Label>
          <Textarea
            {...register('team_description')}
            className="w-full border rounded-md"
            placeholder="Description"
          />
          {errors.team_description && <span className="text-red-500 mt-1 block">{errors.team_description.message}</span>}
        </div>

        <div className="py-2 flex justify-center">
          <Button
            className="w-auto px-4 py-2 text-sm border rounded-sm"
            type="submit"
            disabled={isButtonDisabled} // Disable button when form fields are empty
          >
            Add Team
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTeamForm;
