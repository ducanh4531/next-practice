import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
	subsets: ["latin"], // setting subsets for reducing the char that we need
	weight: ["400", "500"], // specify the thickness of the font that we need
});

// * custom font
const poppins = localFont({
	src: "../public/fonts/poppins-regular-webfont.woff2",
	variable: "--font-poppins",
});

// every page will have these metatags
export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
	// * this property is used when we share pages on social media platforms
	// openGraph: {
	// 	title: "Create Next App",
	// 	description: "Generated by create next app",
	// },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="winter">
			<GoogleAnalyticsScript />
			<body className={poppins.variable}>
				<AuthProvider>
					<NavBar />
					<main className="p-5">{children}</main>
				</AuthProvider>
			</body>
		</html>
	);
}
