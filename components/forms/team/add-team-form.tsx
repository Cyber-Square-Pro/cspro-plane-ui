// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Textarea } from '@nextui-org/react'
// import { Button } from "@/components/ui/button";
// import { AddTeamValidator } from '@/lib/validators/account/add-team.validation';

// import React from 'react'

// const AddTeamForm= () => {

//   return (
//   <>
//     <div className="py-2 flex items-center w-full">
//   <Label className="mr-6 whitespace-nowrap">Team Name</Label>
//   <Input
//     className="w-full border rounded-md"
//     placeholder="Enter Your Team Name"  
//   />  
// </div>

//   <div className="py-2 flex items-center w-full">
//   <Label className="mr-6">Description</Label>
// <Textarea
//   className="w-full border rounded-md"
//   placeholder="Description"  
// />

// </div>
// <div className="py-2 flex justify-center">
//   <Button
//     className="w-auto px-4 py-2 text-sm border rounded-sm"
//     type="submit">
//     Add Team
//   </Button>
// </div>
// </>
//   )
// }

// export default AddTeamForm



// "use client"

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@nextui-org/react'; 
// import { Button } from "@/components/ui/button";
// import { AddTeamValidator, TAddTeamValidator } from '@/lib/validators/account/add-team.validation';
// import { ITeam } from '@/types/team';

// interface Props {
//   onFormSubmit: (formData: ITeam) => void;
// }
// const AddTeamForm: React.FC<Props> = (props) =>{
//   const { register, handleSubmit, formState: { errors } } = useForm<TAddTeamValidator>({
//     resolver: zodResolver(AddTeamValidator),
//   });
//   const { onFormSubmit } = props; 
//   const [submitStatus, setSubmitStatus] = useState<string | null>(null);

//   const onSubmit = (formData: ITeam) => {
    
//     await onFormSubmit(formData);
//     setTimeout(() => {
//       console.log(formDataa);
//       setSubmitStatus('Team added successfully');
//     }, 1000); 
//   };

  
//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="py-2 flex items-center w-full">
//         <Label className="mr-6 whitespace-nowrap">Team Name</Label>
//         <Input
//           {...register('teamName')}
//           className="w-full border rounded-md"
//           placeholder="Enter Your Team Name"
//         />
//         {errors.teamName && <span className="text-red-500">{errors.teamName.message}</span>}
//       </div>

//       <div className="py-2 flex items-center w-full">
//         <Label className="mr-6">Description</Label>
//         <Textarea
//           {...register('description')}
//           className="w-full border rounded-md"
//           placeholder="Description"
//         />
//         {errors.description && <span className="text-red-500">{errors.description.message}</span>}
//       </div>
      
//       <div className="py-2 flex justify-center">
//         <Button
//           className="w-auto px-4 py-2 text-sm border rounded-sm"
//           type="submit"
//         >
//           Add Team
//         </Button>
//       </div>
      
//       {submitStatus && (
//         <div className="py-2 flex justify-center">
//           <span className={`text-sm ${submitStatus === 'Team added successfully' ? 'text-green-500' : 'text-red-500'}`}>
//             {submitStatus}
//           </span>
//         </div>
//       )}
//     </form>
//   );
// };

// export default AddTeamForm;



// "use client"
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from "@/components/ui/button";
// import { AddTeamValidator, TAddTeamValidator } from '@/lib/validators/account/add-team.validation';

// const AddTeamForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<TAddTeamValidator>({
//     resolver: zodResolver(AddTeamValidator),
//   });

//   const [submitStatus, setSubmitStatus] = useState<string | null>(null);

//   const onSubmit = (data: TAddTeamValidator) => {
//     // Simulate a network request
//     setTimeout(() => {
//       console.log(data);
//       setSubmitStatus('Team added successfully');
//     }, 1000); // Simulates a 1 second network delay
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="py-2 flex items-center w-full">
//         <Label className="mr-6 whitespace-nowrap">Team Name</Label>
//         <Input
//           {...register('teamName')}
//           className="w-full border rounded-md"
//           placeholder="Enter Your Team Name"
//         />
//         {errors.teamName && <span className="text-red-500">{errors.teamName.message}</span>}
//       </div>

//       <div className="py-2 flex items-center w-full">
//         <Label className="mr-6">Description</Label>
//         <Textarea
//           {...register('description')}
//           className="w-full border rounded-md"
//           placeholder="Description"
//         />
      
