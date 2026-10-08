import type { Language } from '@/contexts/LanguageContext';

export interface CommonTranslations {
  brandName: string;
  nav: {
    home: string;
    programs: string;
    contact: string;
    register: string;
    registerNow: string;
  };
  footer: {
    tagline: string;
    viewMap: string;
    questions: string;
    quickLinks: string;
    copyright: string;
  };
  popup: {
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    programInterest: string;
    selectProgram: string;
    message: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
    errorRequired: string;
    errorNetwork: string;
  };
  badges: {
    enrollingNow: string;
    comingSoon: string;
    tuition: string;
    learnMore: string;
    findOutMore: string;
  };
}

export const COMMON_TRANSLATIONS: Record<Language, CommonTranslations> = {
  en: {
    brandName: 'Avenir Souriant',
    nav: {
      home: 'Home',
      programs: 'Programs',
      contact: 'Contact',
      register: 'Register',
      registerNow: 'Register Now',
    },
    footer: {
      tagline: 'Join Avenir Souriant and give your child the gift of language and adventure.',
      viewMap: 'View on Google Maps',
      questions: 'Questions?',
      quickLinks: 'Quick Links',
      copyright: 'All rights reserved.',
    },
    popup: {
      title: 'Want to register?',
      subtitle: 'Leave your details and our team will get in touch with you!',
      fullName: 'Full Name *',
      fullNamePlaceholder: 'John Doe',
      email: 'Email Address *',
      emailPlaceholder: 'john@example.com',
      phone: 'Phone Number *',
      programInterest: 'Which program are you interested in?',
      selectProgram: 'Select a program (optional)',
      message: 'Questions or Notes (Optional)',
      messagePlaceholder: 'Tell us a bit about what you are looking for...',
      submitBtn: 'Submit Request',
      submittingBtn: 'Submitting...',
      successTitle: 'Thank You!',
      successDesc: 'We have received your information. A member of our team will contact you shortly.',
      closeBtn: 'Close',
      errorRequired: 'Please fill in all required fields.',
      errorNetwork: 'Something went wrong. Please check your connection and try again.',
    },
    badges: {
      enrollingNow: 'Enrolling Now',
      comingSoon: 'Coming Soon',
      tuition: 'Tuition',
      learnMore: 'Learn More',
      findOutMore: 'Find Out More',
    },
  },

  fr: {
    brandName: 'Avenir Souriant',
    nav: {
      home: 'Accueil',
      programs: 'Programmes',
      contact: 'Contact',
      register: 'S’inscrire',
      registerNow: 'S’inscrire maintenant',
    },
    footer: {
      tagline: "Rejoignez l'Avenir Souriant et offrez à votre enfant le cadeau de la langue et de l'aventure.",
      viewMap: 'Voir sur Google Maps',
      questions: 'Des questions ?',
      quickLinks: 'Liens rapides',
      copyright: 'Tous droits réservés.',
    },
    popup: {
      title: 'Vous souhaitez vous inscrire ?',
      subtitle: 'Laissez vos coordonnées et notre équipe communiquera rapidement avec vous !',
      fullName: 'Nom complet *',
      fullNamePlaceholder: 'Jean Tremblay',
      email: 'Adresse courriel *',
      emailPlaceholder: 'jean@example.com',
      phone: 'Numéro de téléphone *',
      programInterest: 'Quel programme vous intéresse ?',
      selectProgram: 'Sélectionner un programme (optionnel)',
      message: 'Questions ou commentaires (Optionnel)',
      messagePlaceholder: 'Parlez-nous de vos besoins ou de votre enfant...',
      submitBtn: 'Envoyer la demande',
      submittingBtn: 'Envoi en cours...',
      successTitle: 'Merci !',
      successDesc: 'Nous avons bien reçu votre demande. Un membre de notre équipe vous contactera dans les plus brefs délais.',
      closeBtn: 'Fermer',
      errorRequired: 'Veuillez remplir tous les champs obligatoires.',
      errorNetwork: 'Une erreur est survenue. Veuillez vérifier votre connexion et réessayer.',
    },
    badges: {
      enrollingNow: 'Inscriptions ouvertes',
      comingSoon: 'Bientôt disponible',
      tuition: 'Tarif',
      learnMore: 'En savoir plus',
      findOutMore: 'Découvrir le cours',
    },
  },

  ar: {
    brandName: 'المستقبل الباسم',
    nav: {
      home: 'الرئيسية',
      programs: 'البرامج',
      contact: 'تواصل معنا',
      register: 'سجل الان',
      registerNow: 'سجل الان',
    },
    footer: {
      tagline: 'انضم إلى المستقبل الباسم وامنح طفلك فرصة التميز اللغوي وخوض تجربة تعليمية ممتعة.',
      viewMap: 'عرض على خرائط Google',
      questions: 'هل لديك استفسار؟',
      quickLinks: 'روابط سريعة',
      copyright: 'جميع الحقوق محفوظة.',
    },
    popup: {
      title: 'هل ترغب بالتسجيل؟',
      subtitle: 'اترك بياناتك وسيتواصل معك فريقنا للإجابة عن استفساراتك وترتيب التسجيل!',
      fullName: 'الاسم الكامل *',
      fullNamePlaceholder: 'أحمد محمد',
      email: 'البريد الإلكتروني *',
      emailPlaceholder: 'ahmed@example.com',
      phone: 'رقم الهاتف *',
      programInterest: 'ما البرنامج الذي يهمك؟',
      selectProgram: 'اختر برنامجاً (اختياري)',
      message: 'ملاحظات أو أسئلة إضافية (اختياري)',
      messagePlaceholder: 'أخبرنا باحتياجاتك أو معلومات عن الطالب...',
      submitBtn: 'إرسال الطلب',
      submittingBtn: 'جارٍ الإرسال...',
      successTitle: 'شكراً لتواصلك!',
      successDesc: 'تم استلام بياناتك بنجاح. سيتواصل معك أحد مسؤولي الأكاديمية في أقرب وقت.',
      closeBtn: 'إغلاق',
      errorRequired: 'يرجى تعبئة جميع الحقول المطلوبة.',
      errorNetwork: 'حدث خطأ أثناء الإرسال. يرجى التحقق من الاتصال بالإنترنت والمحاولة مجدداً.',
    },
    badges: {
      enrollingNow: 'التسجيل متاح الآن',
      comingSoon: 'قريباً',
      tuition: 'الرسوم',
      learnMore: 'معرفة المزيد',
      findOutMore: 'تفاصيل البرنامج',
    },
  },
};
