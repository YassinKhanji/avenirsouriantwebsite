'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { TransitionLink } from '@/components/TransitionLink';
import { motion } from 'framer-motion';
import { courses } from '@/data/courses';

export default function Services() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Programs Hero Section */}
        <section 
          className="py-16 sm:py-24 md:py-32 bg-cover bg-center bg-no-repeat text-center flex items-center justify-center min-h-[38vh] sm:min-h-[45vh] md:min-h-[50vh]"
          style={{ backgroundImage: "url('/images/programs-hero-bg.jpg')" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-4 sm:p-6 md:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6 text-gray-900 drop-shadow-md">
              Our Programs
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium max-w-2xl mx-auto drop-shadow-sm">
              Discover a world of engaging educational and extracurricular activities designed to build confidence, creativity, and language mastery.
            </p>
          </div>
        </section>

        {/* Quick Register Banner */}
        <div className="bg-secondary py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white font-semibold text-base sm:text-lg text-center sm:text-left">
              🎓 Enrollment is now open — spots are filling up fast!
            </p>
            <TransitionLink href="/register-now" className="shrink-0">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-secondary font-bold text-sm sm:text-base rounded-full hover:bg-secondary-light hover:text-white border-2 border-white transition-all duration-300 cursor-pointer shadow-sm active:scale-[0.98]">
                Register Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </TransitionLink>
          </div>
        </div>

        {/* Programs Grid Section */}
        <section className="py-14 sm:py-20 bg-gray-50/50 overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {courses.map((service, idx) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-300 hover:border-primary/50 transition-all duration-300 flex flex-col group relative"
                >
                  {/* Card Media */}
                  <TransitionLink href={service.active ? `/programs/${service.slug}` : '/register'} className="block">
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Floating Badges Bar */}
                      <div className="absolute top-3 inset-x-3 sm:top-3.5 sm:inset-x-3.5 flex items-center justify-between gap-2 z-10">
                        <span className="bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-primary uppercase tracking-wider shadow-sm truncate max-w-[62%]">
                          {service.category}
                        </span>

                        {service.active ? (
                          <span className="shrink-0 bg-emerald-500/95 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider shadow-sm animate-pulse">
                            Enrolling Now
                          </span>
                        ) : (
                          <span className="shrink-0 bg-gray-900/85 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </TransitionLink>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1 text-start">
                    <TransitionLink href={service.active ? `/programs/${service.slug}` : '/register'} className="block">
                      <h2 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 group-hover:text-primary transition-colors mb-2 sm:mb-3">
                        {service.title}
                      </h2>
                    </TransitionLink>
                    
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-1">
                      {service.desc}
                    </p>

                    {/* Price Tag Row */}
                    <div className="flex items-baseline justify-between pt-4 border-t border-gray-200 mb-4 sm:mb-6">
                      <span className="text-xs sm:text-sm font-medium text-gray-500">Tuition</span>
                      <div className="flex items-baseline gap-2">
                        {service.originalPrice && (
                          <span className="text-sm sm:text-lg line-through text-gray-400 font-medium">
                            {service.originalPrice}
                          </span>
                        )}
                        <span className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      <TransitionLink
                        href={service.active ? `/programs/${service.slug}` : '/register'}
                        className="w-full"
                      >
                        <button className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-2xl border-2 border-gray-200 text-gray-800 font-bold text-sm sm:text-base hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-[0.98] text-center">
                          Learn More
                        </button>
                      </TransitionLink>
                      {service.active && (
                        <TransitionLink href="/register-now" className="w-full">
                          <button className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-2xl bg-secondary text-white font-bold text-sm sm:text-base hover:bg-secondary/90 transition-all duration-300 cursor-pointer shadow-sm active:scale-[0.98] text-center inline-flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                            Register Now
                          </button>
                        </TransitionLink>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Register CTA */}
        <section className="py-12 sm:py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-3">
              Ready to Enroll?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-6 max-w-xl mx-auto">
              Spaces are limited. Reserve your child&apos;s spot today and start their journey with Avenir Souriant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TransitionLink href="/register-now">
                <button className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-secondary text-white font-bold text-base sm:text-lg rounded-full hover:bg-secondary/90 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                  Register Now
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </TransitionLink>
              <TransitionLink href="/register">
                <button className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-white/15 border-2 border-white text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/25 shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                  Contact Us
                </button>
              </TransitionLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
