export interface ProgramDetail {
  label: string;
  value: string;
}

export interface ScheduleItem {
  day: string;
  time: string;
}

export interface TeacherInfo {
  name: string;
  title: string;
  bio: string;
}

export interface CurriculumTrack {
  title: string;
  subtitle?: string;
  badge?: string;
  items: string[];
}

export interface FacilityItem {
  title: string;
  desc?: string;
  icon?: string;
}

export interface ClubItem {
  name: string;
  icon?: string;
}

export interface MembershipTier {
  level: number | string;
  title: string;
  tagline: string;
  features: string[];
  subTutoring?: string[];
  isPopular?: boolean;
  price1Month?: string;
  price1Session?: string;
  price12Months?: string;
  priceNote?: string;
}

export interface DurationOption {
  duration: string;
  label: string;
  desc: string;
}

export interface LevelProgram {
  level: string;
  title: string;
  desc: string;
}

export interface StudentOutcome {
  title: string;
  icon?: string;
}

export interface CourseData {
  slug: string;
  title: string;
  category: string;
  price: string;
  originalPrice?: string;
  desc: string;
  image: string;
  active: boolean;
  subtitle: string;
  tagline?: string;
  subTagline?: string;
  teacher?: TeacherInfo;
  objectiveHeadline?: string;
  objective?: string;
  scheduleHeadline?: string;
  scheduleDetails?: string;
  targetAudienceHeadline?: string;
  targetAudience?: string;
  introHeadline?: string;
  registerSubtext?: string;
  enrollmentNotice?: string;
  contactPhones?: string[];
  address?: string;
  parentChallenges?: string[];
  curriculumTracks?: CurriculumTrack[];
  facilities?: FacilityItem[];
  innovationClubs?: ClubItem[];
  clubActivities?: string[];
  studentOutcomes?: StudentOutcome[];
  membershipTiers?: MembershipTier[];
  durationOptions?: DurationOption[];
  levelPrograms?: LevelProgram[];
  longDescription: string[];
  programDescription: string[];
  programDetails: ProgramDetail[];
  schedule: ScheduleItem[];
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
}

