import {
	Body,
	Container,
	Html,
	Link,
	Preview,
	Tailwind,
	Text,
} from "@react-email/components";
import { CSSProperties } from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<Html>
			<Tailwind>
				<Preview>Welcome aboard!</Preview>
				<Body className="bg-white">
					<Container>
						<Text className="font-bold text-3xl">
							Hello {name}!
						</Text>
						<Link href="https://portfolio-ducanhle.vercel.app/">
							www.portfolio-ducanhle.vercel.app
						</Link>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

// first way to style emails
const heading: CSSProperties = {
	fontSize: "32px",
};

export default WelcomeTemplate;
