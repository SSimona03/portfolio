import './globals.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import About from "./About/page"
import { Source_Code_Pro } from 'next/font/google'
import Projects from "./Projects/page"
import { Analytics } from '@vercel/analytics/react';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Simona ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <Analytics />
      <body className= {`${sourceCodePro.className}`}>
      <Navbar />
      {children}
      <About />
      <Projects />
      <Footer />
      </body>
    </html>
  )
}
