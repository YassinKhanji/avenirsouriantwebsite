import type { Metadata, Viewport } from "next";
import { Raleway, Fredoka } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from '@/contexts/TransitionContext';
import Script from 'next/script';
import { ContactPopup } from '@/components/ContactPopup';

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1abc9c",
};

export const metadata: Metadata = {
  title: "Avenir Souriant | Arabic Learning Center in Montreal",
  description: "Avenir Souriant is a premier Arabic learning center in Montreal offering interactive Arabic courses, robotics, sports, and creative activities for children. Build confidence in Arabic speakers with innovative, engaging programs.",
  keywords: ["Arabic learning", "Arabic courses", "Montreal", "children education", "language learning", "robotics", "STEM", "Arabic for non-speakers", "Saint-Laurent"],
  robots: "index, follow",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Avenir Souriant",
    "description": "Premier Arabic learning center in Montreal offering interactive courses and enriching activities like STEM, soccer, and creative arts.",
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
      "https://www.facebook.com/profile.php?id=61573071398618",
      "https://www.linkedin.com/company/avenir-souriant/",
      "https://www.instagram.com/avenir.souriant/"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Avenir_Souriant_Logo_2-removebg-preview.png" type="image/png" />
        <link rel="shortcut icon" href="/images/Avenir_Souriant_Logo_2-removebg-preview.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/Avenir_Souriant_Logo_2-removebg-preview.png" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        {/* Google Translate website widget init script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.googleTranslateElementInit = function() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,fr,ar',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              };
            `
          }}
        />
      </head>
      <body className={`${raleway.variable} ${fredoka.variable} font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col`}>
        {/* Hidden element for Google Translate load target */}
        <div id="google_translate_element" style={{ display: 'none' }} />
        
        <TransitionProvider>
          {children}
        </TransitionProvider>

        <ContactPopup />

        {/* Load Google Translate Script after page interactive */}
        <Script 
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
