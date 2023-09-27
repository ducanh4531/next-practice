import { sort } from "fast-sort";
import Link from "next/link";

export interface User {
	id: number;
	name: string;
	email: string;
}

interface UserTableProps {
	sortOrder: string;
}

const UserTable = async ({ sortOrder }: UserTableProps) => {
	// * whenever use the fetch, next.js will automatically store the result
	// * in its data cache which is based on the file system
	// * => next time, we need the same data and hit the same url,
	// * next.js is not going to go to jsonplaceholder
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		// const res = await fetch("http://localhost:3000/api/users", {
		// * HOW CACHING WORKS IN NEXT.JS AND THIS CACHING BEHAVIOR IS ONLY
		// * IMPLEMENTED IN THE FETCH FUNC
		// * CAN'T GET THE DATA CACHE IN ANY THIRD PARTY LIBRARIES LIKE AXIOS
		// * WHENEVER WE USE FETCH FUNC, NEXT.JS WILL CACHE THE DATA
		// * IT TREATS THE DATA AS STATIC || UNCHANGING DATA

		// * disable caching => useful if have data that changes frequently
		// * and always want to show fresh data to users
		cache: "no-store",

		// * to keep data fresh for a certain period of time
		// * next.js is going to run a background job and get fresh data from
		// * the backend every 10 sec
		// next: { revalidate: 10 },
	});
	const users: User[] = await res.json();

	const sortedUsers: User[] = sort(users).asc((user) => {
		return sortOrder === "email" ? user.email : user.name;
	});

	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th>
							<Link href="/users?sortOrder=name">Name</Link>
						</th>
						<th>
							<Link href="/users?sortOrder=email">Email</Link>
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedUsers.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default UserTable;
