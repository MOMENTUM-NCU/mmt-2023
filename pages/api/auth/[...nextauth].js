import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import DB from "@db";
// import campuspage from "@/campus/campusPage"
import checkLogin from 'pages/redirectCA';
import redirectCA from "pages/redirectCA";



const loginWithEmail = CredentialsProvider({
  name: "Email",
  credentials: {
    username: { label: "Email", type: "text", placeholder: "user@example.com" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials, req) {
    const user = {
      id: 1,
      name: credentials.username,
      email: credentials.username,
    };
    if (user) {
      return user;
    } else {
      return null;
    }
  },
});

//console.log(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
const loginWithGoogle = GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});

// function redirectToCa() {
//   window.location.href = '/campus/campusPage';
// }

// Usage in JSX/HTML:
const providers = [loginWithEmail, loginWithGoogle];
const callbacks = {
  async signIn({ user, account, profile, email, credentials }) {
    return true;
  },
  async redirect({ url, baseUrl }) {
    // if(checkLogin===1){
    //   url = '/campus/campusPage';
    //   return url;
    // }
    // else if(checkLogin===0){
    //   return url;
    // }
    //console.log('this is the checkLogin', checkLogin);
    return url;
  },
  async session({ session, user, token }) {
    return session;
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    if (!("userId" in token)) {
      const user = await DB.getUserOrCreateUser(token.email, token.name);
      token.userId = user.id;
      token.role = user.role;
    }
    return token;
  },
};
const pages = {
  signIn: "/auth/signin",
};
const option = {
  providers,
  callbacks,
  pages,
  secret: process.env.JWT_SECRET,
};
export default NextAuth(option);
