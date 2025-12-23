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
  nextStartDate: string;
  spotsLeft: number;
  curriculum: string[];
  requirements: string[];
};

export type Activity = ProgramBase & {
  fullDescription: string;
  highlights: string[];
  nextStartDate?: string;
  spotsLeft: number;
  curriculum: string[];
  requirements: string[];
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
      nextStartDate: t("courses.1.startDate"),
      spotsLeft: 8,
      curriculum: [
        t("courses.1.curriculum.1"),
        t("courses.1.curriculum.2"),
        t("courses.1.curriculum.3"),
        t("courses.1.curriculum.4"),
        t("courses.1.curriculum.5"),
        t("courses.1.curriculum.6"),
      ],
      requirements: [
        t("courses.1.req.1"),
        t("courses.1.req.2"),
        t("courses.1.req.3"),
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
      nextStartDate: t("courses.2.startDate"),
      spotsLeft: 12,
      curriculum: [
        t("courses.2.curriculum.1"),
        t("courses.2.curriculum.2"),
        t("courses.2.curriculum.3"),
        t("courses.2.curriculum.4"),
        t("courses.2.curriculum.5"),
        t("courses.2.curriculum.6"),
      ],
      requirements: [
        t("courses.2.req.1"),
        t("courses.2.req.2"),
        t("courses.2.req.3"),
      ],
    },
    {
      id: 3,
      title: t("courses.3.title"),
      description: t("courses.3.desc"),
      icon: BookOpen,
      ageGroup: "Teens & Adults",
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
      nextStartDate: t("courses.3.startDate"),
      spotsLeft: 5,
      curriculum: [
        t("courses.3.curriculum.1"),
        t("courses.3.curriculum.2"),
        t("courses.3.curriculum.3"),
        t("courses.3.curriculum.4"),
        t("courses.3.curriculum.5"),
        t("courses.3.curriculum.6"),
      ],
      requirements: [
        t("courses.3.req.1"),
        t("courses.3.req.2"),
        t("courses.3.req.3"),
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
      nextStartDate: "Rolling enrollment",
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
      spotsLeft: 10,
      curriculum: [
        "Team building exercises",
        "Group projects & challenges",
        "Social skills development",
        "Collaborative learning",
        "Community engagement",
        "Leadership training",
      ],
      requirements: [
        "No prior experience needed",
        "Open to all ages",
        "Commitment to regular attendance",
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
      nextStartDate: "Starts Feb 2026",
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
      spotsLeft: 7,
      curriculum: [
        "Robotics fundamentals",
        "Programming basics",
        "Problem-solving drills",
        "Engineering design process",
        "Build and iterate projects",
        "Showcase & competition prep",
      ],
      requirements: [
        "Age 8 and above",
        "Interest in technology",
        "Basic computer familiarity",
      ],
    },
  ];
}
