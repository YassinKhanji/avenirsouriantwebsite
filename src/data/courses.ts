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
  priceUnit?: string;
  promoTitle?: string;
  promoDesc?: string;
  desc: string;
  image: string;
  flyerImage?: string;
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
  curriculumTitle?: string;
  facilities?: FacilityItem[];
  facilitiesTitle?: string;
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
    title: "Arabic for Non-Speakers (Ages 16+)",
    category: "Foundations & Immersion (16+)",
    price: "$15/session",
    desc: "Finally read and speak Arabic independently. Master the alphabet, phonetics, grammar, and Quran/text reading with dedicated sessions: Sundays for Men & Thursdays for Women.",
    image: "/images/pexels-ahmetkurt-35745594.jpg",
    active: true,
    subtitle: "Ages 16+ • Sundays for Men & Thursdays for Women",
    tagline: "FINALLY, READ & SPEAK ARABIC BY YOURSELF.",
    subTagline: "Finally read Arabic independently without relying on anyone else.",
    teacher: {
      name: "Bashar Mashnouk & Specialized Faculty",
      title: "Senior Arabic Language Educators",
      bio: "Professional educators known for a simple, straightforward, and accessible pedagogical style that makes learning Arabic intuitive, empowering, and enjoyable."
    },
    objectiveHeadline: "Read, Understand & Speak",
    objective: "Finally read and understand Quranic script, Arabic books, and conversational basics with ease, accuracy, and independent confidence.",
    scheduleHeadline: "Sundays (Men) & Thursdays (Women)",
    scheduleDetails: "Sundays for Men (6:00 PM – 8:00 PM) & Thursdays for Women (6:00 PM – 8:00 PM) held in-person at our Saint-Laurent center.",
    targetAudienceHeadline: "Men & Women (16+)",
    targetAudience: "Adults and mature youth (ages 16+). Dedicated separate cohorts: Sundays for Men and Thursdays for Women. 1-on-1 private instruction is also available.",
    contactPhones: ["(514) 581-5305", "(514) 808-5216", "(514) 570-4573"],
    address: "1325 Rue Cartier, Saint-Laurent, QC H4L 2N6",
    introHeadline: "Become fluent in reading and understanding Arabic independently!",
    registerSubtext: "Ready to start reading Arabic on your own? Register online or contact us directly by phone:",
    enrollmentNotice: "Pay per session ($15/session) — you only pay for the sessions you attend! If absent, you don't pay. 10% sibling & family discount.",
    longDescription: [
      "Have you always wanted to read and understand Arabic on your own without having to rely on someone else? Avenir Souriant's Arabic for Non-Speakers program is specifically designed to take adult and teen learners (ages 16+) from absolute zero to independently reading Arabic texts, Quranic verses, and publications with clarity and confidence.",
      "Led by experienced Arabic language instructors including Bashar Mashnouk — celebrated for a clear, structured, and accessible pedagogical style — this course eliminates ambiguity and breaks down Arabic phonetics, alphabet shapes, vowel markings (Harakat), and word structure into simple, actionable steps.",
      "Classes are organized into dedicated cohorts: Sundays for Men and Thursdays for Women at our Saint-Laurent center (1325 Rue Cartier, Montreal). Tuition is set at a flexible $15 per session (or $150 for 10 sessions), operating on a true pay-as-you-go model: you only pay for sessions you attend, with no charge for missed classes! 10% discount applies for family members."
    ],
    programDescription: [
      "Through systematic instruction, you will master letter shapes in isolated and connected forms, vowel markings (Fat-ha, Damma, Kasra, Sukoon, Shaddah, Tanween), phonetic transitions, and smooth word blending in Modern Standard Arabic and classical script.",
      "The curriculum empowers you to read directly with confidence, proper articulation, and self-reliance, with specialized practice tailored for adult learners."
    ],
    programDetails: [
      { label: "Tuition", value: "$15 / session ($150 for 10 sessions)" },
      { label: "Payment Model", value: "Pay per session — only pay when attending (absent = no charge)" },
      { label: "Family Discount", value: "10% OFF for family members" },
      { label: "Schedule (Men)", value: "Sundays @ 6:00 PM – 8:00 PM" },
      { label: "Schedule (Women)", value: "Thursdays @ 6:00 PM – 8:00 PM" },
      { label: "Audience", value: "Adults & Teens (Ages 16+) — Men & Women cohorts" },
      { label: "Teacher", value: "Bashar Mashnouk & Faculty" },
      { label: "Location", value: "1325 Rue Cartier, Saint-Laurent, QC" }
    ],
    schedule: [
      { day: "Sundays (Men 16+)", time: "6:00 PM – 8:00 PM" },
      { day: "Thursdays (Women 16+)", time: "6:00 PM – 8:00 PM" }
    ],
    highlights: [
      "Complete mastery of Arabic letters, isolated and joined forms",
      "Vowel marks (Fat-ha, Damma, Kasra, Sukoon, Shaddah, Tanween)",
      "Phonetic accuracy and authentic pronunciation techniques",
      "Smooth word blending and practical reading exercises",
      "Direct application to reading Quranic script and Arabic books",
      "Dedicated schedules: Sundays for Men, Thursdays for Women",
      "Pay-per-session flexibility ($15/session) — no charge if absent",
      "10% family discount and 1-on-1 private instruction options available"
    ],
    metaTitle: "Arabic for Non-Speakers (Ages 16+) Montreal | Avenir Souriant",
    metaDescription: "Learn to read Arabic independently. Classes for non-native adults & teens (16+): Sundays for Men, Thursdays for Women in Saint-Laurent, Montreal. $15/session pay-as-you-go."
  },
  {
    slug: "arabic-youth-program",
    title: "Arabic Language & Skills Program (Ages 6–14)",
    category: "Youth Arabic Immersion (6–14)",
    price: "$15/session",
    desc: "Dynamic Arabic language immersion for children & youth ages 6–14. 4 tailored cohorts: Beginner, Intermediate, and Skills Development.",
    image: "/images/classroom.jpg",
    active: true,
    subtitle: "Ages 6 to 14 • 4 Tailored Cohorts • Weekday & Friday Options",
    tagline: "MASTER ARABIC WITH CONFIDENCE, EXCITEMENT & FUN",
    subTagline: "Inspiring courses for non-native youth: Beginner, Intermediate, and Skills Development cohorts in Saint-Laurent, Montreal.",
    teacher: {
      name: "Certified Native Arabic Educators",
      title: "Youth Pedagogical Specialists",
      bio: "Passionate bilingual educators specializing in child-centered pedagogy, active language acquisition, phonetics, and interactive storytelling for young non-native learners."
    },
    objectiveHeadline: "Fluency, Literacy & Cultural Joy",
    objective: "Empower young learners to read, speak, write, and understand Arabic with authentic joy, natural fluency, and self-confidence.",
    scheduleHeadline: "Flexible Weekday & Friday Schedules",
    scheduleDetails: "Monday–Friday cohorts (8:00 AM – 4:00 PM / 6:00 PM) and Friday intensive tracks. Flexible pay-per-session plan!",
    targetAudienceHeadline: "Children & Youth Ages 6–14",
    targetAudience: "Tailored for non-native Arabic learners divided into 4 age-appropriate skill levels (Beginner, Intermediate, Skills Development).",
    contactPhones: ["(514) 581-5305", "(514) 808-5216"],
    address: "1325 Rue Cartier, Saint-Laurent, QC H4L 2N6",
    introHeadline: "Transform Your Child's Learning with Interactive Arabic",
    registerSubtext: "Ready to reserve your child's spot or have questions about our flexible pay-per-session model? Contact us today:",
    enrollmentNotice: "10% discount for siblings! Pay per session attended ($15/session) — absent sessions are never charged.",
    levelPrograms: [
      {
        level: "Ages 6–8",
        title: "Beginner Class (Level 1)",
        desc: "Monday to Friday | 8:00 AM – 4:00 PM (up to 6:00 PM). Fun, engaging introduction to Arabic letterforms, phonetics, numbers, colors, and everyday conversational phrases through songs, interactive games, and guided exercises."
      },
      {
        level: "Ages 8–12",
        title: "Intermediate Class (Level 2)",
        desc: "Monday to Friday | 8:00 AM – 4:00 PM (up to 6:00 PM). Vocabulary expansion, vowel markings (Harakat), sentence construction, reading short stories, active dialogue, and building conversational confidence."
      },
      {
        level: "Ages 8–14",
        title: "Skills Development Intensive — Fridays",
        desc: "Fridays | 7:30 AM – 6:00 PM. A full-day weekly immersion focused on public speaking, reading comprehension, expressive writing, cultural appreciation, and collaborative language projects."
      },
      {
        level: "Ages 12–14",
        title: "Skills Development & Advanced Cohort",
        desc: "Monday to Friday | 8:00 AM – 4:00 PM (up to 6:00 PM). Advanced vocabulary, formal Modern Standard Arabic (Fusha), grammatical structure, text analysis, and preparing students for independent literacy."
      }
    ],
    longDescription: [
      "Looking for an enriching, engaging, and joyful Arabic language program for your child in Montreal? The Academy of Knowledge (Académie de l'Avenir Souriant) is thrilled to offer our Arabic Language Courses for Non-Native Speakers at our modern center located at 1325 Rue Cartier in Saint-Laurent.",
      "Our program is designed specifically to help young learners connect with the Arabic language in a motivating, welcoming, and pressure-free environment. Rather than dry rote memorization, our curriculum combines phonetics, interactive storytelling, hands-on activities, and dialogue to make Arabic your child's favorite subject.",
      "We believe in total flexibility for families: tuition is just $15 per session (or $150 for a 10-session package). You can choose to pay per session, meaning you only pay for the days your child attends — if absent, you are never charged! Furthermore, we offer an additional 10% discount for siblings."
    ],
    programDescription: [
      "Our program is divided into four targeted age and skill cohorts to ensure every student learns at the pace and depth that suits them best. Whether your child is discovering the alphabet for the very first time or looking to sharpen intermediate reading and speaking skills, our certified teachers provide dedicated, individualized support.",
      "Each day integrates language drills with engaging group challenges, creative arts, and practical conversational scenarios that instill genuine pride and cultural connection."
    ],
    programDetails: [
      { label: "Tuition", value: "$15 / session ($150 for 10 sessions)" },
      { label: "Payment Model", value: "Pay per session — only pay when attending (absent = no charge)" },
      { label: "Family Discount", value: "10% OFF for siblings (brothers & sisters)" },
      { label: "Age Groups", value: "Ages 6–8, 8–12, 8–14, and 12–14" },
      { label: "Schedule Options", value: "Mon–Fri 8:00 AM – 4:00 PM / Fridays 7:30 AM – 6:00 PM" },
      { label: "Location", value: "1325 Rue Cartier, Saint-Laurent, QC H4L 2N6" },
      { label: "Language", value: "Modern Standard Arabic (for non-native speakers)" }
    ],
    schedule: [
      { day: "Beginner Class (Ages 6–8)", time: "Monday – Friday | 8:00 AM – 4:00 PM (up to 6:00 PM)" },
      { day: "Intermediate Class (Ages 8–12)", time: "Monday – Friday | 8:00 AM – 4:00 PM (up to 6:00 PM)" },
      { day: "Skills Development Friday (Ages 8–14)", time: "Fridays | 7:30 AM – 6:00 PM" },
      { day: "Skills Development Weekday (Ages 12–14)", time: "Monday – Friday | 8:00 AM – 4:00 PM (up to 6:00 PM)" }
    ],
    highlights: [
      "Mastery of Arabic letter forms, pronunciation, and Harakat (vowels)",
      "Practical everyday vocabulary and conversational speaking drills",
      "Interactive reading comprehension and short story analysis",
      "Child-friendly, game-based learning and creative storytelling",
      "Small group cohorts categorized by age (6–8, 8–12, 8–14, 12–14)",
      "Completely flexible pay-per-session pricing ($15/session) — no fee for absences",
      "10% sibling discount for brothers and sisters"
    ],
    metaTitle: "Arabic Language & Skills Program for Kids & Youth (Ages 6–14) Montreal | Avenir Souriant",
    metaDescription: "Engaging Arabic classes for non-native children and youth (ages 6–14) in Saint-Laurent, Montreal. Beginner to advanced tracks. $15/session pay-as-you-go. Call (514) 581-5305."
  },
  {
    slug: "cybersecurity-for-teens",
    title: "Cybersecurity for Teens (Ages 13–16)",
    category: "Cybersecurity & Tech (13–16)",
    price: "$35/session",
    desc: "A 6-week hands-on cybersecurity course for ages 13–16. Real skills, real tools, real confidence. Master networking, Linux, ethical hacking, AI tools, and CTF challenges.",
    image: "/images/cybersecurity-teens.png",
    active: true,
    subtitle: "Ages 13 to 16 • 6-Week Cohort (2 hrs/week) • Starting August",
    tagline: "CYBERSECURITY FOR TEENS",
    subTagline: "A 6-week hands-on course for ages 13–16. Real skills. Real tools. Real confidence.",
    teacher: {
      name: "Cyber Defense & Tech Mentors",
      title: "Cybersecurity & Technology Educators",
      bio: "Experienced tech educators and mentors passionate about empowering youth with real-world digital safety, ethical hacking concepts, Linux, and responsible AI navigation."
    },
    objectiveHeadline: "Real Skills, Tools & Confidence",
    objective: "Understand how technology and networks work, master real cyber safety habits, explore AI and IT career paths, and solve hands-on security challenges.",
    scheduleHeadline: "6 Weeks · 2 Hours per Week",
    scheduleDetails: "Hands-on 2-hour lab sessions weekly starting the first week of August. In-person at our Saint-Laurent center (1325 Rue Cartier). Exact cohort schedule sent after registration.",
    targetAudienceHeadline: "Teens Ages 13–16",
    targetAudience: "Designed for youth ages 13 to 16. No prior coding or technical experience needed — beginners are warmly welcome! Safe, supervised, and ethical.",
    contactPhones: ["(514) 515-4492", "(514) 581-5305", "(514) 808-5216"],
    address: "1325 Rue Cartier, Saint-Laurent, QC H4L 2N6",
    introHeadline: "Why Cybersecurity Matters for Teens",
    registerSubtext: "Ready to give your teen real-world digital skills that will last a lifetime? Register online or contact us directly by phone:",
    enrollmentNotice: "Tuition is $35/session ($200 for the complete 6-week program). Pay per session or full cohort package! 10% sibling & family discount. Spots are limited.",
    longDescription: [
      "Teens use technology every single day — from online multiplayer gaming and streaming to social media platforms and generative AI assistants. Yet very few understand how the underlying systems work or how to safeguard their digital privacy. Avenir Souriant's Cybersecurity for Teens course changes that.",
      "Designed specifically for youth aged 13 to 16, this 6-week hands-on course takes teens behind the scenes of modern digital technology. Students don't just sit through passive lectures; they work with real tools used by IT professionals: inspecting live network packets with Wireshark, spinning up virtual machines with Linux and VirtualBox, learning AI-assisted problem solving, and understanding ethical hacking principles in a safe, fully supervised environment.",
      "Tuition is set at an accessible $35 per session (or $200 for the complete 6-week cohort package). Whether your teen is an avid gamer curious about online safety, interested in future careers in cybersecurity and AI, or simply looking to level up their digital literacy, this course builds lasting technical skills and confidence."
    ],
    programDescription: [
      "Through active, project-based laboratory sessions, students progress through a structured 6-week journey: from networking fundamentals and operating systems to web security concepts and defensive hacking.",
      "The course culminates in an exhilarating Capture-The-Flag (CTF) cyber lab challenge. Working in teams, students investigate digital clues, crack security puzzles, analyze network logs, and defend systems — putting everything they've learned to the ultimate test in a fun, collaborative atmosphere."
    ],
    programDetails: [
      { label: "Tuition", value: "$35 / session ($200 for 6-week cohort)" },
      { label: "Payment Model", value: "Pay per session or full 6-week course package ($200)" },
      { label: "Duration", value: "6 weeks · 2 hours per week (12 hours total)" },
      { label: "Start Date", value: "First week of August — exact schedule sent upon registration" },
      { label: "Age Group", value: "Teens 13–16 years old" },
      { label: "Prerequisites", value: "No experience needed — beginners welcome!" },
      { label: "Format", value: "Hands-on tech lab (Linux, Wireshark, AI, CTF challenges)" },
      { label: "Family Discount", value: "10% OFF for siblings & family members" },
      { label: "Location", value: "1325 Rue Cartier, Saint-Laurent, QC H4L 2N6" }
    ],
    schedule: [
      { day: "Weekly Lab Session", time: "2 Hours / Week (Starting First Week of August)" },
      { day: "Cohort Details", time: "Exact days & times sent to parents after registration" }
    ],
    highlights: [
      "Real-world tech & internet safety: learn how to stay safe while gaming and on social media",
      "Networking fundamentals: inspect live traffic with Wireshark, explore IP addresses, DNS, and routers",
      "Computer fundamentals & virtualization: set up Linux virtual machines with VirtualBox",
      "Ethical hacking principles & cyber basics: CIA triad, password security, and phishing defense",
      "Web security concepts: understanding SQL injection, XSS, and DDoS in safe demonstrations",
      "AI learning skills: accelerate problem-solving and explore high-demand cybersecurity and AI careers",
      "The CTF Lab finale: investigate clues, crack security puzzles, and compete in team-based challenges",
      "Flexible pay-per-session pricing ($35/session or $200 for 6 weeks) with 10% sibling discount"
    ],
    curriculumTracks: [
      {
        title: "Week 1 — Networking Fundamentals",
        subtitle: "How the Internet Really Works",
        badge: "Week 1",
        items: [
          "IP addresses & DNS resolution",
          "Routers and internet traffic flow",
          "Inspecting live network packets with Wireshark",
          "Understanding how data travels safely"
        ]
      },
      {
        title: "Week 2 — Computer Fundamentals & Linux",
        subtitle: "Inside the Machine",
        badge: "Week 2",
        items: [
          "Computer hardware components and architecture",
          "Linux vs Windows: why security professionals use Linux",
          "Basic terminal commands and file navigation",
          "User permissions, access controls, and file security"
        ]
      },
      {
        title: "Week 3 — Virtualization & AI Assistance",
        subtitle: "Building Your Lab Environment",
        badge: "Week 3",
        items: [
          "Setting up VirtualBox on your system",
          "Creating an isolated virtual machine sandbox",
          "Leveraging AI tools ethically to accelerate tech learning",
          "Prompting AI for code explanations and debugging"
        ]
      },
      {
        title: "Week 4 — Cybersecurity Basics & Defense",
        subtitle: "Core Defensive Principles",
        badge: "Week 4",
        items: [
          "The CIA Triad: Confidentiality, Integrity, Availability",
          "Password strength, hashing, and password managers",
          "Phishing awareness, social engineering, and fake links",
          "Protecting personal privacy on gaming and social platforms"
        ]
      },
      {
        title: "Week 5 — Web Security & Safe Demos",
        subtitle: "How the Web Gets Hacked & Protected",
        badge: "Week 5",
        items: [
          "Web application architecture (clients, servers, databases)",
          "SQL injection concepts and safe demonstrations",
          "Cross-Site Scripting (XSS) fundamentals",
          "Denial of Service (DDoS) concepts and mitigations"
        ]
      },
      {
        title: "Week 6 — Hands-On Cyber Lab & CTF Challenge",
        subtitle: "The Ultimate Team Challenge",
        badge: "Week 6",
        items: [
          "Mini Capture-The-Flag (CTF) tournament",
          "Investigating digital clues and cracking puzzles",
          "Team collaboration and defensive problem-solving",
          "Certificate of completion & exploring future cyber careers"
        ]
      }
    ],
    facilities: [
      {
        title: "Wireshark",
        desc: "View real network traffic live and analyze packet flow across the internet.",
        icon: "📶"
      },
      {
        title: "Linux + VirtualBox",
        desc: "Set up and manage a real virtual machine in a safe, isolated lab sandbox.",
        icon: "🐧"
      },
      {
        title: "AI Tools",
        desc: "Learn faster with modern AI assistance for research, coding, and debugging.",
        icon: "🤖"
      },
      {
        title: "CTF Challenges",
        desc: "Team-based cybersecurity games: investigate clues, crack puzzles, and capture flags.",
        icon: "🛡️"
      }
    ],
    metaTitle: "Cybersecurity for Teens (Ages 13–16) Montreal | Avenir Souriant",
    metaDescription: "Hands-on 6-week cybersecurity course for teens (ages 13–16) in Saint-Laurent, Montreal. Real tools, Linux, Wireshark, ethical hacking, CTF challenges. $35/session ($200 full course)."
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
    slug: "chess-for-beginners",
    title: "Chess Class for Beginners (Boys Ages 8–10)",
    category: "Strategy & Mind Sports (8–10)",
    price: "$120",
    originalPrice: "$150",
    priceUnit: "total (8-week cohort)",
    promoTitle: "Complete 8-Week Chess Package",
    promoDesc: "Special introductory rate: $120 only (regular $150). Includes full 8-week curriculum, tournament chess sets, Chess.com Premium resources, and tournament entry.",
    desc: "An 8-week structured chess course for boys ages 8–10. Develop strategic thinking, concentration, and problem-solving through interactive lessons, tactical puzzles, and a friendly tournament.",
    image: "/images/pexels-larsmai-4815483.jpg",
    flyerImage: "/images/Gemini_Generated_Image_n8ygbrn8ygbrn8yg_1.png",
    active: true,
    subtitle: "Boys Ages 8 to 10 • 8-Week Cohort (2 hrs/week) • Oct 18 – Dec 6, 2026",
    tagline: "MASTER THE ART & STRATEGY OF CHESS",
    subTagline: "A structured 8-week journey for boys ages 8–10. Build critical thinking, sharp focus, and lasting self-confidence.",
    teacher: {
      name: "Abdullah Alatassi & Joud Altabbalh",
      title: "Chess Instructors & Mentors",
      bio: "Passionate chess educators at Académie de l'Avenir Souriant committed to making chess an exciting, enriching, and confidence-building journey for every young learner."
    },
    objectiveHeadline: "Strategy, Logic & Focus",
    objective: "Cultivate observation skills, critical reasoning, and patient problem-solving while mastering piece mechanics, tactical motifs, and opening principles.",
    scheduleHeadline: "Sundays · 2 Hours per Week",
    scheduleDetails: "Weekly 2-hour interactive sessions on Sundays from October 18 to December 6, 2026 (8 weeks total / 16 hours). In-person at our Saint-Laurent center (1325 Rue Cartier).",
    targetAudienceHeadline: "Boys Ages 8–10 (Beginners)",
    targetAudience: "Designed specifically for boys ages 8 to 10 with little to no prior chess experience. Small cohort strictly capped at 12 students (6 boards) for maximum practice.",
    contactPhones: ["(438) 346-7103", "(514) 581-5305", "(514) 808-5216"],
    address: "1325 Rue Cartier, Saint-Laurent, QC H4L 2N6",
    introHeadline: "Why Chess is More Than a Game — It's an Art of Thinking",
    registerSubtext: "Ready to ignite your child's passion for strategy and focus? Register online or contact us directly by phone:",
    enrollmentNotice: "Strictly limited to 12 students (6 chessboards) to guarantee individualized coaching and active over-the-board play. Promotional rate: $120 for the full 8-week course (regular $150). 10% sibling discount applies.",
    longDescription: [
      "Chess is universally celebrated as the greatest strategy game in the world. Far more than simple recreation, chess is an intellectual art form that sharpens critical reasoning, cultivates razor-sharp observation, and trains the mind to think ahead with patience and composure. The Académie de l'Avenir Souriant is proud to present our dedicated 8-Week Chess Course for Beginners, specifically designed for boys ages 8 to 10 at our modern Saint-Laurent center (1325 Rue Cartier).",
      "Led by enthusiastic instructors Abdullah Alatassi and Joud Altabbalh, this program transforms chess from an intimidating board game into an electrifying, interactive journey. Rather than passive lecturing, each weekly 2-hour session blends clear conceptual instruction with multimedia presentations, tactical puzzles on Chess.com, and immediate over-the-board practice.",
      "Running every Sunday from October 18, 2026 to December 6, 2026, the course offers an exceptional educational experience at a special promotional rate of just $120 (regular $150) for the full 8-week curriculum. To ensure every student receives personal attention and active board time, enrollment is strictly capped at 12 participants (6 tournament boards). A 10% discount also applies for siblings."
    ],
    programDescription: [
      "Our 8-week curriculum guides young beginners through every dimension of the royal game: from board geometry and piece values to the golden rules of the opening (rapid piece development, center control, king safety), core tactical patterns (forks, pins, skewers, discovered attacks), and fundamental endgame checkmates.",
      "Students also learn standard algebraic chess notation, analyze classic games played by masters on the HD projector, and develop essential sportsmanship and emotional control. The program culminates in Week 8 with an exciting, friendly Swiss-system tournament, group game analysis, and an official graduation ceremony awarding certificates of achievement."
    ],
    programDetails: [
      { label: "Tuition", value: "$120 for 8 weeks (Regular $150 — Save $30!)" },
      { label: "Payment Model", value: "Complete 8-week cohort package ($15/session equivalent)" },
      { label: "Duration", value: "8 weeks · 2 hours / week (16 hours total)" },
      { label: "Dates", value: "October 18, 2026 – December 6, 2026 (Sundays)" },
      { label: "Audience", value: "Boys ages 8 to 10 (Beginners)" },
      { label: "Class Capacity", value: "Strictly limited to 12 students (6 chess sets)" },
      { label: "Instructors", value: "Abdullah Alatassi & Joud Altabbalh" },
      { label: "Equipment Included", value: "Tournament boards, Chess.com Premium, notation books" },
      { label: "Location", value: "1325 Rue Cartier, Saint-Laurent, QC H4L 2N6" },
      { label: "Family Discount", value: "10% OFF for siblings" }
    ],
    schedule: [
      { day: "Weekly Sunday Session", time: "2 Hours / Week (Oct 18, 2026 – Dec 6, 2026)" },
      { day: "Schedule Details", time: "Exact cohort timing confirmed upon registration" }
    ],
    curriculumTitle: "The Course Roadmap (8 Weeks)",
    curriculumTracks: [
      {
        title: "Week 1 — Introduction to the Game of Chess",
        subtitle: "Board Geometry, History & Piece Setup",
        badge: "Week 1",
        items: [
          "The history, cultural heritage, and noble objective of the game of chess",
          "Navigating the chessboard: ranks, files, diagonals, and square coordinates",
          "Proper initial setup and alignment of pawns and major pieces",
          "Fun mini-games to recognize piece movements and board vision"
        ]
      },
      {
        title: "Week 2 — Piece Movements & Special Rules",
        subtitle: "Mastering the Army & Essential Rules",
        badge: "Week 2",
        items: [
          "Movement mechanics: pawns, knights, bishops, rooks, queen, and king",
          "Special chess rules: castling (kingside & queenside), en passant, and pawn promotion",
          "Understanding the concepts of check, checkmate, and stalemate",
          "Guided practice exercises and simplified mini-matches"
        ]
      },
      {
        title: "Week 3 — Principles of the Opening",
        subtitle: "Starting the Game with Strength & Purpose",
        badge: "Week 3",
        items: [
          "The 3 Golden Rules: rapid piece development, controlling the center, and king safety",
          "Study of classic foundational openings (Italian Game, Spanish Opening / Ruy Lopez)",
          "Common opening traps and how to avoid early blunders (Scholar's Mate defense)",
          "Thematic mini-games with assigned opening positions"
        ]
      },
      {
        title: "Week 4 — Fundamental Tactics",
        subtitle: "Tactical Weapons to Win Material",
        badge: "Week 4",
        items: [
          "Core tactical motifs: forks, pins, skewers, and discovered attacks",
          "Calculating candidate moves and recognizing opponent threats",
          "Interactive chessboard puzzle exercises powered by Chess.com",
          "Mini-game challenge: 'Find the Best Move' speed rounds"
        ]
      },
      {
        title: "Week 5 — The Middlegame Strategy",
        subtitle: "Creating Plans, Outposts & Coordination",
        badge: "Week 5",
        items: [
          "Understanding middlegame objectives and formulating attack or defense plans",
          "Pawn structure fundamentals, strong squares (outposts), and piece harmony",
          "Position evaluation and spotting imbalances on the board",
          "Themed sparring games: attacking the castled king and fighting for central dominance"
        ]
      },
      {
        title: "Week 6 — Endgame Fundamentals",
        subtitle: "The Art of Converting Advantages into Checkmate",
        badge: "Week 6",
        items: [
          "Recognizing the most common and essential endgame positions",
          "Essential checkmating patterns: King + Queen vs King, King + Rook vs King",
          "The principle of opposition, passed pawns, and pawn promotion races",
          "Hands-on checkmate drills against coaches and peers"
        ]
      },
      {
        title: "Week 7 — Strategy & Chess Notation",
        subtitle: "Reading, Writing & Connecting the Phases",
        badge: "Week 7",
        items: [
          "Introduction to standard algebraic chess notation (recording moves)",
          "Connecting the phases: transitioning smoothly from opening to middlegame to endgame",
          "Interactive analysis of a famous historical master game on the HD projector",
          "Full practice games played with complete live move notation"
        ]
      },
      {
        title: "Week 8 — Friendly Tournament & Graduation",
        subtitle: "Putting It All Together & Celebrating Growth",
        badge: "Week 8",
        items: [
          "Friendly end-of-course tournament (Swiss-system format)",
          "Collective group game review with coaches highlighting brilliant moves",
          "Reinforcing sportsmanship, gracious winning, and learning from defeats",
          "Official graduation ceremony, presentation of certificates, and course celebration"
        ]
      }
    ],
    facilitiesTitle: "Equipment & Learning Tools Provided",
    facilities: [
      {
        title: "Tournament Chess Sets",
        desc: "6 official tournament-size chessboards with weighted Staunton pieces for paired over-the-board play.",
        icon: "♟️"
      },
      {
        title: "Chess.com Premium Platform",
        desc: "Teacher-guided digital tools: interactive AI analysis engine, tactical puzzle trainer, and video walkthroughs.",
        icon: "💻"
      },
      {
        title: "HD Presentation Projector",
        desc: "Large-screen interactive display for group lectures, master game analysis, and real-time tactical demonstrations.",
        icon: "📽️"
      },
      {
        title: "Notation & Study Materials",
        desc: "Official score sheets, workbooks, and tactical review sheets to record games and reinforce learning at home.",
        icon: "📝"
      }
    ],
    highlights: [
      "Complete mastery of the chessboard, piece moves, values, and special rules (castling, promotion, en passant)",
      "The 3 golden opening rules: rapid piece development, controlling central squares, and safeguarding the king",
      "Crucial tactical patterns: forks, pins, skewers, and discovered attacks to outmaneuver opponents",
      "Strategic middlegame concepts: pawn structures, outposts, and piece coordination",
      "Essential endgame checkmating techniques with King + Queen and King + Rook",
      "Learning algebraic chess notation to read, record, and review games like a tournament player",
      "Developing vital mental faculties: focus, foresight, patience, logical analysis, and emotional resilience",
      "Hands-on practice on tournament-grade boards paired with Chess.com Premium digital analysis",
      "Exciting friendly end-of-course Swiss tournament with official certificates of achievement",
      "Exclusive cohort capped at 12 boys (ages 8–10) ensuring close guidance from passionate instructors"
    ],
    metaTitle: "Chess Course for Beginners (Boys Ages 8–10) Montreal | Avenir Souriant",
    metaDescription: "Join our 8-week Chess Course for Beginners (Boys ages 8-10) in Saint-Laurent, Montreal. Master tactics, strategy, and opening principles. $120 full course. Starts Oct 18, 2026."
  },
];

export function getCourseBySlug(slug: string): CourseData | undefined {
  return courses.find(c => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return courses.map(c => c.slug);
}
