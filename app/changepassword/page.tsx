"use client";
import { Prisma } from "@prisma/client";
import { useSession } from "next-auth/react";
import { BaseSyntheticEvent } from "react";
import { FieldValues } from "react-hook-form";
import ChangePasswordForm from "./ChangePasswordForm";

async function updatePassword(user: Prisma.UserUpdateInput) {
	const res = await fetch("/api/register", {
		method: "PUT",
		body: JSON.stringify(user),
	});

	if (!res.ok) {
		throw new Error(res.statusText);
	}

	return await res.json();
}
const ChangePasswordPage = () => {
	const { data: session } = useSession();

	return (
		<>
			<h1>Change Password</h1>
			<ChangePasswordForm
				onSubmit={async (
					data: FieldValues,
					e: BaseSyntheticEvent<object, any, any> | undefined
				) => {
					try {
						const user = { ...data, email: session?.user?.email! };
						await updatePassword(user);
						e?.target.reset();
					} catch (err) {
						console.log(err);
					}
				}}
			/>
		</>
	);
};

export default ChangePasswordPage;
