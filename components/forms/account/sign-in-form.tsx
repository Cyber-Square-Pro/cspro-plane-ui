
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SignInValidator, TSignInValidator } from '@/lib/validators/account/signin.validator';
import { IEmailPasswordFormValues } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Spinner } from '@/components/spinner'; // Import Spinner component

interface Props {
  onFormSubmit: (formData: IEmailPasswordFormValues) => void;
}

export const SignInForm: React.FC<Props> = (props) => {
  const { register, handleSubmit, formState: { isValid } } = useForm<TSignInValidator>({
    resolver: zodResolver(SignInValidator),
  });
  const { onFormSubmit } = props;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData: IEmailPasswordFormValues) => {
    setLoading(true); // Start loading spinner when form submission begin
    try 
    {
      await onFormSubmit(formData);
    } 
    finally {
      setLoading(false); // Stop loading spinner when form submission ends
    }
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Enter your email"
          {...register("email")}
        />
      </div>
      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Enter your password"
          type="password"
          {...register("password")}
        />
      </div>
      <div className="py-2">
        <Button
          className="w-full border rounded-md flex items-center justify-center"
          disabled={!isValid || loading}  // Disable button if form is invalid or loading
          type="submit"
        >
          
          <span className="flex items-center space-x-2">
            <span className="flex-grow text-center">
              {loading ? 'Logging in...' : 'Login'} 
            </span>   
            {loading && (
              <Spinner size="small" show={true} className="text-white" /> // Show spinner when loading
            )}
          </span>
        </Button>
      </div>
      <div className="py-2 text-center">
        <span className="bg-slate-50">{`Don't have an account?`}</span>
        <Link href="/sign-up"> Signup</Link>
      </div>
    </form>
  );
};


