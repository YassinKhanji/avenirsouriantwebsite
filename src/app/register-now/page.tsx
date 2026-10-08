'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransitionLink } from '@/components/TransitionLink';
import {
  type SlotInfo,
  generateBaseSlots,
  formatTime12,
  pad,
} from '@/lib/appointmentSlots';
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

const CalendarMonthPicker = ({
  selectedDate,
  onSelectDate,
  minDateStr,
  maxDateStr,
}: {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  minDateStr: string;
  maxDateStr: string;
}) => {
  const [viewDate, setViewDate] = useState(() => {
    if (selectedDate) {
      const [y, m] = selectedDate.split('-').map(Number);
      return new Date(y, m - 1, 1);
    }
    const t = new Date();
    t.setDate(t.getDate() + 1);
    return new Date(t.getFullYear(), t.getMonth(), 1);
  });

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const prevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const isPrevDisabled = useMemo(() => {
    const prev = new Date(year, month - 1, 1);
    const minD = new Date(minDateStr);
    return (
      prev.getFullYear() < minD.getFullYear() ||
      (prev.getFullYear() === minD.getFullYear() && prev.getMonth() < minD.getMonth())
    );
  }, [year, month, minDateStr]);

  const isNextDisabled = useMemo(() => {
    const next = new Date(year, month + 1, 1);
    const maxD = new Date(maxDateStr);
    return (
      next.getFullYear() > maxD.getFullYear() ||
      (next.getFullYear() === maxD.getFullYear() && next.getMonth() > maxD.getMonth())
    );
  }, [year, month, maxDateStr]);

  const days = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 sm:p-5 shadow-xs">
      <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
        <div className="min-w-0">
          <h4 className="font-heading font-bold text-gray-900 text-base sm:text-lg truncate">
            {monthNames[month]} {year}
          </h4>
          <p className="text-[11px] sm:text-xs text-gray-500">Pick a day for your 15-min call</p>
        </div>
        <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-xl p-0.5 sm:p-1 shrink-0">
          <button
            type="button"
            onClick={prevMonth}
            disabled={isPrevDisabled}
            className={`p-1.5 sm:p-2 rounded-lg transition-all cursor-pointer ${
              isPrevDisabled
                ? 'opacity-30 cursor-not-allowed text-gray-400'
                : 'hover:bg-white text-gray-700 active:scale-95 shadow-xs'
            }`}
            title="Previous Month"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextMonth}
            disabled={isNextDisabled}
            className={`p-1.5 sm:p-2 rounded-lg transition-all cursor-pointer ${
              isNextDisabled
                ? 'opacity-30 cursor-not-allowed text-gray-400'
                : 'hover:bg-white text-gray-700 active:scale-95 shadow-xs'
            }`}
            title="Next Month"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-1.5 sm:mb-2">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider py-0.5 sm:py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="h-9 sm:h-11" />;
          }

          const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`;
          const dayDate = new Date(year, month, day);
          dayDate.setHours(0, 0, 0, 0);

          const isPast = dateStr < minDateStr;
          const isTooFar = dateStr > maxDateStr;
          const isDisabled = isPast || isTooFar;
          const isSelected = selectedDate === dateStr;
          const isToday = dayDate.getTime() === now.getTime();

          return (
            <button
              key={dateStr}
              type="button"
              disabled={isDisabled}
              onClick={() => onSelectDate(dateStr)}
              className={`h-9 sm:h-11 rounded-lg sm:rounded-xl flex flex-col items-center justify-center text-xs sm:text-sm font-semibold transition-all relative ${
                isDisabled
                  ? 'text-gray-300 opacity-30 cursor-not-allowed'
                  : isSelected
                  ? 'bg-secondary text-white font-bold shadow-md scale-105 ring-2 ring-secondary/30'
                  : 'text-gray-800 hover:bg-secondary/15 hover:text-secondary cursor-pointer'
              } ${isToday && !isSelected ? 'border-2 border-secondary/40 font-bold text-secondary' : ''}`}
            >
              <span>{day}</span>
              {!isDisabled && !isSelected && (
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary/70 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

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

  // Appointment Data
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentType, setAppointmentType] = useState<'virtual' | 'in-person' | ''>('virtual');
  const [virtualOption, setVirtualOption] = useState<'meet' | 'phone'>('meet');
  const [slotsData, setSlotsData] = useState<SlotInfo[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [bookedMeetingLink, setBookedMeetingLink] = useState<string | null>(null);

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formCardRef = useRef<HTMLDivElement>(null);

  // Derived adult age check
  const adultAge = useMemo(() => calculateAge(adultInfo.dateOfBirth), [adultInfo.dateOfBirth]);
  const isAdultUnder18 = pathway === 'adult' && adultAge !== null && adultAge < 18;

  // Appointment Helpers
  const minDate = useMemo(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }, []);

  const maxDate = useMemo(() => {
    const max = new Date();
    max.setDate(max.getDate() + 60);
    return max.toISOString().split('T')[0];
  }, []);

  const isValidAppointmentDate = (dateStr: string): boolean => {
    if (!dateStr) return false;
    const [y, m, d] = dateStr.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateObj > today;
  };

  useEffect(() => {
    if (!appointmentDate) {
      setSlotsData([]);
      return;
    }
    let isCancelled = false;
    setIsLoadingSlots(true);
    fetch(`/api/appointments/?date=${appointmentDate}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) {
          if (data?.slots && Array.isArray(data.slots)) {
            setSlotsData(data.slots);
          } else {
            setSlotsData(generateBaseSlots(appointmentDate));
          }
        }
      })
      .catch((err) => {
        console.error('Error loading appointment slots:', err);
        if (!isCancelled) {
          setSlotsData(generateBaseSlots(appointmentDate));
        }
      })
      .finally(() => {
        if (!isCancelled) setIsLoadingSlots(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [appointmentDate]);

  const getDateInfo = (dateStr: string): { dayName: string; isWeekend: boolean; hours: string } | null => {
    if (!dateStr) return null;
    const [y, m, d] = dateStr.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    const dayOfWeek = dateObj.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const dayName = dateObj.toLocaleDateString(uiLang === 'ar' ? 'ar-SA' : uiLang === 'fr' ? 'fr-CA' : 'en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const hours = isWeekend ? '11:00 AM — 5:00 PM' : '6:00 PM — 11:00 PM';
    return { dayName, isWeekend, hours };
  };

  const dateInfo = useMemo(() => getDateInfo(appointmentDate), [appointmentDate, uiLang]);

  const stepsList = useMemo(
    () => [
      { number: 1, label: t.steps.typeAndContact },
      { number: 2, label: t.steps.courseAndEdu },
      { number: 3, label: t.steps.paymentAndReview },
      { number: 4, label: t.steps.appointment },
      { number: 5, label: t.steps.done },
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

  // Step 4 Validation (Appointment)
  const validateStep4 = (): boolean => {
    const e: Record<string, string> = {};
    if (!appointmentType) e.appointmentType = 'Please select a meeting format';
    const contactPhone = pathway === 'parent' ? parentInfo.phone : adultInfo.phone;
    if (appointmentType === 'virtual' && virtualOption === 'phone' && !contactPhone.trim()) {
      e.appointmentPhone = 'Please provide a valid phone number';
    }
    if (!appointmentDate) e.appointmentDate = 'Please select a date on the calendar';
    else if (!isValidAppointmentDate(appointmentDate)) e.appointmentDate = 'Please select an upcoming date';
    if (!appointmentTime) e.appointmentTime = 'Please select an available 15-minute time slot';

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
    if (!validateStep4()) return;

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
          appointmentDate,
          appointmentTime,
          appointmentType,
          virtualOption: appointmentType === 'virtual' ? virtualOption : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
        if (res.status === 409 && appointmentDate) {
          fetch(`/api/appointments/?date=${appointmentDate}`)
            .then((r) => r.json())
            .then((slotData) => {
              if (slotData?.slots) setSlotsData(slotData.slots);
            })
            .catch(() => {});
        }
        setIsSubmitting(false);
        return;
      }

      if (data.meetingLink) {
        setBookedMeetingLink(data.meetingLink);
      }

      goToStep(5);
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
                        onClick={() => {
                          if (validateStep3()) goToStep(4);
                        }}
                        className="px-8 py-3.5 bg-secondary text-white rounded-xl font-bold text-base sm:text-lg hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        Proceed to Fit Call Scheduling
                        <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ═══════════════ STEP 4: FIT CALL APPOINTMENT SCHEDULING ═══════════════ */}
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
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-2">
                        Schedule a Fit Assessment Call
                      </h2>
                      <p className="text-gray-500 text-sm sm:text-base">
                        Select a 15-minute consultation with our administration team to finalize registration details and course placement.
                      </p>
                    </div>

                    {/* Available Hours Banner */}
                    <div className="mb-6 bg-secondary/5 border border-secondary/20 rounded-2xl p-4 sm:p-5">
                      <div className="flex items-start gap-3.5">
                        <div className="text-2xl sm:text-3xl shrink-0 mt-0.5">📅</div>
                        <div className="text-sm text-gray-700 w-full">
                          <p className="font-bold text-gray-900 text-base mb-1.5">Available Hours</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                            <p className="bg-white/80 rounded-lg px-3 py-1.5 border border-secondary/15">
                              <span className="font-semibold text-gray-900">Weekdays (Mon–Fri):</span> 6:00 PM — 11:00 PM
                            </p>
                            <p className="bg-white/80 rounded-lg px-3 py-1.5 border border-secondary/15">
                              <span className="font-semibold text-gray-900">Weekends (Sat–Sun):</span> 11:00 AM — 5:00 PM
                            </p>
                          </div>
                          <p className="mt-2 text-xs text-gray-500">
                            All times in Eastern Time (ET). Real-time slot availability is tracked like Calendly.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Meeting Format Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Meeting Format <span className="text-secondary">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <label
                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                              appointmentType === 'virtual'
                                ? 'border-secondary bg-secondary/5 ring-2 ring-secondary/20'
                                : 'border-gray-200 hover:border-gray-300 bg-white'
                            }`}
                          >
                            <input
                              type="radio"
                              name="appointmentType"
                              value="virtual"
                              checked={appointmentType === 'virtual'}
                              onChange={() => setAppointmentType('virtual')}
                              className="w-4 h-4 accent-[#ff9f43]"
                            />
                            <div>
                              <span className="text-lg">💻</span>
                              <span className="text-gray-900 font-semibold text-sm sm:text-base ml-1.5">Virtual</span>
                            </div>
                          </label>
                          <label
                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                              appointmentType === 'in-person'
                                ? 'border-secondary bg-secondary/5 ring-2 ring-secondary/20'
                                : 'border-gray-200 hover:border-gray-300 bg-white'
                            }`}
                          >
                            <input
                              type="radio"
                              name="appointmentType"
                              value="in-person"
                              checked={appointmentType === 'in-person'}
                              onChange={() => setAppointmentType('in-person')}
                              className="w-4 h-4 accent-[#ff9f43]"
                            />
                            <div>
                              <span className="text-lg">🏫</span>
                              <span className="text-gray-900 font-semibold text-sm sm:text-base ml-1.5">In-Person</span>
                            </div>
                          </label>
                        </div>
                        {errors.appointmentType && (
                          <p className="mt-1 text-sm text-red-500 font-medium">{errors.appointmentType}</p>
                        )}
                      </div>

                      {/* Virtual Preferences (Google Meet vs Phone) */}
                      {appointmentType === 'virtual' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-5"
                        >
                          <label className="block text-sm font-semibold text-gray-800 mb-2">
                            Virtual Meeting Preference
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label
                              className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                                virtualOption === 'meet'
                                  ? 'border-secondary bg-white ring-2 ring-secondary/20 shadow-xs'
                                  : 'border-gray-200 bg-white/70 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="virtualOption"
                                value="meet"
                                checked={virtualOption === 'meet'}
                                onChange={() => setVirtualOption('meet')}
                                className="w-4 h-4 mt-1 accent-[#ff9f43] shrink-0"
                              />
                              <div>
                                <p className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
                                  <span>📹</span> Google Meet Video Call
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                                  An automated Google Meet video link will be sent in your confirmation email and calendar invite.
                                </p>
                              </div>
                            </label>

                            <label
                              className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                                virtualOption === 'phone'
                                  ? 'border-secondary bg-white ring-2 ring-secondary/20 shadow-xs'
                                  : 'border-gray-200 bg-white/70 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="virtualOption"
                                value="phone"
                                checked={virtualOption === 'phone'}
                                onChange={() => setVirtualOption('phone')}
                                className="w-4 h-4 mt-1 accent-[#ff9f43] shrink-0"
                              />
                              <div>
                                <p className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
                                  <span>📞</span> Phone Call
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                                  We will call you at your phone number at your scheduled time.
                                </p>
                              </div>
                            </label>
                          </div>
                        </motion.div>
                      )}

                      {/* Interactive Calendar Date Picker */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Select Date <span className="text-secondary">*</span>
                        </label>
                        <CalendarMonthPicker
                          selectedDate={appointmentDate}
                          onSelectDate={(d) => {
                            setAppointmentDate(d);
                            setAppointmentTime('');
                          }}
                          minDateStr={minDate}
                          maxDateStr={maxDate}
                        />
                        {errors.appointmentDate && (
                          <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.appointmentDate}</p>
                        )}
                      </div>

                      {/* Time Slot Picker */}
                      {appointmentDate && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <label className="block text-sm font-semibold text-gray-700">
                              Available Time Slots (15-min sessions, ET) <span className="text-secondary">*</span>
                            </label>
                            {dateInfo && (
                              <span className="text-xs font-medium text-gray-500">
                                {dateInfo.hours}
                              </span>
                            )}
                          </div>

                          {isLoadingSlots ? (
                            <div className="py-8 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                              <svg className="animate-spin w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Checking real-time slot availability...
                            </div>
                          ) : slotsData.length === 0 ? (
                            <div className="p-4 bg-gray-50 rounded-xl border text-center text-sm text-gray-500">
                              No available slots on this date. Please select another date.
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                              {slotsData.map((slot) => {
                                const isSelected = appointmentTime === slot.time;
                                const isFull = !slot.available;

                                return (
                                  <button
                                    key={slot.time}
                                    type="button"
                                    disabled={isFull}
                                    onClick={() => setAppointmentTime(slot.time)}
                                    className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                                      isSelected
                                        ? 'bg-secondary text-white border-secondary shadow-sm ring-2 ring-secondary/20 scale-[1.02]'
                                        : isFull
                                        ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-50'
                                        : 'bg-white hover:border-secondary/50 text-gray-800 border-gray-200'
                                    }`}
                                  >
                                    <span>{slot.label}</span>
                                    <span
                                      className={`text-[10px] ${
                                        isSelected
                                          ? 'text-white/90'
                                          : isFull
                                          ? 'text-gray-400'
                                          : 'text-emerald-600 font-medium'
                                      }`}
                                    >
                                      {isFull ? 'Full' : `${slot.spotsLeft} spot${slot.spotsLeft > 1 ? 's' : ''}`}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                          {errors.appointmentTime && (
                            <p className="mt-1 text-sm text-red-500 font-medium">{errors.appointmentTime}</p>
                          )}
                        </motion.div>
                      )}
                    </div>

                    {submitError && (
                      <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl">
                        <p className="text-red-600 text-sm font-medium">{submitError}</p>
                      </div>
                    )}

                    {/* Step 4 Submission Buttons */}
                    <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => goToStep(3)}
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

                {/* ═══════════════ STEP 5: CONFIRMATION (DONE) ═══════════════ */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
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

                        {/* Scheduled Appointment Details */}
                        {appointmentDate && appointmentTime && (
                          <div className="border-t border-gray-100 pt-3 bg-secondary/5 rounded-xl p-3.5 sm:p-4 border border-secondary/20">
                            <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2 flex items-center gap-2">
                              <span>📅</span> {t.scheduledCallTitle}
                            </h4>
                            <div className="text-xs sm:text-sm text-gray-800 space-y-1.5">
                              <p>
                                <span className="font-semibold text-gray-600">Date:</span> {getDateInfo(appointmentDate)?.dayName}
                              </p>
                              <p>
                                <span className="font-semibold text-gray-600">Time:</span>{' '}
                                {slotsData.find((s) => s.time === appointmentTime)?.label || formatTime12(appointmentTime)} (15-min session, ET)
                              </p>
                              <p>
                                <span className="font-semibold text-gray-600">Meeting Format:</span>{' '}
                                {appointmentType === 'in-person' ? (
                                  '🏫 In-Person at 8990 Boul. Michel-Chartrand, Anjou, QC'
                                ) : virtualOption === 'phone' ? (
                                  `📞 Phone Call (We will call ${pathway === 'parent' ? parentInfo.phone : adultInfo.phone})`
                                ) : (
                                  '💻 Google Meet Video Call'
                                )}
                              </p>
                            </div>

                            {/* Google Meet Button if virtual */}
                            {appointmentType === 'virtual' && virtualOption === 'meet' && (
                              <div className="mt-3 pt-3 border-t border-secondary/20">
                                {bookedMeetingLink ? (
                                  <>
                                    <a
                                      href={bookedMeetingLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-white rounded-xl text-xs font-bold hover:bg-opacity-90 shadow-xs transition-all hover:scale-[1.02] w-full sm:w-auto cursor-pointer"
                                    >
                                      📹 {t.openMeetBtn}
                                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                      </svg>
                                    </a>
                                    <p className="text-[11px] text-gray-500 mt-1 break-all">
                                      Link: <a href={bookedMeetingLink} target="_blank" rel="noopener noreferrer" className="text-secondary font-medium underline">{bookedMeetingLink}</a>
                                    </p>
                                  </>
                                ) : (
                                  <div className="bg-amber-50/80 border border-amber-200/80 text-amber-900 rounded-xl p-3 text-xs">
                                    <p className="font-semibold mb-0.5">📹 Google Meet Video Call</p>
                                    <p className="text-gray-600">Your video meeting link will be attached to your calendar invite and confirmation email before the call.</p>
                                  </div>
                                )}
                              </div>
                            )}

                            <p className="text-[11px] sm:text-xs text-gray-500 mt-2.5">
                              📎 {t.meetLinkNote}
                            </p>
                          </div>
                        )}
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
