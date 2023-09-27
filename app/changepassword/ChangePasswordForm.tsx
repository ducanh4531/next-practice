import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../components/Input";
import InputSpacer from "../components/InputSpacer";

const FormError = ({ errorMessage }: { errorMessage: string }) => {
	return <p className="mb-2 block text-sm text-red-500">{errorMessage}</p>;
};

const schema = z
	.object({
		password: z.string().min(5),
		newPassword: z.string().min(5),
		confirmNewPassword: z.string().min(5),
	})
	.superRefine(({ password, newPassword, confirmNewPassword }, ctx) => {
		if (password === newPassword) {
			ctx.addIssue({
				code: "custom",
				message:
					"The new password you entered is the same as the old password",
				path: ["newPassword"],
			});
		}

		if (newPassword !== confirmNewPassword) {
			ctx.addIssue({
				code: "custom",
				message: "The passwords did not match",
				path: ["confirmNewPassword"],
			});
		}
	});

type FormData = z.infer<typeof schema>;

type ChangePasswordFormProps = {
	onSubmit: any;
};

const ChangePasswordForm = ({ onSubmit }: ChangePasswordFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					placeholder="Name"
					register={register}
					id="name"
					type="text"
					autoComplete="email"
					className="hidden"
				/>
				<InputSpacer>
					<Input
						placeholder="Current Password"
						register={register}
						id="password"
						type="password"
						autoComplete="password"
					/>
					{errors.password && (
						<FormError errorMessage={errors.password.message!} />
					)}
				</InputSpacer>
				<InputSpacer>
					<Input
						placeholder="New Password"
						register={register}
						id="newPassword"
						type="password"
						autoComplete="new-password"
					/>
					{errors.newPassword && (
						<FormError errorMessage={errors.newPassword.message!} />
					)}
				</InputSpacer>
				<InputSpacer>
					<Input
						placeholder="Confirm New Password"
						register={register}
						id="confirmNewPassword"
						type="password"
						autoComplete="new-password"
					/>
					{errors.confirmNewPassword && (
						<FormError
							errorMessage={errors.confirmNewPassword.message!}
						/>
					)}
				</InputSpacer>

				<button
					className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
					type="submit"
				>
					<span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
						Update
					</span>
				</button>
			</form>
		</>
	);
};

export default ChangePasswordForm;
