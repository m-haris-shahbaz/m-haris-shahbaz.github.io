import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import NavBar from "./components/navbar";
import BottomNav from "./components/bottombar";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Muhammad Haris Shahbaz - Web Developer',
  description: 'Portfolio of Muhammad Haris Shahbaz, a Fullstack Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body suppressHydrationWarning>
        <Providers>
          <div>
            {children}
          </div>
          <BottomNav />
        </Providers>
      </body>
    </html>
  )
}
