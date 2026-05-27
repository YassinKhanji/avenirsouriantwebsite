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
  title: "Avenir Souriant | Arabic Learning Center in Montreal",
  description: "Avenir Souriant is a premier Arabic learning center in Montreal offering interactive Arabic courses, robotics, sports, and creative activities for children. Build confidence in Arabic speakers with innovative, engaging programs.",
  keywords: ["Arabic learning", "Arabic courses", "Montreal", "children education", "language learning", "robotics", "STEM", "Arabic for non-speakers"],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Avenir Souriant | Arabic Learning Center",
    description: "Premier learning center for Arabic courses and enriching activities. Build confident Arabic speakers through innovative, interactive programs.",
    url: "https://avenirsouriant.com",
    type: "website",
    images: [
      {
        url: "https://avenirsouriant.com/images/Avenir_Souriant_Logo_2-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Avenir Souriant Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avenir Souriant | Arabic Learning Center",
    description: "Premier Arabic learning center in Montreal with interactive programs for all ages.",
    images: ["https://avenirsouriant.com/images/Avenir_Souriant_Logo_2-removebg-preview.png"],
  },
  alternates: {
    canonical: "https://avenirsouriant.com",
  },
};

import { TransitionProvider } from '@/contexts/TransitionContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Avenir_Souriant_Logo_2-removebg-preview.png" type="image/png" />
        <link rel="shortcut icon" href="/images/Avenir_Souriant_Logo_2-removebg-preview.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/Avenir_Souriant_Logo_2-removebg-preview.png" />
        <meta name="theme-color" content="#1abc9c" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Avenir Souriant",
            "description": "Premier Arabic learning center in Montreal offering interactive courses and enriching activities",
            "url": "https://avenirsouriant.com",
            "telephone": "+15145815305",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1325 Rue Cartier",
              "addressLocality": "Saint-Laurent",
              "addressRegion": "QC",
              "postalCode": "H4L 2N6",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "45.52291242952877",
              "longitude": "-73.68453472314545"
            },
            "image": "https://avenirsouriant.com/images/Avenir_Souriant_Logo_2-removebg-preview.png",
            "sameAs": [
              "https://www.facebook.com/avenirsouriant",
              "https://www.instagram.com/avenirsouriant"
            ],
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          })}
        </script>
      </head>
      <body className={`${raleway.variable} ${fredoka.variable} font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col`}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