//       {errors.description && <span className="text-red-500">{errors.description.message}</span>}
//       </div>
//       <div className="py-2 flex justify-center">
//         <Button
//           className="w-auto px-4 py-2 text-sm border rounded-sm"
//           type="submit"
//         >
//           Add Team
//         </Button>
//       </div>

//       {submitStatus && (
//         <div className="py-2 flex justify-center">
//           <span className={`text-sm ${submitStatus === 'Team added successfully' ? 'text-green-500' : 'text-red-500'}`}>
//             {submitStatus}
//           </span>
//         </div>
//       )}
//     </form>
//   );
// };

// export default AddTeamForm;

// "use client"
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from "@/components/ui/button";
// import { AddTeamValidator, TAddTeamValidator } from '@/lib/validators/account/add-team.validation';

// const AddTeamForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<TAddTeamValidator>({
//     resolver: zodResolver(AddTeamValidator),
//   });

//   const [submitStatus, setSubmitStatus] = useState<string | null>(null);

//   const onSubmit = (data: TAddTeamValidator) => {
//     // Simulate a network request
//     setTimeout(() => {
//       console.log(data);
//       setSubmitStatus('Team added successfully');
//     }, 1000); // Simulates a 1 second network delay
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="py-2 flex items-center w-full">
//           <Label className="mr-6 whitespace-nowrap">Team Name</Label>
//           <Input
//             {...register('teamName')}
//             className="w-full border rounded-md"
//             placeholder="Enter Your Team Name"
//           />
//         </div>
//         {errors.teamName && <span className="text-red-500">{errors.teamName.message}</span>}

//         <div className="py-2 flex items-center w-full">
//           <Label className="mr-6">Description</Label>
//           <Textarea
//             {...register('description')}
//             className="w-full border rounded-md"
//             placeholder="Description"
//           />
//         </div>
//         {errors.description && <span className="text-red-500">{errors.description.message}</span>}

//         <div className="py-2 flex justify-center">
//           <Button
//             className="w-auto px-4 py-2 text-sm border rounded-sm"
//             type="submit"
//           >
//             Add Team
//           </Button>
//         </div>
//       </form>

//       {submitStatus && (
//         <div className="py-2 flex justify-center">
//           <span className={`text-sm ${submitStatus === 'Team added successfully' ? 'text-green-500' : 'text-red-500'}`}>
//             {submitStatus}
//           </span>
//         </div>
//       )}
//     </>
//   );
// };

// export default AddTeamForm;

// "use client"
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from "@/components/ui/button";
// import { AddTeamValidator, TAddTeamValidator } from '@/lib/validators/account/add-team.validation';

// const AddTeamForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<TAddTeamValidator>({
//     resolver: zodResolver(AddTeamValidator),
//   });

//   const [submitStatus, setSubmitStatus] = useState<string | null>(null);

//   const onSubmit = (data: TAddTeamValidator) => {
//     // Simulate a network request
//     setTimeout(() => {
//       console.log(data);
//       setSubmitStatus('Team added successfully');
//     }, 1000); // Simulates a 1 second network delay
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="py-2 flex items-center w-full">
//           <Label className="mr-6 whitespace-nowrap">Team Name</Label>
//           <Input
//             {...register('teamName')}
//             className="w-full border rounded-md"
//             placeholder="Enter Your Team Name"
//           />
//         </div>
//         {errors.teamName && <span className="text-red-500">{errors.teamName.message}</span>}

//         <div className="py-2 flex items-center w-full">
//           <Label className="mr-6">Description</Label>
//           <Textarea
//             {...register('description')}
//             className="w-full border rounded-md"
//             placeholder="Description"
//           />
//         </div>
//         {errors.description && <span className="text-red-500">{errors.description.message}</span>}

//         <div className="py-2 flex justify-center">
//           <Button
//             className="w-auto px-4 py-2 text-sm border rounded-sm"
//             type="submit"
//           >
//             Add Team
//           </Button>
//         </div>
//       </form>

//       {submitStatus && (
//         <div className="py-2 flex justify-center">
//           <span className={`text-sm ${submitStatus === 'Team added successfully' ? 'text-green-500' : 'text-red-500'}`}>
//             {submitStatus}
//           </span>
//         </div>
//       )}
//     </>
//   );
// };

// export default AddTeamForm;


// "use client"
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from "@/components/ui/button";
// import { AddTeamValidator, TAddTeamValidator } from '@/lib/validators/account/add-team.validation';

// const AddTeamForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<TAddTeamValidator>({
//     resolver: zodResolver(AddTeamValidator),
//   });

//   const [submitStatus, setSubmitStatus] = useState<string | null>(null);

