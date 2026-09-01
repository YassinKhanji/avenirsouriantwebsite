'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { TransitionLink } from '@/components/TransitionLink';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { CourseData } from '@/data/courses';

// CollapsibleSection component for mobile-friendly expandable sections
function CollapsibleSection({ 
  title, 
  children, 
  defaultOpen = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="mb-10">
      {/* Mobile Toggle Button / Desktop Heading */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 group cursor-pointer text-left md:pointer-events-none"
      >
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary italic">
          {title}
        </h2>
        {/* Toggle indicator visible on mobile */}
        <span className="md:hidden text-primary text-2xl font-bold px-2 py-1 rounded-lg bg-primary/10 transition-transform duration-300">
          {open ? '−' : '+'}
        </span>
      </button>

      {/* Content: Always visible on desktop (md:block), collapsible on mobile */}
      <div className={`mt-4 ${open ? 'block' : 'hidden md:block'}`}>
        {children}
      </div>
    </section>
  );
}

interface CourseDetailClientProps {
  course: CourseData;
}

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ═══ Hero Banner ═══ */}
        <section className="relative min-h-[45vh] md:min-h-[52vh] flex items-end overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={course.image}
              alt={course.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/60 to-gray-900/40" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category & Status Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-primary/95 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                  {course.category}
                </span>
                {course.active && (
                  <span className="bg-secondary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm animate-pulse">
                    Enrolling Now
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-3 drop-shadow-lg">
                {course.tagline || course.title}
              </h1>
              
              <p className="text-white/90 text-lg md:text-2xl font-medium max-w-3xl mb-4 drop-shadow-md">
                {course.subTagline || course.subtitle}
              </p>

              {/* Quick Details Bar */}
              <p className="text-white/75 text-sm md:text-base font-semibold uppercase tracking-wider mb-8 flex flex-wrap items-center gap-2">
                <span>{course.subtitle}</span>
                {course.address && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <span>📍 {course.address}</span>
                  </>
                )}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <TransitionLink href="/register">
                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold text-base md:text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
                    Register Here
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </TransitionLink>

                {course.contactPhones && course.contactPhones.length > 0 && (
                  <a
                    href={`tel:${course.contactPhones[0].replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-2 px-6 py-4 bg-white/90 hover:bg-white text-gray-900 font-bold text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    Call: {course.contactPhones[0]}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ Key Pillars Grid (Overview) ═══ */}
        {course.active && (
          <section className="py-12 bg-gray-50 border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* 1. Teacher / Facility Profile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300 hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                        {course.teacher?.title || "Teacher Profile"}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-primary leading-tight">
                        {course.teacher?.name || "Expert Team"}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1 flex-1">
                    {course.teacher?.bio || "Experienced, dedicated educators and learning specialists."}
                  </p>
                </motion.div>

                {/* 2. Course Objective */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300 hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">Objective</span>
                      <h3 className="text-lg font-bold font-heading text-primary leading-tight">
                        {course.objectiveHeadline || "Learn & Excel"}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1 flex-1">
                    {course.objective || "Structured, stimulating curriculum designed for mastery and personal growth."}
                  </p>
                </motion.div>

                {/* 3. Schedule */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300 hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">Schedule</span>
                      <h3 className="text-lg font-bold font-heading text-primary leading-tight">
                        {course.scheduleHeadline || "Flexible Schedule"}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1 flex-1">
                    {course.scheduleDetails || "Sessions held in-person at our Saint-Laurent center."}
                  </p>
                </motion.div>

                {/* 4. Target Audience */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300 hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">Who Is It For</span>
                      <h3 className="text-lg font-bold font-heading text-primary leading-tight">
                        {course.targetAudienceHeadline || "All Stages"}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1 flex-1">
                    {course.targetAudience || "Tailored learning tracks adapted to every student."}
                  </p>
                </motion.div>

              </div>
            </div>
          </section>
        )}

        {/* ═══ Main Content: Two-Column Layout ═══ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

              {/* ─── Left Column (Main Content) ─── */}
              <div className="lg:col-span-2 space-y-12">

                {/* Promotional Price Banner for Active Courses */}
                {course.active && course.originalPrice && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-6 sm:p-8 bg-gradient-to-br from-primary-light to-white rounded-3xl border-2 border-primary/30 shadow-sm relative overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
                      <div>
                        <div className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                          Special Limited-Time Rate
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                          Complete 8-Session Package
                        </h2>
                        <p className="text-gray-600 mt-1">
                          Includes full curriculum, reading materials, and personalized instructor guidance.
                        </p>
                      </div>

                      <div className="flex items-baseline gap-3 sm:flex-col sm:items-end">
                        <span className="text-2xl line-through text-gray-400 font-bold">
                          {course.originalPrice}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl font-extrabold font-heading text-secondary">
                            {course.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Introduction Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6 italic">
                    {course.introHeadline || (course.active ? "Empowering Education & Enrichment" : "Coming Soon — Stay Tuned!")}
                  </h2>

                  {course.longDescription.map((paragraph, i) => (
                    <p key={i} className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {/* ═══ Parent Challenges Addressed (if present) ═══ */}
                {course.parentChallenges && course.parentChallenges.length > 0 && (
                  <CollapsibleSection title="Parent Challenges Solved" defaultOpen={true}>
                    <div className="bg-gradient-to-br from-primary/5 via-primary-light/40 to-white p-6 sm:p-8 rounded-3xl border border-primary/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg">
                          ✓
                        </div>
                        <div>
                          <span className="text-xs uppercase font-bold text-primary tracking-widest block">
                            Tailored Academic Support
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                            Key Challenges for Homeschooling Families
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base mb-6">
                        Our center takes care of the most demanding aspects of homeschooling to deliver an enriching, stress-free experience:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {course.parentChallenges.map((challenge, i) => (
                          <div key={i} className="flex items-start gap-3 bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-gray-200">
                            <span className="text-primary font-bold text-base mt-0.5">✔</span>
                            <span className="text-gray-800 text-sm font-semibold">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CollapsibleSection>
                )}

                {/* ═══ Membership Tiers & Durations (if present) ═══ */}
                {course.membershipTiers && course.membershipTiers.length > 0 && (
                  <CollapsibleSection title="Flexible Membership Plans" defaultOpen={false}>
                    <div className="space-y-6">
                      <p className="text-gray-600 text-base">
                        Select the plan that best fits your family’s schedule and learning goals (9:00 AM – 1:00 PM):
                      </p>

                      {/* Duration selector boxes */}
                      {course.durationOptions && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                          {course.durationOptions.map((dur, i) => (
                            <div key={i} className="bg-white p-4 rounded-2xl border border-gray-300 text-center shadow-sm">
                              <span className="inline-block bg-secondary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                                {dur.duration}
                              </span>
                              <h4 className="font-bold text-gray-900 text-sm font-heading">{dur.label}</h4>
                              <p className="text-xs text-gray-500 mt-1">{dur.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tier Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {course.membershipTiers.map((tier, i) => (
                          <div
                            key={i}
                            className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 border ${
                              tier.isPopular
                                ? 'bg-primary-light/40 border-primary shadow-lg ring-2 ring-primary/30'
                                : 'bg-white border-gray-300 shadow-sm hover:shadow-md'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                                  {tier.level}
                                </span>
                                {tier.isPopular && (
                                  <span className="bg-secondary text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <h3 className="text-lg font-bold font-heading text-gray-900 mb-1 leading-tight">
                                {tier.title}
                              </h3>
                              <p className="text-xs text-gray-600 mb-4 italic">{tier.tagline}</p>

                              {/* Pricing Block */}
                              {(tier.price1Month || tier.price1Session || tier.price12Months) && (
                                <div className={`rounded-2xl p-4 mb-4 ${tier.isPopular ? 'bg-primary/10 border border-primary/25' : 'bg-gray-50 border border-gray-200'}`}>
                                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary block mb-3">Rates</span>
                                  <div className="space-y-2">
                                    {tier.price1Month && (
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500 font-medium">1 Month</span>
                                        <span className="text-sm font-extrabold text-gray-900">{tier.price1Month}</span>
                                      </div>
                                    )}
                                    {tier.price1Session && (
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500 font-medium">1 Term</span>
                                        <span className="text-sm font-extrabold text-gray-900">{tier.price1Session}</span>
                                      </div>
                                    )}
                                    {tier.price12Months && (
                                      <div className="flex items-center justify-between border-t border-gray-200 pt-2 mt-1">
                                        <span className="text-xs text-secondary font-bold">School Year</span>
                                        <span className="text-base font-extrabold text-secondary">{tier.price12Months}</span>
                                      </div>
                                    )}
                                  </div>
                                  {tier.priceNote && (
                                    <p className="text-[10px] text-gray-500 mt-2.5 italic">{tier.priceNote}</p>
                                  )}
                                </div>
                              )}

                              <div className="border-t border-gray-200 pt-4 mb-4 space-y-2">
                                {tier.features.map((feat, idx) => (
                                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>{feat}</span>
                                  </div>
                                ))}
                              </div>

                              {tier.subTutoring && (
                                <div className="bg-white/80 p-3 rounded-xl border border-primary/20 mt-3">
                                  <span className="text-[11px] font-bold text-primary uppercase block mb-1.5">Personalized Tutoring In:</span>
                                  <ul className="space-y-1 text-xs text-gray-600">
                                    {tier.subTutoring.map((tut, sIdx) => (
                                      <li key={sIdx} className="flex items-center gap-1.5">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>{tut}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                              <TransitionLink href="/register">
                                <button className="w-full py-2.5 px-4 bg-primary hover:bg-primary/90 text-white font-bold text-xs rounded-full transition-colors cursor-pointer">
                                  Choose this plan
                                </button>
                              </TransitionLink>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CollapsibleSection>
                )}

                {/* ═══ Grade-Level Tracks (if present) ═══ */}
                {course.levelPrograms && course.levelPrograms.length > 0 && (
                  <CollapsibleSection title="Programs by Grade Level" defaultOpen={false}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {course.levelPrograms.map((prog, i) => (
                        <div key={i} className="bg-gray-50 p-5 rounded-2xl border border-gray-300 flex flex-col justify-between">
                          <div>
                            <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                              {prog.level}
                            </span>
                            <h3 className="font-bold text-gray-900 text-base font-heading mb-2">
                              {prog.title}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                              {prog.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleSection>
                )}

                {/* ═══ Program Description & Objectives ═══ */}
                {course.programDescription && course.programDescription.length > 0 && (
                  <CollapsibleSection title="Program Description & Objectives" defaultOpen={false}>
                    <div className="pt-2 space-y-4">
                      {course.programDescription.map((paragraph, i) => (
                        <p key={i} className="text-gray-700 text-base md:text-lg leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CollapsibleSection>
                )}

                {/* ═══ Program Details Table ═══ */}
                {course.programDetails && course.programDetails.length > 0 && (
                  <CollapsibleSection title="Program Details" defaultOpen={false}>
                    <div className="space-y-0">
                      {course.programDetails.map((detail, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-gray-200 group/row hover:bg-gray-50/50 transition-colors px-2 -mx-2 rounded-lg gap-2"
                        >
                          <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary/60 shrink-0">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                            <span className="text-gray-800 font-semibold text-base">{detail.label}</span>
                          </div>
                          <span className="text-sm md:text-base font-bold text-gray-900 bg-gray-100 border border-gray-300 px-4 py-1.5 rounded-full self-start sm:self-auto">
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CollapsibleSection>
                )}

                {/* ═══ What You'll Learn / Highlights ═══ */}
                {course.highlights && course.highlights.length > 0 && (
                  <CollapsibleSection title="What You'll Learn" defaultOpen={false}>
                    <ul className="space-y-4">
                      {course.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-primary">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          </span>
                          <span className="text-gray-700 text-base md:text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleSection>
                )}

                {/* ═══ How to Register Section ═══ */}
                <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">
                    How to Register
                  </h3>
                  <p className="text-gray-600 text-base mb-6">
                    {course.registerSubtext || "Ready to begin your learning journey with Avenir Souriant? Register online or contact us directly by phone:"}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {course.contactPhones?.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                        className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-300 hover:border-primary transition-all duration-300 shadow-sm group hover:scale-[1.02]"
                      >
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-gray-500 block">Call to Register</span>
                          <span className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{phone}</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <TransitionLink href="/register">
                      <button className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold text-base md:text-lg rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                        Register Online
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </TransitionLink>

                    {course.address && (
                      <div className="text-sm text-gray-600 font-medium">
                        📍 <strong>Center Location:</strong> {course.address}
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* ─── Right Column (Sidebar) ─── */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">

                  {/* Quick Contact & Register Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-300"
                  >
                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">
                      Direct Enrollment
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">
                      {course.enrollmentNotice || "Spaces are limited for upcoming sessions. Secure your spot today!"}
                    </p>

                    {/* Phone buttons */}
                    {course.contactPhones && course.contactPhones.length > 0 && (
                      <div className="space-y-2 mb-6">
                        {course.contactPhones.map((phone, i) => (
                          <a
                            key={i}
                            href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 hover:bg-primary-light border border-gray-300 hover:border-primary/50 transition-colors text-gray-800 font-bold text-sm"
                          >
                            <span className="flex items-center gap-2">
                              📞 <span>{phone}</span>
                            </span>
                            <span className="text-xs text-primary uppercase font-bold">Call Now</span>
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Register Button */}
                    <TransitionLink href="/register" className="block">
                      <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold text-base rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                        Register Online
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </TransitionLink>
                  </motion.div>

                  {/* Useful Links */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-3xl p-6 shadow-md border border-gray-300"
                  >
                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-5">
                      Useful Links
                    </h3>
                    <nav className="space-y-0">
                      {[
                        { label: "Register Here", href: "/register" },
                        { label: "View All Programs", href: "/programs" },
                        { label: "Contact Us", href: "/register" },
                      ].map((link, i) => (
                        <TransitionLink key={i} href={link.href}>
                          <div className="flex items-center justify-between py-3.5 border-b border-gray-200 last:border-b-0 hover:text-primary transition-colors cursor-pointer group/link">
                            <span className="text-gray-700 group-hover/link:text-primary font-medium transition-colors">
                              {link.label}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover/link:text-primary transition-colors">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                          </div>
                        </TransitionLink>
                      ))}
                    </nav>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-300">
                      <a href="https://www.facebook.com/profile.php?id=61573071398618" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                      </a>
                      <a href="https://www.instagram.com/avenir.souriant/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                      <a href="https://www.linkedin.com/company/avenir-souriant/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
