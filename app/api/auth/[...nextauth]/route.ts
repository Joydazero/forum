import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23li5uNXLrPheexQMs',
            clientSecret: 'ade60df4ef33220db508a3ef3a57e18c1f8ff458'
        })
    ],
    secret: 'maga1234'
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
