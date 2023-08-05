import {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { GoogleProfile } from 'next-auth/providers/google'

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider ({
            profile(profile: GoogleProfile){
                console.log(profile)
            },
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        })
    ],
    pages: {
        error: '/dashboard/login'
    }
}