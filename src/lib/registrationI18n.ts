export type FormLang = 'en' | 'fr' | 'ar';

export interface FormDictionary {
  badgeTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  requiredNote: string;
  
  // Step labels
  steps: {
    typeAndContact: string;
    courseAndEdu: string;
    paymentAndReview: string;
    appointment?: string;
    done: string;
  };

  // Section 1: Registration Type
  section1Title: string;
  whoAreYouRegistering: string;
  childUnder18: string;
  childUnder18Desc: string;
  adultSelf: string;
  adultSelfDesc: string;

  // Section 2A: Parent/Guardian
  parentSectionTitle: string;
  parentSectionDesc: string;
  parentFullName: string;
  relationshipLabel: string;
  mother: string;
  father: string;
  legalGuardian: string;
  other: string;
  pleaseSpecify: string;
  emailLabel: string;
  phoneLabel: string;
  preferredLanguageLabel: string;

  // Path B Adult
  adultSectionTitle: string;
  adultSectionDesc: string;
  adultUnder18Error: string;
  fullNameLabel: string;
  dobLabel: string;
  genderLabel: string;
  female: string;
  male: string;
  ageYearsOld: string;

  // Education
  schoolGradeLabel: string;
  educationLevelLabel: string;
  selectOption: string;

  // Course Selection
  selectCourseTitle: string;
  selectCourseSubtitle: string;
  eligibleBadge: string;
  ineligibleBadge: string;
  assignedSessionLabel: string;
  femaleSessionNote: string;
  maleSessionNote: string;

  // Add Another Student
  addAnotherTitle: string;
  addAnotherStudentBtn: string;
  studentNumber: string;
  removeStudentBtn: string;
  yes: string;
  no: string;

  // Payment
  paymentSectionTitle: string;
  paymentMethodLabel: string;
  cash: string;
  eTransfer: string;
  paymentOther: string;

  // Confirmation checkbox
  parentConfirmAgreement: string;
  adultConfirmAgreement: string;

  // Navigation
  nextBtn: string;
  backBtn: string;
  submitBtn: string;
  submittingBtn: string;

  // Confirmation screen
  regReceivedTitle: string;
  thankYouMessage: string;
  disclaimerNotice: string;
  attendeeSummary: string;
  studentSummary: string;
  scheduledCallTitle: string;
  openMeetBtn: string;
  meetLinkNote: string;
}

