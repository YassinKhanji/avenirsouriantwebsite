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

/* ── Types ── */
interface StudentData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  currentGrade: string;
  courses: string[];
  addAnotherStudent?: 'yes' | 'no' | '';
}

interface GuardianData {
  email: string;
  guardianName: string;
  phone: string;
  relationship: string;
  relationshipOther: string;
}

const emptyStudent: StudentData = {
  fullName: '',
  dateOfBirth: '',
  gender: '',
  currentGrade: '',
  courses: [],
  addAnotherStudent: '',
};

const courseOptions = [
  'Foundation Course for Students 6-8 years (Tuesday)',
  'Arabic Language Course for Students 8-12 years (Tuesday)',
  'Reading Skills Development Course for Girls 8-14 years (Friday)',
  'Reading Skills Development Course for Boys 12-14 years (Thursday)',
  'Foundation Course for Non-Arabic Speakers 16+ (Friday for Women, Sunday for Men)',
  'Cybersecurity for Teens 13-16 years (6 Weeks - August)',
  'Chess Class for Beginners - Boys 8-10 years (8 Weeks - Oct-Dec)',
];

const steps = [
  { number: 1, label: 'Guardian' },
  { number: 2, label: 'Students' },
  { number: 3, label: 'Review' },
  { number: 4, label: 'Appointment' },
  { number: 5, label: 'Done' },
];

/* ── Animation Variants ── */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

/* ── Standalone Form Components (defined outside to prevent remounting and lost input focus) ── */
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
      className={`w-full px-4 py-3 rounded-xl border text-base ${
        error ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300'
      } focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all bg-gray-50 text-gray-900`}
      required={required}
    />
    {error && <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>}
  </div>
);

const RadioOption = ({
  name,
  value,
  checked,
  onChange,
  label,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}) => (
  <label
    className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
      checked
        ? 'border-secondary bg-secondary/5 ring-2 ring-secondary/20'
        : 'border-gray-200 hover:border-gray-300 bg-white'
    }`}
  >
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 text-secondary accent-[#ff9f43]"
    />
    <span className="text-gray-800 font-medium text-sm sm:text-base">{label}</span>
  </label>
);

const MultiSelectCourses = ({
  label,
  selectedCourses,
  onChange,
  options,
  required = false,
  error,
}: {
  label: string;
  selectedCourses: string[];
  onChange: (courses: string[]) => void;
  options: string[];
  required?: boolean;
  error?: string;
}) => {
  const toggle = (opt: string) => {
    if (selectedCourses.includes(opt)) {
      onChange(selectedCourses.filter((c) => c !== opt));
    } else {
      onChange([...selectedCourses, opt]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-secondary">*</span>}
      </label>
      <p className="text-xs text-gray-500 mb-2">Select all that apply</p>
      <div className="space-y-2">
        {options.map((opt) => {
          const checked = selectedCourses.includes(opt);
          return (
            <label
              key={opt}
              className={`flex items-start gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                checked
                  ? 'border-secondary bg-secondary/5 ring-2 ring-secondary/20'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(opt)}
                className="w-4 h-4 mt-0.5 accent-[#ff9f43] shrink-0"
              />
              <span className="text-gray-800 font-medium text-sm sm:text-base leading-snug">{opt}</span>
            </label>
          );
        })}
      </div>
      {error && <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>}
    </div>
  );
};

const SelectField = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
  error?: string;
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
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    {error && <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>}
  </div>
);

