import Link from "next/link";
import { Suspense } from "react";
import UserTable from "./UserTable";

interface UserPageProps {
	searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: UserPageProps) => {
	return (
		<>
			<h1>
				Users {`=>`} {sortOrder}
			</h1>
			{/* this data only updated in development env */}
			{/* in production env, this data is not updated anymore */}
			{/* since next.js treats this page as a static page */}
			{/* it decides to render this page statically at build time */}
			{/* <p>{new Date().toLocaleTimeString()}</p> */}

			<Link href="/users/new" className="btn">
				New User
			</Link>
			<Suspense fallback={<p>Loading...</p>}>
				<UserTable sortOrder={sortOrder} />
			</Suspense>
		</>
	);
};

export default UsersPage;
