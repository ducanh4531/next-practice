"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
	// accessing sessions on the client
	const { data: session, status } = useSession();

	return (
		<div className="flex bg-slate-200 p-5 space-x-3">
			<Link className="mr-5" href="/">
				Next.js
			</Link>
			<Link className="mr-5" href="/admin">
				Admin
			</Link>
			<Link className="mr-5" href="/users">
				Users
			</Link>
			<Link className="mr-5" href="/products">
				Products
			</Link>
			{status === "loading" && <div>Loading...</div>}
			{status === "authenticated" && (
				<div>
					{session?.user?.name}
					<Link className="mr-5" href="/changepassword">
						Change Password
					</Link>
					<Link className="mr-5" href="/api/auth/signout">
						Sign Out
					</Link>
				</div>
			)}
			{status === "unauthenticated" && (
				<div>
					<Link className="mr-5" href="/api/auth/signin">
						Login
					</Link>
					<Link className="mr-5" href="/register">
						Register
					</Link>
				</div>
			)}
		</div>
	);
};

export default NavBar;
