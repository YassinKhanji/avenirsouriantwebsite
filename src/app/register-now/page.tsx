'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransitionLink } from '@/components/TransitionLink';
import {
  FALL_2026_COURSES,
  SCHOOL_GRADES,
  EDUCATION_LEVELS,
  PAYMENT_METHODS,
  COMMUNICATION_LANGUAGES,
  calculateAge,
  getCourseById,
  checkCourseEligibility,
  getAssignedSession,
  type CourseDefinition,
} from '@/lib/coursesConfig';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  I18N_DICTIONARIES,
  type FormLang,
} from '@/lib/registrationI18n';

/* ── Types ── */
export type RegistrationPathway = 'parent' | 'adult';

export interface StudentEntry {
  id: string;
  fullName: string;
  dateOfBirth: string;
  gender: 'Female' | 'Male' | '';
  courseId: string;
  educationValue: string;
  educationOther: string;
}

export interface ParentInfo {
  fullName: string;
  relationship: string;
  relationshipOther: string;
  email: string;
  phone: string;
  preferredLanguage: string;
}

export interface AdultInfo {
  fullName: string;
  dateOfBirth: string;
  gender: 'Female' | 'Male' | '';
  email: string;
  phone: string;
  preferredLanguage: string;
  educationLevel: string;
  educationOther: string;
  courseId: string;
}

const emptyStudent = (id: string): StudentEntry => ({
  id,
  fullName: '',
  dateOfBirth: '',
  gender: '',
  courseId: '',
  educationValue: '',
  educationOther: '',
});

/* ── Animation Variants ── */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

/* ── Standalone Form Components ── */
const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  dir,
  disabled = false,
  helperText,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  dir?: string;
  disabled?: boolean;
  helperText?: string;
}) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
      {label} {required && <span className="text-secondary">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      dir={dir}
      disabled={disabled}
      className={`w-full px-4 py-3 rounded-xl border text-base ${
        error ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300'
      } ${
        disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-50 text-gray-900'
      } focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all`}
      required={required}
    />
    {helperText && !error && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
    {error && <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>}
  </div>
);

const RadioOption = ({
  name,
  value,
  checked,
  onChange,
  label,
  description,
  disabled = false,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  label: string;
  description?: string;
  disabled?: boolean;
}) => (
  <label
    className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
      checked
        ? 'border-secondary bg-secondary/5 ring-2 ring-secondary/20 shadow-xs'
        : 'border-gray-200 bg-white hover:border-gray-300'
    } ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
  >
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className="w-4 h-4 mt-0.5 accent-[#ff9f43] shrink-0 cursor-pointer"
    />
    <div className="min-w-0">
      <span className="text-gray-900 font-semibold text-sm sm:text-base block">{label}</span>
      {description && <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{description}</p>}
    </div>
  </label>
);

