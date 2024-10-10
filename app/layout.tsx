import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from 'next/font/google';
import NavBar from "./components/navbar";
import BottomNav from "./components/bottombar";

const raleway = Raleway({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "Muhammad Haris Shahbaz",
  description: "A skilled web developer with expertise in building responsive, user-friendly applications using React, Next.js, TypeScript, and more. Passionate about creating efficient and scalable web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased max-w-screen-lg mx-auto p-4`}
      >
        <NavBar />
        <div className="py-5 mb-10">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
