import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'

console.log('test')
export default  NextAuth({

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({session, token}) {
            session.user.id = token.id
            return session
        },
    }
})

