import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="min-h-20 flex justify-center items-center">
          <p>Header</p>
        </header>
        {children}
        <footer className="min-h-20 flex justify-center items-center">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
