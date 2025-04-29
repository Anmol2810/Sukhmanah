import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections/Header";
import { twMerge } from "tailwind-merge";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "sukhmanah",
  description: "landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(roboto.className, "antialiased bg-[#F6F4FB]")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
