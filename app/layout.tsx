import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rexha Barbers | Grooming Studio",
  description:
    "Rexha Barbers is a modern grooming studio offering precision haircuts, hot towel shaves, and beard styling in a refined lounge atmosphere."
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
