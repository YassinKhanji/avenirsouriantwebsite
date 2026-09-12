'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransitionLink } from '@/components/TransitionLink';

/* ── Types ── */
interface StudentData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  currentGrade: string;
  course: string;
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
  course: '',
  addAnotherStudent: '',
};

const courseOptions = [
  'Foundation Course for Students 6-8 years (Tuesday)',
  'Arabic Language Course for Students 8-12 years (Tuesday)',
  'Reading Skills Development Course for Girls 8-14 years (Friday)',
  'Reading Skills Development Course for Boys 12-14 years (Thursday)',
  'Foundation Course for Non-Arabic Speakers 16+ (Friday for Women, Sunday for Men)',
];

const steps = [
  { number: 1, label: 'Guardian' },
  { number: 2, label: 'Students' },
  { number: 3, label: 'Review' },
  { number: 4, label: 'Done' },
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
  <div className="flex items-center justify-between mb-6 sm:mb-10 w-full max-w-lg mx-auto">
    {steps.map((step, i) => {
      const isActive = currentStep === step.number;
      const isCompleted = currentStep > step.number;

      return (
        <div key={step.number} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center flex-shrink-0">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${
                isCompleted
                  ? 'bg-secondary text-white'
                  : isActive
                  ? 'bg-secondary text-white ring-4 ring-secondary/20'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {isCompleted ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step.number
              )}
            </div>
            <span
              className={`mt-1 text-[11px] sm:text-xs font-semibold transition-colors text-center ${
                isActive || isCompleted ? 'text-secondary font-bold' : 'text-gray-400'
              }`}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-1.5 sm:mx-3 mb-4 transition-colors duration-300 ${
                currentStep > step.number ? 'bg-secondary' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      );
    })}
  </div>
);

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

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formCardRef = useRef<HTMLDivElement>(null);

  /* ── Helpers ── */
  const goToStep = (step: number) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
    setErrors({});
    setTimeout(() => {
      formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const validateGuardian = (): boolean => {
    const e: Record<string, string> = {};
    if (!guardian.email) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guardian.email)) e.email = 'Invalid email format';
    if (!guardian.guardianName) e.guardianName = 'Full name is required';
    if (!guardian.phone) e.phone = 'Phone number is required';
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
    if (!student.course) e.course = 'Please select a course';
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

  const updateStudent = (field: keyof StudentData, value: string) => {
    const updated = [...students];
    updated[currentStudentIndex] = { ...updated[currentStudentIndex], [field]: value };
    setStudents(updated);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/send-email', {
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
                        Guardian Information
                      </h2>
                      <p className="text-gray-500 text-sm sm:text-base">
                        So we can contact you about the registration and course details.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={guardian.email}
                        onChange={(e) => setGuardian({ ...guardian, email: e.target.value })}
                        placeholder="parent@example.com"
                        required
                        error={errors.email}
                      />

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
                              onChange={() => setGuardian({ ...guardian, relationship: rel })}
                              label={rel}
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

                      <SelectField
                        label="Course to Register For"
                        value={students[currentStudentIndex].course}
                        onChange={(val) => updateStudent('course', val)}
                        options={courseOptions}
                        placeholder="Select a course..."
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
                          <span className="text-gray-500 font-medium">Full Name</span>
                          <p className="text-gray-900 font-semibold">{guardian.guardianName}</p>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">Email</span>
                          <p className="text-gray-900 font-semibold">{guardian.email}</p>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">Phone</span>
                          <p className="text-gray-900 font-semibold force-ltr" dir="ltr">{guardian.phone}</p>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">Relationship</span>
                          <p className="text-gray-900 font-semibold">
                            {guardian.relationship === 'Other' ? guardian.relationshipOther : guardian.relationship}
                          </p>
                        </div>
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
                            <div>
                              <span className="text-gray-500 font-medium">Date of Birth</span>
                              <p className="text-gray-900 font-semibold">{student.dateOfBirth}</p>
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
                              <span className="text-gray-500 font-medium">Course</span>
                              <p className="text-gray-900 font-semibold">{student.course}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {submitError && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                        <p className="text-red-600 text-sm font-medium">{submitError}</p>
                      </div>
                    )}

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

                {/* ───── STEP 4: Confirmation ───── */}
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
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                        className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6"
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
                      <h2 className="text-3xl font-bold font-heading text-gray-900 mb-3">
                        Registration Submitted!
                      </h2>
                      <p className="text-gray-600 text-lg mb-2 leading-relaxed max-w-md mx-auto">
                        Thank you for registering with <strong>Avenir Souriant</strong>.
                      </p>
                      <p className="text-gray-500 text-base mb-8 max-w-md mx-auto">
                        One of our team members will contact you <strong>in the next 24 hours</strong> to confirm the details and finalize enrollment.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                          View Programs
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
