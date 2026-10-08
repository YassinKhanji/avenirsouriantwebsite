import type { CourseData, CurriculumTrack } from '@/data/courses';
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
  curriculumTitle?: string;
  curriculumTracks?: CurriculumTrack[];
  facilitiesTitle?: string;
  facilities?: { title: string; desc?: string; icon?: string }[];
  levelPrograms?: { level: string; title: string; desc: string }[];
  durationOptions?: { duration: string; label: string; desc: string }[];
  membershipTiers?: any[];
  parentChallenges?: string[];
}

const COURSES_OVERRIDES: Record<string, Record<'fr' | 'ar', LocalizedCourseOverrides>> = {
  // ═════════════════════════════════════════════════════════════════
  // 1. ARABIC FOR NON-SPEAKERS (AGES 16+)
  // ═════════════════════════════════════════════════════════════════
  'arabic-for-non-speakers': {
    fr: {
      title: 'Arabe pour non-arabophones (16 ans et +)',
      category: 'Fondements et immersion (16+)',
      price: '15 $/séance',
      desc: "Lisez et parlez enfin l'arabe avec assurance. Maîtrisez l'alphabet, la phonétique, la grammaire et la lecture du texte coranique avec des cohortes distinctes : dimanches pour hommes et jeudis pour femmes.",
      subtitle: '16 ans et + • Dimanches pour hommes et jeudis pour femmes',
      tagline: "ENFIN, LISEZ ET PARLEZ L'ARABE EN TOUTE AUTONOMIE.",
      subTagline: "Lisez enfin l'arabe par vous-même sans dépendre de personne.",
      teacher: {
        name: 'Bashar Mashnouk et enseignants spécialisés',
        title: 'Enseignants seniors en langue arabe',
        bio: "Éducateurs professionnels reconnus pour une pédagogie claire, accessible et progressive qui rend l'apprentissage de l'arabe intuitif, valorisant et motivant.",
      },
      objectiveHeadline: 'Lire, comprendre et échanger',
      objective: "Lire et comprendre avec précision et fluidité l'écriture coranique, les ouvrages en langue arabe et les bases de la communication quotidienne.",
      scheduleHeadline: 'Dimanches (Hommes) et Jeudis (Femmes)',
      scheduleDetails: 'Dimanches pour hommes (18h00 – 20h00) et jeudis pour femmes (18h00 – 20h00) en présentiel dans notre centre de Saint-Laurent (1325 Rue Cartier).',
      targetAudienceHeadline: 'Hommes et femmes (16 ans et plus)',
      targetAudience: 'Adultes et jeunes adultes (16+). Cohortes séparées : dimanches pour hommes et jeudis pour femmes. Possibilité de cours particuliers individuels sur demande.',
      introHeadline: "Devenez autonome dans la lecture et l'expression en langue arabe !",
      registerSubtext: "Prêt à apprendre l'arabe par vous-même ? Inscrivez-vous en ligne ou contactez-nous directement par téléphone :",
      enrollmentNotice: "Paiement à la séance (15 $/séance) — vous ne payez que les cours suivis ! Aucune facturation en cas d'absence. Rabais familial de 10 %.",
      longDescription: [
        "Avez-vous toujours voulu lire et comprendre l'arabe par vous-même sans dépendre de personne ? Le programme d'arabe pour non-arabophones de l'Académie de l'Avenir Souriant a été spécialement conçu pour amener les adultes et adolescents (16 ans et plus) de zéro à une lecture fluide et assurée des textes arabes, du Coran et des écrits classiques.",
        "Guidé par des enseignants chevronnés, dont Bashar Mashnouk — reconnu pour sa méthode pédagogique simple, vivante et structurée —, ce cours élimine toute ambiguïté et décompose la phonétique arabe, la calligraphie des lettres, les voyelles (Harakat) et la formation des mots en étapes progressives et accessibles.",
        "Les séances sont organisées en groupes dédiés : les dimanches pour les hommes et les jeudis pour les femmes dans notre centre de Saint-Laurent (1325 Rue Cartier, Montréal). Les frais sont de seulement 15 $ par séance (ou 150 $ pour 10 séances) avec une formule flexible à la carte : vous ne payez que les séances auxquelles vous participez, sans aucuns frais en cas d'absence ! Un rabais de 10 % s'applique aux membres d'une même famille."
      ],
      programDescription: [
        "Grâce à un enseignement méthodique, vous maîtriserez les formes des lettres (isolées et attachées), les voyelles brèves et longues (Fatha, Damma, Kasra, Soukoun, Chaddah, Tanween), les transitions phonétiques et la liaison fluide des mots en arabe standard moderne et en calligraphie classique.",
        "Le programme vous permet d'acquérir une véritable autonomie de lecture, une élocution précise et une confiance renouvelée, avec des exercices pratiques spécialement adaptés aux adultes."
      ],
      programDetails: [
        { label: 'Tarif', value: '15 $/séance (150 $ pour 10 séances)' },
        { label: 'Mode de paiement', value: 'À la séance — payez uniquement si présent (aucune charge si absent)' },
        { label: 'Rabais familial', value: '10 % de réduction pour les membres d’une même famille' },
        { label: 'Horaire (Hommes)', value: 'Dimanches de 18h00 à 20h00' },
        { label: 'Horaire (Femmes)', value: 'Jeudis de 18h00 à 20h00' },
        { label: 'Public cible', value: 'Adultes et adolescents (16+) — Groupes hommes et femmes séparés' },
        { label: 'Enseignant', value: 'Bashar Mashnouk et équipe professorale' },
        { label: 'Lieu', value: '1325 Rue Cartier, Saint-Laurent, QC H4L 2N6' }
      ],
      schedule: [
        { day: 'Dimanches (Cohorte Hommes 16+)', time: '18h00 – 20h00' },
        { day: 'Jeudis (Cohorte Femmes 16+)', time: '18h00 – 20h00' }
      ],
      highlights: [
        "Reconnaissance et prononciation exacte des 28 lettres de l'alphabet arabe",
        'Maîtrise des voyelles brèves et longues (Harakat) et des règles phonétiques',
        'Lecture autonome de mots, de phrases et de courts textes',
        'Capacité à lire directement le texte coranique et des ouvrages en arabe',
        'Acquisition des formules usuelles et du vocabulaire de la vie courante',
        'Groupes séparés : dimanches pour les hommes, jeudis pour les femmes',
        'Formule flexible à la séance (15 $/séance) — aucun frais en cas d’absence',
        'Rabais familial de 10 % et cours particuliers sur demande'
      ]
    },
    ar: {
      title: 'اللغة العربية لغير الناطقين بها (16 سنة فما فوق)',
      category: 'التأسيس والانغماس اللغوي (16+)',
      price: '15 دولار / للجلسة',
      desc: 'تمكّن أخيراً من قراءة والتحدث باللغة العربية باستقلالية تامة. تعلّم الحروف والأصوات وقواعد النطق وقراءة النصوص والقرآن الكريم. جلسات مخصصة: الأحد للرجال والخميس للنساء.',
      subtitle: '16 سنة فما فوق • الأحد للرجال والخميس للنساء',
      tagline: 'أخيراً، اقرأ وتحدث باللغة العربية باستقلالية تامة.',
      subTagline: 'اقرأ النصوص العربية والقرآن الكريم دون الاعتماد على أحد.',
      teacher: {
        name: 'بشار مشنوك ونخبة من مدرسي اللغة العربية',
        title: 'كبار مدرسي اللغة العربية',
        bio: 'تربويون محترفون متميزون بأسلوب تعليمي سلس ومباشر وميسر يجعل تعلم قراءة العربية تجربة سهلة ومحفزة وممتعة للجميع.'
      },
      objectiveHeadline: 'القراءة، الفهم، والتحدث بطلاقة',
      objective: 'إتقان قراءة الرسم القرآني والكتب العربية والمحادثة اليومية بدقة ويسر وبناء ثقة ذاتية راسخة.',
      scheduleHeadline: 'الأحد (للرجال) والخميس (للنساء)',
      scheduleDetails: 'الأحد للرجال (6:00 مساءً – 8:00 مساءً) والخميس للنساء (6:00 مساءً – 8:00 مساءً) حضورياً في مركزنا بسان لوران (1325 Rue Cartier).',
      targetAudienceHeadline: 'الرجال والنساء (16 سنة فما فوق)',
      targetAudience: 'الكبار والشباب (16 سنة فأكثر). مجموعات منفصلة: الأحد للرجال والخميس للنساء. تتوفر أيضاً دروس فردية خاصة.',
      introHeadline: 'انطلق في مسيرتك لإتقان القراءة والمحادثة بالعربية بكل ثقة!',
      registerSubtext: 'هل أنت مستعد لتعلم قراءة العربية بمفردك؟ سجل الآن عبر الموقع أو اتصل بنا مباشرة:',
      enrollmentNotice: 'الدفع لكل جلسة (15 دولار / للجلسة) — لا تدفع إلا عند الحضور، ولا تُحتسب أي رسوم عند الغياب! خصم 10% للأخوة والعائلات.',
      longDescription: [
        'هل تمنيت دائماً أن تقرأ وتفهم اللغة العربية بمفردك دون الحاجة للاستعانة بأحد؟ صُمم برنامج "العربية لغير الناطقين بها" في أكاديمية المستقبل الباسم خصيصاً ليأخذ المتعلمين من الكبار واليافعين (16 سنة فما فوق) من نقطة الصفر وحتى قراءة النصوص العربية وآيات القرآن الكريم بوضوح وطلاقة وثقة تامة.',
        'بقيادة نخبة من أساتذة اللغة العربية المتمرسين وفي مقدمتهم الأستاذ بشار مشنوك — المشهود له بأسلوب تدريسي ميسر وممنهج وشديد الوضوح — تزول كل الصعوبات ويتم تبسيط مخارج الحروف، وأشكالها، والحركات الإعرابية، وتركيب الكلمات عبر خطوات عملية وتطبيقية سهلة.',
        'تُنظم الفصول في مجموعات مستقلة: أيام الأحد للرجال وأيام الخميس للنساء في مركزنا بسان لوران (1325 Rue Cartier، مونتريال). الرسوم محددة بمرونة بـ 15 دولار للجلسة (أو 150 دولار لباقة 10 جلسات)، بنظام الدفع حسب الحضور الفعلي: تدفع فقط مقابل الجلسات التي تحضرها، ولا تُفرض أي رسوم عند الغياب! كما يتاح خصم 10% لأفراد العائلة.'
      ],
      programDescription: [
        'من خلال التدريب المنهجي المنظم، ستتقن أشكال الحروف منفصلة ومتصلة، والحركات (الفتحة، الضمة، الكسرة، السكون، الشدة، والتنوين)، والانتقالات الصوتية، ووصل الكلمات بسلاسة في اللغة العربية الفصحى والرسم العثماني.',
        'يؤهلك المنهاج للانطلاق المباشر في القراءة المستقلة، مع ضبط مخارج الحروف بدقة وثقة عالية، عبر تمارين تطبيقية مصممة خصيصاً للكبار.'
      ],
      programDetails: [
        { label: 'الرسوم', value: '15 دولار / للجلسة (150$ لـ 10 جلسات)' },
        { label: 'نظام السداد', value: 'الدفع للجلسة فقط — لا تدفع في حال الغياب' },
        { label: 'الخصم العائلي', value: 'خصم 10% لأفراد العائلة' },
        { label: 'مواعيد الرجال', value: 'الأحد: 6:00 مساءً – 8:00 مساءً' },
        { label: 'مواعيد النساء', value: 'الخميس: 6:00 مساءً – 8:00 مساءً' },
        { label: 'الفئة المستهدفة', value: 'الكبار واليافعون (16 سنة فما فوق) — فصول منفصلة' },
        { label: 'المدرب', value: 'بشار مشنوك ونخبة من الأساتذة' },
        { label: 'المقر', value: '1325 Rue Cartier, Saint-Laurent, QC H4L 2N6' }
      ],
      schedule: [
        { day: 'أيام الأحد (مجموعة الرجال 16+)', time: '6:00 مساءً – 8:00 مساءً' },
        { day: 'أيام الخميس (مجموعة النساء 16+)', time: '6:00 مساءً – 8:00 مساءً' }
      ],
      highlights: [
        'إتقان مخارج الحروف العربية الـ 28 وأشكالها المختلفة',
        'ضبط الحركات القصيرة والطويلة وقواعد التجويد والنطق الأساسية',
        'القراءة المباشرة من المصحف الشريف والكتب العربية بسهولة',
        'اكتساب المفردات الأساسية والتراكيب اللغوية للمحادثة اليومية',
        'جلسات منفصلة: الأحد للرجال والخميس للنساء',
        'مرونة الدفع لكل جلسة (15 دولار / للجلسة) — لا رسوم عند الغياب',
        'خصم عائلي 10% وخيارات الدروس الخاصة المباشرة'
      ]
    }
  },

  // ═════════════════════════════════════════════════════════════════
  // 2. ARABIC YOUTH PROGRAM (AGES 6–14)
  // ═════════════════════════════════════════════════════════════════
  'arabic-youth-program': {
    fr: {
      title: 'Programme d’arabe et compétences (6 à 14 ans)',
      category: 'Immersion arabe jeunesse (6–14 ans)',
      price: '15 $/séance',
      desc: 'Immersion dynamique en langue arabe pour enfants et jeunes de 6 à 14 ans. 4 cohortes adaptées : Débutant, Intermédiaire et Perfectionnement.',
      subtitle: 'De 6 à 14 ans • 4 cohortes adaptées • Options semaine et vendredi',
      tagline: 'MAÎTRISEZ L’ARABE AVEC CONFIANCE, PLAISIR ET ENTHOUSIASME',
      subTagline: 'Des cours captivants pour les jeunes : niveaux Débutant, Intermédiaire et Ateliers de perfectionnement à Saint-Laurent, Montréal.',
      teacher: {
        name: 'Éducateurs arabophones certifiés',
        title: 'Spécialistes en pédagogie de la jeunesse',
        bio: "Éducateurs bilingues et bienveillants, spécialisés dans l’apprentissage actif de l'enfant, la phonétique et l'immersion narrative interactive pour jeunes non-arabophones."
      },
      objectiveHeadline: 'Fluidité, littératie et plaisir culturel',
      objective: "Donner aux jeunes les moyens de lire, parler, écrire et comprendre l'arabe avec joie naturelle, aisance et fierté.",
      scheduleHeadline: 'Horaires flexibles en semaine et le vendredi',
      scheduleDetails: 'Cohortes du lundi au vendredi (8h00 – 16h00 / 18h00) et journées intensives du vendredi. Formule flexible à la séance !',
      targetAudienceHeadline: 'Enfants et adolescents de 6 à 14 ans',
      targetAudience: 'Conçu pour les jeunes apprenants répartis en 4 niveaux adaptés (Débutant, Intermédiaire, Perfectionnement des compétences).',
      introHeadline: "Transformez l'apprentissage de votre enfant grâce à un arabe vivant et interactif",
      registerSubtext: 'Prêt à réserver la place de votre enfant ou des questions sur notre formule à la séance ? Contactez-nous dès aujourd’hui :',
      enrollmentNotice: "Rabais de 10 % pour les fratries ! Paiement à la séance (15 $/séance) — les absences ne sont jamais facturées.",
      longDescription: [
        "Vous recherchez un programme d'arabe enrichissant, motivant et joyeux pour votre enfant à Montréal ? L'Académie de l'Avenir Souriant est ravie d'offrir ses cours d'arabe pour non-arabophones au sein de son centre moderne situé au 1325 Rue Cartier à Saint-Laurent.",
        "Notre programme est spécialement conçu pour connecter les jeunes avec la langue arabe dans un environnement chaleureux, bienveillant et sans pression. Loin de la mémorisation passive et répétitive, notre pédagogie combine phonétique interactive, contes illustrés, jeux ludo-éducatifs et dialogues de groupe pour faire de l'arabe la matière préférée de votre enfant.",
        "Nous offrons une flexibilité totale aux familles : le tarif n'est que de 15 $ par séance (ou 150 $ pour un forfait de 10 séances). Vous payez à la séance, ce qui signifie que vous ne payez que pour les journées où votre enfant est présent — en cas d'absence, aucun frais n'est facturé ! De plus, nous offrons un rabais additionnel de 10 % pour les frères et sœurs."
      ],
      programDescription: [
        "Notre formation est structurée en quatre cohortes ciblées par âge et niveau afin que chaque élève progresse à son rythme. Que votre enfant découvre l'alphabet pour la toute première fois ou souhaite perfectionner sa lecture et son expression orale, nos enseignants certifiés offrent un accompagnement attentif et personnalisé.",
        "Chaque journée associe exercices linguistiques structurés, défis de groupe, activités artistiques et mises en situation concrètes qui développent une fierté authentique et un amour durable de la langue."
      ],
      levelPrograms: [
        {
          level: "6–8 ans",
          title: "Classe Débutants (Niveau 1)",
          desc: "Du lundi au vendredi | 8h00 – 16h00 (jusqu'à 18h00). Découverte ludique et stimulante des lettres arabes, de la phonétique, des chiffres, des couleurs et des phrases du quotidien à travers des comptines, des jeux interactifs et des exercices guidés."
        },
        {
          level: "8–12 ans",
          title: "Classe Intermédiaire (Niveau 2)",
          desc: "Du lundi au vendredi | 8h00 – 16h00 (jusqu'à 18h00). Élargissement du vocabulaire, apprentissage des voyelles (Harakat), construction de phrases complètes, lecture de courtes histoires, dialogues actifs et prise de confiance à l'oral."
        },
        {
          level: "8–14 ans",
          title: "Session Intensive de Compétences — Vendredis",
          desc: "Vendredis | 7h30 – 18h00. Une journée complète d'immersion hebdomadaire axée sur l'art oratoire, la compréhension de texte, l'écriture expressive, la culture et des projets linguistiques en équipe."
        },
        {
          level: "12–14 ans",
          title: "Perfectionnement et Cohorte Avancée",
          desc: "Du lundi au vendredi | 8h00 – 16h00 (jusqu'à 18h00). Vocabulaire enrichi, arabe standard moderne (Fusha), analyse de textes, structures grammaticales et préparation des élèves à une littératie autonome."
        }
      ],
      programDetails: [
        { label: 'Tarif', value: '15 $/séance (150 $ pour 10 séances)' },
        { label: 'Mode de paiement', value: 'Paiement à la séance — payez uniquement si présent (aucune charge si absent)' },
        { label: 'Rabais fratrie', value: '10 % de réduction pour les frères et sœurs' },
        { label: 'Groupes d’âge', value: '6–8 ans, 8–12 ans, 8–14 ans et 12–14 ans' },
        { label: 'Options d’horaire', value: 'Lun–Ven 8h00 – 16h00 / Vendredis 7h30 – 18h00' },
        { label: 'Lieu', value: '1325 Rue Cartier, Saint-Laurent, QC H4L 2N6' },
        { label: 'Langue', value: 'Arabe standard moderne (pour non-arabophones)' }
      ],
      schedule: [
        { day: 'Classe Débutants (6–8 ans)', time: 'Lundi au Vendredi | 8h00 – 16h00 (jusqu’à 18h00)' },
        { day: 'Classe Intermédiaire (8–12 ans)', time: 'Lundi au Vendredi | 8h00 – 16h00 (jusqu’à 18h00)' },
        { day: 'Vendredi Intensif (8–14 ans)', time: 'Vendredis | 7h30 – 18h00' },
        { day: 'Cohorte Avancée (12–14 ans)', time: 'Lundi au Vendredi | 8h00 – 16h00 (jusqu’à 18h00)' }
      ],
      highlights: [
        "Méthode active basée sur le jeu, les contes et l'expression orale",
        'Apprentissage structuré de la lecture, de l’écriture et du vocabulaire',
        'Activités enrichissantes : robotique, motricité et projets créatifs',
        '4 cohortes par groupe d’âge et niveau de compétences',
        'Formule flexible à la séance (15 $/séance)',
        'Rabais de 10 % pour les frères et sœurs'
      ]
    },
    ar: {
      title: 'برنامج تعليم اللغة العربية والمهارات للناشئة (6–14 سنة)',
      category: 'انغماس لغوي للناشئة (6–14 سنة)',
      price: '15 دولار / للجلسة',
      desc: 'تعليم تفاعلي ممتع للأطفال واليافعين من 6 إلى 14 سنة. 4 مستويات متدرجة: المبتدئ، المتوسط، وتنمية المهارات اللغوية والإلقاء.',
      subtitle: 'من 6 إلى 14 سنة • 4 مجموعات متدرجة • خيارات خلال الأسبوع ويوم الجمعة',
      tagline: 'أتقن اللغة العربية بثقة وشغف ومرح',
      subTagline: 'برامج ملهمة للأطفال واليافعين في سان لوران، مونتريال: مبتدئ، متوسط، وتطوير المهارات.',
      teacher: {
        name: 'معلمون تربويون معتمدون وناطقون بالعربية',
        title: 'أخصائيو التربية والتعليم للناشئة',
        bio: 'تربويون ذوو خبرة وشغف بالتعليم التفاعلي واكتساب اللغة بالأنشطة والقصص المشوقة للأطفال واليافعين غير الناطقين بالعربية.'
      },
      objectiveHeadline: 'طلاقة اللسان، حب القراءة، والاعتزاز بالهوية',
      objective: 'تمكين الطلاب الصغار من القراءة والكتابة والتحدث وفهم العربية باعتزاز وشغف وثقة ذاتية.',
      scheduleHeadline: 'مواعيد مرنة خلال أيام الأسبوع ويوم الجمعة',
      scheduleDetails: 'مجموعات من الاثنين إلى الجمعة (8:00 صباحاً – 4:00 عصراً / حتى 6:00 مساءً) ومسارات الجمعة المكثفة.',
      targetAudienceHeadline: 'الأطفال والناشئة من 6 إلى 14 سنة',
      targetAudience: 'برامج مصممة خصيصاً لمختلف المستويات، مقسمة إلى 4 فئات عمرية ومستويات مهارية دقيقة.',
      introHeadline: 'اجعل تعلم طفلك للغة العربية تجربة ممتعة ومحببة لقلبه!',
      registerSubtext: 'هل ترغب بحجز مقعد لطفلك أو لديك استفسار عن نظام الدفع بالحصص؟ تواصل معنا اليوم:',
      enrollmentNotice: 'خصم 10% للأخوة! الدفع لكل جلسة (15 دولار / للجلسة) — ولا تدفع أي رسوم عند الغياب.',
      longDescription: [
        'هل تبحث عن برنامج لغة عربية محفز وممتع لطفلك في مونتريال؟ يسعد أكاديمية المستقبل الباسم أن تقدم دورات اللغة العربية لغير الناطقين بها في مركزها الحديث الكائن في 1325 Rue Cartier بسان لوران.',
        'صُمم برنامجنا خصيصاً لمساعدة الناشئة على التواصل مع اللغة العربية في بيئة دافئة ومشجعة وخالية تماماً من الضغوط. بدلاً من التلقين الجاف والحفظ الرتيب، يجمع منهاجنا بين التدريب الصوتي، والقصص التفاعلية، والأنشطة الإبداعية، والحوار المستمر ليجعل من اللغة العربية المادة المفضلة لطفلك.',
        'نؤمن بالمرونة الكاملة للعائلات: تبلغ الرسوم 15 دولار فقط للجلسة (أو 150 دولار لباقة 10 جلسات). يمكنك السداد حسب الحضور الفعلي فقط — ولا تدفع أي رسوم عن الأيام التي يغيب فيها طفلك! إضافة إلى خصم خاص 10% للإخوة والأخوات.'
      ],
      programDescription: [
        'ينقسم برنامجنا إلى أربعة مستويات مهارية وعمرية دقيقة لضمان تعلم كل طالب بالعمق والسرعة المناسبين له. وسواء كان طفلك يكتشف الحروف للمرة الأولى أو يطمح لصقل مهاراته في القراءة والخطابة، يقدم معلمونا المعتمدون دعماً فردياً متواصلاً.',
        'تدمج كل جلسة التدريبات اللغوية بالتحديات الجماعية والفنون التعبيرية والتطبيقات الحوارية التي تزرع في نفوس الأبناء الفخر والارتباط الوثيق بلغتهم.'
      ],
      levelPrograms: [
        {
          level: "6–8 سنوات",
          title: "الصف التأسيسي للمبتدئين (المستوى 1)",
          desc: "من الاثنين إلى الجمعة | 8:00 صباحاً – 4:00 عصراً (حتى 6:00 مساءً). مدخل شيق وممتع لتعلم الحروف العربية، الأصوات، الأرقام، الألوان، والجمل اليومية عبر الأناشيد والألعاب التفاعلية والتمارين الموجهة."
        },
        {
          level: "8–12 سنة",
          title: "الصف المتوسط (المستوى 2)",
          desc: "من الاثنين إلى الجمعة | 8:00 صباحاً – 4:00 عصراً (حتى 6:00 مساءً). توسيع الحصيلة اللغوية، إتقان الحركات الإعرابية، تركيب الجمل، قراءة القصص القصيرة، وإجراء الحوارات لتعزيز الطلاقة والثقة."
        },
        {
          level: "8–14 سنة",
          title: "برنامج المهارات المكثف — أيام الجمعة",
          desc: "أيام الجمعة | 7:30 صباحاً – 6:00 مساءً. معايشة لغوية كاملة طوال اليوم تركز على الإلقاء والخطابة، الفهم القرائي، التعبير الكتابي، والأنشطة اللغوية التعاونية."
        },
        {
          level: "12–14 سنة",
          title: "تطوير المهارات والمستوى المتقدم",
          desc: "من الاثنين إلى الجمعة | 8:00 صباحاً – 4:00 عصراً (حتى 6:00 مساءً). مفردات متقدمة، قواعد اللغة العربية الفصحى، التراكيب النحوية، تحليل النصوص الأدبية، والتهيئة للقراءة والكتابة المستقلة بطلاقة."
        }
      ],
      programDetails: [
        { label: 'الرسوم', value: '15 دولار / للجلسة (150$ لـ 10 جلسات)' },
        { label: 'نظام الدفع', value: 'الدفع للجلسة فقط — لا تدفع في حال الغياب' },
        { label: 'خصم الأخوة', value: 'خصم 10% للإخوة والأخوات' },
        { label: 'الفئات العمرية', value: '6–8، 8–12، 8–14، 12–14 سنة' },
        { label: 'خيارات المواعيد', value: 'الاثنين–الجمعة 8:00 ص – 4:00 ع / الجمعة 7:30 ص – 6:00 م' },
        { label: 'المقر', value: '1325 Rue Cartier, Saint-Laurent, QC H4L 2N6' },
        { label: 'المادة', value: 'اللغة العربية الفصحى المعاصرة (لغير الناطقين بها)' }
      ],
      schedule: [
        { day: 'الصف التأسيسي (6–8 سنوات)', time: 'الاثنين إلى الجمعة | 8:00 صباحاً – 4:00 عصراً (حتى 6:00 مساءً)' },
        { day: 'الصف المتوسط (8–12 سنة)', time: 'الاثنين إلى الجمعة | 8:00 صباحاً – 4:00 عصراً (حتى 6:00 مساءً)' },
        { day: 'يوم الجمعة المكثف (8–14 سنة)', time: 'أيام الجمعة | 7:30 صباحاً – 6:00 مساءً' },
        { day: 'المستوى المتقدم (12–14 سنة)', time: 'الاثنين إلى الجمعة | 8:00 صباحاً – 4:00 عصراً (حتى 6:00 مساءً)' }
      ],
      highlights: [
        'أسلوب تعليمي شيق يجمع بين الحوار والقصص والألعاب التفاعلية',
        'تأسيس متين في القراءة والكتابة وقواعد الإملاء والمحادثة',
        'أنشطة إثرائية مرافقة: روبوتات، رياضة، وأشغال يدوية هادفة',
        '4 مجموعات تناسب عمر كل طالب ومستواه المعرفي',
        'مرونة الدفع لكل جلسة (15 دولار / للجلسة)',
        'خصم خاص 10% للأخوة في نفس الأسرة'
      ]
    }
  },

  // ═════════════════════════════════════════════════════════════════
  // 3. CYBERSECURITY FUNDAMENTALS (AGES 14+)
  // ═════════════════════════════════════════════════════════════════
  'cybersecurity-for-teens': {
    fr: {
      title: 'Fondamentaux de la cybersécurité (14 ans et plus)',
      category: 'Cybersécurité et techno (14 ans et +)',
      price: '150 $',
      desc: 'Vous êtes curieux de savoir ce qui se passe réellement derrière votre écran? Notre cours Fondamentaux de la cybersécurité s’adresse aux débutants qui souhaitent comprendre le fonctionnement des ordinateurs, des réseaux et de la sécurité en ligne grâce à un apprentissage pratique. Aucune expérience préalable en cybersécurité n’est requise.',
      subtitle: '14 ans et plus • 6 semaines (jeudis 18h30 à 20h30) • Début : Jeudi le 29 octobre',
      tagline: 'FONDAMENTAUX DE LA CYBERSÉCURITÉ',
      subTagline: 'Vous utilisez la technologie tous les jours... Mais savez-vous vraiment comment elle fonctionne ? Regardez derrière l’écran.',
      teacher: {
        name: 'Mentors en cyberdéfense et technologie',
        title: 'Éducateurs spécialisés en cybersécurité',
        bio: 'Éducateurs passionnés dédiés à enseigner aux débutants les bonnes pratiques de sécurité numérique, les réseaux, Linux et les concepts éthiques de protection informatique.'
      },
      objectiveHeadline: 'Un apprentissage pratique et interactif',
      objective: 'Comprendre le fonctionnement des ordinateurs, des réseaux et de la sécurité en ligne grâce à un apprentissage pratique. Conçu pour les débutants qui veulent découvrir ce qui se passe réellement derrière l’écran.',
      scheduleHeadline: '6 semaines · Jeudis de 18h30 à 20h30',
      scheduleDetails: 'Début : Jeudi le 29 octobre. Séances pratiques hebdomadaires de 2 heures chaque jeudi soir de 18h30 à 20h30 pendant 6 semaines en présentiel au centre de Saint-Laurent (1325 Rue Cartier). Les inscriptions sont ouvertes.',
      targetAudienceHeadline: 'Débutants – 14 ans et plus',
      targetAudience: 'S’adresse aux débutants âgés de 14 ans et plus. Aucune expérience préalable en cybersécurité requise — les débutants sont chaleureusement bienvenus !',
      introHeadline: 'Vous utilisez la technologie tous les jours... Mais savez-vous vraiment comment elle fonctionne ?',
      registerSubtext: 'Les inscriptions sont ouvertes. Envoyez-nous un message privé ou appelez-nous au 514-515-4492 pour vous inscrire :',
      enrollmentNotice: 'Les inscriptions sont ouvertes ! Tarif : 150 $ pour la session complète de 6 semaines (jeudis de 18h30 à 20h30, début : jeudi le 29 octobre). Places limitées. Envoyez un message privé ou appelez le 514-515-4492 pour vous inscrire.',
      longDescription: [
        'Vous êtes curieux de savoir ce qui se passe réellement derrière votre écran? Vous utilisez la technologie tous les jours : sites web, serveurs, routeurs, applications, données et réseaux sociaux. Mais savez-vous vraiment comment tout cela fonctionne ?',
        'Notre cours Fondamentaux de la cybersécurité s’adresse aux débutants (14 ans et plus) qui souhaitent comprendre le fonctionnement des ordinateurs, des réseaux et de la sécurité en ligne grâce à un apprentissage pratique et interactif. Aucune expérience préalable en cybersécurité n’est requise.',
        'Grâce à des ateliers pratiques en laboratoire, les participants explorent la circulation des données sur Internet (adresses IP, requêtes DNS, routeurs, trafic HTTPS chiffré, serveurs et applications), s’initient à Linux, découvrent les réflexes de cyberdéfense et relèvent des défis captivants dans un environnement sécurisé et supervisé.',
        'Les frais d’inscription sont de 150 $ pour la session complète de 6 semaines (les jeudis de 18h30 à 20h30, début le jeudi 29 octobre). Les inscriptions sont ouvertes : envoyez-nous un message privé ou appelez-nous au 514-515-4492 pour réserver votre place.'
      ],
      programDescription: [
        'À travers des ateliers pratiques et interactifs, les participants progressent au fil d’un parcours structuré de 6 semaines : de la compréhension des réseaux et du trafic Internet aux systèmes d’exploitation, aux principes de cyberdéfense et à la sécurité des applications web.',
        'Le cours se conclut par un grand défi cyber en équipe de type Capture-The-Flag (CTF). Les participants analysent des indices, résolvent des énigmes de sécurité et protègent des systèmes dans une ambiance collaborative et stimulante.'
      ],
      programDetails: [
        { label: 'Frais d’inscription', value: '150 $ (programme complet de 6 semaines)' },
        { label: 'Durée', value: '6 semaines · 2 heures par semaine (12 heures au total)' },
        { label: 'Horaire', value: 'Jeudis de 18h30 à 20h30' },
        { label: 'Date de début', value: 'Jeudi 29 octobre' },
        { label: 'Âge', value: '14 ans et plus (Débutants bienvenus)' },
        { label: 'Prérequis', value: 'Aucune expérience préalable en cybersécurité requise' },
        { label: 'Format', value: 'Laboratoire pratique et interactif (Réseaux, Linux, Défense, CTF)' },
        { label: 'Inscriptions', value: 'Ouvertes — Message privé ou appel au 514-515-4492' },
        { label: 'Lieu', value: '1325 Rue Cartier, Saint-Laurent, QC H4L 2N6' }
      ],
      schedule: [
        { day: 'Jeudis (Hebdomadaire)', time: '18h30 à 20h30 (Début le 29 octobre)' },
        { day: 'Durée de la cohorte', time: '6 semaines (12 heures de formation)' }
      ],
      highlights: [
        'Conçu pour les débutants : aucune expérience préalable en cybersécurité requise',
        'Comprendre la technologie : routeurs, adresses IP, requêtes DNS, serveurs et HTTPS chiffré',
        'Fondamentaux des ordinateurs et initiation pratique au système Linux',
        'Défense et sécurité : mots de passe solides, détection d’hameçonnage et protection des données',
        'Sites web, serveurs et applications : découvrez ce qui se passe derrière l’écran',
        'Défis d’équipe et résolution concrète d’énigmes lors du laboratoire CTF',
        'Tarif avantageux : 150 $ pour l’ensemble des 6 semaines avec attestation de réussite'
      ],
      curriculumTracks: [
        {
          title: 'Semaine 1 — Les fondamentaux des réseaux',
          subtitle: 'Comment fonctionne réellement Internet',
          badge: 'Semaine 1',
          items: [
            'Adresses IP et résolution de noms DNS',
            'Routeurs et flux de données sur Internet',
            'Observation des paquets réseau avec Wireshark',
            'Comprendre la transmission sécurisée des données (chiffrement HTTPS)'
          ]
        },
        {
          title: 'Semaine 2 — Ordinateurs et initiation à Linux',
          subtitle: 'Au cœur de la machine',
          badge: 'Semaine 2',
          items: [
            'Composants matériels et architecture d’un ordinateur',
            'Linux vs Windows : pourquoi les experts en sécurité utilisent Linux',
            'Commandes de base du terminal et navigation dans les fichiers',
            'Permissions utilisateurs, contrôles d’accès et sécurité'
          ]
        },
        {
          title: 'Semaine 3 — Virtualisation et environnement de lab sécurisé',
          subtitle: 'Construire son environnement d’expérimentation',
          badge: 'Semaine 3',
          items: [
            'Installation et configuration de VirtualBox',
            'Création d’une machine virtuelle dans un bac à sable isolé',
            'Comprendre les serveurs, les applications et l’isolation réseau',
            'Méthodes sécurisées d’exploration et outils pratiques'
          ]
        },
        {
          title: 'Semaine 4 — Fondamentaux de la cybersécurité et défense',
          subtitle: 'Principes essentiels de protection',
          badge: 'Semaine 4',
          items: [
            'La triade CIA : Confidentialité, Intégrité, Disponibilité',
            'Force des mots de passe, hachage et gestionnaires sécurisés',
            'Sensibilisation à l’hameçonnage, ingénierie sociale et faux liens',
            'Protection de la vie privée sur les applications, jeux et réseaux sociaux'
          ]
        },
        {
          title: 'Semaine 5 — Sécurité Web et démonstrations sécurisées',
          subtitle: 'Comment le Web est attaqué et protégé',
          badge: 'Semaine 5',
          items: [
            'Architecture des applications Web (clients, serveurs, bases de données)',
            'Concepts d’injection SQL et démonstrations en milieu contrôlé',
            'Principes du Cross-Site Scripting (XSS)',
            'Attaques par déni de service (DDoS) et méthodes d’atténuation'
          ]
        },
        {
          title: 'Semaine 6 — Atelier pratique et tournoi CTF',
          subtitle: 'Le défi d’équipe ultime',
          badge: 'Semaine 6',
          items: [
            'Tournoi amical de type Capture-The-Flag (CTF)',
            'Enquête sur des indices numériques et résolution d’énigmes',
            'Collaboration en équipe et esprit d’analyse défensif',
            'Remise des attestations et découverte des carrières en technologie'
          ]
        }
      ],
      facilitiesTitle: 'Outils et environnements de laboratoire',
      facilities: [
        {
          title: 'Wireshark',
          desc: 'Visualisez le trafic réseau en temps réel et analysez la circulation des paquets de données sur Internet.',
          icon: '📶'
        },
        {
          title: 'Linux + VirtualBox',
          desc: 'Configurez et pilotez une machine virtuelle complète dans un bac à sable sécurisé et isolé.',
          icon: '🐧'
        },
        {
          title: 'Défense et sécurité',
          desc: 'Apprenez la sécurité des mots de passe, le chiffrement, la prévention de l’hameçonnage et la protection des données.',
          icon: '🛡️'
        },
        {
          title: 'Défis CTF',
          desc: 'Jeux de cybersécurité en équipe : enquêtez sur des indices, déchiffrez des énigmes et capturez les drapeaux.',
          icon: '🏆'
        }
      ]
    },
    ar: {
      title: 'أساسيات الأمن السيبراني (14 سنة فما فوق)',
      category: 'الأمن السيبراني والتقنية (14 سنة فما فوق)',
      price: '150$',
      desc: 'هل تساءلت يوماً عما يحدث فعلاً خلف الشاشة؟ تقدم دورة أساسيات الأمن السيبراني للمبتدئين فرصة لفهم كيفية عمل أجهزة الكمبيوتر والشبكات والأمن على الإنترنت من خلال تعلم عملي وتفاعلي. لا يشترط وجود خبرة سابقة في الأمن السيبراني.',
      subtitle: '14 سنة فما فوق • 6 أسابيع (الخميس من 6:30 إلى 8:30 مساءً) • تبدأ الخميس 29 أكتوبر',
      tagline: 'أساسيات الأمن السيبراني',
      subTagline: 'تستخدم التكنولوجيا كل يوم... لكن هل تعرف حقاً كيف تعمل؟ انظر إلى ما وراء الشاشة من خلال تجربة تعليمية عملية وتفاعلية.',
      teacher: {
        name: 'مدربو الأمن السيبراني والتقنية',
        title: 'خبراء التعليم التقني والأمن الرقمي',
        bio: 'مدربون محترفون وشغوفون بتمكين المبتدئين والناشئة من فهم آلية عمل التكنولوجيا واكتساب عادات الأمان الرقمي وفهم أسس لينكس والشبكات بأسلوب أخلاقي وآمن.'
      },
      objectiveHeadline: 'تعلم عملي وتفاعلي',
      objective: 'فهم كيفية عمل أجهزة الكمبيوتر والشبكات والأمن على الإنترنت من خلال تدريب عملي وتفاعلي. مصممة للمبتدئين الراغبين في اكتشاف ما يدور خلف الشاشة واكتساب عادات الأمان الرقمي.',
      scheduleHeadline: '6 أسابيع · الخميس من 6:30 إلى 8:30 مساءً',
      scheduleDetails: 'تبدأ في يوم الخميس 29 أكتوبر. جلسات أسبوعية تفاعلية لمدة ساعتين كل خميس من الساعة 6:30 إلى 8:30 مساءً لمدة 6 أسابيع في مقر المركز بسان لوران (1325 Rue Cartier). التسجيل مفتوح الآن.',
      targetAudienceHeadline: 'المبتدئون من عمر 14 سنة فما فوق',
      targetAudience: 'مصممة للمبتدئين من عمر 14 سنة فما فوق. لا يشترط وجود أي خبرة سابقة في الأمن السيبراني — نرحب بالمبتدئين بكل سرور!',
      introHeadline: 'تستخدم التكنولوجيا كل يوم... لكن هل تعرف حقاً كيف تعمل؟',
      registerSubtext: 'التسجيل مفتوح الآن. أرسلوا لنا رسالة خاصة أو اتصلوا على 514-515-4492 للتسجيل:',
      enrollmentNotice: 'التسجيل مفتوح الآن! الرسوم: 150$ لكامل دورة الـ 6 أسابيع (أيام الخميس من 6:30 إلى 8:30 مساءً، تبدأ في 29 أكتوبر). المقاعد محدودة. أرسلوا لنا رسالة خاصة أو اتصلوا على 514-515-4492 للتسجيل.',
      longDescription: [
        'هل تساءلت يوماً عما يحدث فعلاً خلف الشاشة؟ أنت تستخدم التكنولوجيا كل يوم — من المواقع الإلكترونية، والخوادم، وأجهزة التوجيه، إلى التطبيقات، والبيانات، ومنصات التواصل الاجتماعي. ولكن هل تعرف حقاً كيف تعمل كل هذه المنظومة؟',
        'تقدم دورة أساسيات الأمن السيبراني للمبتدئين (من عمر 14 سنة فما فوق) فرصة استثنائية لفهم كيفية عمل أجهزة الكمبيوتر والشبكات والأمن على الإنترنت من خلال تعلم عملي وتفاعلي. لا يشترط وجود أي خبرة سابقة في الأمن السيبراني.',
        'يعمل الطلاب في مختبرات تدريبية تفاعلية لاستكشاف كيفية انتقال البيانات عبر الإنترنت (عناوين IP، نظام أسماء النطاقات DNS، أجهزة التوجيه، التشفير الآمن HTTPS، الخوادم والتطبيقات)، مع التمرن على نظام لينكس، وفهم آليات الدفاع السيبراني وحل تحديات أمنية ممتعة في بيئة آمنة وخاضعة للإشراف الكامل.',
        'الرسوم محددة بـ 150$ لكامل البرنامج التدريبي لمدة 6 أسابيع (كل خميس من الساعة 6:30 إلى 8:30 مساءً، ابتداءً من الخميس 29 أكتوبر). التسجيل مفتوح الآن — أرسلوا لنا رسالة خاصة أو اتصلوا على الرقم 514-515-4492 للتسجيل.'
      ],
      programDescription: [
        'من خلال جلسات مخبرية عملية قائمة على المشاريع، يتدرج الطلاب عبر مسار تدريبي منظم لمدة 6 أسابيع: بدءاً من فهم آلية عمل الشبكات وحركة بيانات الإنترنت، وصولاً إلى أنظمة التشغيل، ومفاهيم الحماية الرقمية، وأساسيات أمان الويب.',
        'تتوج الدورة بتحدٍ تطبيقي شيق بنظام "الاستيلاء على الراية" (Capture-The-Flag - CTF)؛ حيث يعمل الطلاب في فرق للتحقيق في الأدلة الرقمية، وحل الألغاز الأمنية، والدفاع عن الأنظمة — لتطبيق كل ما تعلموه في أجواء حماسية وتعاونية.'
      ],
      programDetails: [
        { label: 'الرسوم', value: '150$ (للدورة كاملة لمدة 6 أسابيع)' },
        { label: 'المدة', value: '6 أسابيع · ساعتان أسبوعياً (12 ساعة تدريبية إجمالاً)' },
        { label: 'الموعد', value: 'الخميس من 6:30 إلى 8:30 مساءً' },
        { label: 'تاريخ البدء', value: 'الخميس 29 أكتوبر' },
        { label: 'الفئة العمرية', value: '14 سنة فما فوق (مرحب بالمبتدئين)' },
        { label: 'المتطلبات', value: 'لا يشترط وجود خبرة سابقة في الأمن السيبراني' },
        { label: 'طبيعة التدريب', value: 'مختبر تقني عملي وتفاعلي (شبكات، لينكس، حماية، وتحديات CTF)' },
        { label: 'حالة التسجيل', value: 'مفتوح الآن — عبر رسالة خاصة أو الاتصال بـ 514-515-4492' },
        { label: 'المكان', value: '1325 Rue Cartier, Saint-Laurent, QC H4L 2N6' }
      ],
      schedule: [
        { day: 'الخميس (أسبوعياً)', time: 'من 6:30 إلى 8:30 مساءً (تبدأ 29 أكتوبر)' },
        { day: 'مدة الدورة', time: '6 أسابيع (12 ساعة تدريبية)' }
      ],
      highlights: [
        'مصممة للمبتدئين: لا يشترط وجود أي خبرة سابقة في الأمن السيبراني',
        'فهم آلية عمل التكنولوجيا: أجهزة التوجيه، عناوين IP، نظام DNS، الخوادم، وتشفير HTTPS',
        'أساسيات أجهزة الكمبيوتر والتعامل العملي مع نظام التشغيل لينكس (Linux)',
        'مبادئ الحماية الرقمية: كلمات المرور القوية، كشف رسائل الاحتيال، وحماية البيانات',
        'مفاهيم أمان المواقع والخوادم والتطبيقات ومعرفة ما يجري خلف الشاشة',
        'تحديات أمنية تفاعلية وحل مشكلات جماعية في بيئة المختبر',
        'قيمة مميزة: 150$ لكامل الدورة لمدة 6 أسابيع مع شهادة إتمام'
      ],
      curriculumTracks: [
        {
          title: 'الأسبوع 1 — أساسيات الشبكات والإنترنت',
          subtitle: 'كيف يعمل الإنترنت فعلياً',
          badge: 'الأسبوع 1',
          items: [
            'عناوين IP ونظام أسماء النطاقات (DNS)',
            'أجهزة التوجيه (Routers) ومسارات انتقال البيانات',
            'فحص حزم البيانات المباشرة باستخدام Wireshark',
            'كيف تنتقل البيانات بأمان (التشفير عبر HTTPS)'
          ]
        },
        {
          title: 'الأسبوع 2 — أساسيات الحاسوب ونظام Linux',
          subtitle: 'في عمق أنظمة التشغيل',
          badge: 'الأسبوع 2',
          items: [
            'مكونات عتاد الحاسوب وبنيته الأساسية',
            'مقارنة بين Linux وWindows: لماذا يعتمد خبراء الأمان على Linux',
            'الأوامر الأساسية في سطر الأوامر (Terminal) والتنقل في الملفات',
            'صلاحيات المستخدمين، وإدارة الوصول، وأمن الملفات'
          ]
        },
        {
          title: 'الأسبوع 3 — الأنظمة الافتراضية والبيئات المعزولة',
          subtitle: 'بناء مختبرك التقني الخاص',
          badge: 'الأسبوع 3',
          items: [
            'تثبيت وإعداد VirtualBox على حاسوبك',
            'إنشاء آلة افتراضية معزولة للتجارب العملية الآمنة',
            'فهم دور الخوادم والتطبيقات والعزل الشبكي',
            'أدوات وتقنيات الاستكشاف الآمن والتجريب'
          ]
        },
        {
          title: 'الأسبوع 4 — أساسيات الأمن السيبراني والدفاع الرقمي',
          subtitle: 'المبادئ الأساسية للحماية الرقمية',
          badge: 'الأسبوع 4',
          items: [
            'ثالوث أمن المعلومات CIA: السرية، السلامة، والتوافر',
            'قوة كلمات المرور والتجزئة (Hashing) ومدراء كلمات المرور',
            'التوعية بهجمات التصيد الاحتيالي والهندسة الاجتماعية والروابط المزيفة',
            'حماية الخصوصية الرقمية في الألعاب والتطبيقات ومنصات التواصل'
          ]
        },
        {
          title: 'الأسبوع 5 — أمان تطبيقات الويب وتجارب الحماية',
          subtitle: 'كيف تُستهدف المواقع وكيف تتم حمايتها',
          badge: 'الأسبوع 5',
          items: [
            'بنية تطبيقات الويب (المستخدم، الخادم، وقواعد البيانات)',
            'مفاهيم هجمات حقن SQL (SQL Injection) وتجارب توضيحية آمنة',
            'أساسيات ثغرات البرمجة عبر المواقع (XSS)',
            'مفاهيم هجمات حجب الخدمة (DDoS) وطرق التصدي لها'
          ]
        },
        {
          title: 'الأسبوع 6 — المختبر التطبيقي وتحدي CTF الختامي',
          subtitle: 'التحدي الجماعي الأكبر',
          badge: 'الأسبوع 6',
          items: [
            'مسابقة تفاعلية مصغرة بنظام "الاستيلاء على الراية" (CTF)',
            'التحقيق في الأدلة الرقمية وحل الألغاز الأمنية في فرق',
            'التعاون الجماعي وحل المشكلات الدفاعية بروح الفريق',
            'شهادات الإتمام واستكشاف مسارات المستقبل في الأمن والتقنية'
          ]
        }
      ],
      facilitiesTitle: 'أدوات المختبر وبيئة التدريب',
      facilities: [
        {
          title: 'برنامج Wireshark',
          desc: 'مراقبة حزم البيانات المباشرة على الشبكة وفهم كيفية انتقال المعلومات عبر الإنترنت.',
          icon: '📶'
        },
        {
          title: 'أنظمة Linux وVirtualBox',
          desc: 'إنشاء وإدارة آلة افتراضية متكاملة في بيئة مخبرية آمنة ومعزولة تماماً.',
          icon: '🐧'
        },
        {
          title: 'الحماية والدفاع الرقمي',
          desc: 'تعلم قوة كلمات المرور، التشفير، التصدي لرسائل الاحتيال، وحماية الخصوصية الرقمية.',
          icon: '🛡️'
        },
        {
          title: 'تحديات ومسابقات CTF',
          desc: 'منافسات جماعية تفاعلية للبحث عن الأدلة الرقمية، وحل الألغاز، والدفاع عن الأنظمة.',
          icon: '🏆'
        }
      ]
    }
  },

  // ═════════════════════════════════════════════════════════════════
  // 4. HOMESCHOOLING SUPPORT HUB
  // ═════════════════════════════════════════════════════════════════
  'homeschooling-support': {
    fr: {
      title: 'Pôle d’accompagnement pour l’école à la maison',
      category: 'Éducation à domicile et soutien scolaire',
      price: 'Formules flexibles',
      desc: 'Un environnement d’apprentissage moderne et stimulant pour les familles pratiquant l’école à la maison : laboratoires STIM, programmation IA, maîtrise des langues, tutorat personnalisé et suivi des portfolios.',
      subtitle: 'Secondaire 1 à 6 • Laboratoires STIM • Maîtrise des langues • Horaires flexibles',
      tagline: 'UN ACCOMPAGNEMENT GLOBAL POUR LA RÉUSSITE DE L’ÉDUCATION À DOMICILE',
      subTagline: 'Des programmes stimulants, des espaces d’apprentissage à la fine pointe et un encadrement académique rigoureux pour faire briller votre enfant.',
      teacher: {
        name: 'Espaces d’apprentissage et installations spécialisées',
        title: 'Infrastructures pédagogiques de pointe',
        bio: 'Laboratoires de sciences et de robotique, ateliers de programmation IA, salles d’étude silencieuses, classes équipées d’écrans interactifs et atelier d’arts créatifs.'
      },
      objectiveHeadline: 'Innover et exceller',
      objective: 'Laboratoires STIM, programmation assistée par IA, maîtrise des langues (arabe, français, anglais), arts créatifs et projets appliqués.',
      scheduleHeadline: '9h00 – 13h00',
      scheduleDetails: 'Du lundi au vendredi en matinée. Formules d’inscription flexibles : 1 mois, 1 trimestre/session ou année scolaire complète.',
      targetAudienceHeadline: 'Du Secondaire 1 au Secondaire 6',
      targetAudience: 'Élèves du Secondaire 1 au Secondaire 6 (pré-universitaire) et familles en enseignement à domicile à la recherche d’un soutien pédagogique de premier plan.',
      introHeadline: 'Un environnement d’apprentissage vivant conçu pour la réussite de l’école à la maison',
      registerSubtext: 'Prêt à inscrire votre enfant ou à en savoir plus sur nos forfaits ? Contactez notre équipe dès aujourd’hui :',
      enrollmentNotice: 'Inscriptions ouvertes pour l’année scolaire et les sessions trimestrielles. Réservez votre place dès maintenant !',
      longDescription: [
        "Le pôle d’accompagnement de l’Académie de l’Avenir Souriant offre un environnement moderne, stimulant et bienveillant pour les familles qui pratiquent l’école à la maison. Situé au 1325 Rue Cartier à Saint-Laurent, notre centre répond concrètement aux défis majeurs rencontrés par les parents : planification rigoureuse du cursus, enseignement des matières avancées (STIM, mathématiques, français, anglais), suivi des apprentissages et constitution des portfolios d’évaluation conformes aux exigences du ministère au Québec.",
        "Nos étudiants bénéficient d’équipements exceptionnels comprenant des laboratoires de sciences et de robotique, des ateliers de programmation assistée par intelligence artificielle, des salles d’étude calmes et des salles de cours dotées d’écrans tactiles interactifs. Nous offrons une véritable communauté d’apprentissage où les jeunes développent leur autonomie, approfondissent leurs connaissances et créent des liens solides.",
        "Nous proposons trois formules flexibles (1 mois sans engagement, 1 trimestre ou une année scolaire complète) : accès libre aux installations et ateliers, accompagnement avec un conseiller pédagogique dédié, ou notre formule Premium intégrant un tutorat individuel sur mesure en mathématiques, sciences, langues et préparation aux examens."
      ],
      programDescription: [
        "Notre cursus repose sur quatre piliers fondamentaux : STIM et technologies (Python, robotique, IA pour les jeunes, modélisation 3D), programmation appliquée (conception d’applications, jeux éducatifs et portfolios numériques), langues et communication (arabe, français, anglais, création littéraire et art oratoire), et expression créative (arts visuels, théâtre et narration multimédia).",
        "Du Secondaire 1 jusqu’à la préparation pré-universitaire (CÉGEP), nos ateliers pratiques, foires scientifiques et projets d’équipe stimulants préparent des jeunes confiants, autonomes et novateurs."
      ],
      parentChallenges: [
        "Planification du curriculum et calendrier académique",
        "Enseignement des matières avancées (STIM, mathématiques, sciences, langues)",
        "Suivi des progrès et constitution des portfolios d’évaluation officiels",
        "Socialisation enrichissante et projets collaboratifs entre pairs",
        "Recherche de projets motivants, pratiques et appliqués",
        "Accès à des laboratoires équipés et des outils technologiques de pointe",
        "Organisation de sorties éducatives et de foires scientifiques stimulantes",
        "Gestion des exigences administratives et de conformité au Québec"
      ],
      durationOptions: [
        { duration: "1 MOIS", label: "Flexible et sans engagement", desc: "Idéal pour une flexibilité maximale et pour tester nos ateliers." },
        { duration: "1 TRIMESTRE", label: "Session trimestrielle", desc: "Parfait pour une immersion approfondie et des progrès mesurables !" },
        { duration: "12 MOIS", label: "Année scolaire complète", desc: "La meilleure valeur pour un accompagnement global et continu." }
      ],
      membershipTiers: [
        {
          level: 1,
          title: "Accès Installations et Ateliers",
          tagline: "Accès aux espaces inspirants et aux séances de groupe",
          features: [
            "Accès complet à tous les espaces (laboratoires, studio de création, salles calmes)",
            "Participation aux ateliers spécialisés et défis d’équipe",
            "Activités de socialisation et projets collaboratifs entre élèves",
            "Événements communautaires et sorties éducatives de groupe"
          ],
          price1Month: "149 $/mois",
          price1Session: "399 $/trimestre",
          price12Months: "1 299 $/an",
          priceNote: "Accès libre aux installations et ateliers"
        },
        {
          level: 2,
          title: "Installations + Conseiller pédagogique",
          tagline: "Structure, planification pédagogique et suivi rigoureux",
          features: [
            "Tout ce qui est inclus dans le Niveau 1 (Installations et Ateliers)",
            "Plan d’apprentissage personnalisé selon les besoins de l’élève",
            "Alignement du cursus avec les exigences éducatives québécoises",
            "Suivi continu des progrès et bilans périodiques",
            "Organisation et constitution du portfolio d’évaluation officiel",
            "Rencontres conseils et orientation pour les parents",
            "Évaluations régulières et rapports d’étape"
          ],
          isPopular: true,
          price1Month: "249 $/mois",
          price1Session: "649 $/trimestre",
          price12Months: "2 199 $/an",
          priceNote: "Installations + suivi pédagogique personnalisé"
        },
        {
          level: 3,
          title: "PREMIUM : Installations + Conseiller + Tutorat",
          tagline: "Accompagnement intégral avec séances de tutorat individuel",
          features: [
            "Tout ce qui est inclus dans le Niveau 2 (Installations, Ateliers et Conseiller)",
            "Tutorat personnalisé en tête-à-tête ou en très petits groupes",
            "Méthodes de travail efficaces et stratégies d’autonomie",
            "Préparation ciblée aux examens et évaluations formelles"
          ],
          subTutoring: [
            "Mathématiques (Secondaire 1 à 6)",
            "Sciences (Physique, Chimie, Biologie)",
            "Informatique et Programmation (Python, Web, IA)",
            "Robotique et Électronique",
            "Langues (Arabe, Français, Anglais)"
          ],
          price1Month: "399 $/mois",
          price1Session: "999 $/trimestre",
          price12Months: "3 499 $/an",
          priceNote: "Formule tout inclus + tutorat sur mesure"
        }
      ],
      levelPrograms: [
        {
          level: "SEC 1–2",
          title: "Bases solides et découverte",
          desc: "Consolidation des compétences fondamentales par une pédagogie active et des méthodes de travail rigoureuses."
        },
        {
          level: "SEC 3–5",
          title: "Approfondissement et défis STIM",
          desc: "Défis avancés en sciences et technologies, maîtrise linguistique, projets d’équipe et dépassement académique."
        },
        {
          level: "SEC 6 (Pré-universitaire)",
          title: "Préparation collégiale et mentorat",
          desc: "Préparation intensive aux études collégiales (CÉGEP) et universitaires, mentorat personnalisé et leadership."
        }
      ],
      programDetails: [
        { label: "Horaire régulier", value: "9h00 – 13h00" },
        { label: "Niveaux couverts", value: "Secondaire 1 à 6 (Pré-universitaire)" },
        { label: "Formules d’inscription", value: "1 Mois • 1 Trimestre • Année scolaire complète" },
        { label: "Piliers d’apprentissage", value: "STIM, Codage IA, Langues, Arts et Robotique" },
        { label: "Soutien inclus", value: "Conseiller pédagogique et suivi des portfolios" },
        { label: "Tutorat disponible", value: "Mathématiques, Sciences, Français, Arabe, Anglais" },
        { label: "Lieu", value: "1325 Rue Cartier, Saint-Laurent, QC H4L 2N6" }
      ],
      schedule: [
        { day: "Lundi au Vendredi (Matinées)", time: "9h00 – 13h00" },
        { day: "Ateliers spécialisés et tutorat", time: "Après-midis et séances thématiques" }
      ],
      highlights: [
        "Accès complet aux laboratoires : sciences, robotique, électronique et modélisation",
        "Ateliers pratiques de codage et projets assistés par intelligence artificielle",
        "Soutien linguistique approfondi en arabe, français et anglais avec art oratoire",
        "Accompagnement par un conseiller pédagogique et suivi des portfolios d’évaluation",
        "Tutorat personnalisé en mathématiques, sciences, physique et chimie",
        "Sorties éducatives, foires scientifiques et projets d’équipe stimulants",
        "Formules d’abonnement flexibles (1 mois, 1 trimestre ou année scolaire complète)"
      ]
    },
    ar: {
      title: 'مركز دعم ومرافقة التعليم المنزلي',
      category: 'التعليم المنزلي والمرافقة الأكاديمية',
      price: 'خطط اشتراك مرنة',
      desc: 'بيئة تعليمية حديثة ومتكاملة للعائلات التي تطبق التعليم المنزلي في مونتريال: مختبرات علوم وتقنية، ورش ذكاء اصطناعي، تمكين لغوي، ومرافقة أكاديمية للمناهج وإعداد ملفات التقييم.',
      subtitle: 'من الأول إلى السادس الثانوي • مختبرات علوم وتقنية • تمكين لغوي • مرونة المواعيد',
      tagline: 'دعم أكاديمي وتربوي شامل لنجاح مسيرة التعليم المنزلي',
      subTagline: 'مركز متكامل في سان لوران يوفر بيئة دراسية محفزة، معامل متقدمة، ومتابعة متوافقة مع المعايير التعليمية.',
      teacher: {
        name: 'مساحات ومرافق تعليمية متطورة',
        title: 'مختبرات وتجهيزات حديثة',
        bio: 'مختبرات متخصصة للعلوم والروبوتات، ورش برمجة بالذكاء الاصطناعي، قاعات دراسة هادئة، وفصول مزودة بشاشات تفاعلية ومرسم فني.'
      },
      objectiveHeadline: 'استقلالية معرفية وتفوق أكاديمي',
      objective: 'توفير بيئة دراسية جاذبة، ومختبرات مجهزة بالكامل، ومتابعة دراسية تلبي متطلبات التقييم الرسمي في كيبيك.',
      scheduleHeadline: 'من الاثنين إلى الجمعة (9:00 صباحاً – 1:00 ظهراً)',
      scheduleDetails: 'جلسات صباحية وورش عمل تطبيقية، مع جلسات دعم ودروس خاصة بعد الظهر.',
      targetAudienceHeadline: 'طلاب المرحلة الثانوية (من الأول وحتى التحضير الجامعي)',
      targetAudience: 'الأسر التي تعتمد التعليم المنزلي وتبحث عن بيئة علمية غنية، وتفاعل اجتماعي بناء، ومتابعة أكاديمية متخصصة.',
      introHeadline: 'بيئة تعليمية ملهمة مصممة خصيصاً لنجاح وتميز طلاب التعليم المنزلي',
      registerSubtext: 'مستعد للاستفادة من خدمات المركز أو معرفة تفاصيل الباقات؟ تواصل معنا اليوم:',
      enrollmentNotice: 'باب التسجيل مفتوح للفصول الدراسية والاشتراكات السنوية. احجز مكانك الآن!',
      longDescription: [
        'يوفر مركز دعم ومرافقة التعليم المنزلي في أكاديمية المستقبل الباسم بيئة تعليمية حديثة ومحفزة وداعمة للعائلات التي تطبق التعليم المنزلي. يقع مركزنا في 1325 Rue Cartier بسان لوران، ويستجيب مباشرة لأهم التحديات التي تواجه أولياء الأمور: التخطيط الدراسي المنظم، تدريس المواد المتقدمة (العلوم والرياضيات واللغات)، متابعة التطور الأكاديمي، وإعداد ملفات التقييم المتوافقة مع معايير وزارة التعليم في كيبيك.',
        'يستفيد طلابنا من مرافق استثنائية تشمل مختبرات العلوم والروبوتات، وورش البرمجة المدعومة بالذكاء الاصطناعي، وقاعات دراسية مجهزة بشاشات ذكية تفاعلية وغرف للمذاكرة الهادئة. نوفر مجتمعاً تعليمياً حقيقياً يطور فيه الطلاب استقلاليتهم المعرفية ويبنون صداقات إيجابية متينة.',
        'نقدم ثلاث باقات اشتراك مرنة (شهر واحد بدون التزام، فصل دراسي كامل، أو سنة دراسية كاملة): تتيح الاستفادة من المرافق والورش، أو المتابعة المباشرة مع مستشار أكاديمي، أو الباقة الشاملة (بريميوم) التي تتضمن دروس تقوية فردية مخصصة في الرياضيات والعلوم واللغات والتحضير للاختبارات.'
      ],
      programDescription: [
        'يرتكز برنامجنا على أربعة محاور رئيسية: العلوم والتقنية (بايثون، الروبوتات، الذكاء الاصطناعي، النمذجة ثلاثية الأبعاد)، البرمجة التطبيقية (بناء التطبيقات والألعاب والملفات الرقمية)، التمكين اللغوي والتواصل (العربية، الفرنسية، الإنجليزية، فنون الكتابة والخطابة)، والتعبير الإبداعي (الفنون البصرية، المسرح، والسرد الرقمي).',
        'من السنة الأولى الثانوية وحتى الاستعداد للدراسة الجامعية، تعمل ورش العمل التطبيقية والمعارض العلمية والمشاريع التعاونية على بناء جيل واثق من مفكري ومبتكري الغد.'
      ],
      parentChallenges: [
        'التخطيط الدراسي وبناء الجداول الزمنية الأكاديمية',
        'تدريس المواد التخصصية المتقدمة (الرياضيات، العلوم، التقنية، واللغات)',
        'متابعة التطور الدراسي وإعداد ملفات التقييم الرسمية (Portfolio)',
        'توفير بيئة اجتماعية ثرية وأنشطة جماعية مع أقران إيجابيين',
        'إيجاد مشاريع تطبيقية وعملية محفزة للتعلم',
        'إتاحة مختبرات علمية وتجهيزات تقنية حديثة يصعب توفيرها منزلياً',
        'تنظيم رحلات ميدانية ومعارض علمية هادفة',
        'التعامل مع متطلبات التوثيق والامتثال التعليمي في مقاطعة كيبيك'
      ],
      durationOptions: [
        { duration: 'شهر واحد', label: 'مرونة كاملة وبدون التزام', desc: 'خيار مثالي لتجربة الورش والمرافق والاستفادة السريعة.' },
        { duration: 'فصل دراسي', label: 'اشتراك فصلي مكثف', desc: 'مثالي لتحقيق اندماج دراسي عميق وملاحظة تقدم أكاديمي ملموس!' },
        { duration: '12 شهراً', label: 'عام دراسي كامل', desc: 'الخيار الأفضل قيمة لتوفير مرافقة أكاديمية شاملة ومستمرة طوال العام.' }
      ],
      membershipTiers: [
        {
          level: 1,
          title: 'عضوية المرافق والورش الجماعية',
          tagline: 'استخدام المساحات المجهزة والمشاركة في الأنشطة التعاونية',
          features: [
            'دخول كامل لكافة المرافق (المعامل، المرسم، وقاعات المذاكرة الهادئة)',
            'المشاركة في ورش العمل التطبيقية والتحديات العلمية الجماعية',
            'أنشطة تفاعلية واجتماعية ومشاريع طلابية مشتركة',
            'فعاليات المركز والزيارات الميدانية التعليمية'
          ],
          price1Month: '149$ / شهر',
          price1Session: '399$ / فصل',
          price12Months: '1,299$ / سنة',
          priceNote: 'استخدام المعامل والورش التطبيقية'
        },
        {
          level: 2,
          title: 'المرافق + مستشار أكاديمي مخصص',
          tagline: 'تخطيط للمنهج، تنظيم للدراسة، ومتابعة رسمية مستمرة',
          features: [
            'يشمل كافة مزايا المستوى 1 (المرافق والورش الجماعية)',
            'خطة تعلم شخصية مصممة خصيصاً لاحتياجات الطالب',
            'مواءمة المناهج مع المعايير والبرامج التعليمية في كيبيك',
            'متابعة دورية مستمرة وتقارير إنجاز منتظمة',
            'تجميع وتنظيم ملف التقييم الرسمي (Portfolio)',
            'جلسات استشارية دورية مع أولياء الأمور لتوجيه المسار',
            'تقييمات مرحلية للتأكد من استيعاب الأهداف الدراسية'
          ],
          isPopular: true,
          price1Month: '249$ / شهر',
          price1Session: '649$ / فصل',
          price12Months: '2,199$ / سنة',
          priceNote: 'المرافق + توجيه ومتابعة أكاديمية مستمرة'
        },
        {
          level: 3,
          title: 'بريميوم: المرافق + المستشار + دروس تقوية فردية',
          tagline: 'مرافقة تعليمية شاملة مع حصص تدريس وتقوية فردية',
          features: [
            'يشمل كافة مزايا المستوى 2 (المرافق، الورش، والمستشار الأكاديمي)',
            'دروس تقوية وتدريس مخصص (فردي أو مجموعات متناهية الصغر)',
            'تدريب على أساليب الاستذكار الفعال وعادات الدراسة المستقلة',
            'تحضير مباشر ومكثف للاختبارات والتقييمات الرسمية'
          ],
          subTutoring: [
            'الرياضيات (من الأول إلى السادس الثانوي)',
            'العلوم (الفيزياء، الكيمياء، الأحياء)',
            'علوم الحاسوب والبرمجة (بايثون، الويب، الذكاء الاصطناعي)',
            'الروبوتات والإلكترونيات',
            'اللغات (العربية، الفرنسية، الإنجليزية)'
          ],
          price1Month: '399$ / شهر',
          price1Session: '999$ / فصل',
          price12Months: '3,499$ / سنة',
          priceNote: 'باقة شاملة متكاملة + دروس تقوية خاصة'
        }
      ],
      levelPrograms: [
        {
          level: 'أول وثاني ثانوي',
          title: 'التأسيس المتين والاستكشاف',
          desc: 'بناء المهارات الأساسية عبر تجارب علمية تطبيقية واكتساب منهجية دراسية منضبطة ومستقلة.'
        },
        {
          level: 'ثالث إلى خامس ثانوي',
          title: 'التعمق المعرفي وتحديات العلوم',
          desc: 'تحديات علمية وتقنية متقدمة، تمكين لغوي رفيع، مشاريع بحثية جماعية، وبلوغ آفاق دراسية عليا.'
        },
        {
          level: 'سادس ثانوي (التحضير الجامعي)',
          title: 'التهيئة للسيجاب والجامعة والقيادة',
          desc: 'إعداد شامل للانتقال إلى المرحلة الجامعية والسيجاب (CEGEP)، إرشاد مهني متخصص، وبناء الشخصية القيادية.'
        }
      ],
      programDetails: [
        { label: 'المواعيد اليومية', value: '9:00 صباحاً – 1:00 ظهراً' },
        { label: 'المراحل الدراسية', value: 'من الأول وحتى السادس الثانوي (التحضير الجامعي)' },
        { label: 'خيارات التسجيل', value: 'شهر واحد • فصل دراسي • عام دراسي كامل' },
        { label: 'محاور التعلم', value: 'العلوم، برمجة الذكاء الاصطناعي، اللغات، الفنون، والروبوتات' },
        { label: 'الدعم المشمول', value: 'مستشار أكاديمي وإشراف على ملفات التقييم' },
        { label: 'دروس التقوية المتاحة', value: 'الرياضيات، العلوم، الفرنسية، العربية، الإنجليزية' },
        { label: 'المقر', value: '1325 Rue Cartier, Saint-Laurent, QC H4L 2N6' }
      ],
      schedule: [
        { day: 'من الاثنين إلى الجمعة (صباحاً)', time: '9:00 صباحاً – 1:00 ظهراً' },
        { day: 'الورش التخصصية ودروس التقوية', time: 'بعد الظهر والجلسات الخاصة' }
      ],
      highlights: [
        'استخدام كامل للمختبرات: العلوم، الروبوتات، الإلكترونيات، والتصنيع الرقمي',
        'ورش عمل برمجية تطبيقية ومشاريع متقدمة بالذكاء الاصطناعي',
        'تمكين لغوي شامل باللغات العربية والفرنسية والإنجليزية وفنون الإلقاء',
        'مرافقة مستشار أكاديمي لإعداد ومتابعة ملفات التقييم الرسمية',
        'دروس تقوية ومتابعة فردية في الرياضيات والفيزياء والكيمياء',
        'رحلات علمية ومعارض ومشاريع جماعية تطور مهارات القيادة',
        'خطط اشتراك مرنة تناسب احتياجات كل أسرة (شهر، فصل، أو سنة كاملة)'
      ]
    }
  },

  // Alias for homeschooling-support-hub slug
  get 'homeschooling-support-hub'() {
    return COURSES_OVERRIDES['homeschooling-support'];
  },

  // ═════════════════════════════════════════════════════════════════
  // 5. CHESS CLASS FOR BEGINNERS (BOYS AGES 9–14)
  // ═════════════════════════════════════════════════════════════════
  'chess-for-beginners': {
    fr: {
      title: 'Cours d’échecs pour débutants (Garçons de 9 à 14 ans)',
      category: 'Stratégie et sports de l’esprit (9–14 ans)',
      price: '15 $/séance',
      desc: 'Programme structuré de 8 semaines pour garçons de 9 à 14 ans. Développez la pensée stratégique, la concentration et la résolution de problèmes grâce à des leçons interactives, des défis tactiques et un tournoi amical. 120 $ au total (Dimanches, 18 oct. – 6 déc. 2026).',
      subtitle: 'Garçons de 9 à 14 ans • Cohorte de 8 semaines (2 h/semaine) • Dimanches, 18 oct. – 6 déc. 2026',
      tagline: 'MAÎTRISEZ L’ART ET LA STRATÉGIE DU JEU D’ÉCHECS',
      subTagline: 'Un parcours structuré de 8 semaines pour garçons de 9 à 14 ans. Développez la pensée critique, la concentration et la confiance en soi.',
      teacher: {
        name: 'Abdullah Alatassi et Joud Altabbalh',
        title: 'Instructeurs d’échecs et mentors (ELO 1300 sur Chess.com)',
        bio: 'Éducateurs d’échecs passionnés à l’Académie de l’Avenir Souriant, dévoués à faire de l’apprentissage des échecs une expérience stimulante et valorisante pour chaque jeune. L’instructeur principal détient un classement de 1300 ELO sur Chess.com.'
      },
      objectiveHeadline: 'Stratégie, logique et concentration',
      objective: 'Cultiver le sens de l’observation, le raisonnement logique et la patience tout en maîtrisant les pièces, les motifs tactiques et les ouvertures.',
      scheduleHeadline: 'Dimanches · 10h00 – 12h00',
      scheduleDetails: 'Séances interactives de 2 heures chaque dimanche du 18 octobre au 6 décembre 2026 (8 séances / 16 heures) de 10h00 à 12h00. En présentiel au centre de Saint-Laurent (1325 Rue Cartier).',
      targetAudienceHeadline: 'Garçons de 9 à 14 ans (Débutants)',
      targetAudience: 'Conçu spécialement pour les garçons de 9 à 14 ans ayant peu ou pas d’expérience préalable. Groupe strictement limité à 10 places pour une pratique optimale.',
      introHeadline: 'Pourquoi les échecs sont bien plus qu’un jeu — un art de la pensée',
      registerSubtext: 'Prêt à éveiller la passion de votre enfant pour la stratégie et la réflexion ? Inscrivez-vous en ligne ou par téléphone :',
      enrollmentNotice: 'Tarif spécial de lancement : 120 $ au total pour les 8 semaines (15 $/séance). Strictement limité à 10 élèves — réservez vite !',
      longDescription: [
        "Le jeu d’échecs est universellement reconnu comme le jeu de stratégie par excellence. Bien plus qu’un simple divertissement, c’est un véritable art intellectuel qui aiguise le raisonnement critique, développe un sens de l’observation remarquable et apprend à anticiper avec patience et sang-froid. L’Académie de l’Avenir Souriant est fière d’inaugurer son programme structuré de 8 semaines pour débutants, spécialement conçu pour les garçons de 9 à 14 ans dans son centre moderne de Saint-Laurent (1325 Rue Cartier).",
        "Encadré par les instructeurs passionnés Abdullah Alatassi et Joud Altabbalh — avec un enseignant principal classé 1300 ELO sur Chess.com —, ce cours transforme les échecs en une aventure captivante et interactive. Chaque séance hebdomadaire de 2 heures allie notions stratégiques claires, projections multimédias, résolution d’énigmes sur Chess.com et parties sur échiquiers officiels de tournoi.",
        "Se déroulant tous les dimanches du 18 octobre au 6 décembre 2026 (de 10h00 à 12h00), ce programme propose une expérience éducative enrichissante à un tarif spécial de lancement de seulement 120 $ au total (15 $/séance) pour l’ensemble des 8 semaines. Afin de garantir un encadrement individualisé et une pratique active pour chacun, le groupe est strictement limité à 10 participants."
      ],
      programDescription: [
        "Notre cursus de 8 semaines guide pas à pas les jeunes débutants à travers toutes les dimensions du noble jeu : de la géométrie de l’échiquier et de la valeur des pièces aux règles d’or de l’ouverture (développement rapide, contrôle du centre, sécurité du roi), en passant par les tactiques incontournables (fourchettes, clouages, enfilades, attaques à la découverte) et les échecs et mats fondamentaux.",
        "Les élèves apprennent également la notation algébrique standard, analysent des parties célèbres sur grand écran HD et développent l’esprit sportif et le sang-froid. La formation se termine en 8e semaine par un tournoi amical passionnant et une remise officielle de certificats de réussite."
      ],
      programDetails: [
        { label: 'Tarif', value: '15 $/séance (120 $ au total pour 8 séances)' },
        { label: 'Durée', value: '8 semaines · 2 h/semaine (16 heures au total)' },
        { label: 'Jour', value: 'Dimanches' },
        { label: 'Horaire', value: '10h00 – 12h00' },
        { label: 'Dates', value: '18 octobre 2026 – 6 décembre 2026' },
        { label: 'Public cible', value: 'Garçons de 9 à 14 ans (Débutants)' },
        { label: 'Places', value: 'Strictement limité à 10 élèves' },
        { label: 'Instructeurs', value: 'Abdullah Alatassi et Joud Altabbalh (ELO 1300 sur Chess.com)' },
        { label: 'Matériel fourni', value: 'Échiquiers officiels, accès Chess.com Premium, cahiers de notation' },
        { label: 'Finale', value: 'Tournoi amical + certificats officiels de réussite' },
        { label: 'Lieu', value: '1325 Rue Cartier, Saint-Laurent, QC H4L 2N6' }
      ],
      schedule: [
        { day: 'Dimanches (18 oct. – 6 déc. 2026)', time: '10h00 – 12h00' },
        { day: 'Semaine 8 — Tournoi amical', time: 'Remise des prix et certificats de réussite !' }
      ],
      curriculumTitle: 'Plan de formation (8 semaines)',
      curriculumTracks: [
        {
          title: 'Semaine 1 — Introduction au jeu d’échecs',
          subtitle: 'Géométrie de l’échiquier, histoire et disposition initiale',
          badge: 'Semaine 1',
          items: [
            'L’histoire fascinante, l’héritage culturel et le noble objectif du jeu d’échecs',
            'Découverte de l’échiquier : rangées, colonnes, diagonales et coordonnées des cases',
            'Placement initial et alignement correct des pions et des pièces majeures',
            'Mini-jeux stimulants pour reconnaître le déplacement des pièces et la vision du jeu'
          ]
        },
        {
          title: 'Semaine 2 — Mouvements des pièces et règles spéciales',
          subtitle: 'Maîtriser l’armée et les règles indispensables',
          badge: 'Semaine 2',
          items: [
            'Mécanique des déplacements : pions, cavaliers, fous, tours, dame et roi',
            'Règles spéciales : le roque (petit et grand), la prise en passant et la promotion des pions',
            'Comprendre et distinguer l’échec, le mat et le pat',
            'Exercices pratiques guidés et mini-matches simplifiés'
          ]
        },
        {
          title: 'Semaine 3 — Principes fondamentaux de l’ouverture',
          subtitle: 'Débuter la partie avec force et stratégie',
          badge: 'Semaine 3',
          items: [
            'Les 3 règles d’or : développement rapide, occupation du centre et sécurité du roi',
            'Étude des ouvertures classiques incontournables (Partie italienne, Espagnole / Ruy Lopez)',
            'Pièges d’ouverture fréquents et prévention des erreurs précoces (défense contre le coup du berger)',
            'Mini-parties thématiques à partir de positions d’ouverture guidées'
          ]
        },
        {
          title: 'Semaine 4 — Les armes tactiques fondamentales',
          subtitle: 'Gagner du matériel grâce à la vision tactique',
          badge: 'Semaine 4',
          items: [
            'Motifs tactiques clés : fourchettes, clouages, enfilades et attaques à la découverte',
            'Calcul des coups candidats et détection des menaces adverses',
            'Résolution interactive de puzzles tactiques sur Chess.com',
            'Défi chronométré en classe : « Trouvez le meilleur coup »'
          ]
        },
        {
          title: 'Semaine 5 — Stratégie de milieu de partie',
          subtitle: 'Élaborer des plans, des avant-postes et coordonner ses pièces',
          badge: 'Semaine 5',
          items: [
            'Comprendre les objectifs du milieu de partie et bâtir un plan d’attaque ou de défense',
            'Structures de pions fondamentales, cases fortes (avant-postes) et harmonie des pièces',
            'Évaluation de la position et repérage des déséquilibres sur l’échiquier',
            'Parties d’entraînement à thème : assaut sur le roi roqué et bataille centrale'
          ]
        },
        {
          title: 'Semaine 6 — Fondamentaux des finales',
          subtitle: 'L’art de convertir un avantage matériel en échec et mat',
          badge: 'Semaine 6',
          items: [
            'Reconnaître les positions de finale les plus fréquentes et décisives',
            'Schémas de mat indispensables : Roi + Dame contre Roi, Roi + Tour contre Roi',
            'Principe de l’opposition, pions passés et courses à la promotion',
            'Exercices pratiques de mat face aux instructeurs et camarades'
          ]
        },
        {
          title: 'Semaine 7 — Stratégie avancée et notation échiquéenne',
          subtitle: 'Lire, écrire et relier les phases d’une partie',
          badge: 'Semaine 7',
          items: [
            'Initiation à la notation algébrique standard (noter ses coups comme un pro)',
            'Liaison des phases : transition fluide de l’ouverture au milieu de jeu puis à la finale',
            'Analyse collective sur projecteur HD d’une partie célèbre d’un grand maître',
            'Parties complètes jouées avec enregistrement rigoureux des coups'
          ]
        },
        {
          title: 'Semaine 8 — Tournoi amical et remise des diplômes',
          subtitle: 'Mettre en pratique ses compétences et célébrer sa progression',
          badge: 'Semaine 8',
          items: [
            'Tournoi amical de clôture au système suisse',
            'Analyse collective des plus beaux coups avec les instructeurs',
            'Valorisation du fair-play, de l’humilité dans la victoire et de l’esprit d’apprentissage',
            'Cérémonie officielle de clôture avec remise des certificats et célébration'
          ]
        }
      ],
      facilitiesTitle: 'Matériel et outils pédagogiques fournis',
      facilities: [
        {
          title: 'Échiquiers de tournoi officiels',
          desc: 'Échiquiers de taille standard avec pièces Staunton plombées pour une pratique en duo.',
          icon: '♟️'
        },
        {
          title: 'Outils interactifs Chess.com',
          desc: 'Analyse assistée par ordinateur, entraîneur de puzzles tactiques et démonstrations guidées.',
          icon: '💻'
        },
        {
          title: 'Projecteur haute définition',
          desc: 'Écran interactif pour les leçons collectives et l’analyse des parties de grands maîtres.',
          icon: '📽️'
        },
        {
          title: 'Cahiers et feuilles de notation',
          desc: 'Feuilles officielles et fiches d’exercices tactiques pour continuer à progresser à la maison.',
          icon: '📝'
        }
      ],
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
        'Groupe restreint à 10 places assurant un encadrement très personnalisé'
      ]
    },
    ar: {
      title: 'دورة الشطرنج للمبتدئين (للفتيان من 9 إلى 14 سنة)',
      category: 'الاستراتيجية ورياضات الذهن (9–14 سنة)',
      price: '15 دولار / للجلسة',
      desc: 'برنامج تدريبي ممتع ومنظم لمدة 8 أسابيع للفتيان من 9 إلى 14 سنة. بناء التفكير الاستراتيجي، والتركيز، وحل المشكلات عبر دروس تفاعلية، وألغاز تكتيكية، وبطولة ودية ختامية. 120 دولار للمسار كاملاً (أيام الأحد، 18 أكتوبر – 6 ديسمبر 2026).',
      subtitle: 'للفتيان من 9 إلى 14 سنة • برنامج لمدة 8 أسابيع (ساعتان أسبوعياً) • أيام الأحد، 18 أكتوبر – 6 ديسمبر 2026',
      tagline: 'أتقن فنون واستراتيجيات الشطرنج',
      subTagline: 'رحلة تدريبية تفاعلية لمدة 8 أسابيع للفتيان من 9 إلى 14 سنة. بناء التفكير الاستراتيجي، والتركيز العالي، والثقة بالنفس.',
      teacher: {
        name: 'عبد الله العطاسي وجود الطبال',
        title: 'مدربا شطرنج ومشرفان تعليميان (تصنيف ELO 1300 على Chess.com)',
        bio: 'مدربان شغوفان بأكاديمية المستقبل الباسم حريصان على جعل تعلم الشطرنج رحلة ممتعة تبني الثقة والذكاء الاستراتيجي لدى الفتيان. يحمل المدرب الرئيسي تصنيف 1300 ELO على Chess.com.'
      },
      objectiveHeadline: 'الاستراتيجية، المنطق، وقوة التركيز',
      objective: 'تنمية دقة الملاحظة والتفكير المنطقي والصبر، مع إتقان حركة القطع والمفاهيم التكتيكية ومبادئ الافتتاحيات.',
      scheduleHeadline: 'أيام الأحد · 10:00 صباحاً – 12:00 ظهراً',
      scheduleDetails: 'جلسات تفاعلية أسبوعية لمدة ساعتين كل أحد من 18 أكتوبر إلى 6 ديسمبر 2026 (8 جلسات / 16 ساعة تدريبية) من 10:00 صباحاً إلى 12:00 ظهراً، حضورياً في مركزنا بسان لوران (1325 Rue Cartier).',
      targetAudienceHeadline: 'الفتيان من 9 إلى 14 سنة (مستوى مبتدئ)',
      targetAudience: 'مخصص للفتيان من 9 إلى 14 سنة ممن لديهم خبرة قليلة أو لا خبرة سابقة لديهم في الشطرنج. المقاعد محددة بـ 10 طلاب فقط لضمان التدريب العملي المباشر.',
      introHeadline: 'لماذا يُعد الشطرنج أكثر من مجرد لعبة — إنه فن التفكير الاستراتيجي',
      registerSubtext: 'هل أنت مستعد لتنمية مهارات التفكير والتخطيط لدى ابنك؟ سجل الآن عبر الموقع أو اتصل بنا مباشرة:',
      enrollmentNotice: 'سعر إطلاق استثنائي: 120 دولار فقط للمسار الكامل المكون من 8 أسابيع (15 دولار / للجلسة). العدد محدود بـ 10 طلاب — سارع بحجز المقعد!',
      longDescription: [
        'يُعد الشطرنج أعظم لعبة استراتيجية عرفها التاريخ، وهو أكثر من مجرد تسلية؛ إنه فن فكري يصقل التفكير المنطقي، وينمي دقة الملاحظة، ويدرب العقل على التخطيط المسبق بصبر وهدوء وثقة. تفخر أكاديمية المستقبل الباسم بإطلاق برنامجها التدريبي المخصص للمبتدئين لمدة 8 أسابيع، والمصمم خصيصاً للفتيان من سن 9 إلى 14 سنة في مركزنا بسان لوران (1325 Rue Cartier).',
        'يقود التدريب المدربان الشغوفان عبد الله العطاسي وجود الطبال — حيث يحمل المدرب الرئيسي تصنيف 1300 ELO على موقع Chess.com — ليتحول الشطرنج من لعبة معقدة إلى تجربة تفاعلية مليئة بالحماس والتشويق. تجمع كل جلسة أسبوعية مدتها ساعتان بين الشرح المنهجي المبسط، والعروض التفاعلية، وحل الألغاز التكتيكية، والتطبيق المباشر على رقع الشطرنج القياسية للبطولات.',
        'تقام الدورة كل يوم أحد من 18 أكتوبر إلى 6 ديسمبر 2026 (من الساعة 10:00 صباحاً إلى 12:00 ظهراً)، بسعر إطلاق خاص قدره 120 دولار فقط للمسار كاملاً (15 دولار للجلسة). ولضمان حصول كل متدرب على أعلى درجات المتابعة والتوجيه الفردي، فإن العدد مقتصر بدقة على 10 طلاب فقط.'
      ],
      programDescription: [
        'يتدرج المنهاج التدريبي على مدار 8 أسابيع ليأخذ المبتدئين في جولة شاملة عبر أبعاد اللعبة الملكية: من هندسة الرقعة وقيم القطع، إلى القواعد الذهبية للافتتاحية (سرعة النشر، احتلال الوسط، وأمان الملك)، والمفاهيم التكتيكية الأساسية (الشوكة، التثبيت، السيخ، والهجوم المكشوف)، وحتى نهايات الأدوار وطرق تحقيق كش مات الأساسية.',
        'يتعلم الطلاب أيضاً التدوين الجبري للشطرنج، ويحللون مباريات كبار الأساتذة التاريخية عبر جهاز العرض عالي الدقة، مع ترسيخ الروح الرياضية والانضباط الذاتي. ويختتم البرنامج في الأسبوع الثامن ببطولة ودية حماسية واحتفال بتوزيع شهادات الإنجاز.'
      ],
      programDetails: [
        { label: 'الرسوم', value: '15 دولار / للجلسة (120 دولار للدورة كاملة / 8 جلسات)' },
        { label: 'المدة', value: '8 أسابيع · ساعتان أسبوعياً (16 ساعة تدريبية إجمالاً)' },
        { label: 'اليوم', value: 'أيام الأحد' },
        { label: 'الموعد', value: '10:00 صباحاً – 12:00 ظهراً' },
        { label: 'التواريخ', value: '18 أكتوبر 2026 – 6 ديسمبر 2026' },
        { label: 'الفئة المستهدفة', value: 'الفتيان من 9 إلى 14 سنة (مستوى مبتدئ)' },
        { label: 'السعة', value: 'محددة بـ 10 طلاب فقط' },
        { label: 'المدربون', value: 'عبد الله العطاسي وجود الطبال (تصنيف 1300 ELO على Chess.com)' },
        { label: 'المعدات المشمولة', value: 'رقع شطرنج بطولات، حسابات Chess.com مميزة، دفاتر تدوين' },
        { label: 'حفل الختام', value: 'بطولة ودية + شهادات إنجاز معتمدة' },
        { label: 'المقر', value: '1325 Rue Cartier, Saint-Laurent, QC H4L 2N6' }
      ],
      schedule: [
        { day: 'أيام الأحد (18 أكتوبر – 6 ديسمبر 2026)', time: '10:00 صباحاً – 12:00 ظهراً' },
        { day: 'الأسبوع 8 — البطولة الودية', time: 'توزيع الجوائز وشهادات الإنجاز!' }
      ],
      curriculumTitle: 'خطة البرنامج التدريبي (8 أسابيع)',
      curriculumTracks: [
        {
          title: 'الأسبوع 1 — مدخل إلى عالم الشطرنج',
          subtitle: 'هندسة الرقعة، تاريخ اللعبة، والترتيب الأولي للقطع',
          badge: 'الأسبوع 1',
          items: [
            'التاريخ العريق للعبة الشطرنج وقيمتها الفكرية والهدف النبيل منها',
            'التعرف على رقعة الشطرنج: الصفوف، الأعمدة، الأوتار، وإحداثيات المربعات',
            'الترتيب الصحيح والدقيق للبيادق والقطع الرئيسية',
            'ألعاب تدريبية مبسطة لاكتشاف حركة القطع وتنمية الرؤية المكانية'
          ]
        },
        {
          title: 'الأسبوع 2 — حركة القطع والقواعد الخاصة',
          subtitle: 'السيطرة على الجيش وقواعد اللعب الأساسية',
          badge: 'الأسبوع 2',
          items: [
            'آلية حركة القطع: البيادق، الفرسان، الفيلة، القلاع، الوزير، والملك',
            'القواعد الخاصة: التبييت (القصير والطويل)، الأخذ بالمرور، وترقية البيدق',
            'التمييز الدقيق بين كش ملك، كش مات (الإماتة)، وحالة التعادل (البات)',
            'تمارين تدريبية موجهة ومباريات تطبيقية مصغرة'
          ]
        },
        {
          title: 'الأسبوع 3 — مبادئ الافتتاحيات الذهبية',
          subtitle: 'بدء المباراة بقوة وتخطيط مدروس',
          badge: 'الأسبوع 3',
          items: [
            'القواعد الذهبية الثلاث: سرعة نشر القطع، السيطرة على مربعات الوسط، وأمان الملك',
            'دراسة أشهر الافتتاحيات الكلاسيكية (الدفاع الإيطالي والافتتاح الإسباني / روي لوبيز)',
            'أفخاخ الافتتاحيات الشائعة وكيفية تجنب الأخطاء القاتلة (صد خطة نابليون / Scholar’s Mate)',
            'مباريات تدريبية محددة تبدأ من وضعيات افتتاحية كلاسيكية'
          ]
        },
        {
          title: 'الأسبوع 4 — التكتيكات الأساسية الحاسمة',
          subtitle: 'أسلحة التكتيك لاقتناص القطع والتفوق المادي',
          badge: 'الأسبوع 4',
          items: [
            'الأنماط التكتيكية الجوهرية: الشوكة، التثبيت، السيخ، والهجوم المكشوف',
            'حساب النقلات المرشحة واكتشاف تهديدات الخصم مسبقاً',
            'حل ألغاز الشطرنج التفاعلية عبر منصة Chess.com',
            'تحديات سريعة في الحصة: «اعثر على النقلة الأفضل»'
          ]
        },
        {
          title: 'الأسبوع 5 — استراتيجيات وسط اللعبة',
          subtitle: 'بناء الخطط، احتلال المربعات القوية، وتناغم القطع',
          badge: 'الأسبوع 5',
          items: [
            'فهم أهداف وسط الدور وصياغة خطط الهجوم والدفاع الفعالة',
            'أساسيات هيكل البيادق، المربعات القوية (المواقع المتقدمة)، وتنسيق حركة القطع',
            'تقييم الوضعيات ورصد نقاط الضعف وعدم التوازن على الرقعة',
            'مباريات تدريبية موجهة: مهاجمة الملك المتخندق والقتال للسيطرة على الوسط'
          ]
        },
        {
          title: 'الأسبوع 6 — أساسيات نهايات الأدوار',
          subtitle: 'فن تحويل الأفضلية إلى فوز محقق وكش مات',
          badge: 'الأسبوع 6',
          items: [
            'التعرف على أشهر وضعيات النهايات وأكثرها تكراراً في المباريات',
            'أنماط الإماتة الأساسية: الملك والوزير ضد الملك، الملك والقلعة ضد الملك',
            'مبدأ المقابلة (Opposition)، البيادق السالكة، وسباق ترقية البيادق',
            'تمارين عملية على تحقيق كش مات أمام المدربين والزملاء'
          ]
        },
        {
          title: 'الأسبوع 7 — الاستراتيجية المتقدمة وتدوين المباريات',
          subtitle: 'قراءة النقلات وتوثيقها والربط بين مراحل المباراة',
          badge: 'الأسبوع 7',
          items: [
            'تعلم التدوين الجبري للشطرنج لتسجيل النقلات وقراءة كتب المباريات',
            'الربط المحكم بين المراحل: الانتقال السلس من الافتتاح إلى وسط اللعبة والنهاية',
            'تحليل جماعي لمباراة تاريخية لأحد أبطال العالم عبر شاشة العرض عالية الدقة',
            'مباريات تدريبية كاملة مع التدوين الحي والمستمر لكافة النقلات'
          ]
        },
        {
          title: 'الأسبوع 8 — البطولة الودية وحفل التخرج',
          subtitle: 'تطبيق شامل للمهارات والاحتفاء بالتميز',
          badge: 'الأسبوع 8',
          items: [
            'بطولة ودية ختامية وفق النظام السويسري المعتمد',
            'تحليل جماعي لأبرز النقلات الذكية والمتميزة بإشراف المدربين',
            'ترسيخ قيم الروح الرياضية، التواضع عند الفوز، والتعلم البناء من الخسارة',
            'حفل تخرج رسمي، تسليم شهادات الإنجاز المعتمدة، وتوزيع الجوائز'
          ]
        }
      ],
      facilitiesTitle: 'الأدوات والمعدات التعليمية المقدمة',
      facilities: [
        {
          title: 'رقع وقطع شطرنج بطولات رسمية',
          desc: 'رقع قياسية مع قطع Staunton الثقيلة المخصصة للمنافسات والتدريب الثنائي.',
          icon: '♟️'
        },
        {
          title: 'منصة وأدوات Chess.com الاحترافية',
          desc: 'تحليل تكتيكي بالذكاء الاصطناعي، وألغاز تفاعلية، وعروض تدريبية مميزة بإشراف المدربين.',
          icon: '💻'
        },
        {
          title: 'شاشة عرض تفاعلية عالية الدقة',
          desc: 'لشرح الدروس الجماعية، وعرض المباريات التاريخية، وتحليل المواقف التكتيكية مباشرة.',
          icon: '📽️'
        },
        {
          title: 'استمارات التدوين ومواد التدريب',
          desc: 'استمارات رسمية لتسجيل النقلات وأوراق عمل لمراجعة الألغاز ومواصلة التمرين في المنزل.',
          icon: '📝'
        }
      ],
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
        'مجموعة مقتصرة بدقة على 10 طلاب فقط تضمن المتابعة الفردية الحثيثة من المدربين'
      ]
    }
  }
};

export function getLocalizedCourse(course: CourseData, lang: Language): CourseData {
  if (lang === 'en') {
    return course;
  }

  const overrides = COURSES_OVERRIDES[course.slug]?.[lang]
    || (course.slug === 'homeschooling-support' ? COURSES_OVERRIDES['homeschooling-support-hub']?.[lang] : undefined)
    || (course.slug === 'homeschooling-support-hub' ? COURSES_OVERRIDES['homeschooling-support']?.[lang] : undefined);

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
    curriculumTitle: overrides.curriculumTitle || course.curriculumTitle,
    curriculumTracks: overrides.curriculumTracks || course.curriculumTracks,
    facilitiesTitle: overrides.facilitiesTitle || course.facilitiesTitle,
    facilities: overrides.facilities || course.facilities,
    levelPrograms: overrides.levelPrograms || course.levelPrograms,
    durationOptions: overrides.durationOptions || course.durationOptions,
    membershipTiers: overrides.membershipTiers || course.membershipTiers,
    parentChallenges: overrides.parentChallenges || course.parentChallenges,
    teacher: overrides.teacher || course.teacher,
  };
}
