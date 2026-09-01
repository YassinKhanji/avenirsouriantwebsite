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
    slug: "arabic-for-native-speakers",
    title: "Arabic for Native Speakers",
    category: "Language Mastery",
    price: "$135",
    desc: "An advanced curriculum designed to help native speakers master reading, writing, and speaking in a fun and interactive environment.",
    image: "/images/native_arabic_speakers.jpg",
    active: false,
    subtitle: "4 Hours Per Week",
    tagline: "Master Arabic Literacy & Eloquence",
    subTagline: "Elevate your reading, writing, and formal Arabic communication.",
    longDescription: [
      "Our Arabic for Native Speakers program is crafted for children who already speak Arabic at home and want to develop their literacy, grammar, and expressive skills to a higher level. Based in Saint-Laurent, Montreal, Avenir Souriant provides a structured yet joyful environment where native-speaking children strengthen their connection to the Arabic language.",
      "Through interactive storytelling, creative writing workshops, and structured grammar exercises, students build confidence in formal Arabic (Fusha) while celebrating the richness of their heritage language. Our experienced instructors use a communication-focused pedagogy that makes every session feel dynamic and purposeful.",
      "Whether your child needs to improve reading fluency, expand vocabulary, or master written composition, this program offers a tailored pathway. Classes are designed for small groups to ensure personalized attention and meaningful progress every week."
    ],
    programDescription: [
      "Students will progressively develop the four essential Arabic language skills — listening comprehension, speaking, reading comprehension, and writing — in a practical framework that connects directly to their everyday life and cultural identity.",
      "The focus is on communicating with ease, accuracy, and confidence in Arabic across academic, social, and personal contexts. Students engage with authentic Arabic texts, media, and conversation scenarios that reflect real-world usage."
    ],
    programDetails: [
      { label: "Duration per level", value: "8 weeks" },
      { label: "Hours per level", value: "32" },
      { label: "Hours per week", value: "4" },
      { label: "Tuition per level", value: "$135" },
      { label: "Class size", value: "8 – 15 students" }
    ],
    schedule: [],
    highlights: [
      "Reading fluency and comprehension in Modern Standard Arabic",
      "Creative and academic writing skills",
      "Grammar and sentence structure mastery",
      "Oral presentation and public speaking confidence",
      "Cultural literacy through Arabic literature and media"
    ],
    metaTitle: "Arabic for Native Speakers | Avenir Souriant Montreal",
    metaDescription: "Advanced Arabic courses for native speakers in Montreal. Master reading, writing, grammar, and speaking in a fun, interactive environment at Avenir Souriant in Saint-Laurent, QC."
  },
  {
    slug: "arabic-for-non-speakers",
    title: "Arabic for Non-Speakers",
    category: "Foundations & Immersion",
    price: "$99",
    originalPrice: "$200",
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
      "This program takes place every Sunday at 6:00 PM from September 6 to October 25 at our Saint-Laurent center (1325 Rue Cartier, Saint-Laurent, QC). The course is open to men (ages 17+), and personalized 1-on-1 sessions are also available for learners of all ages. Take advantage of our special limited-time promotional rate of $99 (regularly $200)."
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
      { label: "Tuition", value: "$99 (Regular $200)" },
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
    metaDescription: "Learn to read Arabic independently without relying on anyone else. 8-session course led by Bashar Mashnouk in Saint-Laurent, Montreal. Special offer $99 (regular $200). Call (514) 570-4573 to register."
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
  {
    slug: "stem-and-robotics",
    title: "STEM & Robotics",
    category: "Tech & Innovation",
    price: "$145",
    desc: "Hands-on building, coding, and problem-solving to prepare kids for the future while having a blast with real robotics kits.",
    image: "/images/096d4575-d688-4721-ab44-ff480a7199d5.jpg",
    active: false,
    subtitle: "Hands-On Innovation",
    tagline: "Build, Code, and Innovate",
    subTagline: "Hands-on robotics kits, logic challenges, and team collaboration.",
    longDescription: [
      "Avenir Souriant's STEM & Robotics program brings science, technology, engineering, and mathematics to life through hands-on building, coding, and creative problem-solving. Based in our Saint-Laurent, Montreal center, this program is designed to spark curiosity and develop critical 21st-century skills in a collaborative, project-based environment.",
      "Students work with real robotics kits, learn foundational coding concepts, and tackle engineering challenges that develop logical thinking and teamwork. Each session is structured to be age-appropriate, progressively building from simple circuits and mechanical designs to more complex programmable robots.",
      "Whether your child dreams of becoming an engineer, a software developer, or simply loves taking things apart and building them back up, this program nurtures innovation and creativity in a supportive, fun setting."
    ],
    programDescription: [
      "Students explore core STEM concepts through guided projects that combine mechanical building, basic electronics, and introductory programming. Each module culminates in a hands-on project that students can demonstrate and be proud of.",
      "The curriculum emphasizes collaboration, creative problem-solving, and the engineering design process — ask, imagine, plan, create, and improve."
    ],
    programDetails: [
      { label: "Duration per level", value: "8 weeks" },
      { label: "Hours per level", value: "32" },
      { label: "Hours per week", value: "4" },
      { label: "Tuition per level", value: "$145" },
      { label: "Class size", value: "8 – 12 students" }
    ],
    schedule: [],
    highlights: [
      "Hands-on robotics building with industry-standard kits",
      "Introduction to coding and computational thinking",
      "Engineering design challenges and competitions",
      "Teamwork and collaborative problem-solving",
      "Science experiments integrated with real-world applications"
    ],
    metaTitle: "STEM & Robotics Program for Kids | Avenir Souriant Montreal",
    metaDescription: "Hands-on STEM and robotics classes for kids in Montreal. Build robots, learn coding, and develop problem-solving skills at Avenir Souriant in Saint-Laurent, QC."
  },
  {
    slug: "sports-and-extracurriculars",
    title: "Sports & Extracurriculars",
    category: "Active & Creative",
    price: "$120",
    desc: "Keep kids active and creative with our diverse offerings including soccer, stitching, arts, crafts, and teamwork games.",
    image: "/images/835a7955-18e1-459e-a20f-bc61263f3705.jpg",
    active: false,
    subtitle: "Active Body, Creative Mind",
    tagline: "Sports, Arts, and Teamwork",
    subTagline: "Energizing physical activities balanced with mindful artistic projects.",
    longDescription: [
      "At Avenir Souriant, we believe a well-rounded education goes beyond the classroom. Our Sports & Extracurriculars program keeps children physically active, socially engaged, and creatively stimulated through a diverse range of activities — from soccer and team sports to stitching, arts, and crafts.",
      "Based in Saint-Laurent, Montreal, our program provides a safe, supervised environment where kids can explore new interests, develop athletic skills, and express their creativity. Every activity is designed to build confidence, encourage teamwork, and nurture self-expression.",
      "Whether your child is a budding athlete, an aspiring artist, or someone who loves trying new things, our extracurricular offerings ensure there's something exciting for everyone."
    ],
    programDescription: [
      "Students participate in a rotating schedule of physical and creative activities designed to develop motor skills, artistic expression, and social competencies. Each session balances high-energy sports with focused creative projects.",
      "The program emphasizes sportsmanship, fair play, and creative exploration in a fun, inclusive atmosphere that celebrates each child's unique strengths."
    ],
    programDetails: [
      { label: "Duration per level", value: "8 weeks" },
      { label: "Hours per level", value: "32" },
      { label: "Hours per week", value: "4" },
      { label: "Tuition per level", value: "$120" },
      { label: "Class size", value: "10 – 20 students" }
    ],
    schedule: [],
    highlights: [
      "Soccer, team sports, and athletic conditioning",
      "Arts, crafts, and creative expression projects",
      "Stitching, knitting, and textile arts",
      "Team-building games and cooperative challenges",
      "Performance and showcase opportunities"
    ],
    metaTitle: "Sports & Extracurricular Activities for Kids | Avenir Souriant Montreal",
    metaDescription: "Fun sports and extracurricular activities for children in Montreal. Soccer, arts, crafts, stitching, and teamwork games at Avenir Souriant in Saint-Laurent, QC."
  },
  {
    slug: "other-activities",
    title: "Other Activities",
    category: "Custom Enrichment",
    price: "$120",
    desc: "We offer a variety of other engaging activities tailored to your child's interests and developmental needs. Contact us to learn more!",
    image: "/images/other_activities.jpg",
    active: false,
    subtitle: "Tailored Enrichment",
    tagline: "Custom Enrichment & Special Workshops",
    subTagline: "Dynamic workshops and holiday programs adapted to student interests.",
    longDescription: [
      "Avenir Souriant is constantly expanding its offerings to meet the diverse interests and developmental needs of our students. Our Other Activities category encompasses a growing collection of specialized workshops, seasonal programs, and custom enrichment experiences available at our Saint-Laurent, Montreal center.",
      "From themed cultural workshops and holiday camps to special guest instructor sessions, these programs complement our core offerings and provide unique learning opportunities. We listen to our community and frequently introduce new activities based on parent and student feedback.",
      "Contact us to learn about our latest offerings, upcoming workshops, and seasonal specials. We're always happy to discuss how we can best serve your child's unique interests and goals."
    ],
    programDescription: [
      "Our supplementary activities are designed to complement the core Avenir Souriant curriculum. Each activity is carefully curated to provide educational value while keeping children engaged, inspired, and excited to learn.",
      "Programs vary by season and availability. Contact our team for the most up-to-date schedule and offerings."
    ],
    programDetails: [
      { label: "Duration", value: "Varies" },
      { label: "Hours per week", value: "Varies" },
      { label: "Tuition", value: "Starting at $120" },
      { label: "Class size", value: "Varies by activity" }
    ],
    schedule: [],
    highlights: [
      "Seasonal workshops and themed programs",
      "Guest instructor special sessions",
      "Cultural enrichment and heritage activities",
      "Holiday camps and weekend intensives",
      "Custom programs based on community feedback"
    ],
    metaTitle: "Enrichment Activities for Kids | Avenir Souriant Montreal",
    metaDescription: "Discover engaging enrichment activities for children at Avenir Souriant in Montreal. Seasonal workshops, cultural programs, and custom activities in Saint-Laurent, QC. Contact us to learn more!"
  }
];

export function getCourseBySlug(slug: string): CourseData | undefined {
  return courses.find(c => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return courses.map(c => c.slug);
}
