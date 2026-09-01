'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { TransitionLink } from '@/components/TransitionLink';
import { NumberCounter } from '@/components/NumberCounter';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { courses } from '@/data/courses';

/* ── Hero Carousel Slides ── */
const heroSlides = [
  {
    id: 'programs',
    type: 'video' as const,
    src: '/videos/7975461-hd_1920_1080_25fps.mp4',
    overlayClass: 'bg-white/40',
    heading: (
      <>
        Engaging <span className="text-secondary" style={{ textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black, -2px 0 0 black, 2px 0 0 black, 0 -2px 0 black, 0 2px 0 black' }}>Programs</span>{' '}
        <br className="hidden sm:inline" /> for Every{' '}
        <span className="text-primary" style={{ textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black, -2px 0 0 black, 2px 0 0 black, 0 -2px 0 black, 0 2px 0 black' }}>Person</span>
      </>
    ),
    subtitle: 'From Arabic language mastery to STEM & Robotics, our programs are designed to spark curiosity, build confidence, and make learning an adventure.',
    cta: { label: 'View Programs', href: '/programs' },
    showPhone: false,
    textColor: 'text-gray-900',
  },
  {
    id: 'video',
    type: 'video' as const,
    src: '/videos/hero-video.mp4',
    overlayClass: 'bg-white/40',
    heading: (
      <>
        Discover the <span className="text-secondary" style={{ textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black, -2px 0 0 black, 2px 0 0 black, 0 -2px 0 black, 0 2px 0 black' }}>Joy</span>{' '}
        <br className="hidden sm:inline" /> of Learning{' '}
        <span className="text-primary" style={{ textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black, -2px 0 0 black, 2px 0 0 black, 0 -2px 0 black, 0 2px 0 black' }}>Arabic</span>
      </>
    ),
    subtitle: null,
    cta: { label: 'Learn More', href: '/register' },
    showPhone: true,
    textColor: 'text-gray-900',
  },
  {
    id: 'register',
    type: 'image' as const,
    src: '/images/native_arabic_speakers.jpg',
    overlayClass: 'bg-black/60',
    heading: <>Join the Avenir Souriant <br className="hidden sm:inline" /> Family Today</>,
    subtitle: 'Enroll your child in Montréal\'s most exciting Arabic learning center. Limited spots available — register now!',
    cta: { label: 'Register Now', href: '/register' },
    showPhone: false,
    textColor: 'text-white',
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  /* ── Carousel state ── */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 prev, 1 next
  const slideCount = heroSlides.length;

  const goToSlide = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setCurrentSlide(next);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slideCount, 1);
  }, [currentSlide, slideCount, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slideCount) % slideCount, -1);
  }, [currentSlide, slideCount, goToSlide]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 300 : -300 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -300 : 300 }),
  };

  const slide = heroSlides[currentSlide];
  
  const programsSliderRef = useRef<HTMLDivElement>(null);

  const scrollPrograms = (dir: 'left' | 'right') => {
    if (programsSliderRef.current) {
      const scrollAmount = programsSliderRef.current.clientWidth * 0.75;
      programsSliderRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  const clients = [
    { name: "Nour Al-Sabah", quote: "My kids used to dread Arabic classes, but Avenir Souriant completely flipped the script. They come home excited to learn!" },
    { name: "Kareem Hassan", quote: "The blend of language learning with robotics and soccer is incredible. It keeps my son engaged and active all weekend." },
    { name: "Layla M.", quote: "An amazing center! The teachers are passionate, the environment is safe, and my daughter's confidence has skyrocketed." }
  ];

  const stats = [
    { val: "5", label: "Interactive Programs" },
    { val: "100%", label: "Engagement" },
    { val: "7", label: "Expert Instructors" },
    { val: "100", label: "Happy Students" }
  ];

  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden">
        {/* ═══ Hero Carousel ═══ */}
        <section className="relative min-h-[80vh] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={slide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Background: video or image */}
              {slide.type === 'video' ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0 will-change-auto"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  priority
                  className="object-cover z-0"
                  sizes="100vw"
                />
              )}

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${slide.overlayClass} z-[1] pointer-events-none`}
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center min-h-[80vh] py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-8">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={`text-5xl md:text-6xl font-bold font-heading ${slide.textColor} mb-8 leading-tight drop-shadow-sm`}
                  >
                    {slide.heading}
                  </motion.h1>

                  {slide.subtitle && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.6 }}
                      className={`${slide.textColor === 'text-white' ? 'text-white/90' : 'text-gray-800 font-medium'} text-xl mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm`}
                    >
                      {slide.subtitle}
                    </motion.p>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <TransitionLink
                      href={slide.cta.href}
                      className="inline-block px-10 py-4 bg-secondary text-white rounded-full font-bold text-xl hover:bg-opacity-90 mb-6 shadow-lg transition-transform hover:scale-105"
                    >
                      {slide.cta.label}
                    </TransitionLink>
                  </motion.div>

                  {slide.showPhone && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.65, duration: 0.5 }}
                    >
                      <p className="text-gray-800 mb-6 font-semibold text-xl drop-shadow-sm">or</p>
                      <a href="tel:+15145815305" className="text-4xl font-bold text-white transition-all duration-300 flex items-center justify-center drop-shadow-sm group">
                        <span className="mr-3 group-hover:scale-110 transition-transform">📞</span>
                        <span className="group-hover:[-webkit-text-stroke:1.5px_#1abc9c] transition-all duration-300">(514) 581-5305</span>
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>


          {/* ── Slide Indicators ── */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx, idx > currentSlide ? 1 : -1)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-heading mb-8">Welcome to Avenir Souriant</h2>
                <div ref={containerRef} className="relative aspect-[1024/558] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                  <motion.div style={{ scale, width: '100%', height: '100%', position: 'relative' }}>
                    <Image 
                      src="/images/Gemini_Generated_Image_30n9zp30n9zp30n9.png"
                      alt="Welcome to Avenir Souriant"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Avenir Souriant is the Arabic learning center that flipped the script. No more boring drills, no more dreading class. We made Arabic their favorite subject — and the kids will tell you themselves. Based in Montréal, we're building the next generation of confident Arabic speakers, one smiling face at a time.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-primary mr-3">✔</span> Innovative & Interactive Learning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-primary mr-3">✔</span> Arabic for Speakers and Non-Speakers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-primary mr-3">✔</span> Diverse Activities: Robotics, Soccer, & Stitching
                  </li>
                </ul>
                <TransitionLink href="/programs" className="inline-block px-8 py-3 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90">
                  View Programs
                </TransitionLink>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Programs Carousel */}
        <section 
          id="third-section"
          className="py-24 bg-gray-50/70 overflow-hidden relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                Our Programs
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore our comprehensive array of educational programs and engaging extracurricular activities tailored to inspire your child.
              </p>
            </div>

            {/* Slider Container with Arrows */}
            <div className="relative">
              {/* Left Navigation Arrow */}
              <button
                onClick={() => scrollPrograms('left')}
                aria-label="Previous programs"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-5 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/95 backdrop-blur-sm shadow-md border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer active:scale-95 hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Right Navigation Arrow */}
              <button
                onClick={() => scrollPrograms('right')}
                aria-label="Next programs"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-5 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/95 backdrop-blur-sm shadow-md border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer active:scale-95 hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Horizontal Scrollable Program Cards */}
              <div 
                ref={programsSliderRef}
                className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {courses.map((program) => (
                  <div
                    key={program.slug}
                    className="w-[290px] sm:w-[340px] md:w-[370px] shrink-0 snap-start bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-300 hover:border-primary/50 transition-all duration-300 flex flex-col group/card relative"
                  >
                    {/* Card Media */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                      <Image 
                        src={program.image}
                        alt={program.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 370px"
                        className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                      />
                      {/* Floating Badges Bar */}
                      <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 z-10">
                        <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-primary uppercase tracking-wider shadow-sm truncate max-w-[62%]">
                          {program.category}
                        </span>

                        {program.active ? (
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
                    <div className="p-6 md:p-7 flex flex-col flex-1">
                      <h3 className="text-xl md:text-2xl font-bold font-heading text-gray-900 group-hover/card:text-primary transition-colors mb-3">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1 line-clamp-3">
                        {program.desc}
                      </p>

                      {/* Price Tag Row */}
                      <div className="flex items-baseline justify-between pt-4 border-t border-gray-200 mb-6">
                        <span className="text-xs md:text-sm font-medium text-gray-500">Tuition</span>
                        <div className="flex items-baseline gap-2">
                          {program.originalPrice && (
                            <span className="text-sm line-through text-gray-400 font-medium">
                              {program.originalPrice}
                            </span>
                          )}
                          <span className="text-2xl md:text-3xl font-bold font-heading text-gray-900">
                            {program.price}
                          </span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <TransitionLink
                        href={program.active ? `/programs/${program.slug}` : '/register'}
                        className="w-full"
                      >
                        <button className="w-full py-3 px-6 rounded-2xl border-2 border-gray-200 text-gray-800 font-bold text-sm md:text-base hover:border-secondary hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-[0.98] text-center">
                          {program.active ? 'Learn More' : 'Find Out More'}
                        </button>
                      </TransitionLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View More Programs Button */}
            <div className="mt-14 text-center">
              <TransitionLink 
                href="/programs"
                className="inline-block px-10 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer"
              >
                View More Programs
              </TransitionLink>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="py-20 bg-primary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold font-heading mb-12 text-center">Visit Our Center</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="order-2 lg:order-1 h-96 w-full rounded-xl overflow-hidden shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.3614050226385!2d-73.68453472314545!3d45.52291242952877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9185a536066db%3A0xc665dc9b32c3f847!2s1325%20Rue%20Cartier%2C%20Saint-Laurent%2C%20QC%20H4L%202N6%2C%20Canada!5e0!3m2!1sen!2sus!4v1716688530000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold font-heading mb-6 text-gray-900">Avenir Souriant</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Come see our modern facilities where we inspire the next generation of confident Arabic speakers. 
                </p>
                <div className="space-y-4">
                  <p className="flex items-start text-lg">
                    <span className="text-2xl mr-4">📍</span>
                    <span className="font-medium text-gray-800">1325 Rue Cartier<br/>Saint-Laurent, QC H4L 2N6</span>
                  </p>
                  <p className="flex items-center text-lg">
                    <span className="text-2xl mr-4">📞</span>
                    <a href="tel:+15145815305" className="font-bold text-primary hover:text-primary-light transition-colors">(514) 581-5305</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Clients Say */}
        <section 
          className="relative py-20 bg-repeat bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/geometric-pattern-bg.png')", backgroundSize: "350px" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-heading mb-12">What Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clients.map((client, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border-2 border-primary border-opacity-20 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl">❝</span>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{client.quote}</p>
                  <h5 className="font-bold text-lg">{client.name}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:hidden font-bold font-heading mb-8 text-center text-primary">Avenir Souriant</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center">
                <Image 
                  src="/images/every-baby-illustration.png" 
                  alt="A New Era of Education" 
                  width={350}
                  height={350}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold font-heading mb-6">A New Era of Education</h2>
                <p className="text-gray-600 mb-8">
                  We believe that learning should be an adventure. Our certified instructors combine language immersion with fun activities like sports and robotics to ensure every child loves coming to class.
                </p>
                <TransitionLink href="/programs" className="inline-block px-8 py-3 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90">
                  View Programs
                </TransitionLink>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center hover:border-primary transition-colors">
                    <p className="text-3xl font-bold text-primary mb-2"><NumberCounter value={stat.val} /></p>
                    <h6 className="font-semibold text-sm text-gray-700">{stat.label}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Register CTA Callout Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden">
                <Image 
                  src="/images/register_callout.png"
                  alt="Ready to Join Avenir Souriant?"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-4xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                  Ready to Join Avenir Souriant?
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Give your child the gift of language, creativity, and coding. Join the Avenir Souriant family and watch them build confidence, make friends, and discover the joy of learning Arabic through hands-on activities, robotics, and sports.
                </p>
                <TransitionLink 
                  href="/register" 
                  className="inline-block px-10 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer"
                >
                  Register Now
                </TransitionLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
