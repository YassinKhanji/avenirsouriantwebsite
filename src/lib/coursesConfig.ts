export interface CourseDefinition {
  id: string;
  name: string;
  nameFr?: string;
  nameAr?: string;
  minAge: number;
  maxAge: number;
  genderEligibility: 'all' | 'female' | 'male';
  isChildEligible: boolean; // Allowed in Path A (parent/guardian)
  isAdultEligible: boolean; // Allowed in Path B (18+ self registration)
  is16Plus: boolean;
  sessions?: {
    female?: string;
    male?: string;
    default?: string;
  };
  isActive: boolean;
  description?: string;
}

/**
 * Course catalog for Fall 2026.
 * Configured so an administrator can easily update course names, age limits,
 * gender eligibility, day/session, and active status without modifying the form logic.
 */
export const FALL_2026_COURSES: CourseDefinition[] = [
  {
    id: 'foundation-arabic-6-8',
    name: 'Foundation Arabic Course for Children – Ages 6–8',
    nameFr: 'Cours de base d’arabe pour enfants – 6 à 8 ans',
    nameAr: 'الدورة التأسيسية للغة العربية للأطفال – الأعمار 6–8 سنوات',
    minAge: 6,
    maxAge: 8,
    genderEligibility: 'all',
    isChildEligible: true,
    isAdultEligible: false,
    is16Plus: false,
    isActive: true,
    description: 'Foundational Arabic letters, phonetics, and early reading for young learners.',
  },
  {
    id: 'arabic-language-8-12',
    name: 'Arabic Language Course for Children – Ages 8–12',
    nameFr: 'Cours de langue arabe pour enfants – 8 à 12 ans',
    nameAr: 'دورة اللغة العربية للأطفال – الأعمار 8–12 سنة',
    minAge: 8,
    maxAge: 12,
    genderEligibility: 'all',
    isChildEligible: true,
    isAdultEligible: false,
    is16Plus: false,
    isActive: true,
    description: 'Structured Arabic vocabulary, sentence formation, grammar, and reading comprehension.',
  },
  {
    id: 'reading-skills-girls-8-14',
    name: 'Reading Skills Development for Girls – Ages 8–14',
    nameFr: 'Développement des compétences en lecture pour filles – 8 à 14 ans',
    nameAr: 'تطوير مهارات القراءة للفتيات – الأعمار 8–14 سنة',
    minAge: 8,
    maxAge: 14,
    genderEligibility: 'female',
    isChildEligible: true,
    isAdultEligible: false,
    is16Plus: false,
    isActive: true,
    description: 'Dedicated female cohort focusing on fluent Arabic literacy and textual recitation.',
  },
  {
    id: 'reading-skills-boys-12-14',
    name: 'Reading Skills Development for Boys – Ages 12–14',
    nameFr: 'Développement des compétences en lecture pour garçons – 12 à 14 ans',
    nameAr: 'تطوير مهارات القراءة للفتيان – الأعمار 12–14 سنة',
    minAge: 12,
    maxAge: 14,
    genderEligibility: 'male',
    isChildEligible: true,
    isAdultEligible: false,
    is16Plus: false,
    isActive: true,
    description: 'Dedicated male cohort developing independent Arabic reading, pronunciation, and fluency.',
  },
  {
    id: 'foundation-arabic-16-plus',
    name: 'Foundation Arabic Course for Non-Arabic Speakers – Ages 16+',
    nameFr: 'Cours de base d’arabe pour non-arabophones – 16 ans et plus',
    nameAr: 'الدورة التأسيسية للغة العربية للناطقين بغيرها – الأعمار 16 سنة فما فوق',
    minAge: 16,
    maxAge: 99,
    genderEligibility: 'all',
    isChildEligible: true, // 16 and 17-year olds registered by parent/guardian
    isAdultEligible: true, // 18+ registered by themselves
    is16Plus: true,
    sessions: {
      female: 'Friday',
      male: 'Sunday',
      default: 'Friday (Women) / Sunday (Men)',
    },
    isActive: true,
    description: 'Comprehensive program for non-native adults and teens (16+). Female session on Friday, Male session on Sunday.',
  },
];

