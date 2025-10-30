import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rexha Barbers | Dudley Barbershop",
  description:
    "Rexha Barbers on Dudley High Street offers skin fades, beard trims, shaves and grooming services seven days a week."
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body bg-black text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