export const I18N_DICTIONARIES: Record<FormLang, FormDictionary> = {
  en: {
    badgeTitle: 'Course Registration',
    heroTitle: 'Course Registration',
    heroSubtitle: 'Please complete the form below to register for one of our courses. Fields marked with an asterisk (*) are required.',
    requiredNote: 'Fields marked with an asterisk (*) are required',
    steps: {
      typeAndContact: 'Registration',
      courseAndEdu: 'Course',
      paymentAndReview: 'Payment & Review',
      appointment: 'Fit Call',
      done: 'Done',
    },
    section1Title: 'Registration Type',
    whoAreYouRegistering: 'Who are you registering?',
    childUnder18: 'My child / a student under 18',
    childUnder18Desc: 'For parents or legal guardians registering students under 18 (including 16–17 year-olds).',
    adultSelf: 'Myself – I am 18 years of age or older',
    adultSelfDesc: 'For independent adult students 18 years or older registering for themselves.',
    parentSectionTitle: 'Parent / Guardian Information',
    parentSectionDesc: 'Please provide your contact information so we can reach you regarding this registration.',
    parentFullName: 'Parent / Guardian Full Name',
    relationshipLabel: 'Relationship to Student',
    mother: 'Mother',
    father: 'Father',
    legalGuardian: 'Legal Guardian',
    other: 'Other',
    pleaseSpecify: 'Please specify',
    emailLabel: 'Email Address',
    phoneLabel: 'Phone Number',
    preferredLanguageLabel: 'Preferred Language of Communication',
    adultSectionTitle: 'Adult Student Information',
    adultSectionDesc: 'Please enter your personal details and contact information.',
    adultUnder18Error: 'Students under 18 must be registered by a parent or legal guardian. Please return to the beginning of the form and select "My child / a student under 18."',
    fullNameLabel: 'Full Name',
    dobLabel: 'Date of Birth',
    genderLabel: 'Gender',
    female: 'Female',
    male: 'Male',
    ageYearsOld: 'years old',
    schoolGradeLabel: 'Current School Grade',
    educationLevelLabel: 'Current Level of Education',
    selectOption: 'Select an option...',
    selectCourseTitle: 'Select a Course',
    selectCourseSubtitle: 'Choose from our available Fall 2026 courses based on age and eligibility.',
    eligibleBadge: 'Eligible',
    ineligibleBadge: 'Not Eligible',
    assignedSessionLabel: 'Assigned Session',
    femaleSessionNote: 'Friday session assigned automatically for female students.',
    maleSessionNote: 'Sunday session assigned automatically for male students.',
    addAnotherTitle: 'Would you like to register another child/student?',
    addAnotherStudentBtn: '+ Add Another Student',
    studentNumber: 'Student',
    removeStudentBtn: 'Remove',
    yes: 'Yes',
    no: 'No',
    paymentSectionTitle: 'Payment & Review',
    paymentMethodLabel: 'Preferred Payment Method',
    cash: 'Cash',
    eTransfer: 'e-Transfer',
    paymentOther: 'Other',
    parentConfirmAgreement: 'I confirm that I am authorized to register the student(s) listed above and agree to pay the applicable course fees.',
    adultConfirmAgreement: 'I confirm that I am 18 years of age or older, that the information provided is accurate, and that I agree to pay the applicable course fees.',
    nextBtn: 'Continue',
    backBtn: 'Back',
    submitBtn: 'Submit Registration',
    submittingBtn: 'Submitting...',
    regReceivedTitle: 'Registration Received',
    thankYouMessage: 'Thank you for registering with Avenir Souriant. We have received your registration information. Our team will contact you with confirmation and payment details.',
    disclaimerNotice: 'Please note: Submitting this form does not guarantee a place in the selected course. Registration is confirmed once you receive confirmation from Avenir Souriant.',
    attendeeSummary: 'Registrant Details',
    studentSummary: 'Registered Student(s)',
    scheduledCallTitle: 'Scheduled Fit Assessment Call',
    openMeetBtn: 'Open Google Meet Link',
    meetLinkNote: 'A calendar invitation (.ics) and conference details have been sent to your email.',
  },
  fr: {
    badgeTitle: 'Inscription aux cours',
    heroTitle: 'Inscription aux cours',
    heroSubtitle: 'Veuillez remplir le formulaire ci-dessous pour vous inscrire à l’un de nos cours. Les champs marqués d’un astérisque (*) sont obligatoires.',
    requiredNote: 'Les champs marqués d’un astérisque (*) sont obligatoires',
    steps: {
      typeAndContact: 'Inscription',
      courseAndEdu: 'Cours',
      paymentAndReview: 'Paiement & Révision',
      appointment: 'Rencontre',
      done: 'Terminé',
    },
    section1Title: 'Type d’inscription',
    whoAreYouRegistering: 'Qui inscrivez-vous ?',
    childUnder18: 'Mon enfant / un élève de moins de 18 ans',
    childUnder18Desc: 'Pour les parents ou tuteurs légaux inscrivant des élèves mineurs (y compris 16–17 ans).',
    adultSelf: 'Moi-même – J’ai 18 ans ou plus',
    adultSelfDesc: 'Pour les étudiants adultes autonomes de 18 ans et plus s’inscrivant eux-mêmes.',
    parentSectionTitle: 'Informations du parent / tuteur',
    parentSectionDesc: 'Veuillez fournir vos coordonnées afin que nous puissions vous contacter.',
    parentFullName: 'Nom complet du parent / tuteur',
    relationshipLabel: 'Lien de parenté avec l’élève',
    mother: 'Mère',
    father: 'Père',
    legalGuardian: 'Tuteur légal',
    other: 'Autre',
    pleaseSpecify: 'Veuillez préciser',
    emailLabel: 'Adresse courriel',
    phoneLabel: 'Numéro de téléphone',
    preferredLanguageLabel: 'Langue de communication préférée',
    adultSectionTitle: 'Informations de l’étudiant adulte',
    adultSectionDesc: 'Veuillez entrer vos coordonnées et renseignements personnels.',
    adultUnder18Error: 'Les étudiants de moins de 18 ans doivent être inscrits par un parent ou tuteur légal. Veuillez sélectionner "Mon enfant / un élève de moins de 18 ans".',
    fullNameLabel: 'Nom complet',
    dobLabel: 'Date de naissance',
    genderLabel: 'Genre',
    female: 'Femme / Fille',
    male: 'Homme / Garçon',
    ageYearsOld: 'ans',
    schoolGradeLabel: 'Niveau scolaire actuel',
    educationLevelLabel: 'Niveau d’études actuel',
    selectOption: 'Sélectionnez une option...',
    selectCourseTitle: 'Sélectionnez un cours',
    selectCourseSubtitle: 'Choisissez parmi nos cours disponibles pour l’automne 2026.',
    eligibleBadge: 'Éligible',
    ineligibleBadge: 'Non éligible',
    assignedSessionLabel: 'Session attribuée',
    femaleSessionNote: 'Session du vendredi attribuée automatiquement pour les participantes.',
    maleSessionNote: 'Session du dimanche attribuée automatiquement pour les participants.',
    addAnotherTitle: 'Souhaitez-vous inscrire un autre enfant / élève ?',
    addAnotherStudentBtn: '+ Ajouter un autre élève',
    studentNumber: 'Élève',
    removeStudentBtn: 'Supprimer',
    yes: 'Oui',
    no: 'Non',
    paymentSectionTitle: 'Paiement et révision',
    paymentMethodLabel: 'Mode de paiement préféré',
    cash: 'Argent comptant',
    eTransfer: 'Virement Interac',
    paymentOther: 'Autre',
    parentConfirmAgreement: 'Je confirme que je suis autorisé(e) à inscrire le ou les élèves ci-dessus et j’accepte de payer les frais applicables.',
    adultConfirmAgreement: 'Je confirme que j’ai 18 ans ou plus, que les informations sont exactes et j’accepte de payer les frais applicables.',
    nextBtn: 'Continuer',
    backBtn: 'Retour',
    submitBtn: 'Soumettre l’inscription',
    submittingBtn: 'Envoi en cours...',
    regReceivedTitle: 'Inscription reçue',
    thankYouMessage: 'Merci de vous être inscrit(e) auprès d’Avenir Souriant. Nous avons bien reçu votre demande. Notre équipe communiquera avec vous avec confirmation et détails de paiement.',
    disclaimerNotice: 'Veuillez noter : La soumission de ce formulaire ne garantit pas une place dans le cours sélectionné. L’inscription est confirmée une fois que vous recevez confirmation d’Avenir Souriant.',
    attendeeSummary: 'Coordonnées de l’inscrit',
    studentSummary: 'Élève(s) inscrit(s)',
    scheduledCallTitle: 'Appel d’évaluation programmé',
    openMeetBtn: 'Ouvrir le lien Google Meet',
    meetLinkNote: 'Une invitation de calendrier (.ics) et les détails vous ont été envoyés par courriel.',
  },
  ar: {
    badgeTitle: 'التسجيل في الدورات',
    heroTitle: 'التسجيل في الدورات',
    heroSubtitle: 'يرجى إكمال النموذج أدناه للتسجيل في إحدى دوراتنا. الحقول التي تحمل علامة (*) مطلوبة.',
    requiredNote: 'الحقول التي تحمل علامة (*) مطلوبة',
    steps: {
      typeAndContact: 'نوع التسجيل',
      courseAndEdu: 'الدورة والتعليم',
      paymentAndReview: 'الدفع والمراجعة',
      appointment: 'المقابلة',
      done: 'تم بنجاح',
    },
    section1Title: 'نوع التسجيل',
    whoAreYouRegistering: 'من الذي تقوم بتسجيله؟',
    childUnder18: 'طفلي / طالب أقل من 18 عاماً',
    childUnder18Desc: 'لأولياء الأمور والأوصياء لتسجيل الطلاب تحت سن 18 (بما في ذلك من يبلغون 16 أو 17 عاماً).',
    adultSelf: 'نفسي – عمري 18 عاماً أو أكثر',
    adultSelfDesc: 'للطلاب البالغين (18 عاماً فما فوق) المسجلين بأنفسهم.',
    parentSectionTitle: 'معلومات ولي الأمر / الوصي',
    parentSectionDesc: 'يرجى تقديم معلومات الاتصال الخاصة بك حتى نتمكن من التواصل معك بخصوص التسجيل.',
    parentFullName: 'الاسم الكامل لولي الأمر / الوصي',
    relationshipLabel: 'صلة القرابة بالطالب',
    mother: 'أم',
    father: 'أب',
    legalGuardian: 'وصي قانوني',
    other: 'أخرى',
    pleaseSpecify: 'يرجى التحديد',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'رقم الهاتف',
    preferredLanguageLabel: 'لغة التواصل المفضلة',
    adultSectionTitle: 'معلومات الطالب البالغ',
    adultSectionDesc: 'يرجى إدخال بياناتك الشخصية ومعلومات التواصل.',
    adultUnder18Error: 'يجب تسجيل الطلاب الذين تقل أعمارهم عن 18 عاماً بواسطة أحد الوالدين أو وصي قانوني. يرجى الرجوع إلى بداية النموذج واختيار "طفلي / طالب أقل من 18 عاماً".',
    fullNameLabel: 'الاسم الكامل',
    dobLabel: 'تاريخ الميلاد',
    genderLabel: 'الجنس',
    female: 'أنثى',
    male: 'ذكر',
    ageYearsOld: 'سنة',
    schoolGradeLabel: 'الصف الدراسي الحالي',
    educationLevelLabel: 'المستوى التعليمي الحالي',
    selectOption: 'اختر خياراً...',
    selectCourseTitle: 'اختر الدورة',
    selectCourseSubtitle: 'اختر من دوراتنا المتاحة لخريف 2026 بناءً على العمر والشروط.',
    eligibleBadge: 'مؤهل',
    ineligibleBadge: 'غير مؤهل',
    assignedSessionLabel: 'الجلسة المحددة',
    femaleSessionNote: 'يوم الجمعة مخصص تلقائياً للإناث.',
    maleSessionNote: 'يوم الأحد مخصص تلقائياً للذكور.',
    addAnotherTitle: 'هل ترغب في تسجيل طفل / طالب آخر؟',
    addAnotherStudentBtn: '+ إضافة طالب آخر',
    studentNumber: 'طالب',
    removeStudentBtn: 'حذف',
    yes: 'نعم',
    no: 'لا',
    paymentSectionTitle: 'طريقة الدفع والمراجعة',
    paymentMethodLabel: 'طريقة الدفع المفضلة',
    cash: 'نقداً',
    eTransfer: 'تحويل إلكتروني (e-Transfer)',
    paymentOther: 'أخرى',
    parentConfirmAgreement: 'أؤكد أنني مفوض بتسجيل الطالب (الطلاب) المذكورين أعلاه وأوافق على دفع الرسوم الدراسية المطبقة.',
    adultConfirmAgreement: 'أؤكد أن عمري 18 عاماً أو أكثر، وأن المعلومات المقدمة دقيقة، وأوافق على دفع الرسوم الدراسية المطبقة.',
    nextBtn: 'متابعة',
    backBtn: 'رجوع',
    submitBtn: 'إرسال التسجيل',
    submittingBtn: 'جارٍ الإرسال...',
    regReceivedTitle: 'تم استلام طلب التسجيل',
    thankYouMessage: 'شكراً لتسجيلك مع المستقبل الباسم. لقد تلقينا معلومات التسجيل الخاصة بك. سيتواصل فريقنا معك لتأكيد التسجيل وتفاصيل الدفع.',
    disclaimerNotice: 'يرجى ملاحظة: تقديم هذا النموذج لا يضمن مقعداً في الدورة المختارة. يتم تأكيد التسجيل بمجرد استلامك تأكيداً رسمياً من المستقبل الباسم.',
    attendeeSummary: 'بيانات المسجل',
    studentSummary: 'الطلاب المسجلون',
    scheduledCallTitle: 'موعد مقابلة التقييم المحدد',
    openMeetBtn: 'فتح رابط Google Meet',
    meetLinkNote: 'تم إرسال دعوة التقويم (.ics) وتفاصيل اللقاء إلى بريدك الإلكتروني.',
  },
};
