"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { ForgotPasswordValidator, TForgotPasswordValidator } from "@/lib/validators/account/forgot-password.validator";
import { IForgotPasswordFormValues } from "@/types/forgot-password";

interface Props {
	isSubmitting: boolean;
	statusMessage?: string;
	statusType?: "success" | "error";
	onFormSubmit: (formData: IForgotPasswordFormValues) => void;
}

export const ForgotPasswordForm: React.FC<Props> = ({ isSubmitting, statusMessage, statusType, onFormSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<TForgotPasswordValidator>({
		resolver: zodResolver(ForgotPasswordValidator),
		mode: "onChange",
	});

	return (
		<form onSubmit={handleSubmit(onFormSubmit)}>
			<div className="py-2">
				<Input
					className="w-full border rounded-md"
					placeholder="Enter your email"
					{...register("email")}
					disabled={isSubmitting}
				/>
				{errors.email && (
					<p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
				)}
			</div>

			<div className="py-2">
				<Button
					className="w-full border rounded-md"
					disabled={!isValid || isSubmitting}
					type="submit"
				>
					{isSubmitting ? "Submitting..." : "Send Reset Link"}
				</Button>
			</div>

			{statusMessage && (
				<div
					className={`py-2 text-center ${
						statusType === "success"
							? "text-green-600 bg-green-50"
							: statusType === "error"
							? "text-red-600 bg-red-50"
							: ""
					}`}
				>
					{statusMessage}
				</div>
			)}

			<div className="py-2 text-center">
				<Link href="/sign-in" className="text-blue-600 hover:underline">
					Back to Login
				</Link>
			</div>
		</form>
	);
};
