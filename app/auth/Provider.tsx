"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type ProviderProps = {
	children: ReactNode;
};

const AuthProvider = ({ children }: ProviderProps) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
