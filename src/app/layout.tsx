import type { Metadata } from "next";
import { Raleway, Fredoka } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avenir Souriant | Arabic Learning Center",
  description: "Avenir Souriant is the Arabic learning center that flipped the script. Building the next generation of confident Arabic speakers.",
};

import { TransitionProvider } from '@/contexts/TransitionContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${fredoka.variable} font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col`}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
