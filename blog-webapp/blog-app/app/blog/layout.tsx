import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Blogs by Ayush',
    description: 'Developed using NextJs and ReactJs',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}
