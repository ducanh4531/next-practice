import NextAuth from "next-auth";
import { authOptions } from "../authOptions";

// when user logs in, NextAuth creates an authentication session
// for that user
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
