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
          className="py-32 bg-cover bg-center bg-no-repeat text-center flex items-center justify-center min-h-[50vh]"
          style={{ backgroundImage: "url('/images/programs-hero-bg.jpg')" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-gray-900 drop-shadow-md">
              Our Programs
            </h1>
            <p className="text-xl text-gray-800 font-medium max-w-2xl mx-auto drop-shadow-sm">
              Discover a world of engaging educational and extracurricular activities designed to build confidence, creativity, and language mastery.
            </p>
          </div>
        </section>

        {/* Programs Grid Section */}
        <section className="py-20 bg-gray-50/50 overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
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
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating Badges Bar */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 z-10">
                      <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-primary uppercase tracking-wider shadow-sm truncate max-w-[62%]">
                        {service.category}
                      </span>

                      {service.active ? (
                        <span className="shrink-0 bg-emerald-500/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white uppercase tracking-wider shadow-sm animate-pulse">
                          Enrolling Now
                        </span>
                      ) : (
                        <span className="shrink-0 bg-gray-900/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h2 className="text-2xl font-bold font-heading text-gray-900 group-hover:text-primary transition-colors mb-3">
                      {service.title}
                    </h2>
                    
                    <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                      {service.desc}
                    </p>

                    {/* Price Tag Row */}
                    <div className="flex items-baseline justify-between pt-4 border-t border-gray-200 mb-6">
                      <span className="text-sm font-medium text-gray-500">Tuition</span>
                      <div className="flex items-baseline gap-2">
                        {service.originalPrice && (
                          <span className="text-lg line-through text-gray-400 font-medium">
                            {service.originalPrice}
                          </span>
                        )}
                        <span className="text-3xl font-bold font-heading text-gray-900">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <TransitionLink
                      href={service.active ? `/programs/${service.slug}` : '/register'}
                      className="w-full"
                    >
                      <button className="w-full py-3.5 px-6 rounded-2xl border-2 border-gray-200 text-gray-800 font-bold text-base hover:border-secondary hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-[0.98] text-center">
                        Learn More
                      </button>
                    </TransitionLink>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
