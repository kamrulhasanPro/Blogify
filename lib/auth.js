import { axiosPublic } from "@/hook/axiosPublic";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    // email & password
    Credentials({
      name: "credentials",
      async authorize(credentials) {
        const res = await axiosPublic.post("/login", {
          email: credentials.email,
          password: credentials.password,
        });

        const user = res.data;
        if (user.error) return null;
        return user;
      },
    }),

    // Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};
