import type { CourseData } from '@/data/courses';
import type { Language } from '@/contexts/LanguageContext';

export interface LocalizedCourseOverrides {
  title: string;
  category: string;
  price: string;
  desc: string;
  subtitle: string;
  tagline?: string;
  subTagline?: string;
  objectiveHeadline?: string;
  objective?: string;
  scheduleHeadline?: string;
  scheduleDetails?: string;
  targetAudienceHeadline?: string;
  targetAudience?: string;
  introHeadline?: string;
  registerSubtext?: string;
  enrollmentNotice?: string;
  highlights?: string[];
  longDescription?: string[];
  programDescription?: string[];
  teacher?: {
    name: string;
    title: string;
    bio: string;
  };
  programDetails?: { label: string; value: string }[];
  schedule?: { day: string; time: string }[];
  facilitiesTitle?: string;
  facilities?: { title: string; desc?: string; icon?: string }[];
  levelPrograms?: { level: string; title: string; desc: string }[];
  membershipTiers?: {
    level: number | string;
    title: string;
    tagline: string;
    features: string[];
    priceNote?: string;
  }[];
}

const COURSES_OVERRIDES: Record<string, Record<'fr' | 'ar', LocalizedCourseOverrides>> = {
  'arabic-for-non-speakers': {
    fr: {
      title: 'Arabe pour non-arabophones (16 ans et +)',
      category: 'Fondements et immersion (16+)',
      price: '15 $/séance',
      desc: "Lisez et parlez enfin l'arabe avec assurance. Maîtrisez l'alphabet, la phonétique, la grammaire et la lecture du texte coranique avec des cohortes distinctes : dimanches pour hommes et jeudis pour femmes.",
      subtitle: '16 ans et + • Dimanches pour hommes et jeudis pour femmes',
      tagline: "ENFIN, LISEZ ET PARLEZ L'ARABE EN TOUTE AUTONOMIE.",
      subTagline: "Lisez enfin l'arabe par vous-même sans dépendre de personne.",
      objectiveHeadline: 'Lire, comprendre et échanger',
      objective: "Lire et comprendre avec précision et fluidité l'écriture coranique, les ouvrages en langue arabe et les bases de la communication quotidienne.",
      scheduleHeadline: 'Dimanches (Hommes) et Jeudis (Femmes)',
      scheduleDetails: 'Dimanches pour hommes (18h00 – 20h00) et jeudis pour femmes (18h00 – 20h00) en présentiel dans notre centre de Saint-Laurent.',
      targetAudienceHeadline: 'Hommes et femmes (16 ans et plus)',
      targetAudience: 'Adultes et jeunes adultes (16+). Cohortes séparées : dimanches pour hommes et jeudis pour femmes. Possibilité de cours particuliers individuels sur demande.',
      introHeadline: "Devenez autonome dans la lecture et l'expression en langue arabe !",
      registerSubtext: "Prêt à apprendre l'arabe par vous-même ? Inscrivez-vous en ligne ou contactez-nous directement par téléphone :",
      enrollmentNotice: "Paiement à la séance (15 $/séance) — vous ne payez que les cours suivis ! Aucune facturation en cas d'absence. Rabais familial de 10 %.",
      highlights: [
        "Reconnaissance et prononciation exacte des 28 lettres de l'alphabet arabe",
        'Maîtrise des voyelles brèves et longues (Harakat) et des règles phonétiques',
        'Lecture autonome de mots, de phrases et de courts textes',
        'Capacité à lire directement le texte coranique et des ouvrages en arabe',
        'Acquisition des formules usuelles et du vocabulaire de la vie courante',
        'Groupes séparés : dimanches pour les hommes, jeudis pour les femmes',
        'Formule flexible à la séance (15 $/séance) — aucun frais en cas d’absence',
        'Rabais familial de 10 % et cours particuliers sur demande',
      ],
      programDetails: [
        { label: 'Horaire', value: 'Dimanches (Hommes) & Jeudis (Femmes) de 18h à 20h' },
        { label: 'Âge visé', value: 'Adultes et jeunes de 16 ans et plus' },
        { label: 'Tarif', value: '15 $/séance (paiement à la séance)' },
        { label: 'Lieu', value: '1325 Rue Cartier, Saint-Laurent, QC' },
      ],
      schedule: [
        { day: 'Dimanches (Cohorte Hommes)', time: '18h00 – 20h00' },
        { day: 'Jeudis (Cohorte Femmes)', time: '18h00 – 20h00' },
      ],
    },
    ar: {
      title: 'اللغة العربية لغير الناطقين بها (16 سنة فما فوق)',
      category: 'التأسيس والانغماس اللغوي (16+)',
      price: '15 دولار / للجلسة',
      desc: 'تمكّن أخيراً من قراءة والتحدث باللغة العربية باستقلالية تامة. تعلّم الحروف والأصوات وقواعد النطق وقراءة النصوص والقرآن الكريم. جلسات مخصصة: الأحد للرجال والخميس للنساء.',
      subtitle: '16 سنة فما فوق • الأحد للرجال والخميس للنساء',
      tagline: 'أخيراً، اقرأ وتحدث باللغة العربية باستقلالية تامة.',
      subTagline: 'اقرأ النصوص العربية والقرآن الكريم دون الاعتماد على أحد.',
      objectiveHeadline: 'القراءة، الفهم، والتحدث بطلاقة',
      objective: 'إتقان قراءة الرسم القرآني والكتب العربية والمحادثة اليومية بدقة ويسر وبناء ثقة ذاتية راسخة.',
      scheduleHeadline: 'الأحد (للرجال) والخميس (للنساء)',
      scheduleDetails: 'الأحد للرجال (6:00 مساءً – 8:00 مساءً) والخميس للنساء (6:00 مساءً – 8:00 مساءً) حضورياً في مركزنا بسان لوران.',
      targetAudienceHeadline: 'الرجال والنساء (16 سنة فما فوق)',
      targetAudience: 'الكبار والشباب (16 سنة فأكثر). مجموعات منفصلة: الأحد للرجال والخميس للنساء. تتوفر أيضاً دروس فردية خاصة.',
      introHeadline: 'انطلق في مسيرتك لإتقان القراءة والمحادثة بالعربية بكل ثقة!',
      registerSubtext: 'هل أنت مستعد لتعلم قراءة العربية بمفردك؟ سجل الآن عبر الموقع أو اتصل بنا مباشرة:',
      enrollmentNotice: 'الدفع لكل جلسة (15 دولار / للجلسة) — لا تدفع إلا عند الحضور، ولا تُحتسب أي رسوم عند الغياب! خصم 10% للأخوة والعائلات.',
      highlights: [
        'إتقان مخارج الحروف العربية الـ 28 وأشكالها المختلفة',
        'ضبط الحركات القصيرة والطويلة وقواعد التجويد والنطق الأساسية',
        'القراءة المباشرة من المصحف الشريف والكتب العربية بسهولة',
        'اكتساب المفردات الأساسية والتراكيب اللغوية للمحادثة اليومية',
        'جلسات منفصلة: الأحد للرجال والخميس للنساء',
        'مرونة الدفع لكل جلسة (15 دولار / للجلسة) — لا رسوم عند الغياب',
        'خصم عائلي 10% وخيارات الدروس الخاصة المباشرة',
      ],
      programDetails: [
        { label: 'المواعيد', value: 'الأحد (رجال) والخميس (نساء) من 6:00 إلى 8:00 مساءً' },
        { label: 'الفئة المستهدفة', value: '16 سنة فما فوق' },
        { label: 'الرسوم', value: '15 دولار / للجلسة (دفع حسب الحضور)' },
        { label: 'المقر', value: '1325 Rue Cartier, Saint-Laurent, QC' },
      ],
      schedule: [
        { day: 'أيام الأحد (مجموعة الرجال)', time: '6:00 مساءً – 8:00 مساءً' },
        { day: 'أيام الخميس (مجموعة النساء)', time: '6:00 مساءً – 8:00 مساءً' },
      ],
    },
  },

  'arabic-youth-program': {
    fr: {
      title: 'Programme d’arabe et compétences (6 à 14 ans)',
      category: 'Immersion arabe jeunesse (6–14 ans)',
      price: '15 $/séance',
      desc: 'Immersion dynamique en langue arabe pour enfants et jeunes de 6 à 14 ans. 4 cohortes adaptées : Débutant, Intermédiaire et Perfectionnement.',
      subtitle: 'De 6 à 14 ans • 4 cohortes adaptées • Options semaine et vendredi',
      tagline: 'MAÎTRISEZ L’ARABE AVEC CONFIANCE, PLAISIR ET ENTHOUSIASME',
      subTagline: 'Des cours captivants pour les jeunes : niveaux Débutant, Intermédiaire et Ateliers de perfectionnement à Saint-Laurent, Montréal.',
      objectiveHeadline: 'Fluidité, littératie et plaisir culturel',
      objective: "Donner aux jeunes les moyens de lire, parler, écrire et comprendre l'arabe avec joie naturelle, aisance et fierté.",
      scheduleHeadline: 'Horaires flexibles en semaine et le vendredi',
      scheduleDetails: 'Cohortes du lundi au vendredi (8h00 – 16h00 / 18h00) et journées intensives du vendredi. Formule flexible à la séance !',
      targetAudienceHeadline: 'Enfants et adolescents de 6 à 14 ans',
      targetAudience: 'Conçu pour les jeunes apprenants répartis en 4 niveaux adaptés (Débutant, Intermédiaire, Perfectionnement des compétences).',
      introHeadline: "Transformez l'apprentissage de votre enfant grâce à un arabe vivant et interactif",
      registerSubtext: 'Prêt à réserver la place de votre enfant ou des questions sur notre formule à la séance ? Contactez-nous dès aujourd’hui :',
      enrollmentNotice: "Rabais de 10 % pour les fratries ! Paiement à la séance (15 $/séance) — les absences ne sont jamais facturées.",
      highlights: [
        "Méthode active basée sur le jeu, les contes et l'expression orale",
        'Apprentissage structuré de la lecture, de l’écriture et du vocabulaire',
        'Activités enrichissantes : robotique, motricité et projets créatifs',
        '4 cohortes par groupe d’âge et niveau de compétences',
        'Formule flexible à la séance (15 $/séance)',
        'Rabais de 10 % pour les frères et sœurs',
      ],
      programDetails: [
        { label: 'Groupes d’âge', value: 'De 6 à 14 ans (4 cohortes adaptées)' },
        { label: 'Horaires', value: 'Du lundi au vendredi & journées intensives du vendredi' },
        { label: 'Tarif', value: '15 $/séance (paiement à la séance)' },
        { label: 'Lieu', value: '1325 Rue Cartier, Saint-Laurent, QC' },
      ],
      schedule: [
        { day: 'Lundi au Vendredi (Cohortes)', time: '8h00 – 16h00 (jusqu’à 18h00)' },
        { day: 'Vendredis Intensifs (Immersion)', time: '7h30 – 18h00' },
      ],
    },
    ar: {
      title: 'برنامج تعليم اللغة العربية والمهارات للناشئة (6–14 سنة)',
      category: 'انغماس لغوي للناشئة (6–14 سنة)',
      price: '15 دولار / للجلسة',
      desc: 'تعليم تفاعلي ممتع للأطفال واليافعين من 6 إلى 14 سنة. 4 مستويات متدرجة: المبتدئ، المتوسط، وتنمية المهارات اللغوية والإلقاء.',
      subtitle: 'من 6 إلى 14 سنة • 4 مجموعات متدرجة • خيارات خلال الأسبوع ويوم الجمعة',
      tagline: 'أتقن اللغة العربية بثقة وشغف ومرح',
      subTagline: 'برامج ملهمة للأطفال واليافعين في سان لوران، مونتريال: مبتدئ، متوسط، وتطوير المهارات.',
      objectiveHeadline: 'طلاقة اللسان، حب القراءة، والاعتزاز بالهوية',
      objective: 'تمكين الطلاب الصغار من القراءة والكتابة والتحدث وفهم العربية باعتزاز وشغف وثقة ذاتية.',
      scheduleHeadline: 'مواعيد مرنة خلال أيام الأسبوع ويوم الجمعة',
      scheduleDetails: 'مجموعات من الاثنين إلى الجمعة (8:00 صباحاً – 4:00 عصراً / حتى 6:00 مساءً) ومسارات الجمعة المكثفة.',
      targetAudienceHeadline: 'الأطفال والناشئة من 6 إلى 14 سنة',
      targetAudience: 'برامج مصممة خصيصاً لمختلف المستويات، مقسمة إلى 4 فئات عمرية ومستويات مهارية دقيقة.',
      introHeadline: 'اجعل تعلم طفلك للغة العربية تجربة ممتعة ومحببة لقلبه!',
      registerSubtext: 'هل ترغب بحجز مقعد لطفلك أو لديك استفسار عن نظام الدفع بالحصص؟ تواصل معنا اليوم:',
      enrollmentNotice: 'خصم 10% للأخوة! الدفع لكل جلسة (15 دولار / للجلسة) — ولا تدفع أي رسوم عند الغياب.',
      highlights: [
        'أسلوب تعليمي شيق يجمع بين الحوار والقصص والألعاب التفاعلية',
        'تأسيس متين في القراءة والكتابة وقواعد الإملاء والمحادثة',
        'أنشطة إثرائية مرافقة: روبوتات، رياضة، وأشغال يدوية هادفة',
        '4 مجموعات تناسب عمر كل طالب ومستواه المعرفي',
        'مرونة الدفع لكل جلسة (15 دولار / للجلسة)',
        'خصم خاص 10% للأخوة في نفس الأسرة',
      ],
      programDetails: [
        { label: 'الفئات العمرية', value: 'من 6 إلى 14 سنة (4 مستويات متدرجة)' },
        { label: 'الأيام والمواعيد', value: 'من الاثنين إلى الجمعة، ويوم الجمعة المكثف' },
        { label: 'الرسوم', value: '15 دولار / للجلسة (دفع حسب الحضور)' },
        { label: 'المقر', value: '1325 Rue Cartier, Saint-Laurent, QC' },
      ],
      schedule: [
        { day: 'الاثنين إلى الجمعة', time: '8:00 صباحاً – 4:00 عصراً (حتى 6:00 مساءً)' },
        { day: 'يوم الجمعة المكثف', time: '7:30 صباحاً – 6:00 مساءً' },
      ],
    },
  },

  'cybersecurity-for-teens': {
    fr: {
      title: 'Cybersécurité pour adolescents (13 à 16 ans)',
      category: 'Cybersécurité et techno (13–16 ans)',
      price: '35 $/séance',
      desc: "Formation pratique de 6 semaines pour les 13 à 16 ans. De vraies compétences, des outils professionnels et de l'assurance. Réseaux, Linux, sécurité éthique, outils IA et défis CTF.",
      subtitle: 'De 13 à 16 ans • Cohorte de 6 semaines (2 h/semaine)',
      tagline: 'CYBERSÉCURITÉ POUR ADOLESCENTS',
      subTagline: 'Un cours pratique de 6 semaines pour les 13 à 16 ans. De vraies compétences, des outils concrets et une solide confiance.',
      objectiveHeadline: 'Compétences concrètes, outils et confiance',
      objective: "Comprendre le fonctionnement des réseaux, adopter les bons réflexes de sécurité, explorer les métiers de l'informatique et relever des défis pratiques.",
      scheduleHeadline: '6 semaines · 2 heures par semaine',
      scheduleDetails: 'Séances hebdomadaires en présentiel avec mise en pratique sur des ordinateurs de laboratoire dédiés.',
      targetAudienceHeadline: 'Adolescents de 13 à 16 ans',
      targetAudience: 'Passionnés de technologie, de jeux vidéo ou curieux d’apprendre la sécurité informatique et la programmation dans un cadre éthique.',
      introHeadline: "Offrez à votre ado des compétences numériques d'avenir",
      registerSubtext: 'Prêt à inscrire votre adolescent à ce programme innovant ? Inscrivez-vous en ligne ou contactez-nous :',
      enrollmentNotice: "Places strictement limitées pour garantir un encadrement individualisé de chaque participant.",
      highlights: [
        'Compréhension des réseaux informatiques et de l’architecture système',
        'Initiation pratique à Linux et commandes de terminal',
        'Création de machines virtuelles et laboratoires d’expérimentation',
        'Principes de défense cyber : mots de passe, hameçonnage, chiffrement',
        'Sensibilisation à l’éthique du numérique et à l’utilisation responsable de l’IA',
        'Tournoi final de défis CTF (Capture The Flag) avec certificats',
      ],
    },
    ar: {
      title: 'الأمن السيبراني لليافعين (13–16 سنة)',
      category: 'الأمن الرقمي والتقنية (13–16 سنة)',
      price: '35 دولار / للجلسة',
      desc: 'دورة عملية لمدة 6 أسابيع للأعمار من 13 إلى 16 سنة. مهارات حقيقية وأدوات احترافية وثقة رقمية: شبكات، نظام لينكس، التفكير الأمني، أدوات الذكاء الاصطناعي وتحديات CTF.',
      subtitle: 'من 13 إلى 16 سنة • دورة مكثفة لمدة 6 أسابيع (ساعتان أسبوعياً)',
      tagline: 'الأمن السيبراني لجيل المستقبل',
      subTagline: 'دورة تطبيقية عملية لمدة 6 أسابيع للأعمار 13–16 سنة. مهارات حقيقية، أدوات احترافية، وثقة رقمية عالية.',
      objectiveHeadline: 'مهارات تقنية، أدوات عملية، وثقة رقمية راسخة',
      objective: 'فهم بنية الشبكات والإنترنت، واكتساب عادات الأمان الرقمي وحماية الخصوصية، واستكشاف مسارات الذكاء الاصطناعي وتقنية المعلومات.',
      scheduleHeadline: '6 أسابيع · ساعتان أسبوعياً',
      scheduleDetails: 'جلسات أسبوعية تفاعلية وتطبيق عملي على أجهزة الحاسوب في مختبر المركز بسان لوران.',
      targetAudienceHeadline: 'اليافعون والفتيان من 13 إلى 16 سنة',
      targetAudience: 'المهتمون بالحاسوب والتقنية والألعاب الرقمية الراغبون في استثمار شغفهم في مهارات مستقبلية واعدة ومسؤولة.',
      introHeadline: 'امنح ابنك مهارات تقنية حقيقية تحميه وتفتح أمامه آفاق المستقبل الرقمي!',
      registerSubtext: 'مستعد لبدء الدورة؟ سجل الآن عبر الموقع أو اتصل بنا مباشرة:',
      enrollmentNotice: 'المقاعد محدودة جداً لضمان المتابعة الفردية الدقيقة والتطبيق العملي لكل طالب.',
      highlights: [
        'فهم كيفية عمل الشبكات والإنترنت ومكونات الحاسوب',
        'تعلم أوامر نظام التشغيل Linux وأساسيات الأمان الرقمي',
        'بناء مختبرات افتراضية معزولة للتجارب العملية',
        'مبادئ الحماية الرقمية: كلمات المرور، كشف الاحتيال، وتشفير البيانات',
        'استخدام أدوات الذكاء الاصطناعي بأمان ومسؤولية برمجية',
        'تحديات تطبيقية تفاعلية ومسابقة ختامية مع شهادات تقدير',
      ],
    },
  },

  'homeschooling-support-hub': {
    fr: {
      title: 'Pôle d’accompagnement pour l’école à la maison',
      category: 'Éducation à domicile et soutien scolaire',
      price: '149 $/mois',
      desc: 'Un environnement d’apprentissage moderne et stimulant pour les familles pratiquant l’école à la maison. Laboratoires STIM, programmation IA, soutien linguistique et suivi académique.',
      subtitle: 'Secondaire 1 à 6 • Laboratoires STIM • Maîtrise des langues • Horaires flexibles',
      tagline: 'UN ACCOMPAGNEMENT GLOBAL POUR LA RÉUSSITE DE L’ÉDUCATION À DOMICILE',
      subTagline: 'Un pôle complet à Saint-Laurent : ateliers de pointe, soutien pédagogique personnalisé et communauté d’apprentissage chaleureuse.',
      objectiveHeadline: 'Autonomie, excellence et épanouissement',
      objective: 'Fournir un cadre stimulant, des laboratoires équipés et un encadrement pédagogique aligné sur les exigences québécoises.',
      scheduleHeadline: 'Du Lundi au Vendredi (9h00 – 13h00)',
      scheduleDetails: 'Accès en matinée aux ateliers et laboratoires, avec séances thématiques et tutorat personnalisé en après-midi.',
      targetAudienceHeadline: 'Élèves du Secondaire 1 au Secondaire 6 (Pré-universitaire)',
      targetAudience: 'Familles faisant l’école à la maison à la recherche d’infrastructures scientifiques, de socialisation saine et de suivi conforme.',
      introHeadline: 'Un environnement d’apprentissage vivant conçu pour la réussite de l’école à la maison',
      registerSubtext: 'Prêt à inscrire votre enfant ou à en savoir plus sur nos forfaits ? Contactez notre équipe dès aujourd’hui :',
      enrollmentNotice: 'Inscriptions ouvertes pour l’année scolaire et les sessions trimestrielles. Réservez votre place dès maintenant !',
      highlights: [
        'Accès complet aux laboratoires : sciences, robotique, électronique et modélisation',
        'Ateliers pratiques de codage et projets assistés par intelligence artificielle',
        'Soutien linguistique approfondi en arabe, français et anglais avec art oratoire',
        'Accompagnement par un conseiller pédagogique et suivi des portfolios d’évaluation',
        'Tutorat personnalisé en mathématiques, sciences, physique et chimie',
        'Sorties éducatives, foires scientifiques et projets d’équipe stimulants',
        'Formules d’abonnement flexibles (1 mois, 1 trimestre ou année scolaire complète)',
      ],
    },
    ar: {
      title: 'مركز دعم ومرافقة التعليم المنزلي',
      category: 'التعليم المنزلي والمرافقة الأكاديمية',
      price: '149 دولار / شهرياً',
      desc: 'بيئة تعليمية حديثة ومتكاملة للعائلات التي تطبق التعليم المنزلي في مونتريال. مختبرات علوم وتقنية، ورش ذكاء اصطناعي، تمكين لغوي، ومرافقة أكاديمية للمناهج.',
      subtitle: 'من الأول إلى السادس الثانوي • مختبرات علوم وتقنية • تمكين لغوي • مرونة المواعيد',
      tagline: 'دعم أكاديمي وتربوي شامل لنجاح مسيرة التعليم المنزلي',
      subTagline: 'مركز متكامل في سان لوران يوفر بيئة دراسية محفزة، معامل متقدمة، ومتابعة متوافقة مع المعايير التعليمية.',
      objectiveHeadline: 'استقلالية معرفية وتفوق أكاديمي',
      objective: 'توفير بيئة دراسية جاذبة، ومختبرات مجهزة بالكامل، ومتابعة دراسية تلبي متطلبات التقييم الرسمي في كيبيك.',
      scheduleHeadline: 'من الاثنين إلى الجمعة (9:00 صباحاً – 1:00 ظهراً)',
      scheduleDetails: 'جلسات صباحية وورش عمل تطبيقية، مع جلسات دعم ودروس خاصة بعد الظهر.',
      targetAudienceHeadline: 'طلاب المرحلة الثانوية (من الأول وحتى التحضير الجامعي)',
      targetAudience: 'الأسر التي تعتمد التعليم المنزلي وتبحث عن بيئة علمية غنية، وتفاعل اجتماعي بناء، ومتابعة أكاديمية متخصصة.',
      introHeadline: 'بيئة تعليمية ملهمة مصممة خصيصاً لنجاح وتميز طلاب التعليم المنزلي',
      registerSubtext: 'مستعد للاستفادة من خدمات المركز أو معرفة تفاصيل الباقات؟ تواصل معنا اليوم:',
      enrollmentNotice: 'باب التسجيل مفتوح للفصول الدراسية والاشتراكات السنوية. احجز مكانك الآن!',
      highlights: [
        'استخدام كامل للمختبرات: العلوم، الروبوتات، الإلكترونيات، والتصنيع الرقمي',
        'ورش عمل برمجية تطبيقية ومشاريع متقدمة بالذكاء الاصطناعي',
        'تمكين لغوي شامل باللغات العربية والفرنسية والإنجليزية وفنون الإلقاء',
        'مرافقة مستشار أكاديمي لإعداد ومتابعة ملفات التقييم الرسمية',
        'دروس تقوية ومتابعة فردية في الرياضيات والفيزياء والكيمياء',
        'رحلات علمية ومعارض ومشاريع جماعية تطور مهارات القيادة',
        'خطط اشتراك مرنة تناسب احتياجات كل أسرة (شهر، فصل، أو سنة كاملة)',
      ],
    },
  },

  'chess-for-beginners': {
    fr: {
      title: 'Cours d’échecs pour débutants (Garçons de 9 à 14 ans)',
      category: 'Stratégie et sports de l’esprit (9–14 ans)',
      price: '15 $/séance',
      desc: 'Programme structuré de 8 semaines pour garçons de 9 à 14 ans. Développez la pensée stratégique, la concentration et la résolution de problèmes grâce à des leçons interactives, des défis tactiques et un tournoi amical. 120 $ au total (Dimanches, 18 oct. – 6 déc. 2026).',
      subtitle: 'Garçons de 9 à 14 ans • Cohorte de 8 semaines (2 h/semaine) • Dimanches, 18 oct. – 6 déc. 2026',
      tagline: 'MAÎTRISEZ L’ART ET LA STRATÉGIE DU JEU D’ÉCHECS',
      subTagline: 'Un parcours structuré de 8 semaines pour garçons de 9 à 14 ans. Développez la pensée critique, la concentration et la confiance en soi.',
      objectiveHeadline: 'Stratégie, logique et concentration',
      objective: 'Cultiver le sens de l’observation, le raisonnement logique et la patience tout en maîtrisant les pièces, les motifs tactiques et les ouvertures.',
      scheduleHeadline: 'Dimanches · 10h00 – 12h00',
      scheduleDetails: 'Séances interactives de 2 heures chaque dimanche du 18 octobre au 6 décembre 2026 (8 séances / 16 heures) de 10h00 à 12h00. En présentiel au centre de Saint-Laurent (1325 Rue Cartier).',
      targetAudienceHeadline: 'Garçons de 9 à 14 ans (Débutants)',
      targetAudience: 'Conçu spécialement pour les garçons de 9 à 14 ans ayant peu ou pas d’expérience préalable. Groupe strictement limité à 10 places pour une pratique optimale.',
      introHeadline: 'Pourquoi les échecs sont bien plus qu’un jeu — un art de la pensée',
      registerSubtext: 'Prêt à éveiller la passion de votre enfant pour la stratégie et la réflexion ? Inscrivez-vous en ligne ou par téléphone :',
      enrollmentNotice: 'Tarif spécial de lancement : 120 $ au total pour les 8 semaines (15 $/séance). Strictement limité à 10 élèves — réservez vite !',
      highlights: [
        'Maîtrise complète de l’échiquier, de la valeur des pièces et des règles spéciales (roque, promotion, prise en passant)',
        'Les 3 règles d’or de l’ouverture : développement rapide, contrôle du centre et sécurité du roi',
        'Motifs tactiques clés : fourchettes, clouages, enfilades et attaques à la découverte',
        'Concepts de milieu de partie : structures de pions et coordination des pièces',
        'Techniques de mat fondamentales en finale (Roi + Dame et Roi + Tour)',
        'Apprentissage de la notation algébrique pour lire et noter les parties',
        'Développement de la concentration, de la patience, de l’anticipation et du sang-froid',
        'Pratique sur échiquiers officiels combinée aux outils numériques Chess.com',
        'Tournoi amical de fin de session avec prix et certificats de réussite',
        'Groupe restreint à 10 places assurant un encadrement très personnalisé',
      ],
      facilitiesTitle: 'Matériel et outils pédagogiques fournis',
      facilities: [
        {
          title: 'Échiquiers de tournoi officiels',
          desc: 'Échiquiers de taille standard avec pièces Staunton plombées pour une pratique en duo.',
          icon: '♟️',
        },
        {
          title: 'Outils interactifs Chess.com',
          desc: 'Analyse assistée par ordinateur, entraîneur de puzzles tactiques et démonstrations guidées.',
          icon: '💻',
        },
        {
          title: 'Projecteur haute définition',
          desc: 'Écran interactif pour les leçons collectives et l’analyse des parties de grands maîtres.',
          icon: '📽️',
        },
        {
          title: 'Cahiers et feuilles de notation',
          desc: 'Feuilles officielles et fiches d’exercices tactiques pour continuer à progresser à la maison.',
          icon: '📝',
        },
      ],
    },
    ar: {
      title: 'دورة الشطرنج للمبتدئين (للفتيان من 9 إلى 14 سنة)',
      category: 'الاستراتيجية ورياضات الذهن (9–14 سنة)',
      price: '15 دولار / للجلسة',
      desc: 'برنامج تدريبي ممتع ومنظم لمدة 8 أسابيع للفتيان من 9 إلى 14 سنة. بناء التفكير الاستراتيجي، والتركيز، وحل المشكلات عبر دروس تفاعلية، وألغاز تكتيكية، وبطولة ودية ختامية. 120 دولار للمسار كاملاً (أيام الأحد، 18 أكتوبر – 6 ديسمبر 2026).',
      subtitle: 'للفتيان من 9 إلى 14 سنة • برنامج لمدة 8 أسابيع (ساعتان أسبوعياً) • أيام الأحد، 18 أكتوبر – 6 ديسمبر 2026',
      tagline: 'أتقن فنون واستراتيجيات الشطرنج',
      subTagline: 'رحلة تدريبية تفاعلية لمدة 8 أسابيع للفتيان من 9 إلى 14 سنة. بناء التفكير الاستراتيجي، والتركيز العالي، والثقة بالنفس.',
      objectiveHeadline: 'الاستراتيجية، المنطق، وقوة التركيز',
      objective: 'تنمية دقة الملاحظة والتفكير المنطقي والصبر، مع إتقان حركة القطع والمفاهيم التكتيكية ومبادئ الافتتاحيات.',
      scheduleHeadline: 'أيام الأحد · 10:00 صباحاً – 12:00 ظهراً',
      scheduleDetails: 'جلسات تفاعلية أسبوعية لمدة ساعتين كل أحد من 18 أكتوبر إلى 6 ديسمبر 2026 (8 جلسات / 16 ساعة تدريبية) من 10:00 صباحاً إلى 12:00 ظهراً، حضورياً في مركزنا بسان لوران (1325 Rue Cartier).',
      targetAudienceHeadline: 'الفتيان من 9 إلى 14 سنة (مستوى مبتدئ)',
      targetAudience: 'مخصص للفتيان من 9 إلى 14 سنة ممن لديهم خبرة قليلة أو لا خبرة سابقة لديهم في الشطرنج. المقاعد محددة بـ 10 طلاب فقط لضمان التدريب العملي المباشر.',
      introHeadline: 'لماذا يُعد الشطرنج أكثر من مجرد لعبة — إنه فن التفكير الاستراتيجي',
      registerSubtext: 'هل أنت مستعد لتنمية مهارات التفكير والتخطيط لدى ابنك؟ سجل الآن عبر الموقع أو اتصل بنا مباشرة:',
      enrollmentNotice: 'سعر إطلاق استثنائي: 120 دولار فقط للمسار الكامل المكون من 8 أسابيع (15 دولار / للجلسة). العدد محدود بـ 10 طلاب — سارع بحجز المقعد!',
      highlights: [
        'الإتقان التام لرقعة الشطرنج وحركة القطع وقيمتها والقواعد الخاصة (التبييت، الترقية، والأخذ بالمرور)',
        'القواعد الذهبية الثلاث للافتتاحيات: سرعة نشر القطع، السيطرة على الوسط، وتأمين الملك',
        'الأنماط التكتيكية الحاسمة: الشوكة، التثبيت، السيخ، والهجوم المكشوف للتفوق على الخصم',
        'مفاهيم وسط اللعبة: هيكل البيادق وتنسيق القطع والتخطيط الهجومي',
        'نهايات الأدوار الأساسية وطرق تحقيق الإماتة (الملك والوزير، الملك والقلعة)',
        'تعلم التدوين الجبري للشطرنج لقراءة المباريات وتسجيلها كالمحترفين',
        'صقل المهارات الذهنية: التركيز العميق، الصبر، بعد النظر، والانضباط العاطفي',
        'تطبيق عملي على رقع الشطرنج الرسمية مع استخدام منصة Chess.com للتحليل الذكي',
        'بطولة ودية ختامية مع جوائز تشجيعية وشهادات إنجاز معتمدة',
        'مجموعة مقتصرة بدقة على 10 طلاب فقط تضمن المتابعة الفردية الحثيثة من المدربين',
      ],
      facilitiesTitle: 'الأدوات والمعدات التعليمية المقدمة',
      facilities: [
        {
          title: 'رقع وقطع شطرنج بطولات رسمية',
          desc: 'رقع قياسية مع قطع Staunton الثقيلة المخصصة للمنافسات والتدريب الثنائي.',
          icon: '♟️',
        },
        {
          title: 'منصة وأدوات Chess.com الاحترافية',
          desc: 'تحليل تكتيكي بالذكاء الاصطناعي، وألغاز تفاعلية، وعروض تدريبية مميزة بإشراف المدربين.',
          icon: '💻',
        },
        {
          title: 'شاشة عرض تفاعلية عالية الدقة',
          desc: 'لشرح الدروس الجماعية، وعرض المباريات التاريخية، وتحليل المواقف التكتيكية مباشرة.',
          icon: '📽️',
        },
        {
          title: 'استمارات التدوين ومواد التدريب',
          desc: 'استمارات رسمية لتسجيل النقلات وأوراق عمل لمراجعة الألغاز ومواصلة التمرين في المنزل.',
          icon: '📝',
        },
      ],
    },
  },
};

