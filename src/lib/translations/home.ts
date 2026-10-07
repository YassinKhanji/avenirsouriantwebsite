import type { Language } from '@/contexts/LanguageContext';

export interface HomeTranslations {
  hero: {
    slide1: {
      headingPart1: string;
      headingHighlight1: string;
      headingPart2: string;
      headingHighlight2: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
    slide2: {
      headingPart1: string;
      headingHighlight1: string;
      headingPart2: string;
      headingHighlight2: string;
      cta: string;
      or: string;
    };
    slide3: {
      heading: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
  };
  welcome: {
    title: string;
    body: string;
    points: string[];
    ctaPrograms: string;
    ctaRegister: string;
  };
  programsSection: {
    title: string;
    subtitle: string;
    viewMore: string;
  };
  location: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    items: {
      name: string;
      quote: string;
    }[];
  };
  statsSection: {
    title: string;
    body: string;
    cta: string;
    stats: {
      val: string;
      label: string;
    }[];
  };
  ctaBanner: {
    title: string;
    body: string;
    button: string;
  };
}

export const HOME_TRANSLATIONS: Record<Language, HomeTranslations> = {
  en: {
    hero: {
      slide1: {
        headingPart1: 'Engaging',
        headingHighlight1: 'Programs',
        headingPart2: 'for Every',
        headingHighlight2: 'Person',
        subtitle: 'From Arabic language mastery to STEM & Robotics, our programs are designed to spark curiosity, build confidence, and make learning an adventure.',
        cta1: 'View Programs',
        cta2: 'Register Now',
      },
      slide2: {
        headingPart1: 'Discover the',
        headingHighlight1: 'Joy',
        headingPart2: 'of Learning',
        headingHighlight2: 'Arabic',
        cta: 'Register Now',
        or: 'or',
      },
      slide3: {
        heading: 'Join the Avenir Souriant Family Today',
        subtitle: "Enroll your child in Montréal's most exciting Arabic learning center. Limited spots available — register now!",
        cta1: 'Register Now',
        cta2: 'View Programs',
      },
    },
    welcome: {
      title: 'Welcome to Avenir Souriant',
      body: "Avenir Souriant is the Arabic learning center that flipped the script. No more boring drills, no more dreading class. We made Arabic their favorite subject — and the kids will tell you themselves. Based in Montréal, we're building the next generation of confident Arabic speakers, one smiling face at a time.",
      points: [
        'Innovative & Interactive Learning',
        'Arabic for Speakers and Non-Speakers',
        'Diverse Activities: Robotics, Soccer, & Stitching',
      ],
      ctaPrograms: 'View Programs',
      ctaRegister: 'Register Now',
    },
    programsSection: {
      title: 'Our Programs',
      subtitle: 'Explore our comprehensive array of educational programs and engaging extracurricular activities tailored to inspire your child.',
      viewMore: 'View More Programs',
    },
    location: {
      title: 'Visit Our Center',
      subtitle: 'Come see our modern facilities where we inspire the next generation of confident Arabic speakers.',
    },
    testimonials: {
      title: 'What Clients Say',
      items: [
        {
          name: 'Nour Al-Sabah',
          quote: 'My kids used to dread Arabic classes, but Avenir Souriant completely flipped the script. They come home excited to learn!',
        },
        {
          name: 'Kareem Hassan',
          quote: 'The blend of language learning with robotics and soccer is incredible. It keeps my son engaged and active all weekend.',
        },
        {
          name: 'Layla M.',
          quote: "An amazing center! The teachers are passionate, the environment is safe, and my daughter's confidence has skyrocketed.",
        },
      ],
    },
    statsSection: {
      title: 'A New Era of Education',
      body: 'We believe that learning should be an adventure. Our certified instructors combine language immersion with fun activities like sports and robotics to ensure every child loves coming to class.',
      cta: 'View Programs',
      stats: [
        { val: '5', label: 'Interactive Programs' },
        { val: '98%', label: 'Engagement' },
        { val: '7', label: 'Expert Instructors' },
        { val: '37', label: 'Happy Students' },
      ],
    },
    ctaBanner: {
      title: 'Ready to Join Avenir Souriant?',
      body: 'Give your child the gift of language, creativity, and coding. Join the Avenir Souriant family and watch them build confidence, make friends, and discover the joy of learning Arabic through hands-on activities, robotics, and sports.',
      button: 'Register Now',
    },
  },

  fr: {
    hero: {
      slide1: {
        headingPart1: 'Des programmes',
        headingHighlight1: 'Stimulants',
        headingPart2: 'pour chaque',
        headingHighlight2: 'Enfant',
        subtitle: "De la maîtrise de la langue arabe aux STIM et à la robotique, nos cours sont conçus pour éveiller la curiosité, renforcer la confiance et faire de chaque leçon une véritable aventure.",
        cta1: 'Voir les programmes',
        cta2: 'Enregistrer vous',
      },
      slide2: {
        headingPart1: 'Découvrez le',
        headingHighlight1: 'Plaisir',
        headingPart2: "d'apprendre",
        headingHighlight2: "l'Arabe",
        cta: 'Enregistrer vous',
        or: 'ou',
      },
      slide3: {
        heading: "Rejoignez la famille de l'Avenir Souriant dès aujourd'hui",
        subtitle: "Inscrivez votre enfant dans le centre d'apprentissage de l'arabe le plus stimulant et chaleureux de Montréal. Places limitées — réservez dès maintenant !",
        cta1: 'Enregistrer vous',
        cta2: 'Voir les programmes',
      },
    },
    welcome: {
      title: "Bienvenue à l'Avenir Souriant",
      body: "L'Avenir Souriant est le centre d'apprentissage qui transforme l'enseignement de l'arabe à Montréal. Fini les cours monotones et l'hésitation. Nous avons fait de l'arabe leur matière préférée — et les enfants vous le confirmeront d'eux-mêmes ! Nous formons une génération épanouie de locuteurs arabophones confiants, un sourire à la fois.",
      points: [
        'Pédagogie innovante et apprentissage interactif',
        'Programmes adaptés pour arabophones et non-arabophones',
        'Activités stimulantes : robotique, programmation, soccer et ateliers créatifs',
      ],
      ctaPrograms: 'Voir les programmes',
      ctaRegister: 'Enregistrer vous',
    },
    programsSection: {
      title: 'Nos Programmes',
      subtitle: "Explorez notre éventail complet de cours éducatifs et d'activités parascolaires conçus pour développer le plein potentiel de votre enfant.",
      viewMore: 'Voir tous les programmes',
    },
    location: {
      title: 'Visitez notre centre',
      subtitle: 'Venez découvrir nos locaux modernes à Saint-Laurent où nous inspirons la prochaine génération de jeunes bilingues.',
    },
    testimonials: {
      title: 'Ce que disent les parents',
      items: [
        {
          name: 'Nour Al-Sabah',
          quote: "Mes enfants redoutaient les cours d'arabe traditionnels, mais l'Avenir Souriant a complètement changé la donne. Ils reviennent à la maison ravis et motivés !",
        },
        {
          name: 'Kareem Hassan',
          quote: "L'alliance de l'arabe avec la robotique et le soccer est formidable. Mon fils reste concentré, enthousiaste et actif tout le week-end.",
        },
        {
          name: 'Layla M.',
          quote: "Un centre exceptionnel ! Les enseignants sont passionnés, l'ambiance est sécuritaire et bienveillante, et la confiance de ma fille s'est envolée.",
        },
      ],
    },
    statsSection: {
      title: "Une nouvelle ère de l'éducation",
      body: "Nous croyons fermement que l'apprentissage doit être une expérience passionnante. Nos éducateurs qualifiés combinent immersion linguistique et activités stimulantes pour que chaque jeune vienne en classe avec enthousiasme.",
      cta: 'Voir les programmes',
      stats: [
        { val: '5', label: 'Programmes interactifs' },
        { val: '98%', label: 'Taux de satisfaction' },
        { val: '7', label: 'Éducateurs experts' },
        { val: '37', label: 'Élèves épanouis' },
      ],
    },
    ctaBanner: {
      title: "Prêt à rejoindre l'Avenir Souriant ?",
      body: "Offrez à votre enfant le précieux bagage de la langue, de la pensée logique et de la créativité. Rejoignez la communauté de l'Avenir Souriant et voyez-le s'épanouir, nouer de belles amitiés et aimer l'arabe grâce à nos ateliers interactifs.",
      button: 'Enregistrer vous',
    },
  },

  ar: {
    hero: {
      slide1: {
        headingPart1: 'برامج تعليمية',
        headingHighlight1: 'تفاعلية',
        headingPart2: 'تلهم كل',
        headingHighlight2: 'طالب',
        subtitle: 'من إتقان مهارات اللغة العربية إلى الروبوتات والبرمجة، صُممت برامجنا لإيقاظ الشغف وبناء الثقة وجعل التعلم مغامرة ممتعة ومجزية.',
        cta1: 'استكشف البرامج',
        cta2: 'سجل الان',
      },
      slide2: {
        headingPart1: 'اكتشف',
        headingHighlight1: 'متعة',
        headingPart2: 'تعلّم اللغة',
        headingHighlight2: 'العربية',
        cta: 'سجل الان',
        or: 'أو اتصل بنا مباشرة',
      },
      slide3: {
        heading: 'انضم إلى عائلة المستقبل الباسم اليوم',
        subtitle: 'سجّل طفلك في المركز الأكثر تفاعلاً وإلهاماً لتعليم اللغة العربية في مونتريال. المقاعد محدودة — سجّل الآن!',
        cta1: 'سجل الان',
        cta2: 'استكشف البرامج',
      },
    },
    welcome: {
      title: 'مرحباً بكم في المستقبل الباسم',
      body: 'المستقبل الباسم هو المركز الرائد في مونتريال الذي حوّل تجربة تعلم اللغة العربية من واجب ثقيل إلى شغف ومغامرة يومية. لا مزيد من التلقين الجاف أو الملل؛ جعلنا العربية المادة الأحب للأطفال بشهادتهم وفرحتهم! نبني جيلاً واثقاً من هويته ومتمكناً من لغته، بابتسامة وفخر.',
      points: [
        'منهجية تفاعلية حديثة تركز على الفهم والتطبيق',
        'مسارات مخصصة للناطقين باللغة العربية ولغير الناطقين بها',
        'أنشطة إثرائية متنوعة: روبوتات، شطرنج، رياضة، وفنون إبداعية',
      ],
      ctaPrograms: 'استكشف البرامج',
      ctaRegister: 'سجل الان',
    },
    programsSection: {
      title: 'برامجنا التعليمية',
      subtitle: 'تعرّف على باقة برامجنا الأكاديمية والأنشطة الإثرائية المصممة بعناية لإلهام طفلك وتطوير قدراته الشاملة.',
      viewMore: 'عرض جميع البرامج',
    },
    location: {
      title: 'تفضل بزيارة مركزنا',
      subtitle: 'ندعوكم لزيارة مرافقنا التعليمية الحديثة في سان لوران، والتعرف على بيئتنا الإيجابية والملهمة.',
    },
    testimonials: {
      title: 'ماذا يقول أولياء الأمور عنا',
      items: [
        {
          name: 'نور الصباح',
          quote: 'كان أطفالي يترددون في دروس العربية التقليدية، لكن المستقبل الباسم أحدث فرقاً شاسعاً. أصبحوا يعودون إلى المنزل في غاية الحماس للتحدث بها!',
        },
        {
          name: 'كريم حسن',
          quote: 'الدمج بين تعلم اللغة والروبوتات والأنشطة الرياضية فكرة عبقرية. حافظت على نشاط ابني واهتمامه طوال عطلة نهاية الأسبوع.',
        },
        {
          name: 'ليلى م.',
          quote: 'مركز ممتاز بكل المعايير! المعلمون في قمة العطاء، والبيئة محفزة وآمنة، وثقة ابنتي بنفسها وبالتحدث بالعربية زادت بشكل ملحوظ.',
        },
      ],
    },
    statsSection: {
      title: 'آفاق جديدة في التعليم والتمكين',
      body: 'نؤمن في المستقبل الباسم بأن التعلم الفعّال ينبع من الشغف والتفاعل. يجمع خبراؤنا بين الانغماس اللغوي والأنشطة الترفيهية الهادفة لضمان حب كل طفل لحضور الصفوف وتفوقه.',
      cta: 'استكشف البرامج',
      stats: [
        { val: '5', label: 'برامج تفاعلية متخصصة' },
        { val: '98%', label: 'نسبة الرضا والتفاعل' },
        { val: '7', label: 'معلمين وموجهين متخصصين' },
        { val: '37', label: 'طالباً وطالبة في بيئة محفزة' },
      ],
    },
    ctaBanner: {
      title: 'هل أنت مستعد للانضمام إلى المستقبل الباسم؟',
      body: 'امنح طفلك فرصة الانطلاق في مسيرة لغوية ومعرفية متكاملة. انضم إلى أسرتنا وشاهد طفلك يكتسب الثقة، ويبني صداقات طيبة، ويكتشف جمال العربية عبر أنشطة عملية وروبوتات وشطرنج ورياضة.',
      button: 'سجل الان',
    },
  },
};
