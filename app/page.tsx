"use client";
// import cartoon from "@/public/images/cartoon.jpeg";
// * LAZY LOADING TECHNIQUE: only use dynamic function for large heavy component
// import dynamic from "next/dynamic";

// LAZY LOAD CLIENT COMPONENTS
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
// 	loading: () => <p>Loading...</p>,
// 	// * when importing client components, by default, they're pre-rendered on the server
// 	// * it probably causes issues because if access certain browser api on the server
// 	// * perhaps they are not available and might end up getting errors
// 	// * => disable this by disable pre-rendering on the server - setting ssr to false
// 	ssr: false,
// });

export default function Home() {
	// const [isVisible, setVisible] = useState(false);

	// const handleClick = async () => {
	// 	// setVisible(!isVisible)
	// 	const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

	// 	// * LAZY LOAD EXTERNAL JS LIBRARIES
	// 	const _ = (await import("lodash")).default;

	// 	const sorted = _.orderBy(users, ["name"]);
	// 	console.log(sorted);
	// };

	return (
		// * setting 100% height of the viewport to parent element is good for background image
		// * if the imgs in the cards, should set certain height based on the cards
		<main className="relative h-screen">
			<button
				onClick={async () => {
					// setVisible(!isVisible)
					const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

					// * LAZY LOAD EXTERNAL JS LIBRARIES
					const _ = (await import("lodash")).default;

					const sorted = _.orderBy(users, ["name"]);
					console.log(sorted);
				}}
			>
				Show
			</button>
			{/* {isVisible && <HeavyComponent />} */}
			{/* <Image src={cartoon} alt="Cartoon" /> */}

			{/* using inline style for remote imgs (most of the time, using remote imgs
				that are stored in cloud) */}
			{/* need to specify width and height since next.js doesn't know the exact size of remote imgs */}
			{/* <Image
				src="https://bit.ly/react-cover"
				alt="React cover course"
				// * render at the same size on all device sizes if we set fixed width and height
				// width={300}
				// height={150}

				// * would like to show responsive imgs, should set fill
				fill
				// * when using fill, we usually use sizes props as well
				// * this determines how much of the width of the viewport the img is going to take
				// * standard breakpoint for mobile devices: 480px
				// * standard breakpoint for tablet devices: 768px
				// * standard breakpoint for desktop devices: 1200px
				sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
				// * set objectFit to cover or contain to solve aspect ratio issue
				// style={{ objectFit: "cover" }}
				className="object-cover"
				quality={100}
				// * by default, this img component uses lazy loading
				priority
			/> */}
		</main>
	);
}

// * overwrite values from metadata defined in root layout
// export const metadata: Metadata = {
// 	title: "...",
// 	description: "...",
// };

// * some pages have route/query string param
// * => need to generate the metadata dynamically
// * eg: a page for showing a product, the metadata
// * will be dependent on that product
// export async function generateMetadata(): Promise<Metadata> {
// 	// * or if using Prisma, could get product from database
// 	// const product = await fetch("");

// 	return {
// 		title: "product.title",
// 		description: "product.description",
// 	};
// }
