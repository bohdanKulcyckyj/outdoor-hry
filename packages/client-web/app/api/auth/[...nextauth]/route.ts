import { BASE_API_URL } from "@/constants/routes";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const res = await fetch(`${BASE_API_URL}/auth/signin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    // @ts-ignore
    async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.email = user.email;
          token.role = user.role;
          token.accessToken = user.token;
        }
        console.log(user)
        return token;
      },
      // @ts-ignore
      async session({ session, token }) {
        if (token) {
          session.user.id = token.id;
          session.user.email = token.email;
          session.user.role = token.role;
          session.accessToken = token.accessToken;
        }
        console.log(session)
        return session;
      }
    },
    pages: {
        signIn: '/'
      },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
