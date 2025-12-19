import { Bot, Baby, BookOpen, Sparkles, GraduationCap, Users } from "lucide-react";

export type ProgramCategory = "language" | "activity";

export type ProgramBase = {
  id: number;
  title: string;
  description: string;
  icon: any;
  ageGroup: string;
  duration: string;
  category: ProgramCategory;
  gradient: string;
};

export type Course = ProgramBase & {
  fullDescription: string;
  highlights: string[];
};

export type Activity = ProgramBase & {
  fullDescription: string;
  highlights: string[];
};

export function getCourses(t: (key: string) => string): Course[] {
  return [
    {
      id: 1,
      title: t("courses.1.title"),
      description: t("courses.1.desc"),
      icon: Bot,
      ageGroup: "All Ages",
      duration: "12 weeks",
      category: "language",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      fullDescription: t("courses.1.full"),
      highlights: [
        t("courses.1.h1"),
        t("courses.1.h2"),
        t("courses.1.h3"),
        t("courses.1.h4"),
        t("courses.1.h5"),
        t("courses.1.h6"),
      ],
    },
    {
      id: 2,
      title: t("courses.2.title"),
      description: t("courses.2.desc"),
      icon: Baby,
      ageGroup: "5-10 years",
      duration: "8 weeks",
      category: "language",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
      fullDescription: t("courses.2.full"),
      highlights: [
        t("courses.2.h1"),
        t("courses.2.h2"),
        t("courses.2.h3"),
        t("courses.2.h4"),
        t("courses.2.h5"),
        t("courses.2.h6"),
      ],
    },
    {
      id: 3,
      title: t("courses.3.title"),
      description: t("courses.3.desc"),
      icon: BookOpen,
      ageGroup: "Adults",
      duration: "16 weeks",
      category: "language",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
      fullDescription: t("courses.3.full"),
      highlights: [
        t("courses.3.h1"),
        t("courses.3.h2"),
        t("courses.3.h3"),
        t("courses.3.h4"),
        t("courses.3.h5"),
        t("courses.3.h6"),
      ],
    },
    {
      id: 4,
      title: t("courses.4.title"),
      description: t("courses.4.desc"),
      icon: Sparkles,
      ageGroup: "Teens & Adults",
      duration: "10 weeks",
      category: "language",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500",
      fullDescription: t("courses.4.full"),
      highlights: [
        t("courses.4.h1"),
        t("courses.4.h2"),
        t("courses.4.h3"),
        t("courses.4.h4"),
        t("courses.4.h5"),
        t("courses.4.h6"),
      ],
    },
    {
      id: 5,
      title: t("courses.5.title"),
      description: t("courses.5.desc"),
      icon: GraduationCap,
      ageGroup: "11-17 years",
      duration: "12 weeks",
      category: "language",
      gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
      fullDescription: t("courses.5.full"),
      highlights: [
        t("courses.5.h1"),
        t("courses.5.h2"),
        t("courses.5.h3"),
        t("courses.5.h4"),
        t("courses.5.h5"),
        t("courses.5.h6"),
      ],
    },
    {
      id: 6,
      title: t("courses.6.title"),
      description: t("courses.6.desc"),
      icon: Users,
      ageGroup: "Adults",
      duration: "14 weeks",
      category: "language",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
      fullDescription: t("courses.6.full"),
      highlights: [
        t("courses.6.h1"),
        t("courses.6.h2"),
        t("courses.6.h3"),
        t("courses.6.h4"),
        t("courses.6.h5"),
        t("courses.6.h6"),
      ],
    },
  ];
}

export function getActivities(t: (key: string) => string): Activity[] {
  return [
    {
      id: 7,
      title: t("activities.7.title"),
      description: t("activities.7.desc"),
      icon: Users,
      ageGroup: "6-16 years",
      duration: "Ongoing",
      category: "activity",
      gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
      fullDescription: t("activities.7.full"),
      highlights: [
        t("activities.7.h1"),
        t("activities.7.h2"),
        t("activities.7.h3"),
        t("activities.7.h4"),
        t("activities.7.h5"),
        t("activities.7.h6"),
        t("activities.7.h7"),
        t("activities.7.h8"),
      ],
    },
    {
      id: 8,
      title: t("activities.8.title"),
      description: t("activities.8.desc"),
      icon: Bot,
      ageGroup: "8-15 years",
      duration: "10 weeks",
      category: "activity",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
      fullDescription: t("activities.8.full"),
      highlights: [
        t("activities.8.h1"),
        t("activities.8.h2"),
        t("activities.8.h3"),
        t("activities.8.h4"),
        t("activities.8.h5"),
        t("activities.8.h6"),
        t("activities.8.h7"),
        t("activities.8.h8"),
      ],
    },
  ];
}
