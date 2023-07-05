import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({
  weight: ['400', '500', '600', '700'],
  style: ["normal" , "italic"],
  subsets: ['latin'],
  display: 'swap'
})


export const metadata = {
  title: 'Ayush Prakash',
  description: "Portfolio website AP",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Navbar />
        <div className='container'>
        {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