//   const onSubmit = (data: TAddTeamValidator) => {
//     // Simulate a network request
//     setTimeout(() => {
//       console.log(data);
//       setSubmitStatus('Team added successfully');
//     }, 1000); // Simulates a 1 second network delay
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="py-2 flex flex-col w-full">
//           <div className="flex items-center">
//             <Label className="mr-6 whitespace-nowrap">Team Name</Label>
//             <Input
//               {...register('teamName')}
//               className="w-full border rounded-md"
//               placeholder="Enter Your Team Name"
//             />
//           </div>
//           {errors.teamName && <span className="text-red-500 ml-8">{errors.teamName.message}</span>}
//         </div>

//         <div className="py-2 flex flex-col w-full">
//           <div className="flex items-center">
//             <Label className="mr-6">Description</Label>
//             <Textarea
//               {...register('description')}
//               className="w-full border rounded-md"
//               placeholder="Description"
//             />
//           </div>
//           {errors.description && <span className="text-red-500 ml-8">{errors.description.message}</span>}
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

//       {submitStatus && (
//         <div className="py-2 flex justify-center">
//           <span className={`text-sm ${submitStatus === 'Team added successfully' ? 'text-green-500' : 'text-red-500'}`}>
//             {submitStatus}
//           </span>
//         </div>
//       )}
//     </>
//   );
// };

// export default AddTeamForm;



// "use client"
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from "@/components/ui/button";
// import { AddTeamValidator, TAddTeamValidator } from '@/lib/validators/account/add-team.validation';

// const AddTeamForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<TAddTeamValidator>({
//     resolver: zodResolver(AddTeamValidator),
//   });

//   const [submitStatus, setSubmitStatus] = useState<string | null>(null);

//   const onSubmit = (data: TAddTeamValidator) => {
//     // Simulate a network request
//     setTimeout(() => {
//       console.log(data);
//       setSubmitStatus('Team added successfully');
//     }, 1000); // Simulates a 1 second network delay
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto">
//         <div className="py-2">
//           <Label className="block mb-2">Team Name</Label>
//           <Input
//             {...register('teamName')}
//             className="w-full border rounded-md"
//             placeholder="Enter Your Team Name"
//           />
//           {errors.teamName && <span className="text-red-500 mt-1 block">{errors.teamName.message}</span>}
//         </div>

//         <div className="py-2">
//           <Label className="block mb-2">Description</Label>
//           <Textarea
//             {...register('description')}
//             className="w-full border rounded-md"
//             placeholder="Description"
//           />
//           {errors.description && <span className="text-red-500 mt-1 block">{errors.description.message}</span>}
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

//       {submitStatus && (
//         <div className="py-2 flex justify-center">
//           <span className={`text-sm ${submitStatus === 'Team added successfully' ? 'text-green-500' : 'text-red-500'}`}>
//             {submitStatus}
//           </span>
//         </div>
//       )}
//     </>
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

const AddTeamForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TAddTeamValidator>({
    resolver: zodResolver(AddTeamValidator),
  });

  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const onSubmit = (data: TAddTeamValidator) => {
    // Simulate a network request
    setTimeout(() => {
      console.log(data);
      setSubmitStatus('Team added successfully');
    }, 1000); // Simulates a 1 second network delay
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="text-center mb-6">
      <FormHeading headingText="Create Your Team" />
      <FormDescription descriptionText="Build your team to manage projects efficiently." />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-2">
          <Label className="block mb-2">Team Name</Label>
          <Input
            {...register('teamName')}
            className="w-full border rounded-md"
            placeholder="Enter Your Team Name"
          />
          {errors.teamName && <span className="text-red-500 mt-1 block">{errors.teamName.message}</span>}
        </div>

        <div className="py-2">
          <Label className="block mb-2">Description</Label>
          <Textarea
            {...register('description')}
            className="w-full border rounded-md"
            placeholder="Description"
          />
          {errors.description && <span className="text-red-500 mt-1 block">{errors.description.message}</span>}
        </div>

        <div className="py-2 flex justify-center">
          <Button
            className="w-auto px-4 py-2 text-sm border rounded-sm"
            type="submit"
          >
            Add Team
          </Button>
        </div>
      </form>

      {submitStatus && (
        <div className="py-2 flex justify-center">
          <span className={`text-sm ${submitStatus === 'Team added successfully' ? 'text-green-500' : 'text-red-500'}`}>
            {submitStatus}
          </span>
        </div>
      )}
    </div>
  );
};

export default AddTeamForm;
