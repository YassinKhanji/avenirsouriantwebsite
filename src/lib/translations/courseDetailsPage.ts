import type { Language } from '@/contexts/LanguageContext';

export interface CourseDetailsPageTranslations {
  backBtn: string;
  quickInfo: {
    schedule: string;
    ageGroup: string;
    tuition: string;
    location: string;
  };
  sections: {
    overview: string;
    objective: string;
    whoIsItFor: string;
    highlights: string;
    scheduleAndLocation: string;
    instructor: string;
    facilities: string;
    readMore: string;
    readLess: string;
  };
  registerCard: {
    title: string;
    subtitle: string;
    button: string;
    questions: string;
  };
  stickyBar: {
    button: string;
  };
}

export const COURSE_DETAILS_PAGE_TRANSLATIONS: Record<Language, CourseDetailsPageTranslations> = {
  en: {
    backBtn: '← Back to All Programs',
    quickInfo: {
      schedule: 'Schedule',
      ageGroup: 'Age Group',
      tuition: 'Tuition',
      location: 'Location',
    },
    sections: {
      overview: 'Program Overview',
      objective: 'Core Objectives',
      whoIsItFor: 'Who Is This Program For?',
      highlights: 'What You Will Gain',
      scheduleAndLocation: 'Schedule & Location',
      instructor: 'Lead Educator',
      facilities: 'Tools & Learning Materials',
      readMore: 'Read Full Overview ↓',
      readLess: 'Show Less ↑',
    },
    registerCard: {
      title: 'Ready to Join?',
      subtitle: 'Secure your spot today. Limited cohort capacity ensures personalized attention.',
      button: 'Register Now',
      questions: 'Have questions? Call us directly:',
    },
    stickyBar: {
      button: 'Register Now',
    },
  },

  fr: {
    backBtn: '← Retour à tous les programmes',
    quickInfo: {
      schedule: 'Horaire',
      ageGroup: 'Groupe d’âge',
      tuition: 'Tarif',
      location: 'Emplacement',
    },
    sections: {
      overview: 'Présentation du programme',
      objective: 'Objectifs pédagogiques',
      whoIsItFor: 'À qui s’adresse ce programme ?',
      highlights: 'Ce que votre enfant développera',
      scheduleAndLocation: 'Horaire et centre de formation',
      instructor: 'Éducateur responsable',
      facilities: 'Matériel et outils fournis',
      readMore: 'Lire la suite ↓',
      readLess: 'Réduire ↑',
    },
    registerCard: {
      title: 'Prêt à vous inscrire ?',
      subtitle: 'Réservez votre place dès aujourd’hui. Places limitées pour garantir un encadrement personnalisé.',
      button: 'Enregistrer vous',
      questions: 'Des questions ? Appelez-nous directement :',
    },
    stickyBar: {
      button: 'Enregistrer vous',
    },
  },

  ar: {
    backBtn: '← العودة إلى جميع البرامج',
    quickInfo: {
      schedule: 'المواعيد',
      ageGroup: 'الفئة العمرية',
      tuition: 'الرسوم',
      location: 'المقر',
    },
    sections: {
      overview: 'نظرة عامة على البرنامج',
      objective: 'الأهداف التعليمية والمهارية',
      whoIsItFor: 'الفئات المستهدفة بالبرنامج',
      highlights: 'ما سيكتسبه الطالب',
      scheduleAndLocation: 'المواعيد ومقر التدريب',
      instructor: 'المعلم والمدرب المشرف',
      facilities: 'الأدوات والمواد التعليمية الموفرة',
      readMore: 'قراءة كامل الوصف ↓',
      readLess: 'عرض أقل ↑',
    },
    registerCard: {
      title: 'هل ترغب بالانضمام؟',
      subtitle: 'احجز مقعدك الآن. نحرص على أعداد محدودة في كل مجموعة لضمان الاهتمام الفردي الأمثل.',
      button: 'سجل الان',
      questions: 'هل لديك استفسار؟ اتصل بنا مباشرة:',
    },
    stickyBar: {
      button: 'سجل الان',
    },
  },
};
