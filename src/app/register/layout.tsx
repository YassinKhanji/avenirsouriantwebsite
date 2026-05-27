import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Avenir Souriant",
  description: "Register your child at Avenir Souriant. Join our Arabic learning center in Montreal for interactive programs in Arabic, robotics, sports, and creative arts.",
  keywords: ["register", "enroll", "Arabic classes", "children registration"],
  openGraph: {
    title: "Register | Avenir Souriant",
    description: "Enroll your child in our engaging Arabic learning programs",
    type: "website",
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
