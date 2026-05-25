import type { Metadata } from "next";
import { Open_Sans, Montserrat, Fredoka } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avenir Souriant Babysitting",
  description: "Quickly find a Babysitter. Every baby with love & safety.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${montserrat.variable} ${fredoka.variable} font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