const StepProgress = ({ currentStep }: { currentStep: number }) => (
  <div className="flex items-center justify-between mb-6 sm:mb-10 w-full max-w-lg mx-auto px-1">
    {steps.map((step, i) => {
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
          {i < steps.length - 1 && (
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
      {/* Month Navigation Header */}
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

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-1 text-center mb-1.5 sm:mb-2">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider py-0.5 sm:py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
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
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Guardian data
  const [guardian, setGuardian] = useState<GuardianData>({
    email: '',
    guardianName: '',
    phone: '',
    relationship: '',
    relationshipOther: '',
  });

  // Students data
  const [students, setStudents] = useState<StudentData[]>([{ ...emptyStudent }]);
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);

  // Appointment data
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentType, setAppointmentType] = useState<'virtual' | 'in-person' | ''>('virtual');
  const [virtualOption, setVirtualOption] = useState<'meet' | 'phone'>('meet');
  const [slotsData, setSlotsData] = useState<SlotInfo[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formCardRef = useRef<HTMLDivElement>(null);

  /* ── Appointment helpers ── */
  // Get minimum selectable date (tomorrow)
  const minDate = useMemo(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }, []);

  // Get max selectable date (60 days from now)
  const maxDate = useMemo(() => {
    const max = new Date();
    max.setDate(max.getDate() + 60);
    return max.toISOString().split('T')[0];
  }, []);

  // Check if a date is a valid appointment day (not in the past)
  const isValidAppointmentDate = (dateStr: string): boolean => {
    if (!dateStr) return false;
    const [y, m, d] = dateStr.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateObj > today;
  };

  // Fetch slots data from API when appointmentDate changes
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

  // Get day info for display
  const getDateInfo = (dateStr: string): { dayName: string; isWeekend: boolean; hours: string } | null => {
    if (!dateStr) return null;
    const [y, m, d] = dateStr.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    const dayOfWeek = dateObj.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    const hours = isWeekend ? '11:00 AM — 5:00 PM' : '6:00 PM — 11:00 PM';
    return { dayName, isWeekend, hours };
  };

  const dateInfo = useMemo(() => getDateInfo(appointmentDate), [appointmentDate]);

  const validateAppointment = (): boolean => {
    const e: Record<string, string> = {};
    if (!appointmentType) e.appointmentType = 'Please select a meeting type';
    if (!appointmentDate) e.appointmentDate = 'Please select a date on the calendar';
    else if (!isValidAppointmentDate(appointmentDate)) e.appointmentDate = 'Please select an upcoming date';
    if (!appointmentTime) e.appointmentTime = 'Please select an available 15-minute time slot';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ── Helpers ── */
  const goToStep = (step: number) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
    setErrors({});
    setTimeout(() => {
      formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const isAdultSelf = guardian.relationship === 'Does not apply';

  const validateGuardian = (): boolean => {
    const e: Record<string, string> = {};
    if (!guardian.email) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guardian.email)) e.email = 'Invalid email format';
    if (!isAdultSelf && !guardian.guardianName) e.guardianName = 'Full name is required';
    if (!isAdultSelf && !guardian.phone) e.phone = 'Phone number is required';
    if (!guardian.relationship) e.relationship = 'Please select a relationship';
    if (guardian.relationship === 'Other' && !guardian.relationshipOther) e.relationshipOther = 'Please specify';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStudent = (): boolean => {
    const student = students[currentStudentIndex];
    const e: Record<string, string> = {};
    if (!student.fullName.trim()) e.fullName = 'Student full name is required';
    if (!student.dateOfBirth) e.dateOfBirth = 'Date of birth is required';
    if (!student.gender) e.gender = 'Please select gender';
    // Current grade level is optional
    if (!student.courses || student.courses.length === 0) e.course = 'Please select at least one course';
    if (!student.addAnotherStudent) {
      e.addAnother = 'Please select whether you would like to add another student';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNextFromGuardian = () => {
    if (validateGuardian()) {
      goToStep(2);
    }
  };

  const handleNextFromStudent = () => {
    if (validateStudent()) {
      const currentStudent = students[currentStudentIndex];

      if (currentStudent.addAnotherStudent === 'no') {
        // User does not want to add another student: trim any students after this one and proceed to review
        const trimmed = students.slice(0, currentStudentIndex + 1);
        setStudents(trimmed);
        setErrors({});
        goToStep(3);
        return;
      }

      if (currentStudent.addAnotherStudent === 'yes') {
        if (currentStudentIndex < students.length - 1) {
          // Next student already exists in array, just advance
          setCurrentStudentIndex(currentStudentIndex + 1);
          setErrors({});
          setTimeout(() => {
            formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 60);
        } else {
          // Add new student
          const newStudents = [...students, { ...emptyStudent }];
          setStudents(newStudents);
          setCurrentStudentIndex(newStudents.length - 1);
          setErrors({});
          setTimeout(() => {
            formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 60);
        }
      }
    }
  };

  const handleBackFromStudent = () => {
    if (currentStudentIndex > 0) {
      setCurrentStudentIndex(currentStudentIndex - 1);
      setErrors({});
      setTimeout(() => {
        formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 60);
    } else {
      goToStep(1);
    }
  };

  const handleRemoveStudent = (index: number) => {
    if (students.length <= 1) return;
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
    if (currentStudentIndex >= newStudents.length) {
      setCurrentStudentIndex(newStudents.length - 1);
    }
  };

  const updateStudent = (field: keyof StudentData, value: string | string[]) => {
    const updated = [...students];
    updated[currentStudentIndex] = { ...updated[currentStudentIndex], [field]: value };
    setStudents(updated);
  };

  const handleSubmit = async () => {
    if (!validateAppointment()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/send-email/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'registration',
          guardianName: guardian.guardianName,
          email: guardian.email,
          phone: guardian.phone,
          relationship: guardian.relationship,
          relationshipOther: guardian.relationshipOther,
          students,
          appointmentDate,
          appointmentTime,
          appointmentType,
          virtualOption: appointmentType === 'virtual' ? virtualOption : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
        // If slot capacity conflict, re-fetch slots for this date immediately
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

      goToStep(5);
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-14 sm:py-20 text-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/register_hero_bg.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80 z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 sm:mb-6 text-gray-900 drop-shadow-md">
              Register for Fall 2026 Courses
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium drop-shadow-sm">
              Fill out the form below to enroll your student in our upcoming courses.
            </p>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-8 sm:py-16 bg-gradient-to-b from-secondary-light to-white min-h-[60vh]">
          <div className="max-w-2xl mx-auto px-3 sm:px-6">
            <div ref={formCardRef} className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-8 md:p-10">
              <StepProgress currentStep={currentStep} />

              <AnimatePresence mode="wait" custom={direction}>
                {/* ───── STEP 1: Guardian Details ───── */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-2">
                        {isAdultSelf ? 'Your Information' : 'Guardian Information'}
                      </h2>
                      <p className="text-gray-500 text-sm sm:text-base">
                        {isAdultSelf
                          ? 'Welcome! Since you are registering for yourself, just provide your email below.'
                          : 'So we can contact you about the registration and course details.'}
                      </p>
                    </div>

                    <div className="space-y-5">
                      {/* ── Relationship to Student (always on top) ── */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Relationship to Student <span className="text-secondary">*</span>
                        </label>
                        <div className="space-y-2">
                          {['Father', 'Mother', 'Does not apply', 'Other'].map((rel) => (
                            <RadioOption
                              key={rel}
                              name="relationship"
                              value={rel}
                              checked={guardian.relationship === rel}
                              onChange={() => setGuardian({ ...guardian, relationship: rel, relationshipOther: '' })}
                              label={rel === 'Does not apply' ? 'Does not apply (I am the student)' : rel}
                            />
                          ))}
                        </div>
                        {errors.relationship && (
                          <p className="mt-1 text-sm text-red-500 font-medium">{errors.relationship}</p>
                        )}
                        {guardian.relationship === 'Other' && (
                          <div className="mt-3">
                            <InputField
                              label="Please specify"
                              name="relationshipOther"
                              value={guardian.relationshipOther}
                              onChange={(e) =>
                                setGuardian({ ...guardian, relationshipOther: e.target.value })
                              }
                              placeholder="e.g. Grandparent, Uncle"
                              required
                              error={errors.relationshipOther}
                            />
                          </div>
                        )}
                      </div>

                      {/* ── Email (always visible) ── */}
                      <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={guardian.email}
                        onChange={(e) => setGuardian({ ...guardian, email: e.target.value })}
                        placeholder={isAdultSelf ? 'you@example.com' : 'parent@example.com'}
                        required
                        error={errors.email}
                      />

                      {/* ── Fields hidden when adult self-registering ── */}
                      <AnimatePresence>
                        {!isAdultSelf && (
                          <motion.div
                            key="guardian-extra-fields"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="space-y-5 overflow-hidden"
                          >
                            <InputField
                              label="Guardian Full Name"
                              name="guardianName"
                              value={guardian.guardianName}
                              onChange={(e) => setGuardian({ ...guardian, guardianName: e.target.value })}
                              placeholder="John Doe"
                              required
                              error={errors.guardianName}
                            />

                            <InputField
                              label="Phone Number"
                              name="phone"
                              type="tel"
                              value={guardian.phone}
                              onChange={(e) => setGuardian({ ...guardian, phone: e.target.value })}
                              placeholder="+1 (555) 000-0000"
                              required
                              error={errors.phone}
                              dir="ltr"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={handleNextFromGuardian}
                        className="w-full sm:w-auto px-8 py-3.5 bg-secondary text-white rounded-xl font-bold text-base sm:text-lg hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        Continue
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ───── STEP 2: Student Details ───── */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-2">
                        Student Details
                      </h2>
                      <p className="text-gray-500 text-sm sm:text-base">
                        Enter the information for the student you would like to register.
                      </p>
                    </div>

                    {/* Student tabs if multiple */}
                    {students.length > 1 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {students.map((s, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setCurrentStudentIndex(i);
                              setErrors({});
                            }}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                              currentStudentIndex === i
                                ? 'bg-secondary text-white shadow-sm'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            Student {i + 1}{s.fullName ? `: ${s.fullName}` : ''}
                            {students.length > 1 && (
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRemoveStudent(i);
                                }}
                                className="ml-1 w-5 h-5 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-xs"
                              >
                                ×
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="space-y-5">
                      <InputField
                        label="Student Full Name"
                        name="fullName"
                        value={students[currentStudentIndex].fullName}
                        onChange={(e) => updateStudent('fullName', e.target.value)}
                        placeholder="Jane Doe"
                        required
                        error={errors.fullName}
                      />

                      <InputField
                        label="Date of Birth"
                        name="dateOfBirth"
                        type="date"
                        value={students[currentStudentIndex].dateOfBirth}
                        onChange={(e) => updateStudent('dateOfBirth', e.target.value)}
                        required
                        error={errors.dateOfBirth}
                      />

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Gender <span className="text-secondary">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Male', 'Female'].map((g) => (
                            <RadioOption
                              key={g}
                              name="gender"
                              value={g}
                              checked={students[currentStudentIndex].gender === g}
                              onChange={() => updateStudent('gender', g)}
                              label={g}
                            />
                          ))}
                        </div>
                        {errors.gender && (
                          <p className="mt-1 text-sm text-red-500 font-medium">{errors.gender}</p>
                        )}
                      </div>

                      <InputField
                        label="Current Grade Level"
                        name="currentGrade"
                        value={students[currentStudentIndex].currentGrade}
                        onChange={(e) => updateStudent('currentGrade', e.target.value)}
                        placeholder="e.g. Grade 3, Secondary 1 (optional)"
                        required={false}
                        error={errors.currentGrade}
                      />

                      <MultiSelectCourses
                        label="Programs / Courses You're Interested In Knowing More About"
                        selectedCourses={students[currentStudentIndex].courses}
                        onChange={(val) => updateStudent('courses', val)}
                        options={courseOptions}
                        required
                        error={errors.course}
                      />

                      <div className="pt-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Would you like to add another student? <span className="text-secondary">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <RadioOption
                            name={`addAnotherStudent-${currentStudentIndex}`}
                            value="no"
                            checked={students[currentStudentIndex]?.addAnotherStudent === 'no'}
                            onChange={() => {
                              updateStudent('addAnotherStudent', 'no');
                              if (errors.addAnother) {
                                const e = { ...errors };
                                delete e.addAnother;
                                setErrors(e);
                              }
                            }}
                            label="No"
                          />
                          <RadioOption
                            name={`addAnotherStudent-${currentStudentIndex}`}
                            value="yes"
                            checked={students[currentStudentIndex]?.addAnotherStudent === 'yes'}
                            onChange={() => {
                              updateStudent('addAnotherStudent', 'yes');
                              if (errors.addAnother) {
                                const e = { ...errors };
                                delete e.addAnother;
                                setErrors(e);
                              }
                            }}
                            label="Yes"
                          />
                        </div>
                        {errors.addAnother && (
                          <p className="mt-1 text-sm text-red-500 font-medium">{errors.addAnother}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3">
                      <button
                        onClick={handleBackFromStudent}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {currentStudentIndex > 0 ? `Student ${currentStudentIndex}` : 'Back'}
                      </button>
                      <button
                        onClick={handleNextFromStudent}
                        className="px-8 py-3.5 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        {students[currentStudentIndex]?.addAnotherStudent === 'no'
                          ? 'Continue to Review'
                          : students[currentStudentIndex]?.addAnotherStudent === 'yes'
                          ? `Continue to Student ${currentStudentIndex + 2}`
                          : currentStudentIndex < students.length - 1
                          ? `Continue to Student ${currentStudentIndex + 2}`
                          : 'Continue'}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ───── STEP 3: Review & Confirm ───── */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-2">
                        Review & Submit
                      </h2>
                      <p className="text-gray-500 text-sm sm:text-base">
                        Please review all details before submitting your registration.
                      </p>
                    </div>

                    {/* Guardian Summary */}
                    <div className="mb-6 bg-gray-50 rounded-xl p-5 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                          <span className="text-xl">👤</span> Guardian Information
                        </h3>
                        <button
                          onClick={() => goToStep(1)}
                          className="text-secondary text-sm font-semibold hover:underline cursor-pointer"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-500 font-medium">Relationship</span>
                          <p className="text-gray-900 font-semibold">
                            {guardian.relationship === 'Does not apply'
                              ? 'Self (Adult Student)'
                              : guardian.relationship === 'Other'
                              ? guardian.relationshipOther
                              : guardian.relationship}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">Email</span>
                          <p className="text-gray-900 font-semibold">{guardian.email}</p>
                        </div>
                        {!isAdultSelf && (
                          <>
                            <div>
                              <span className="text-gray-500 font-medium">Full Name</span>
                              <p className="text-gray-900 font-semibold">{guardian.guardianName}</p>
                            </div>
                            <div>
                              <span className="text-gray-500 font-medium">Phone</span>
                              <p className="text-gray-900 font-semibold force-ltr" dir="ltr">{guardian.phone}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Student(s) Summary */}
                    <div className="space-y-4">
                      {students.map((student, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                              <span className="text-xl">🎓</span> Student {i + 1}
                            </h3>
                            <button
                              onClick={() => {
                                setCurrentStudentIndex(i);
                                goToStep(2);
                              }}
                              className="text-secondary text-sm font-semibold hover:underline cursor-pointer"
                            >
                              Edit
                            </button>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="text-gray-500 font-medium">Full Name</span>
                              <p className="text-gray-900 font-semibold">{student.fullName}</p>
                            </div>
                            <div className="sm:col-span-2">
                              <span className="text-gray-500 font-medium">Date of Birth</span>
                              <p className="text-gray-900 font-semibold">
                                {student.dateOfBirth
                                  ? (() => {
                                      const [y, m, d] = student.dateOfBirth.split('-');
                                      return `${d}/${m}/${y}`;
                                    })()
                                  : ''}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-500 font-medium">Gender</span>
                              <p className="text-gray-900 font-semibold">{student.gender}</p>
                            </div>
                            <div>
                              <span className="text-gray-500 font-medium">Current Grade</span>
                              <p className="text-gray-900 font-semibold">{student.currentGrade || 'Not provided'}</p>
                            </div>
                            <div className="sm:col-span-2">
                              <span className="text-gray-500 font-medium">Course(s)</span>
                              {student.courses && student.courses.length > 0 ? (
                                <ul className="mt-1 space-y-1">
                                  {student.courses.map((c) => (
                                    <li key={c} className="text-gray-900 font-semibold text-sm">{c}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-400 font-medium">None selected</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>


                    <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3">
                      <button
                        onClick={() => goToStep(2)}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                      <button
                        onClick={() => goToStep(4)}
                        className="px-10 py-3.5 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        Continue to Appointment
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ───── STEP 4: Book Appointment ───── */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-2">
                        Book a Fit Assessment
                      </h2>
                      <p className="text-gray-500 text-sm sm:text-base">
                        Select a date and an available 15-minute time slot for your fit assessment call.
                      </p>
                    </div>

                    {/* Availability Info Banner */}
                    <div className="mb-6 bg-secondary/5 border border-secondary/20 rounded-2xl p-4 sm:p-5">
                      <div className="flex items-start gap-3.5">
                        <div className="text-2xl sm:text-3xl shrink-0 mt-0.5">📅</div>
                        <div className="text-sm text-gray-700 w-full">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <p className="font-bold text-gray-900 text-base">Available Hours</p>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary">
                              15 min per slot • 2 spots max
                            </span>
                          </div>
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
                      {/* Meeting Type Selection */}
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
                                  We will call you at{' '}
                                  <strong className="text-gray-700">{guardian.phone || 'your phone number'}</strong> at your scheduled time.
                                </p>
                              </div>
                            </label>
                          </div>
                        </motion.div>
                      )}

                      {/* Interactive Calendly-style Calendar and Time Slot Grid */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Select Date & 15-Minute Slot <span className="text-secondary">*</span>
                          </label>
                          {appointmentDate && (
                            <button
                              type="button"
                              onClick={() => {
                                setAppointmentDate('');
                                setAppointmentTime('');
                              }}
                              className="text-xs text-secondary hover:underline cursor-pointer font-medium"
                            >
                              Clear selection
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                          {/* Left: Monthly Calendar */}
                          <div className="lg:col-span-6">
                            <CalendarMonthPicker
                              selectedDate={appointmentDate}
                              onSelectDate={(d) => {
                                setAppointmentDate(d);
                                setAppointmentTime('');
                                if (errors.appointmentDate) {
                                  const e = { ...errors };
                                  delete e.appointmentDate;
                                  setErrors(e);
                                }
                              }}
                              minDateStr={minDate}
                              maxDateStr={maxDate}
                            />
                            {errors.appointmentDate && (
                              <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.appointmentDate}</p>
                            )}
                          </div>

                          {/* Right: Time Slots */}
                          <div className="lg:col-span-6 bg-gray-50 border border-gray-200/90 rounded-2xl p-3.5 sm:p-5 min-h-[300px] sm:min-h-[340px] flex flex-col justify-between">
                            {!appointmentDate ? (
                              <div className="my-auto text-center py-8 sm:py-10 px-3 sm:px-4 text-gray-500">
                                <span className="text-2xl sm:text-3xl block mb-2">👈</span>
                                <p className="font-semibold text-gray-800 text-sm mb-1">Pick a date on the calendar</p>
                                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                                  Available 15-minute appointment slots with live availability will appear here.
                                </p>
                              </div>
                            ) : (
                              <div>
                                <div className="border-b border-gray-200 pb-3 mb-3">
                                  <div className="flex items-center justify-between gap-2">
                                    <h4 className="font-heading font-bold text-gray-900 text-xs sm:text-base leading-snug">
                                      {dateInfo?.dayName}
                                    </h4>
                                    <span
                                      className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                                        dateInfo?.isWeekend ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                      }`}
                                    >
                                      {dateInfo?.isWeekend ? 'Weekend' : 'Weekday'}
                                    </span>
                                  </div>
                                  <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
                                    Available: {dateInfo?.hours} • 15 min per slot
                                  </p>
                                </div>

                                {isLoadingSlots ? (
                                  <div className="py-12 text-center text-gray-500">
                                    <svg className="animate-spin w-6 h-6 text-secondary mx-auto mb-2" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    <p className="text-xs font-medium">Checking live slot availability...</p>
                                  </div>
                                ) : slotsData.length === 0 ? (
                                  <div className="py-8 text-center text-gray-500 text-sm">
                                    No slots available for this date. Please select another date.
                                  </div>
                                ) : (
                                  <div className="space-y-1">
                                    <div className="max-h-[260px] sm:max-h-[280px] overflow-y-auto pr-1 grid grid-cols-2 gap-1.5 sm:gap-2">
                                      {slotsData.map((slot) => {
                                        const isSelected = appointmentTime === slot.time;
                                        const isFull = !slot.available || slot.spotsLeft <= 0;

                                        return (
                                          <button
                                            key={slot.time}
                                            type="button"
                                            disabled={isFull}
                                            onClick={() => {
                                              if (!isFull) {
                                                setAppointmentTime(slot.time);
                                                if (errors.appointmentTime) {
                                                  const e = { ...errors };
                                                  delete e.appointmentTime;
                                                  setErrors(e);
                                                }
                                              }
                                            }}
                                            className={`p-2 sm:p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                                              isFull
                                                ? 'bg-gray-100/90 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed'
                                                : isSelected
                                                ? 'bg-secondary text-white border-secondary ring-2 ring-secondary/30 shadow-sm scale-[1.02] cursor-pointer'
                                                : 'bg-white border-gray-200 hover:border-secondary hover:bg-secondary/5 text-gray-800 cursor-pointer'
                                            }`}
                                          >
                                            <div className="flex items-center justify-between gap-1">
                                              <span className={`text-[11px] sm:text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                                                {slot.label}
                                              </span>
                                              <span
                                                className={`text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${
                                                  isFull
                                                    ? 'bg-gray-200 text-gray-500'
                                                    : isSelected
                                                    ? 'bg-white/20 text-white'
                                                    : slot.spotsLeft === 1
                                                    ? 'bg-amber-100 text-amber-800'
                                                    : 'bg-emerald-100 text-emerald-800'
                                                }`}
                                              >
                                                {isFull ? 'Full' : slot.spotsLeft === 1 ? '1 spot' : '2 spots'}
                                              </span>
                                            </div>
                                            <span className={`text-[9px] sm:text-[10px] mt-0.5 sm:mt-1 ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                                              {slot.label} – {slot.endLabel}
                                            </span>
                                          </button>
                                        );
                                      })}
                                    </div>
                                    {errors.appointmentTime && (
                                      <p className="mt-2 text-sm text-red-500 font-medium">{errors.appointmentTime}</p>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}

                            {appointmentTime && (
                              <div className="mt-3 pt-2.5 sm:pt-3 border-t border-gray-200 flex flex-wrap items-center justify-between text-xs gap-1">
                                <span className="text-gray-500">Selected Slot:</span>
                                <span className="font-bold text-secondary text-[11px] sm:text-xs">
                                  {slotsData.find((s) => s.time === appointmentTime)?.label} — {slotsData.find((s) => s.time === appointmentTime)?.endLabel} ET
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Live Appointment Summary Card */}
                      <AnimatePresence>
                        {appointmentDate && appointmentTime && appointmentType && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/25 rounded-2xl p-5"
                          >
                            <h4 className="font-bold text-gray-900 mb-2.5 flex items-center gap-2 text-base">
                              <span className="text-xl">✅</span> Appointment Summary
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                              <div>
                                <span className="text-xs text-gray-500 block">Date</span>
                                <span className="font-semibold text-gray-900">{dateInfo?.dayName}</span>
                              </div>
                              <div>
                                <span className="text-xs text-gray-500 block">Time</span>
                                <span className="font-semibold text-gray-900">
                                  {slotsData.find((s) => s.time === appointmentTime)?.label} — {slotsData.find((s) => s.time === appointmentTime)?.endLabel} (15 mins — ET)
                                </span>
                              </div>
                              <div>
                                <span className="text-xs text-gray-500 block">Meeting Format</span>
                                <span className="font-semibold text-gray-900">
                                  {appointmentType === 'in-person'
                                    ? '🏫 In-Person (8990 Boul. Michel-Chartrand, Anjou)'
                                    : virtualOption === 'phone'
                                    ? `📞 Phone Call (${guardian.phone || 'Your Phone'})`
                                    : '💻 Google Meet Video Call (Automated Link Provided)'}
                                </span>
                              </div>
                              <div>
                                <span className="text-xs text-gray-500 block">Attendee</span>
                                <span className="font-semibold text-gray-900">
                                  {guardian.guardianName || students[0]?.fullName}
                                </span>
                              </div>
                            </div>
                            <p className="mt-3 text-xs text-gray-500 border-t border-secondary/15 pt-2">
                              {appointmentType === 'virtual' && virtualOption === 'meet'
                                ? 'An automated Google Meet video meeting link will be sent directly with your calendar invite.'
                                : appointmentType === 'virtual' && virtualOption === 'phone'
                                ? `We will call ${guardian.phone || 'your phone'} at the scheduled time.`
                                : 'Please arrive 5 minutes before your scheduled appointment time.'}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {submitError && (
                      <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl">
                        <p className="text-red-600 text-sm font-medium">{submitError}</p>
                      </div>
                    )}

                    <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3">
                      <button
                        onClick={() => goToStep(3)}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Review
                      </button>
                      <button
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
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Registration
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ───── STEP 5: Confirmation (Done) ───── */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
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
                        Registration & Fit Call Confirmed!
                      </h2>
                      <p className="text-gray-600 text-sm sm:text-base mb-1 max-w-md mx-auto">
                        Thank you for registering with <strong>Avenir Souriant</strong>.
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm mb-6 max-w-md mx-auto">
                        A confirmation receipt and calendar invite (.ics) have been emailed to{' '}
                        <strong className="text-gray-800 break-all">{guardian.email}</strong>.
                      </p>

                      {/* Prominent Attendee & Student Information Display */}
                      <div className="my-6 max-w-xl mx-auto bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-6 text-left shadow-xs space-y-4">
                        <div className="flex flex-wrap items-center justify-between border-b border-gray-100 pb-3 gap-1">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                            <span>👤</span> Registrant Details
                          </h3>
                          <span className="text-xs text-gray-500">
                            {guardian.relationship === 'Does not apply'
                              ? 'Self (Adult Student)'
                              : guardian.relationshipOther || guardian.relationship}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-xs text-gray-500 block">Full Name</span>
                            <span className="font-bold text-gray-900 text-sm sm:text-base">
                              {guardian.guardianName || students[0]?.fullName || 'Registrant'}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 block">Email</span>
                            <span className="font-semibold text-gray-800 break-all text-xs sm:text-sm">{guardian.email}</span>
                          </div>
                          {guardian.phone && (
                            <div>
                              <span className="text-xs text-gray-500 block">Phone</span>
                              <span className="font-semibold text-gray-800 text-xs sm:text-sm">{guardian.phone}</span>
                            </div>
                          )}
                        </div>

                        {/* Student Details with Name and Date of Birth */}
                        <div className="border-t border-gray-100 pt-3">
                          <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2.5 flex items-center gap-1.5">
                            <span>🎓</span> Registered Student(s)
                          </h4>
                          <div className="space-y-3">
                            {students.map((st, idx) => {
                              const [y, m, d] = (st.dateOfBirth || '').split('-');
                              const formattedDob = y && m && d ? `${d}/${m}/${y}` : st.dateOfBirth || 'N/A';
                              return (
                                <div key={idx} className="bg-gray-50 rounded-xl p-3 sm:p-3.5 border border-gray-200/60">
                                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                                    <span className="font-bold text-gray-900 text-sm sm:text-base">{st.fullName}</span>
                                    <span className="text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 shrink-0">
                                      Birth Date: {formattedDob}
                                    </span>
                                  </div>
                                  <div className="text-xs text-gray-600 space-y-0.5 mt-1">
                                    <p><span className="font-medium text-gray-500">Gender:</span> {st.gender}</p>
                                    {st.currentGrade && (
                                      <p><span className="font-medium text-gray-500">Grade:</span> {st.currentGrade}</p>
                                    )}
                                    {st.courses && st.courses.length > 0 && (
                                      <p>
                                        <span className="font-medium text-gray-500">Interested in:</span>{' '}
                                        <span className="font-semibold text-gray-800">{st.courses.join(', ')}</span>
                                      </p>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Scheduled Appointment Details */}
                        {appointmentDate && appointmentTime && (
                          <div className="border-t border-gray-100 pt-3 bg-secondary/5 rounded-xl p-3.5 sm:p-4 border border-secondary/20">
                            <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2 flex items-center gap-2">
                              <span>📅</span> Scheduled Fit Assessment Call
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
                                  `📞 Phone Call (We will call ${guardian.phone || 'your phone'})`
                                ) : (
                                  '💻 Google Meet Video Call'
                                )}
                              </p>
                            </div>

                            {appointmentType === 'virtual' && virtualOption === 'meet' && (
                              <div className="mt-3 pt-3 border-t border-secondary/20">
                                <a
                                  href="https://meet.google.com/asf-wytq-fit"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-white rounded-xl text-xs font-bold hover:bg-opacity-90 shadow-xs transition-all hover:scale-[1.02] w-full sm:w-auto"
                                >
                                  📹 Open Google Meet Link
                                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                                <p className="text-[11px] text-gray-500 mt-1 break-all">
                                  Link: <span className="text-secondary font-medium">https://meet.google.com/asf-wytq-fit</span>
                                </p>
                              </div>
                            )}

                            <p className="text-[11px] sm:text-xs text-gray-500 mt-2.5">
                              📎 A calendar invitation (.ics) is attached to your email. Click it in your email to sync it directly to Google Calendar, Apple Calendar, or Outlook.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                        <TransitionLink
                          href="/"
                          className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-md inline-flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          Back to Home
                        </TransitionLink>
                        <TransitionLink
                          href="/programs"
                          className="px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all inline-flex items-center justify-center gap-2"
                        >
                          Explore Programs
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
