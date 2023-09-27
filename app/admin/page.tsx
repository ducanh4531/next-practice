import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/authOptions";

const AdminHomePage = async () => {
	// accessing sessions on the server
	// this getServerSession func can use in page and route
	const session = await getServerSession(authOptions);

	return (
		<div>
			<h1>Hello {session && <span>{session.user!.name}</span>}</h1>
			Admin HomePage
		</div>
	);
};

export default AdminHomePage;
