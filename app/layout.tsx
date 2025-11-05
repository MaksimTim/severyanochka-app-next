import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/header/Header";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Северяночка",
  description: "Покупка и доставка продуктов питания",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} font-sans`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
