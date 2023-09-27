"use client";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent } from "react";
import { FieldValues } from "react-hook-form";
import RegisterUserForm from "./RegisterUserForm";

async function registerUser(user: Prisma.UserCreateInput) {
	const res = await fetch("/api/register", {
		method: "POST",
		body: JSON.stringify(user),
	});

	if (!res.ok) {
		throw new Error(res.statusText);
	}

	return await res.json();
}

const RegisterUserPage = () => {
	const router = useRouter();

	return (
		<>
			<h1>Register Account</h1>
			<RegisterUserForm
				onSubmit={async (
					data: FieldValues,
					e: BaseSyntheticEvent<object, any, any> | undefined
				) => {
					try {
						await registerUser(data);
						e?.target.reset();
						router.push("/api/auth/signin");
					} catch (err) {
						console.log(err);
					}
				}}
			/>
		</>
	);
};

export default RegisterUserPage;
