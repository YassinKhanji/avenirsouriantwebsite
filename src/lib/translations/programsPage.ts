import type { Language } from '@/contexts/LanguageContext';

export interface ProgramsPageTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  banner: {
    text: string;
    button: string;
  };
  card: {
    enrollingNow: string;
    comingSoon: string;
    tuition: string;
    learnMore: string;
    findOutMore: string;
    registerNow: string;
  };
  bottomCta: {
    title: string;
    subtitle: string;
    registerBtn: string;
    contactBtn: string;
  };
}

export const PROGRAMS_PAGE_TRANSLATIONS: Record<Language, ProgramsPageTranslations> = {
  en: {
    hero: {
      title: 'Our Programs',
      subtitle: 'Discover a world of engaging educational and extracurricular activities designed to build confidence, creativity, and language mastery.',
    },
    banner: {
      text: '🎓 Enrollment is now open — spots are filling up fast!',
      button: 'Register Now',
    },
    card: {
      enrollingNow: 'Enrolling Now',
      comingSoon: 'Coming Soon',
      tuition: 'Tuition',
      learnMore: 'Learn More',
      findOutMore: 'Find Out More',
      registerNow: 'Register Now',
    },
    bottomCta: {
      title: 'Ready to Enroll Your Child?',
      subtitle: 'Join the Avenir Souriant family today. Spaces are limited for each cohort to ensure personalized attention and optimal learning.',
      registerBtn: 'Register Now',
      contactBtn: 'Contact Us',
    },
  },

  fr: {
    hero: {
      title: 'Nos Programmes',
      subtitle: "Découvrez un éventail d'activités éducatives et parascolaires captivantes, conçues pour forger la confiance, stimuler la créativité et développer l'excellence linguistique et intellectuelle.",
    },
    banner: {
      text: '🎓 Les inscriptions sont ouvertes — les places sont limitées !',
      button: 'Enregistrer vous',
    },
    card: {
      enrollingNow: 'Inscriptions ouvertes',
      comingSoon: 'Bientôt disponible',
      tuition: 'Tarif',
      learnMore: 'En savoir plus',
      findOutMore: 'Découvrir le cours',
      registerNow: 'Enregistrer vous',
    },
    bottomCta: {
      title: 'Prêt à inscrire votre enfant ?',
      subtitle: "Rejoignez la communauté de l'Avenir Souriant dès aujourd'hui. Chaque cohorte accueille un nombre restreint d'élèves pour assurer un suivi personnalisé de grande qualité.",
      registerBtn: 'Enregistrer vous',
      contactBtn: 'Nous contacter',
    },
  },

  ar: {
    hero: {
      title: 'برامجنا التعليمية',
      subtitle: 'اكتشف باقة متميزة من البرامج الأكاديمية والأنشطة الإثرائية التي تبني الثقة، وتصقل المهارات اللغوية والتفكير الاستراتيجي والتقني.',
    },
    banner: {
      text: '🎓 باب التسجيل مفتوح الآن — بادر بحجز مقعدك قبل اكتمال المجموعات!',
      button: 'سجل الان',
    },
    card: {
      enrollingNow: 'التسجيل متاح الآن',
      comingSoon: 'قريباً',
      tuition: 'الرسوم',
      learnMore: 'معرفة المزيد',
      findOutMore: 'تفاصيل البرنامج',
      registerNow: 'سجل الان',
    },
    bottomCta: {
      title: 'هل أنت جاهز لتسجيل طفلك؟',
      subtitle: 'انضم إلى أسرة المستقبل الباسم اليوم. نحرص على تحديد أعداد الطلاب في كل مجموعة لضمان أعلى مستويات المتابعة الفردية والتعليم المتميز.',
      registerBtn: 'سجل الان',
      contactBtn: 'تواصل معنا',
    },
  },
};
