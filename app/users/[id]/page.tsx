import { notFound } from "next/navigation";

interface UserDetailPageProps {
	params: { id: number };
}

// * THIS APPROACH TO ADD A ROUTE WITH A PARAMETER ONLY WORKS IN PAGES
// * CAN'T ADD THIS PROPS TO COMPONENTS THAT IS USED IN THIS PAGE
// * CAN ONLY PASS IT AS PROPS TO COMPONENTS IF THEY NEED TO KNOW USER IDS
const UserDetailPage = ({ params: { id } }: UserDetailPageProps) => {
	if (id > 10) notFound();

	return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