/**
 * Calculates exact age in full years from a YYYY-MM-DD birthdate string.
 */
export function calculateAge(dateOfBirth: string, referenceDate: Date = new Date()): number | null {
  if (!dateOfBirth) return null;
  const parts = dateOfBirth.split('-');
  if (parts.length !== 3) return null;

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;

  const birthDate = new Date(year, month, day);
  if (isNaN(birthDate.getTime())) return null;

  let age = referenceDate.getFullYear() - birthDate.getFullYear();
  const m = referenceDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && referenceDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return age >= 0 ? age : null;
}

/**
 * Look up a course by its unique ID.
 */
export function getCourseById(id: string): CourseDefinition | undefined {
  return FALL_2026_COURSES.find((c) => c.id === id);
}

/**
 * Get courses available for a specific pathway.
 */
export function getCoursesForPathway(pathway: 'parent' | 'adult'): CourseDefinition[] {
  if (pathway === 'adult') {
    return FALL_2026_COURSES.filter((c) => c.isActive && c.isAdultEligible);
  }
  return FALL_2026_COURSES.filter((c) => c.isActive && c.isChildEligible);
}

/**
 * Validates whether a student is eligible for a specific course based on age and gender.
 */
export function checkCourseEligibility(
  course: CourseDefinition,
  student: { age: number | null; gender: string; pathway: 'parent' | 'adult' }
): { eligible: boolean; reason?: string } {
  // Gender check
  if (course.genderEligibility === 'female' && student.gender && student.gender.toLowerCase() !== 'female') {
    return {
      eligible: false,
      reason: 'This course is exclusively for female students.',
    };
  }

  if (course.genderEligibility === 'male' && student.gender && student.gender.toLowerCase() !== 'male') {
    return {
      eligible: false,
      reason: 'This course is exclusively for male students.',
    };
  }

  // Age check
  if (student.age !== null) {
    if (student.age < course.minAge) {
      if (course.is16Plus) {
        return {
          eligible: false,
          reason: `Student must be at least 16 years old for this course (current age: ${student.age}).`,
        };
      }
      return {
        eligible: false,
        reason: `Student is ${student.age} years old. Minimum age for this course is ${course.minAge}.`,
      };
    }

    if (student.age > course.maxAge) {
      return {
        eligible: false,
        reason: `Student is ${student.age} years old. Maximum age for this course is ${course.maxAge}.`,
      };
    }
  }

  // Adult pathway check
  if (student.pathway === 'adult' && !course.isAdultEligible) {
    return {
      eligible: false,
      reason: 'This course is only available for children and youth registered by a parent/guardian.',
    };
  }

  return { eligible: true };
}

/**
 * Automatically assigns the session for 16+ courses based on student gender.
 * Female -> Friday
 * Male -> Sunday
 */
export function getAssignedSession(course: CourseDefinition, gender?: string): string | undefined {
  if (!course.sessions) return undefined;
  if (!gender) return course.sessions.default;

  const normalized = gender.toLowerCase();
  if (normalized === 'female' && course.sessions.female) {
    return course.sessions.female;
  }
  if (normalized === 'male' && course.sessions.male) {
    return course.sessions.male;
  }
  return course.sessions.default;
}

export const SCHOOL_GRADES = [
  'Kindergarten',
  'Grade 1',
  'Grade 2',
  'Grade 3',
  'Grade 4',
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12',
];

export const EDUCATION_LEVELS = [
  'High School – Grade 10',
  'High School – Grade 11',
  'High School – Grade 12',
  'CEGEP',
  'Undergraduate Studies',
  'Graduate Studies',
  'Not currently a student',
  'Other',
];

export const PAYMENT_METHODS = ['Cash', 'e-Transfer', 'Other'];

export const COMMUNICATION_LANGUAGES = ['English', 'French', 'Arabic'];
