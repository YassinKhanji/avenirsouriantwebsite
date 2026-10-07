import type { Language } from '@/contexts/LanguageContext';

export interface ContactPageTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  form: {
    heading: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMessage: string;
    closeBtn: string;
    errorRequired: string;
    errorNetwork: string;
  };
}

export const CONTACT_PAGE_TRANSLATIONS: Record<Language, ContactPageTranslations> = {
  en: {
    hero: {
      title: 'Contact Us',
      subtitle: "Just say مرحبا — we'll take it from there.",
    },
    form: {
      heading: "We'd love to hear from you!",
      fullName: 'Full Name *',
      fullNamePlaceholder: 'John Doe',
      email: 'Email Address *',
      emailPlaceholder: 'john@example.com',
      phone: 'Phone Number *',
      phonePlaceholder: '(514) 581-5305',
      message: 'Message / Inquiry (Optional)',
      messagePlaceholder: 'Tell us how we can help you or your child...',
      submitBtn: 'Send Message',
      submittingBtn: 'Sending...',
      successTitle: 'Message Sent Successfully!',
      successMessage: 'Thank you for reaching out to Avenir Souriant. A member of our administration team will contact you shortly.',
      closeBtn: 'Close',
      errorRequired: 'Please fill in all required fields.',
      errorNetwork: 'Network error. Please check your connection and try again.',
    },
  },

  fr: {
    hero: {
      title: 'Contactez-nous',
      subtitle: 'Dites simplement مرحبا — nous nous occupons du reste avec plaisir.',
    },
    form: {
      heading: "Nous serions ravis d'échanger avec vous !",
      fullName: 'Nom complet *',
      fullNamePlaceholder: 'Jean Tremblay',
      email: 'Adresse courriel *',
      emailPlaceholder: 'jean@example.com',
      phone: 'Numéro de téléphone *',
      phonePlaceholder: '(514) 581-5305',
      message: 'Message ou question (Optionnel)',
      messagePlaceholder: 'Dites-nous comment nous pouvons vous accompagner vous ou votre enfant...',
      submitBtn: 'Envoyer le message',
      submittingBtn: 'Envoi en cours...',
      successTitle: 'Message envoyé avec succès !',
      successMessage: "Merci d'avoir contacté l'Avenir Souriant. Notre équipe administrative communiquera avec vous dans les plus brefs délais.",
      closeBtn: 'Fermer',
      errorRequired: 'Veuillez remplir tous les champs obligatoires.',
      errorNetwork: 'Erreur réseau. Veuillez vérifier votre connexion et réessayer.',
    },
  },

  ar: {
    hero: {
      title: 'تواصل معنا',
      subtitle: 'يكفي أن تقول مرحباً — وفريقنا سيتولى مرافقتك بكل اهتمام.',
    },
    form: {
      heading: 'يسعدنا جداً الإجابة عن استفساراتكم!',
      fullName: 'الاسم الكامل *',
      fullNamePlaceholder: 'أحمد محمد',
      email: 'البريد الإلكتروني *',
      emailPlaceholder: 'ahmed@example.com',
      phone: 'رقم الهاتف *',
      phonePlaceholder: '(514) 581-5305',
      message: 'الرسالة أو الاستفسار (اختياري)',
      messagePlaceholder: 'أخبرنا باحتياجاتك أو كيف يمكننا مساعدة طفلك...',
      submitBtn: 'إرسال الرسالة',
      submittingBtn: 'جارٍ الإرسال...',
      successTitle: 'تم إرسال رسالتك بنجاح!',
      successMessage: 'شكراً لتواصلك مع المستقبل الباسم. سيتواصل معك أحد مسؤولي الإدارة في أقرب وقت للإجابة على جميع استفساراتك.',
      closeBtn: 'إغلاق',
      errorRequired: 'يرجى تعبئة جميع الحقول المطلوبة.',
      errorNetwork: 'حدث خطأ في الاتصال بالشبكة. يرجى التحقق من اتصالك والمحاولة مجدداً.',
    },
  },
};
