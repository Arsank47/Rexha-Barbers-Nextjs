import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });

export const metadata: Metadata = {
  title: "Rexha Barbers Dudley | Red & Black Grooming",
  description:
    "Rexha Barbers in Dudley delivers sharp fades, beard detailing, and relaxing treatments seven days a week. Walk-ins welcome at 83 High Street."
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="font-body bg-charcoal text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
