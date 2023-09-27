import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import schema from "../api/register/schema";
import Input from "../components/Input";
import InputSpacer from "../components/InputSpacer";

const FormError = ({ errorMessage }: { errorMessage: string }) => {
	return <p className="mb-2 block text-sm text-red-500">{errorMessage}</p>;
};

type FormData = z.infer<typeof schema>;

type RegisterUserFormProps = {
	onSubmit: any;
};

const RegisterUserForm = ({ onSubmit }: RegisterUserFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputSpacer>
					<Input
						placeholder="Name"
						register={register}
						id="name"
						type="text"
					/>
				</InputSpacer>
				<InputSpacer>
					<Input
						placeholder="Email"
						register={register}
						id="email"
						type="email"
					/>
					{errors.email && (
						<FormError errorMessage={errors.email.message!} />
					)}
				</InputSpacer>
				<InputSpacer>
					<Input
						placeholder="Password"
						register={register}
						id="password"
						type="password"
						autoComplete="password"
					/>
					{errors.password && (
						<FormError errorMessage={errors.password.message!} />
					)}
				</InputSpacer>

				<button
					className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
					type="submit"
				>
					<span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
						Register
					</span>
				</button>
			</form>
		</>
	);
};

export default RegisterUserForm;
