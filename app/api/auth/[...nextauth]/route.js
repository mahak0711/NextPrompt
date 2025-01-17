
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/db";
import User from "@/models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        // Connect to the database
        await connectToDB();

        // Find the user in the database
        const sessionUser = await User.findOne({ email: session.user.email });

        // Attach the user's ID to the session object
        session.user.id = sessionUser?._id.toString();

        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
    async signIn({ profile }) {
      try {
        // Connect to the database
        await connectToDB();

        // Check if the user already exists
        const userExists = await User.findOne({ email: profile.email });

        // If the user does not exist, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.split(" ").join("").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
