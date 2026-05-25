import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Avenir Souriant | Empowering the Next Generation",
  description:
    "A specialized playful learning center in Saint-Laurent, QC. Programs for toddlers, preschool, and school-age children.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.variable} min-h-screen flex flex-col font-sans text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
