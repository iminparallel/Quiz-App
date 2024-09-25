import NextAuth from "next-auth";
//import { options } from "./options";
import { authOptions } from "@/lib/next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