const SelectField = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  error,
  helperText,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[] | string[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
      {label} {required && <span className="text-secondary">*</span>}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 pr-10 rounded-xl border text-base ${
          error ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300'
        } focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all bg-gray-50 text-gray-900 appearance-none cursor-pointer`}
        required={required}
      >
        <option value="">{placeholder || 'Select...'}</option>
        {options.map((opt) => {
          const optValue = typeof opt === 'string' ? opt : opt.value;
          const optLabel = typeof opt === 'string' ? opt : opt.label;
          return (
            <option key={optValue} value={optValue}>
              {optLabel}
            </option>
          );
        })}
      </select>
      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    {helperText && !error && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
    {error && <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>}
  </div>
);



export default function RegisterNow() {
  const { language } = useLanguage();
  const uiLang: FormLang = (language as FormLang) || 'en';
  const t = useMemo(() => I18N_DICTIONARIES[uiLang] || I18N_DICTIONARIES.en, [uiLang]);
  const isRTL = uiLang === 'ar';

  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Section 1: Registration Type (Pathway)
  const [pathway, setPathway] = useState<RegistrationPathway>('parent');

  // Path A: Parent / Guardian Information
  const [parentInfo, setParentInfo] = useState<ParentInfo>({
    fullName: '',
    relationship: '',
    relationshipOther: '',
    email: '',
    phone: '',
    preferredLanguage: 'English',
  });

  // Path A: Registered Students list (supports multiple students)
  const [students, setStudents] = useState<StudentEntry[]>([emptyStudent('1')]);
  const [currentStudentTab, setCurrentStudentTab] = useState(0);
  const [addAnotherRadio, setAddAnotherRadio] = useState<'yes' | 'no' | ''>('');

  // Path B: Adult Self-Registration
  const [adultInfo, setAdultInfo] = useState<AdultInfo>({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    preferredLanguage: 'English',
    educationLevel: '',
    educationOther: '',
    courseId: 'foundation-arabic-16-plus',
  });

  // Section 5: Payment Method
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentMethodOther, setPaymentMethodOther] = useState('');

  // Section 6: Confirmation Checkbox
  const [confirmationAgreed, setConfirmationAgreed] = useState(false);

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formCardRef = useRef<HTMLDivElement>(null);

  // Derived adult age check
  const adultAge = useMemo(() => calculateAge(adultInfo.dateOfBirth), [adultInfo.dateOfBirth]);
  const isAdultUnder18 = pathway === 'adult' && adultAge !== null && adultAge < 18;

  const stepsList = useMemo(
    () => [
      { number: 1, label: t.steps.typeAndContact },
      { number: 2, label: t.steps.courseAndEdu },
      { number: 3, label: t.steps.paymentAndReview },
      { number: 4, label: t.steps.done },
    ],
    [t]
  );

  const goToStep = (step: number) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
    setErrors({});
    setTimeout(() => {
      formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  // Step 1 Validation
  const validateStep1 = (): boolean => {
    const e: Record<string, string> = {};

    if (pathway === 'parent') {
      if (!parentInfo.fullName.trim()) e.parentFullName = 'Parent/Guardian full name is required';
      if (!parentInfo.relationship) e.relationship = 'Please select your relationship to the student';
      if (parentInfo.relationship === 'Other' && !parentInfo.relationshipOther.trim()) {
        e.relationshipOther = 'Please specify your relationship';
      }
      if (!parentInfo.email.trim()) e.email = 'Email address is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parentInfo.email)) e.email = 'Invalid email format';
      if (!parentInfo.phone.trim()) e.phone = 'Phone number is required';
      if (!parentInfo.preferredLanguage) e.preferredLanguage = 'Please select a preferred language';
    } else {
      // Adult pathway
      if (!adultInfo.fullName.trim()) e.adultFullName = 'Full name is required';
      if (!adultInfo.dateOfBirth) e.adultDob = 'Date of birth is required';
      else {
        const age = calculateAge(adultInfo.dateOfBirth);
        if (age === null || age < 18) {
          e.adultDob = t.adultUnder18Error;
        }
      }
      if (!adultInfo.gender) e.adultGender = 'Please select your gender';
      if (!adultInfo.email.trim()) e.adultEmail = 'Email address is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adultInfo.email)) e.adultEmail = 'Invalid email format';
      if (!adultInfo.phone.trim()) e.adultPhone = 'Phone number is required';
      if (!adultInfo.preferredLanguage) e.adultPreferredLanguage = 'Please select a preferred language';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = (): boolean => {
    const e: Record<string, string> = {};

    if (pathway === 'parent') {
      students.forEach((student, index) => {
        const prefix = `student_${index}_`;
        if (!student.fullName.trim()) e[`${prefix}fullName`] = 'Student full name is required';
        if (!student.dateOfBirth) e[`${prefix}dateOfBirth`] = 'Date of birth is required';
        if (!student.gender) e[`${prefix}gender`] = 'Please select gender';

        if (!student.courseId) {
          e[`${prefix}courseId`] = 'Please select a course for this student';
        } else {
          const course = getCourseById(student.courseId);
          if (course) {
            const age = calculateAge(student.dateOfBirth);
            const elig = checkCourseEligibility(course, {
              age,
              gender: student.gender,
              pathway: 'parent',
            });
            if (!elig.eligible) {
              e[`${prefix}courseId`] = elig.reason || 'Student is not eligible for this course';
            }

            // Validate education field based on course type
            if (!student.educationValue) {
              e[`${prefix}educationValue`] = course.is16Plus
                ? 'Please select current level of education'
                : 'Please select current school grade';
            } else if (course.is16Plus && student.educationValue === 'Other' && !student.educationOther.trim()) {
              e[`${prefix}educationOther`] = 'Please specify your education level';
            }
          }
        }
      });
    } else {
      // Adult pathway
      if (!adultInfo.educationLevel) {
        e.adultEducationLevel = 'Please select your current level of education';
      } else if (adultInfo.educationLevel === 'Other' && !adultInfo.educationOther.trim()) {
        e.adultEducationOther = 'Please specify your level of education';
      }
      if (!adultInfo.courseId) {
        e.adultCourseId = 'Please select a course';
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Step 3 Validation (Payment & Agreement)
  const validateStep3 = (): boolean => {
    const e: Record<string, string> = {};
    if (!paymentMethod) e.paymentMethod = 'Please select a preferred payment method';
    if (paymentMethod === 'Other' && !paymentMethodOther.trim()) {
      e.paymentMethodOther = 'Please specify your payment method';
    }
    if (!confirmationAgreed) {
      e.confirmationAgreed = 'You must confirm and agree to proceed';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Add & Remove Student Helpers for Path A
  const handleAddStudent = () => {
    const newId = (students.length + 1).toString();
    const updated = [...students, emptyStudent(newId)];
    setStudents(updated);
    setCurrentStudentTab(updated.length - 1);
    setAddAnotherRadio('yes');
    setErrors({});
  };

  const handleRemoveStudent = (indexToRemove: number) => {
    if (students.length <= 1) return;
    const updated = students.filter((_, idx) => idx !== indexToRemove);
    setStudents(updated);
    setCurrentStudentTab(Math.max(0, indexToRemove - 1));
  };

  const updateStudentField = (
    index: number,
    field: keyof StudentEntry,
    value: string
  ) => {
    setStudents((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  // Final Form Submission
  const handleSubmit = async () => {
    if (!validateStep1()) {
      goToStep(1);
      return;
    }
    if (!validateStep2()) {
      goToStep(2);
      return;
    }
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      let payloadStudents: any[] = [];
      let registrantName = '';
      let registrantEmail = '';
      let registrantPhone = '';

      if (pathway === 'parent') {
        registrantName = parentInfo.fullName;
        registrantEmail = parentInfo.email;
        registrantPhone = parentInfo.phone;

        payloadStudents = students.map((s) => {
          const course = getCourseById(s.courseId);
          const assignedSession = course ? getAssignedSession(course, s.gender) : undefined;
          return {
            fullName: s.fullName,
            dateOfBirth: s.dateOfBirth,
            gender: s.gender,
            courses: course ? [course.name] : [],
            courseId: s.courseId,
            courseName: course?.name,
            assignedSession,
            educationType: course?.is16Plus ? 'level' : 'grade',
            educationValue: s.educationValue,
            educationOther: s.educationOther,
          };
        });
      } else {
        registrantName = adultInfo.fullName;
        registrantEmail = adultInfo.email;
        registrantPhone = adultInfo.phone;

        const course = getCourseById(adultInfo.courseId);
        const assignedSession = course ? getAssignedSession(course, adultInfo.gender) : undefined;

        payloadStudents = [
          {
            fullName: adultInfo.fullName,
            dateOfBirth: adultInfo.dateOfBirth,
            gender: adultInfo.gender,
            courses: course ? [course.name] : ['Foundation Arabic Course for Non-Arabic Speakers – Ages 16+'],
            courseId: adultInfo.courseId,
            courseName: course?.name || 'Foundation Arabic Course for Non-Arabic Speakers – Ages 16+',
            assignedSession,
            educationType: 'level',
            educationValue: adultInfo.educationLevel,
            educationOther: adultInfo.educationOther,
          },
        ];
      }

      const res = await fetch('/api/send-email/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'registration',
          registrationPathway: pathway,
          guardianName: registrantName,
          email: registrantEmail,
          phone: registrantPhone,
          relationship: pathway === 'parent' ? parentInfo.relationship : 'Does not apply',
          relationshipOther: pathway === 'parent' ? parentInfo.relationshipOther : undefined,
          preferredLanguage: pathway === 'parent' ? parentInfo.preferredLanguage : adultInfo.preferredLanguage,
          paymentMethod,
          paymentMethodOther: paymentMethod === 'Other' ? paymentMethodOther : undefined,
          confirmationAgreed: true,
          students: payloadStudents,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
        setIsSubmitting(false);
        return;
      }

      goToStep(4);
    } catch {
      setSubmitError('Network error. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section
          className="relative py-12 sm:py-16 text-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/register_hero_bg.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white/85 z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">




            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-3 sm:mb-4 text-gray-900 drop-shadow-xs">
              {t.heroTitle}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium max-w-2xl mx-auto drop-shadow-xs">
              {t.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Multi-Step Registration Form Container */}
        <section className="py-8 sm:py-14 bg-gradient-to-b from-secondary-light/40 to-white min-h-[60vh]">
          <div className="max-w-2xl lg:max-w-3xl mx-auto px-3 sm:px-6">
            <div
              ref={formCardRef}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-8 md:p-10"
            >
              {/* Stepper Progress Bar */}
              <div className="flex items-center justify-between mb-8 sm:mb-10 w-full max-w-xl mx-auto px-1">
                {stepsList.map((step, i) => {
                  const isActive = currentStep === step.number;
                  const isCompleted = currentStep > step.number;

                  return (
                    <div key={step.number} className="flex items-center flex-1 last:flex-none">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div
                          className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[11px] sm:text-sm font-bold transition-all duration-300 ${
                            isCompleted
                              ? 'bg-secondary text-white'
                              : isActive
                              ? 'bg-secondary text-white ring-2 sm:ring-4 ring-secondary/20'
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {isCompleted ? (
                            <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            step.number
                          )}
                        </div>
                        <span
                          className={`mt-1 text-[10px] sm:text-xs font-semibold transition-colors text-center tracking-tight sm:tracking-normal ${
                            isActive || isCompleted ? 'text-secondary font-bold' : 'text-gray-400'
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                      {i < stepsList.length - 1 && (
                        <div
                          className={`flex-1 h-0.5 mx-1 sm:mx-3 mb-4 transition-colors duration-300 ${
                            currentStep > step.number ? 'bg-secondary' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                {/* ═══════════════ STEP 1: REGISTRATION TYPE & CONTACT ═══════════════ */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    {/* SECTION 1 – REGISTRATION TYPE */}
                    <div className="mb-8 pb-6 border-b border-gray-100">
                      <div className="mb-4">
                        <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                          SECTION 1
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                          {t.section1Title}
                        </h2>
                        <p className="text-gray-600 text-sm mt-1">{t.whoAreYouRegistering} <span className="text-secondary">*</span></p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <RadioOption
                          name="pathway"
                          value="parent"
                          checked={pathway === 'parent'}
                          onChange={() => {
                            setPathway('parent');
                            setErrors({});
                          }}
                          label={t.childUnder18}
                          description={t.childUnder18Desc}
                        />
                        <RadioOption
                          name="pathway"
                          value="adult"
                          checked={pathway === 'adult'}
                          onChange={() => {
                            setPathway('adult');
                            setErrors({});
                          }}
                          label={t.adultSelf}
                          description={t.adultSelfDesc}
                        />
                      </div>
                    </div>

                    {/* PATH A: SECTION 2A – PARENT / GUARDIAN INFORMATION */}
                    {pathway === 'parent' && (
                      <motion.div
                        key="path-a-parent-fields"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-5"
                      >
                        <div className="mb-2">
                          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                            SECTION 2A
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900">
                            {t.parentSectionTitle}
                          </h3>
                          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                            {t.parentSectionDesc}
                          </p>
                        </div>

                        {/* Parent/Guardian Full Name */}
                        <InputField
                          label={t.parentFullName}
                          name="parentFullName"
                          value={parentInfo.fullName}
                          onChange={(e) => setParentInfo({ ...parentInfo, fullName: e.target.value })}
                          placeholder="e.g. Sarah Mansour"
                          required
                          error={errors.parentFullName}
                        />

                        {/* Relationship to Student */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {t.relationshipLabel} <span className="text-secondary">*</span>
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                            {[
                              { key: 'Mother', label: t.mother },
                              { key: 'Father', label: t.father },
                              { key: 'Legal Guardian', label: t.legalGuardian },
                              { key: 'Other', label: t.other },
                            ].map((item) => (
                              <RadioOption
                                key={item.key}
                                name="relationship"
                                value={item.key}
                                checked={parentInfo.relationship === item.key}
                                onChange={() =>
                                  setParentInfo({
                                    ...parentInfo,
                                    relationship: item.key,
                                    relationshipOther: item.key === 'Other' ? parentInfo.relationshipOther : '',
                                  })
                                }
                                label={item.label}
                              />
                            ))}
                          </div>
                          {errors.relationship && (
                            <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.relationship}</p>
                          )}
                          {parentInfo.relationship === 'Other' && (
                            <div className="mt-3">
                              <InputField
                                label={t.pleaseSpecify}
                                name="relationshipOther"
                                value={parentInfo.relationshipOther}
                                onChange={(e) =>
                                  setParentInfo({ ...parentInfo, relationshipOther: e.target.value })
                                }
                                placeholder="e.g. Grandparent, Aunt, Brother"
                                required
                                error={errors.relationshipOther}
                              />
                            </div>
                          )}
                        </div>

                        {/* Contact details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <InputField
                            label={t.emailLabel}
                            name="email"
                            type="email"
                            value={parentInfo.email}
                            onChange={(e) => setParentInfo({ ...parentInfo, email: e.target.value })}
                            placeholder="parent@example.com"
                            required
                            error={errors.email}
                          />

                          <InputField
                            label={t.phoneLabel}
                            name="phone"
                            type="tel"
                            value={parentInfo.phone}
                            onChange={(e) => setParentInfo({ ...parentInfo, phone: e.target.value })}
                            placeholder="+1 (514) 000-0000"
                            required
                            error={errors.phone}
                            dir="ltr"
                          />
                        </div>

                        {/* Preferred Language */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {t.preferredLanguageLabel} <span className="text-secondary">*</span>
                          </label>
                          <div className="grid grid-cols-3 gap-2.5">
                            {COMMUNICATION_LANGUAGES.map((lang) => (
                              <RadioOption
                                key={lang}
                                name="preferredLanguage"
                                value={lang}
                                checked={parentInfo.preferredLanguage === lang}
                                onChange={() => setParentInfo({ ...parentInfo, preferredLanguage: lang })}
                                label={lang === 'English' ? 'English' : lang === 'French' ? 'Français' : 'العربية'}
                              />
                            ))}
                          </div>
                          {errors.preferredLanguage && (
                            <p className="mt-1 text-sm text-red-500 font-medium">{errors.preferredLanguage}</p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* PATH B: SECTION 2B – ADULT SELF-REGISTRATION */}
                    {pathway === 'adult' && (
                      <motion.div
                        key="path-b-adult-fields"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-5"
                      >
                        <div className="mb-2">
                          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                            SECTION 2B
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900">
                            {t.adultSectionTitle}
                          </h3>
                          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                            {t.adultSectionDesc}
                          </p>
                        </div>

                        {/* Full Name */}
                        <InputField
                          label={t.fullNameLabel}
                          name="adultFullName"
                          value={adultInfo.fullName}
                          onChange={(e) => setAdultInfo({ ...adultInfo, fullName: e.target.value })}
                          placeholder="e.g. Yassin Khanji"
                          required
                          error={errors.adultFullName}
                        />

                        {/* Date of Birth & 18+ Age Validation */}
                        <div>
                          <InputField
                            label={t.dobLabel}
                            name="adultDob"
                            type="date"
                            value={adultInfo.dateOfBirth}
                            onChange={(e) => {
                              const val = e.target.value;
                              setAdultInfo({ ...adultInfo, dateOfBirth: val });
                              const calculated = calculateAge(val);
                              if (calculated !== null && calculated < 18) {
                                setErrors((prev) => ({ ...prev, adultDob: t.adultUnder18Error }));
                              } else {
                                setErrors((prev) => {
                                  const next = { ...prev };
                                  delete next.adultDob;
                                  return next;
                                });
                              }
                            }}
                            required
                            error={errors.adultDob}
                            helperText={
                              adultAge !== null
                                ? `Current age: ${adultAge} ${t.ageYearsOld}`
                                : 'Must be 18 years of age or older to self-register.'
                            }
                          />

                          {/* Mandatory 18+ Warning Banner if under 18 */}
                          {isAdultUnder18 && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-3 p-4 bg-amber-50 border-2 border-amber-300 rounded-xl text-amber-900 text-sm flex items-start gap-3 shadow-xs"
                            >
                              <span className="text-xl shrink-0 mt-0.5">⚠️</span>
                              <div>
                                <p className="font-bold text-amber-950 mb-1">Under 18 Age Requirement</p>
                                <p className="text-xs sm:text-sm leading-relaxed">
                                  {t.adultUnder18Error}
                                </p>
                                <button
                                  type="button"
                                  onClick={() => setPathway('parent')}
                                  className="mt-2.5 px-4 py-1.5 bg-amber-600 text-white rounded-lg text-xs font-bold hover:bg-amber-700 transition-colors shadow-xs cursor-pointer"
                                >
                                  Switch to Parent / Guardian Registration
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Gender */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {t.genderLabel} <span className="text-secondary">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            <RadioOption
                              name="adultGender"
                              value="Female"
                              checked={adultInfo.gender === 'Female'}
                              onChange={() => setAdultInfo({ ...adultInfo, gender: 'Female' })}
                              label={t.female}
                              description="Assigned session: Friday"
                            />
                            <RadioOption
                              name="adultGender"
                              value="Male"
                              checked={adultInfo.gender === 'Male'}
                              onChange={() => setAdultInfo({ ...adultInfo, gender: 'Male' })}
                              label={t.male}
                              description="Assigned session: Sunday"
                            />
                          </div>
                          {errors.adultGender && (
                            <p className="mt-1 text-sm text-red-500 font-medium">{errors.adultGender}</p>
                          )}
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <InputField
                            label={t.emailLabel}
                            name="adultEmail"
                            type="email"
                            value={adultInfo.email}
                            onChange={(e) => setAdultInfo({ ...adultInfo, email: e.target.value })}
                            placeholder="you@example.com"
                            required
                            error={errors.adultEmail}
                          />

                          <InputField
                            label={t.phoneLabel}
                            name="adultPhone"
                            type="tel"
                            value={adultInfo.phone}
                            onChange={(e) => setAdultInfo({ ...adultInfo, phone: e.target.value })}
                            placeholder="+1 (514) 000-0000"
                            required
                            error={errors.adultPhone}
                            dir="ltr"
                          />
                        </div>

                        {/* Preferred Language */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {t.preferredLanguageLabel} <span className="text-secondary">*</span>
                          </label>
                          <div className="grid grid-cols-3 gap-2.5">
                            {COMMUNICATION_LANGUAGES.map((lang) => (
                              <RadioOption
                                key={lang}
                                name="adultPreferredLanguage"
                                value={lang}
                                checked={adultInfo.preferredLanguage === lang}
                                onChange={() => setAdultInfo({ ...adultInfo, preferredLanguage: lang })}
                                label={lang === 'English' ? 'English' : lang === 'French' ? 'Français' : 'العربية'}
                              />
                            ))}
                          </div>
                          {errors.adultPreferredLanguage && (
                            <p className="mt-1 text-sm text-red-500 font-medium">
                              {errors.adultPreferredLanguage}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 1 Next Button */}
                    <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          if (validateStep1()) goToStep(2);
                        }}
                        disabled={isAdultUnder18}
                        className="w-full sm:w-auto px-8 py-3.5 bg-secondary text-white rounded-xl font-bold text-base sm:text-lg hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {t.nextBtn}
                        <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ═══════════════ STEP 2: COURSE SELECTION & EDUCATION ═══════════════ */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    {/* PATH A: Parent / Guardian Student(s) & Courses */}
                    {pathway === 'parent' ? (
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                          <div>
                            <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-0.5">
                              SECTIONS 3A & 4A
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                              Student Information & Course Selection
                            </h2>
                          </div>

                          {/* Student Tabs if multiple */}
                          {students.length > 1 && (
                            <div className="flex flex-wrap gap-1.5 bg-gray-100 p-1 rounded-xl">
                              {students.map((st, idx) => (
                                <button
                                  key={st.id}
                                  type="button"
                                  onClick={() => setCurrentStudentTab(idx)}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                    currentStudentTab === idx
                                      ? 'bg-white text-secondary shadow-xs'
                                      : 'text-gray-600 hover:text-gray-900'
                                  }`}
                                >
                                  {st.fullName ? st.fullName.split(' ')[0] : `${t.studentNumber} ${idx + 1}`}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Active Student Card */}
                        {students.map((student, sIdx) => {
                          if (sIdx !== currentStudentTab && students.length > 1) return null;

                          const studentAge = calculateAge(student.dateOfBirth);
                          const prefix = `student_${sIdx}_`;
                          const selectedCourse = getCourseById(student.courseId);

                          return (
                            <div key={student.id} className="space-y-6">
                              <div className="flex items-center justify-between">
                                <h3 className="font-bold text-gray-800 text-base sm:text-lg flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-secondary/15 text-secondary text-xs flex items-center justify-center font-extrabold">
                                    {sIdx + 1}
                                  </span>
                                  {student.fullName ? student.fullName : `${t.studentNumber} ${sIdx + 1}`}
                                </h3>
                                {students.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveStudent(sIdx)}
                                    className="text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                                  >
                                    ✕ {t.removeStudentBtn}
                                  </button>
                                )}
                              </div>

                              {/* Student Name */}
                              <InputField
                                label="Student's Full Name"
                                name={`${prefix}fullName`}
                                value={student.fullName}
                                onChange={(e) => updateStudentField(sIdx, 'fullName', e.target.value)}
                                placeholder="e.g. Zayd Mansour"
                                required
                                error={errors[`${prefix}fullName`]}
                              />

                              {/* Student DOB and Gender */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <InputField
                                  label={t.dobLabel}
                                  name={`${prefix}dateOfBirth`}
                                  type="date"
                                  value={student.dateOfBirth}
                                  onChange={(e) => updateStudentField(sIdx, 'dateOfBirth', e.target.value)}
                                  required
                                  error={errors[`${prefix}dateOfBirth`]}
                                  helperText={
                                    studentAge !== null
                                      ? `Age: ${studentAge} ${t.ageYearsOld} (used for course eligibility)`
                                      : 'Date of birth is used to determine course eligibility.'
                                  }
                                />

                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t.genderLabel} <span className="text-secondary">*</span>
                                  </label>
                                  <div className="grid grid-cols-2 gap-2.5">
                                    <RadioOption
                                      name={`${prefix}gender`}
                                      value="Female"
                                      checked={student.gender === 'Female'}
                                      onChange={() => updateStudentField(sIdx, 'gender', 'Female')}
                                      label={t.female}
                                    />
                                    <RadioOption
                                      name={`${prefix}gender`}
                                      value="Male"
                                      checked={student.gender === 'Male'}
                                      onChange={() => updateStudentField(sIdx, 'gender', 'Male')}
                                      label={t.male}
                                    />
                                  </div>
                                  {errors[`${prefix}gender`] && (
                                    <p className="mt-1 text-sm text-red-500 font-medium">{errors[`${prefix}gender`]}</p>
                                  )}
                                </div>
                              </div>

                              {/* SECTION 4A – COURSE SELECTION */}
                              <div className="pt-2">
                                <label className="block text-sm font-semibold text-gray-800 mb-1">
                                  {t.selectCourseTitle} <span className="text-secondary">*</span>
                                </label>
                                <p className="text-xs text-gray-500 mb-3">{t.selectCourseSubtitle}</p>

                                <div className="space-y-2.5">
                                  {FALL_2026_COURSES.filter((c) => c.isActive && c.isChildEligible).map((course) => {
                                    const elig = checkCourseEligibility(course, {
                                      age: studentAge,
                                      gender: student.gender,
                                      pathway: 'parent',
                                    });
                                    const isSelected = student.courseId === course.id;
                                    const assignedSession = getAssignedSession(course, student.gender);

                                    return (
                                      <div
                                        key={course.id}
                                        onClick={() => {
                                          if (elig.eligible) {
                                            updateStudentField(sIdx, 'courseId', course.id);
                                            // Reset education value when changing course category
                                            updateStudentField(sIdx, 'educationValue', '');
                                            updateStudentField(sIdx, 'educationOther', '');
                                          }
                                        }}
                                        className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                          isSelected
                                            ? 'border-secondary bg-secondary/5 ring-2 ring-secondary/20 shadow-xs'
                                            : elig.eligible
                                            ? 'border-gray-200 bg-white hover:border-gray-300'
                                            : 'border-gray-100 bg-gray-50/70 opacity-60 cursor-not-allowed'
                                        }`}
                                      >
                                        <div className="flex items-start justify-between gap-3">
                                          <div className="flex items-start gap-3 min-w-0">
                                            <input
                                              type="radio"
                                              name={`${prefix}courseId`}
                                              value={course.id}
                                              checked={isSelected}
                                              disabled={!elig.eligible}
                                              onChange={() => {
                                                if (elig.eligible) {
                                                  updateStudentField(sIdx, 'courseId', course.id);
                                                  updateStudentField(sIdx, 'educationValue', '');
                                                }
                                              }}
                                              className="w-4 h-4 mt-1 accent-[#ff9f43] shrink-0"
                                            />
                                            <div className="min-w-0">
                                              <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                                                {uiLang === 'ar' && course.nameAr
                                                  ? course.nameAr
                                                  : uiLang === 'fr' && course.nameFr
                                                  ? course.nameFr
                                                  : course.name}
                                              </p>
                                              {course.description && (
                                                <p className="text-xs text-gray-500 mt-0.5">{uiLang === 'ar' && course.descriptionAr ? course.descriptionAr : uiLang === 'fr' && course.descriptionFr ? course.descriptionFr : course.description}</p>
                                              )}
                                              {/* Auto Session Badge for 16+ */}
                                              {course.is16Plus && student.gender && (
                                                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold">
                                                  <span>🗓️</span>
                                                  <span>
                                                    {t.assignedSessionLabel}: <strong>{assignedSession}</strong>
                                                  </span>
                                                  <span className="text-[11px] text-blue-600 font-normal">
                                                    ({student.gender === 'Female' ? t.femaleSessionNote : t.maleSessionNote})
                                                  </span>
                                                </div>
                                              )}
                                            </div>
                                          </div>

                                          {/* Eligibility Badge */}
                                          <div className="shrink-0 text-right">
                                            <span
                                              className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-bold ${
                                                elig.eligible
                                                  ? 'bg-emerald-100 text-emerald-800'
                                                  : 'bg-rose-100 text-rose-800'
                                              }`}
                                            >
                                              {elig.eligible ? t.eligibleBadge : t.ineligibleBadge}
                                            </span>
                                          </div>
                                        </div>

                                        {!elig.eligible && elig.reason && (
                                          <p className="mt-2 text-xs text-rose-600 font-medium pl-7">
                                            ⚠️ {elig.reason}
                                          </p>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                                {errors[`${prefix}courseId`] && (
                                  <p className="mt-2 text-sm text-red-500 font-medium">
                                    {errors[`${prefix}courseId`]}
                                  </p>
                                )}
                              </div>

                              {/* CONDITIONAL EDUCATION FIELD */}
                              {selectedCourse && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  transition={{ duration: 0.2 }}
                                  className="pt-2"
                                >
                                  {selectedCourse.is16Plus ? (
                                    <div>
                                      <SelectField
                                        label={t.educationLevelLabel}
                                        value={student.educationValue}
                                        onChange={(val) => {
                                          updateStudentField(sIdx, 'educationValue', val);
                                          if (val !== 'Other') updateStudentField(sIdx, 'educationOther', '');
                                        }}
                                        options={EDUCATION_LEVELS}
                                        placeholder={t.selectOption}
                                        required
                                        error={errors[`${prefix}educationValue`]}
                                        helperText="Applicable for 16+ courses."
                                      />
                                      {student.educationValue === 'Other' && (
                                        <div className="mt-3">
                                          <InputField
                                            label={t.pleaseSpecify}
                                            name={`${prefix}educationOther`}
                                            value={student.educationOther}
                                            onChange={(e) =>
                                              updateStudentField(sIdx, 'educationOther', e.target.value)
                                            }
                                            placeholder="e.g. Vocational Diploma, Certificate"
                                            required
                                            error={errors[`${prefix}educationOther`]}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <SelectField
                                      label={t.schoolGradeLabel}
                                      value={student.educationValue}
                                      onChange={(val) => updateStudentField(sIdx, 'educationValue', val)}
                                      options={SCHOOL_GRADES}
                                      placeholder={t.selectOption}
                                      required
                                      error={errors[`${prefix}educationValue`]}
                                    />
                                  )}
                                </motion.div>
                              )}
                            </div>
                          );
                        })}

                        {/* SECTION 5A – ADD ANOTHER STUDENT */}
                        <div className="pt-6 border-t border-gray-100">
                          <label className="block text-sm font-semibold text-gray-800 mb-2">
                            {t.addAnotherTitle} <span className="text-secondary">*</span>
                          </label>
                          <div className="flex flex-wrap items-center gap-3">
                            <button
                              type="button"
                              onClick={handleAddStudent}
                              className="px-4 py-2.5 bg-secondary/15 hover:bg-secondary/25 text-secondary border border-secondary/30 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
                            >
                              <span>➕</span> {t.addAnotherStudentBtn}
                            </button>
                            <span className="text-xs text-gray-500">
                              (Register all your children under your same parent contact information)
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* PATH B: Adult Education & Course Selection */
                      <div className="space-y-6">
                        <div className="border-b border-gray-100 pb-4">
                          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-0.5">
                            SECTIONS 3B & 4B
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                            Education & Course Selection
                          </h2>
                          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                            Select your education background and confirmed course cohort.
                          </p>
                        </div>

                        {/* SECTION 3B – EDUCATION */}
                        <div>
                          <SelectField
                            label={t.educationLevelLabel}
                            value={adultInfo.educationLevel}
                            onChange={(val) => {
                              setAdultInfo({
                                ...adultInfo,
                                educationLevel: val,
                                educationOther: val === 'Other' ? adultInfo.educationOther : '',
                              });
                            }}
                            options={EDUCATION_LEVELS}
                            placeholder={t.selectOption}
                            required
                            error={errors.adultEducationLevel}
                          />

                          {adultInfo.educationLevel === 'Other' && (
                            <div className="mt-3">
                              <InputField
                                label={t.pleaseSpecify}
                                name="adultEducationOther"
                                value={adultInfo.educationOther}
                                onChange={(e) => setAdultInfo({ ...adultInfo, educationOther: e.target.value })}
                                placeholder="e.g. Master's in Engineering, Self-employed"
                                required
                                error={errors.adultEducationOther}
                              />
                            </div>
                          )}
                        </div>

                        {/* SECTION 4B – COURSE SELECTION */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-800 mb-1">
                            {t.selectCourseTitle} <span className="text-secondary">*</span>
                          </label>
                          <p className="text-xs text-gray-500 mb-3">
                            Adult/Self-registering students are eligible for our 16+ courses:
                          </p>

                          <div className="space-y-2.5">
                            {FALL_2026_COURSES.filter((c) => c.isActive && c.isAdultEligible).map((course) => {
                              const isSelected = adultInfo.courseId === course.id;
                              const assignedSession = getAssignedSession(course, adultInfo.gender);

                              return (
                                <div
                                  key={course.id}
                                  onClick={() => setAdultInfo({ ...adultInfo, courseId: course.id })}
                                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                    isSelected
                                      ? 'border-secondary bg-secondary/5 ring-2 ring-secondary/20 shadow-xs'
                                      : 'border-gray-200 bg-white hover:border-gray-300'
                                  }`}
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-start gap-3 min-w-0">
                                      <input
                                        type="radio"
                                        name="adultCourseId"
                                        value={course.id}
                                        checked={isSelected}
                                        onChange={() => setAdultInfo({ ...adultInfo, courseId: course.id })}
                                        className="w-4 h-4 mt-1 accent-[#ff9f43] shrink-0"
                                      />
                                      <div className="min-w-0">
                                        <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                                          {uiLang === 'ar' && course.nameAr
                                            ? course.nameAr
                                            : uiLang === 'fr' && course.nameFr
                                            ? course.nameFr
                                            : course.name}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-0.5">{uiLang === 'ar' && course.descriptionAr ? course.descriptionAr : uiLang === 'fr' && course.descriptionFr ? course.descriptionFr : course.description}</p>

                                        {/* Automatic Gender Session Badge */}
                                        <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold">
                                          <span>🗓️</span>
                                          <span>
                                            {t.assignedSessionLabel}: <strong>{assignedSession}</strong>
                                          </span>
                                          <span className="text-[11px] text-blue-600 font-normal">
                                            ({adultInfo.gender === 'Female' ? t.femaleSessionNote : t.maleSessionNote})
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    <span className="shrink-0 inline-block px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                                      {t.eligibleBadge}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          {errors.adultCourseId && (
                            <p className="mt-2 text-sm text-red-500 font-medium">{errors.adultCourseId}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Step 2 Navigation Buttons */}
                    <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => goToStep(1)}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {t.backBtn}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (validateStep2()) goToStep(3);
                        }}
                        className="px-8 py-3.5 bg-secondary text-white rounded-xl font-bold text-base sm:text-lg hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        {t.nextBtn}
                        <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ═══════════════ STEP 3: PAYMENT & CONFIRMATION REVIEW ═══════════════ */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="space-y-6"
                  >
                    <div className="border-b border-gray-100 pb-4">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-0.5">
                        SECTIONS 5 & 6
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                        {t.paymentSectionTitle}
                      </h2>
                      <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                        Review your registration summary and select your preferred payment method.
                      </p>
                    </div>

                    {/* SECTION 5 – PAYMENT METHOD */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-5">
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {t.paymentMethodLabel} <span className="text-secondary">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {PAYMENT_METHODS.map((pm) => (
                          <RadioOption
                            key={pm}
                            name="paymentMethod"
                            value={pm}
                            checked={paymentMethod === pm}
                            onChange={() => {
                              setPaymentMethod(pm);
                              if (pm !== 'Other') setPaymentMethodOther('');
                            }}
                            label={pm === 'Cash' ? t.cash : pm === 'e-Transfer' ? t.eTransfer : t.paymentOther}
                          />
                        ))}
                      </div>
                      {errors.paymentMethod && (
                        <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.paymentMethod}</p>
                      )}

                      {paymentMethod === 'Other' && (
                        <div className="mt-3">
                          <InputField
                            label={t.pleaseSpecify}
                            name="paymentMethodOther"
                            value={paymentMethodOther}
                            onChange={(e) => setPaymentMethodOther(e.target.value)}
                            placeholder="e.g. Cheque, installment plan"
                            required
                            error={errors.paymentMethodOther}
                          />
                        </div>
                      )}
                    </div>

                    {/* SUMMARY REVIEW CARD */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xs">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                          <span>📋</span> Registration Summary
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                          {pathway === 'parent' ? 'Parent / Guardian' : 'Adult Student'}
                        </span>
                      </div>

                      {/* Contact Overview */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                        <div>
                          <span className="text-gray-500 block">Registrant Name:</span>
                          <span className="font-bold text-gray-900">
                            {pathway === 'parent' ? parentInfo.fullName : adultInfo.fullName}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">Email:</span>
                          <span className="font-semibold text-gray-800 break-all">
                            {pathway === 'parent' ? parentInfo.email : adultInfo.email}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">Phone:</span>
                          <span className="font-semibold text-gray-800">
                            {pathway === 'parent' ? parentInfo.phone : adultInfo.phone}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">Preferred Language:</span>
                          <span className="font-semibold text-gray-800">
                            {pathway === 'parent' ? parentInfo.preferredLanguage : adultInfo.preferredLanguage}
                          </span>
                        </div>
                      </div>

                      {/* Students Overview */}
                      <div className="border-t border-gray-100 pt-3">
                        <span className="text-xs font-bold text-gray-700 block mb-2">Registered Students & Courses:</span>
                        <div className="space-y-2">
                          {pathway === 'parent' ? (
                            students.map((st, i) => {
                              const course = getCourseById(st.courseId);
                              const assignedSession = course ? getAssignedSession(course, st.gender) : undefined;
                              return (
                                <div key={st.id} className="bg-gray-50 rounded-xl p-3 text-xs text-gray-700 space-y-0.5 border border-gray-200/60">
                                  <p className="font-bold text-gray-900 text-sm">
                                    {i + 1}. {st.fullName} ({st.gender}, DOB: {st.dateOfBirth})
                                  </p>
                                  <p className="text-secondary font-semibold">
                                    Course: {course?.name || 'None'}
                                    {assignedSession ? ` — Session: ${assignedSession}` : ''}
                                  </p>
                                  <p className="text-gray-500">
                                    {course?.is16Plus ? 'Education Level' : 'School Grade'}: {st.educationValue}
                                    {st.educationOther ? ` (${st.educationOther})` : ''}
                                  </p>
                                </div>
                              );
                            })
                          ) : (
                            <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-700 space-y-0.5 border border-gray-200/60">
                              <p className="font-bold text-gray-900 text-sm">
                                1. {adultInfo.fullName} ({adultInfo.gender}, DOB: {adultInfo.dateOfBirth})
                              </p>
                              <p className="text-secondary font-semibold">
                                Course: {getCourseById(adultInfo.courseId)?.name || 'Foundation Arabic 16+'} — Session: {getAssignedSession(getCourseById(adultInfo.courseId)!, adultInfo.gender)}
                              </p>
                              <p className="text-gray-500">
                                Education: {adultInfo.educationLevel}
                                {adultInfo.educationOther ? ` (${adultInfo.educationOther})` : ''}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* SECTION 6 – REGISTRATION CONFIRMATION */}
                    <div className="bg-secondary/5 border-2 border-secondary/30 rounded-2xl p-4 sm:p-5">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={confirmationAgreed}
                          onChange={(e) => setConfirmationAgreed(e.target.checked)}
                          className="w-5 h-5 mt-0.5 accent-[#ff9f43] shrink-0 cursor-pointer rounded"
                        />
                        <div className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                          {pathway === 'parent' ? t.parentConfirmAgreement : t.adultConfirmAgreement}{' '}
                          <span className="text-secondary">*</span>
                        </div>
                      </label>
                      {errors.confirmationAgreed && (
                        <p className="mt-2 text-sm text-red-500 font-medium pl-8">{errors.confirmationAgreed}</p>
                      )}
                    </div>

                    {submitError && (
                      <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl">
                        <p className="text-red-600 text-sm font-medium">{submitError}</p>
                      </div>
                    )}

                    {/* Step 3 Navigation Buttons */}
                    <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => goToStep(2)}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {t.backBtn}
                      </button>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-10 py-3.5 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            {t.submittingBtn}
                          </>
                        ) : (
                          <>
                            {t.submitBtn}
                            <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ═══════════════ STEP 4: CONFIRMATION (DONE) ═══════════════ */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="py-6 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                        className="w-20 h-20 bg-secondary/15 rounded-full flex items-center justify-center mx-auto mb-5 ring-8 ring-secondary/5"
                      >
                        <motion.svg
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="w-10 h-10 text-secondary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </motion.svg>
                      </motion.div>

                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-2">
                        {t.regReceivedTitle}
                      </h2>
                      <p className="text-gray-700 text-sm sm:text-base mb-3 max-w-lg mx-auto font-medium leading-relaxed">
                        {t.thankYouMessage}
                      </p>

                      {/* Official Disclaimer Banner as specified */}
                      <div className="my-5 p-4 max-w-xl mx-auto bg-amber-50/90 border border-amber-300 rounded-2xl text-amber-950 text-xs sm:text-sm text-left shadow-xs">
                        <div className="flex items-start gap-2.5">
                          <span className="text-base shrink-0 mt-0.5">ℹ️</span>
                          <p className="leading-relaxed">
                            {t.disclaimerNotice}
                          </p>
                        </div>
                      </div>

                      {/* Prominent Attendee & Student Details Card */}
                      <div className="my-6 max-w-xl mx-auto bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-6 text-left shadow-xs space-y-4">
                        <div className="flex flex-wrap items-center justify-between border-b border-gray-100 pb-3 gap-1">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                            <span>👤</span> {t.attendeeSummary}
                          </h3>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                            {pathway === 'parent' ? 'Parent / Guardian' : 'Adult Student'}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-xs text-gray-500 block">Name</span>
                            <span className="font-bold text-gray-900 text-sm sm:text-base">
                              {pathway === 'parent' ? parentInfo.fullName : adultInfo.fullName}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 block">Email</span>
                            <span className="font-semibold text-gray-800 break-all text-xs sm:text-sm">
                              {pathway === 'parent' ? parentInfo.email : adultInfo.email}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 block">Phone</span>
                            <span className="font-semibold text-gray-800 text-xs sm:text-sm">
                              {pathway === 'parent' ? parentInfo.phone : adultInfo.phone}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 block">Payment Method</span>
                            <span className="font-semibold text-gray-800 text-xs sm:text-sm">
                              {paymentMethod}{paymentMethodOther ? ` (${paymentMethodOther})` : ''}
                            </span>
                          </div>
                        </div>

                        {/* Registered Students Details */}
                        <div className="border-t border-gray-100 pt-3">
                          <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2.5 flex items-center gap-1.5">
                            <span>🎓</span> {t.studentSummary}
                          </h4>
                          <div className="space-y-3">
                            {pathway === 'parent' ? (
                              students.map((st, idx) => {
                                const course = getCourseById(st.courseId);
                                const assignedSession = course ? getAssignedSession(course, st.gender) : undefined;
                                return (
                                  <div key={idx} className="bg-gray-50 rounded-xl p-3 sm:p-3.5 border border-gray-200/60 text-xs space-y-1">
                                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                                      <span className="font-bold text-gray-900 text-sm">{st.fullName}</span>
                                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                                        DOB: {st.dateOfBirth}
                                      </span>
                                    </div>
                                    <p className="text-secondary font-semibold">
                                      Course: {course?.name || 'Selected'}
                                      {assignedSession ? ` — Session: ${assignedSession}` : ''}
                                    </p>
                                    <p className="text-gray-600">
                                      Education: {st.educationValue}{st.educationOther ? ` (${st.educationOther})` : ''}
                                    </p>
                                  </div>
                                );
                              })
                            ) : (
                              <div className="bg-gray-50 rounded-xl p-3 sm:p-3.5 border border-gray-200/60 text-xs space-y-1">
                                <div className="flex flex-wrap items-center justify-between gap-1.5">
                                  <span className="font-bold text-gray-900 text-sm">{adultInfo.fullName}</span>
                                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                                    DOB: {adultInfo.dateOfBirth}
                                  </span>
                                </div>
                                <p className="text-secondary font-semibold">
                                  Course: {getCourseById(adultInfo.courseId)?.name || 'Foundation Arabic 16+'} — Session: {getAssignedSession(getCourseById(adultInfo.courseId)!, adultInfo.gender)}
                                </p>
                                <p className="text-gray-600">
                                  Education: {adultInfo.educationLevel}{adultInfo.educationOther ? ` (${adultInfo.educationOther})` : ''}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>


                      </div>

                      {/* Action Links */}
                      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                        <TransitionLink
                          href="/"
                          className="px-6 py-2.5 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all text-center"
                        >
                          Return to Home
                        </TransitionLink>
                        <TransitionLink
                          href="/programs"
                          className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-all text-center"
                        >
                          Browse Programs
                        </TransitionLink>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
