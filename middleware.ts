// PROTECT ROUTES

// the shorter way to import and export in one go
export { default } from "next-auth/middleware";
// export default middleware;

// this middleware func gets executed if we go to the path which
// matches the path string in matcher of config
// export function middleware(request: NextRequest) {
// 	return NextResponse.redirect(new URL("/new-page", request.url));
// }

export const config = {
	// Could modify the params using
	// one of three characters:
	// `*: zero or more params`
	// `+: one or more params`
	// `?: zero or one params`
	matcher: ["/dashboard/:path*"],
	// matcher: ["/users/:id*"],

	// in a real app, we typically have a path like ['/dashboard/:path*']
	// to secure all the routes that start with /dashboard
};