export function getLocalizedCourse(course: CourseData, lang: Language): CourseData {
  if (lang === 'en') {
    return course;
  }

  const overrides = COURSES_OVERRIDES[course.slug]?.[lang];
  if (!overrides) {
    return course;
  }

  return {
    ...course,
    title: overrides.title || course.title,
    category: overrides.category || course.category,
    price: overrides.price || course.price,
    desc: overrides.desc || course.desc,
    subtitle: overrides.subtitle || course.subtitle,
    tagline: overrides.tagline || course.tagline,
    subTagline: overrides.subTagline || course.subTagline,
    objectiveHeadline: overrides.objectiveHeadline || course.objectiveHeadline,
    objective: overrides.objective || course.objective,
    scheduleHeadline: overrides.scheduleHeadline || course.scheduleHeadline,
    scheduleDetails: overrides.scheduleDetails || course.scheduleDetails,
    targetAudienceHeadline: overrides.targetAudienceHeadline || course.targetAudienceHeadline,
    targetAudience: overrides.targetAudience || course.targetAudience,
    introHeadline: overrides.introHeadline || course.introHeadline,
    registerSubtext: overrides.registerSubtext || course.registerSubtext,
    enrollmentNotice: overrides.enrollmentNotice || course.enrollmentNotice,
    highlights: overrides.highlights || course.highlights,
    longDescription: overrides.longDescription || course.longDescription,
    programDescription: overrides.programDescription || course.programDescription,
    programDetails: overrides.programDetails || course.programDetails,
    schedule: overrides.schedule || course.schedule,
    facilitiesTitle: overrides.facilitiesTitle || course.facilitiesTitle,
    facilities: overrides.facilities || course.facilities,
  };
}
