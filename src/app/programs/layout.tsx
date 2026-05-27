import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs | Avenir Souriant",
  description: "Explore our comprehensive Arabic learning programs including Arabic mastery, STEM & robotics, sports, and creative arts activities for children in Montreal.",
  keywords: ["Arabic programs", "robotics", "sports programs", "creative arts", "STEM education"],
  openGraph: {
    title: "Our Programs | Avenir Souriant",
    description: "Comprehensive programs for Arabic learning, robotics, sports, and creative activities",
    type: "website",
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