export const courses: CourseData[] = [
  {
    slug: "arabic-for-non-speakers",
    title: "Arabic for Non-Speakers",
    category: "Foundations & Immersion",
    price: "FREE",
    desc: "Finally read Arabic by yourself without depending on anyone else. Master the alphabet, phonetics, and reading Quran and Arabic books.",
    image: "/images/pexels-ahmetkurt-35745594.jpg",
    active: true,
    subtitle: "Sept 6 to Oct 25 | 8 Sessions | Sundays @ 6PM",
    tagline: "FINALLY, READ ARABIC BY YOURSELF.",
    subTagline: "Finally read Arabic, without depending on anyone else.",
    teacher: {
      name: "Bashar Mashnouk",
      title: "Professional Teacher",
      bio: "Professional teacher known for a simple, straightforward, and non-ambiguous teaching style that makes learning Arabic intuitive and enjoyable."
    },
    objectiveHeadline: "Read & Understand",
    objective: "Finally read & understand Quran and Arabic books with ease, accuracy, and independent confidence.",
    scheduleHeadline: "Sundays @ 6:00 PM",
    scheduleDetails: "Sept 6 to Oct 25 • 8 Sessions held in-person at our Saint-Laurent center.",
    targetAudienceHeadline: "Men, 17+",
    targetAudience: "Men, 17+ (1-on-1 Arabic teaching is also available for all ages).",
    contactPhones: ["(514) 570-4573", "(514) 562-2723"],
    address: "1325 Rue Cartier, Saint-Laurent, QC H4L 2N6",
    introHeadline: "Become fluent in reading Arabic independently!",
    registerSubtext: "Ready to start reading Arabic on your own? Register online or contact us directly by phone:",
    enrollmentNotice: "Spaces are limited for the upcoming Sunday sessions. Secure your spot today!",
    longDescription: [
      "Have you always wanted to read Arabic on your own without having to rely on someone else? Avenir Souriant's Arabic for Non-Speakers program is specifically designed to take you from absolute zero to independently reading Arabic texts, Quranic verses, and books with clarity and ease.",
      "Led by professional instructor Bashar Mashnouk — widely celebrated for his clear, straightforward, and accessible pedagogical style — this 8-session course eliminates ambiguity and breaks down the Arabic alphabet, pronunciation, and reading rules into simple, actionable steps.",
      "This program takes place every Sunday at 6:00 PM from September 6 to October 25 at our Saint-Laurent center (1325 Rue Cartier, Saint-Laurent, QC). The course is open to men (ages 17+), and personalized 1-on-1 sessions are also available for learners of all ages. This course is completely free — no cost to register!"
    ],
    programDescription: [
      "In this intensive 8-session journey, you will systematically master letter shapes, vowel markings (Harakat), phonetic transitions, and word assembly in Modern Standard Arabic and classical script.",
      "The curriculum is specifically calibrated to empower you to read directly from the Quran and standard Arabic publications with confidence, proper pronunciation, and self-reliance."
    ],
    programDetails: [
      { label: "Dates", value: "Sept 6 to Oct 25" },
      { label: "Duration", value: "8 Sessions" },
      { label: "Schedule", value: "Sundays @ 6:00 PM" },
      { label: "Teacher", value: "Bashar Mashnouk" },
      { label: "Audience", value: "Men, 17+ (1-on-1 for all ages)" },
      { label: "Objective", value: "Read Quran & Arabic Books" },
      { label: "Tuition", value: "FREE" },
      { label: "Location", value: "1325 Rue Cartier, Saint-Laurent" }
    ],
    schedule: [
      { day: "Sundays (Sept 6 to Oct 25 — 8 Sessions)", time: "6:00 PM" }
    ],
    highlights: [
      "Complete mastery of Arabic letters, isolated and joined forms",
      "Vowel marks (Fat-ha, Damma, Kasra, Sukoon, Shaddah, Tanween)",
      "Phonetic accuracy and authentic pronunciation techniques",
      "Smooth word blending and practical reading exercises",
      "Direct application to reading Quranic script and Arabic books",
      "Personalized feedback from instructor Bashar Mashnouk",
      "1-on-1 teaching options available for all ages upon request"
    ],
    metaTitle: "Finally, Read Arabic By Yourself | Arabic for Non-Speakers Montreal | Avenir Souriant",
    metaDescription: "Learn to read Arabic independently without relying on anyone else. 8-session course led by Bashar Mashnouk in Saint-Laurent, Montreal. Completely free — register now or call (514) 570-4573."
  },
  {
    slug: "homeschooling-support",
    title: "Homeschooling Support Hub",
    category: "Homeschool Support",
    price: "Flexible Plans",
    desc: "Comprehensive support for homeschooling families: STEM labs, AI coding, language mastery, personalized tutoring, and portfolio tracking.",
    image: "/images/homeschooling_support_hub.png",
    active: true,
    subtitle: "Learn • Create • Explore • Excel | 9:00 AM – 1:00 PM",
    tagline: "COMPREHENSIVE SUPPORT FOR HOMESCHOOLING FAMILIES",
    subTagline: "Engaging programs, modern learning spaces, and dedicated academic guidance to help your child excel.",
    teacher: {
      name: "Specialized Learning Spaces",
      title: "State-of-the-Art Facilities",
      bio: "Dedicated science and robotics labs, AI coding workshops, quiet study halls, interactive classrooms, and a creative arts studio."
    },
    objectiveHeadline: "Innovate & Excel",
    objective: "STEM, AI-assisted coding, language proficiency (Arabic, French, English), creative arts, and hands-on project exploration.",
    scheduleHeadline: "9:00 AM – 1:00 PM",
    scheduleDetails: "Monday to Friday mornings. Flexible enrollment options: 1 Month, 1 Term/Session, or Full School Year.",
    targetAudienceHeadline: "Grades 7 to 12",
    targetAudience: "Secondary 1 to 6 students (Pre-University) and homeschooling families seeking high-quality academic support.",
    contactPhones: ["(514) 581-5305", "(438) 765-1289", "(514) 570-4573"],
    address: "1325 Rue Cartier, Saint-Laurent, QC H4L 2N6",
    introHeadline: "A vibrant learning environment tailored for homeschooling success",
    longDescription: [
      "The Avenir Souriant Homeschooling Support Hub provides a modern, stimulating, and supportive environment for homeschooling families. Located at 1325 Rue Cartier in Saint-Laurent, our center directly addresses parents' key challenges: structured curriculum planning, advanced subject teaching (STEM, mathematics, French, English), progress monitoring, and building evaluation portfolios compliant with Quebec standards.",
      "Our students benefit from exceptional resources including science and robotics equipment, AI-assisted programming workshops, quiet study rooms, and classrooms with interactive smart displays. We offer a genuine learning community where students develop autonomy, deepen their knowledge, and build lasting friendships.",
      "We offer three flexible membership options (1 Month without commitment, 1 Term to experience the program, or a Full School Year): open facility access, guidance with a dedicated academic advisor, or our Premium plan featuring one-on-one tutoring in math, science, languages, and exam preparation."
    ],
    programDescription: [
      "Our curriculum spans four core pillars: STEM & Technology (Python, robotics, AI for youth, 3D modeling), Applied Coding (building apps, educational games, and digital portfolios), Language & Communication (Arabic, French, English, creative writing, and public speaking), and Creative Expression (visual arts, drama, and multimedia storytelling).",
      "From Secondary 1 through pre-university readiness, our hands-on workshops, science fairs, and collaborative team projects prepare the confident thinkers and innovators of tomorrow."
    ],
    parentChallenges: [
      "Curriculum planning and academic scheduling",
      "Teaching advanced subjects (STEM, math, sciences, languages)",
      "Tracking progress and assembling official evaluation portfolios",
      "Providing enriching socialization and collaborative peer group activities",
      "Finding motivating, practical, and hands-on projects",
      "Accessing fully equipped laboratories and modern learning tools",
      "Organizing engaging educational field trips and showcases",
      "Managing Quebec homeschooling documentation and compliance requirements"
    ],
    durationOptions: [
      { duration: "1 MONTH", label: "Flexible & No Commitment", desc: "Ideal for maximum flexibility and trying out our workshops." },
      { duration: "1 TERM", label: "Quarterly Session", desc: "Perfect for deep immersion and seeing measurable academic progress!" },
      { duration: "12 MONTHS", label: "Full School Year", desc: "The best value for comprehensive guidance and continuous growth." }
    ],
    membershipTiers: [
      {
        level: 1,
        title: "Facilities & Workshops Membership",
        tagline: "Access to inspiring spaces and collaborative group sessions",
        features: [
          "Full access to all facilities (labs, creative studio, quiet study rooms)",
          "Participation in specialized workshops and group challenges",
          "Social activities and collaborative student projects",
          "Community events and educational group excursions"
        ],
        price1Month: "$149/mo",
        price1Session: "$399/term",
        price12Months: "$1,299/yr",
        priceNote: "Open facility & workshop access"
      },
      {
        level: 2,
        title: "Facilities + Academic Advisor",
        tagline: "Structure, curriculum planning, and progress tracking for your journey",
        features: [
          "Everything in Level 1 (Facilities & Workshops)",
          "Personalized learning plan tailored to your child's needs",
          "Curriculum alignment with Quebec educational standards",
          "Continuous progress monitoring and academic checkpoints",
          "Official evaluation portfolio assembly and organization",
          "Parent consultation meetings and guidance sessions",
          "Periodic academic assessments and milestone reports"
        ],
        isPopular: true,
        price1Month: "$249/mo",
        price1Session: "$649/term",
        price12Months: "$2,199/yr",
        priceNote: "Facilities + personalized academic monitoring"
      },
      {
        level: 3,
        title: "PREMIUM: Facilities + Advisor + Tutoring",
        tagline: "Full academic guidance with personalized one-on-one tutoring",
        features: [
          "Everything in Level 2 (Facilities, Workshops & Advisor)",
          "Personalized one-on-one or small-group tutoring",
          "Effective study methods and independent learning habits",
          "Targeted preparation for exams and formal evaluations"
        ],
        subTutoring: [
          "Mathematics (Secondary 1 to 6)",
          "Sciences (Physics, Chemistry, Biology)",
          "Computer Science & Coding (Python, Web, AI)",
          "Robotics & Electronics",
          "Languages (Arabic, French, English)"
        ],
        price1Month: "$399/mo",
        price1Session: "$999/term",
        price12Months: "$3,499/yr",
        priceNote: "All-inclusive + personalized tutoring"
      }
    ],
    levelPrograms: [
      {
        level: "SEC 1–2",
        title: "Strong Foundations & Discovery",
        desc: "Building solid fundamental skills with hands-on, engaging learning and disciplined study methodology."
      },
      {
        level: "SEC 3–5",
        title: "Deepening Knowledge & STEM Challenges",
        desc: "Advanced STEM challenges, linguistic refinement, collaborative group projects, and reaching new academic heights."
      },
      {
        level: "SEC 6 (Pre-University)",
        title: "College Prep & Mentorship",
        desc: "Preparation for CEGEP and university studies, advanced mentorship, career exploration, and leadership development."
      }
    ],
    programDetails: [
      { label: "Regular Schedule", value: "9:00 AM – 1:00 PM" },
      { label: "Grades Covered", value: "Sec 1 to Sec 6 (Pre-University)" },
      { label: "Enrollment Plans", value: "1 Month • 1 Term • Full School Year" },
      { label: "Learning Pillars", value: "STEM, AI Coding, Languages, Arts & Robotics" },
      { label: "Support Included", value: "Academic Advisor & Portfolio Guidance" },
      { label: "Tutoring Available", value: "Math, Sciences, French, Arabic, English" },
      { label: "Location", value: "1325 Rue Cartier, Saint-Laurent, QC" }
    ],
    schedule: [
      { day: "Monday to Friday (Mornings)", time: "9:00 AM – 1:00 PM" },
      { day: "Specialized Workshops & Tutoring", time: "Afternoons & Themed Sessions" }
    ],
    highlights: [
      "Full access to learning labs: Science, Robotics, Electronics, and 3D Prototyping",
      "Hands-on coding workshops and AI-assisted project building",
      "Comprehensive language support in Arabic, French, and English with public speaking",
      "Personalized academic advisor guidance and portfolio compliance support",
      "Customized tutoring in mathematics, physics, chemistry, and study strategies",
      "Educational excursions, science exhibitions, STEM hackathons, and leadership activities",
      "Flexible enrollment plans (1 Month, 1 Term, or Full School Year)"
    ],
    registerSubtext: "Ready to enroll your child or learn more about our flexible homeschooling plans? Contact us today:",
    enrollmentNotice: "Enrollment is now open for the school year and term sessions. Reserve your spot today!",
    metaTitle: "Homeschooling Support Hub | Avenir Souriant Montreal",
    metaDescription: "Comprehensive homeschooling support in Saint-Laurent, Montreal. STEM labs, AI coding, languages, tutoring, and personalized progress tracking. Flexible plans."
  },
];

export function getCourseBySlug(slug: string): CourseData | undefined {
  return courses.find(c => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return courses.map(c => c.slug);
}
