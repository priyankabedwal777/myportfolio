import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "This is My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {children}
        </body>
    </html>
  );
}
