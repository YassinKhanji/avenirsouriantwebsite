import type { Metadata } from "next";
import { Fredoka, Raleway } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
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
      <body className={`${fredoka.variable} ${raleway.variable} font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
