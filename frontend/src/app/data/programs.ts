import { Bot, Baby, BookOpen, Sparkles, GraduationCap, Users } from "lucide-react";

export type ProgramCategory = "language" | "activity";

export type ProgramBase = {
  id: number;
  title: string;
  description: string;
  icon: any;
  ageGroup: string;
  duration: string;
  price: string;
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
      id: 2,
      title: t("courses.2.title"),
      description: t("courses.2.desc"),
      icon: Baby,
      ageGroup: t("courses.2.age"),
      duration: t("courses.2.duration"),
      price: t("pricing.contact"),
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
      ageGroup: t("courses.3.age"),
      duration: t("courses.3.duration"),
      price: t("pricing.contact"),
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
    // Arabic for Non-Speakers – split into Men Only and Women Only cards
    {
      id: 9,
      title: `${t("courses.9.title")} — ${t("label.menOnly")}`,
      description: t("courses.9.desc"),
      icon: GraduationCap,
      ageGroup: t("courses.9.age"),
      duration: t("courses.9.duration"),
      price: t("pricing.contact"),
      category: "language",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500",
      fullDescription: t("courses.9.full"),
      highlights: [
        t("courses.9.h1"),
        t("courses.9.h2"),
        t("courses.9.h3"),
        t("courses.9.h4"),
        t("courses.9.h5"),
        t("courses.9.h6"),
      ],
      nextStartDate: t("courses.9.startDate"),
      spotsLeft: 0,
      curriculum: [
        t("courses.9.curriculum.1"),
        t("courses.9.curriculum.2"),
        t("courses.9.curriculum.3"),
        t("courses.9.curriculum.4"),
        t("courses.9.curriculum.5"),
        t("courses.9.curriculum.6"),
      ],
      requirements: [
        t("courses.9.req.1"),
        t("courses.9.req.2"),
        t("courses.9.req.3"),
      ],
    },
    {
      id: 10,
      title: `${t("courses.9.title")} — ${t("label.womenOnly")}`,
      description: t("courses.9.desc"),
      icon: GraduationCap,
      ageGroup: t("courses.9.age"),
      duration: t("courses.9.duration"),
      price: t("pricing.contact"),
      category: "language",
      gradient: "bg-gradient-to-br from-rose-500 to-pink-500",
      fullDescription: t("courses.9.full"),
      highlights: [
        t("courses.9.h1"),
        t("courses.9.h2"),
        t("courses.9.h3"),
        t("courses.9.h4"),
        t("courses.9.h5"),
        t("courses.9.h6"),
      ],
      nextStartDate: t("courses.9.startDate"),
      spotsLeft: 0,
      curriculum: [
        t("courses.9.curriculum.1"),
        t("courses.9.curriculum.2"),
        t("courses.9.curriculum.3"),
        t("courses.9.curriculum.4"),
        t("courses.9.curriculum.5"),
        t("courses.9.curriculum.6"),
      ],
      requirements: [
        t("courses.9.req.1"),
        t("courses.9.req.2"),
        t("courses.9.req.3"),
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
      ageGroup: t("activities.7.age"),
      duration: t("activities.7.duration"),
      price: "$60",
      category: "activity",
      gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
      fullDescription: t("activities.7.full"),
      nextStartDate: t("activities.7.startDate"),
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
        "Ball control, dribbling, and passing drills",
        "Shooting technique and finishing practice",
        "Small-sided games for teamwork and positioning",
        "Fitness and agility sessions tailored for youth",
        "Tactical awareness for midfield and defense",
        "Weekly skills challenge and feedback",
      ],
      requirements: [
        "Indoor shoes and water bottle",
        "Positive attitude and respect for teammates",
        "Commitment to consistent attendance",
      ],
    },
    {
      id: 8,
      title: t("activities.8.title"),
      description: t("activities.8.desc"),
      icon: Bot,
      ageGroup: t("activities.8.age"),
      duration: t("activities.8.duration"),
      price: "$85",
      category: "activity",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
      fullDescription: t("activities.8.full"),
      nextStartDate: t("activities.8.startDate"),
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
        "Intro to robotics components and circuits",
        "Arduino basics: sensors, motors, and LEDs",
        "Programming fundamentals for movement and logic",
        "Line-following robot mini-project",
        "Obstacle-avoidance and tuning exercises",
        "Showcase and iteration on final builds",
      ],
      requirements: [
        "Interest in robotics and problem-solving",
        "Laptop preferred; shared devices available",
        "Willingness to collaborate and iterate",
      ],
    },
  ];
}
