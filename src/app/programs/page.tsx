'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AnimatedProgramCard = ({ service, idx }: { service: any, idx: number }) => {
  const isEven = idx % 2 === 0;

  return (
    <div className="relative w-full overflow-visible">
      {/* The trailing effect */}
      <motion.div
        initial={{ gap: "2px", opacity: 0, scaleX: 0 }}
        whileInView={{ 
          gap: ["2px", "24px", "4px"], 
          opacity: [0, 1, 0],
          scaleX: [0.2, 1, 0.2]
        }}
        transition={{ duration: 0.9, times: [0, 0.5, 1], ease: "easeInOut" }}
        viewport={{ once: true, margin: "-50px" }}
        style={{ originX: isEven ? 1 : 0 }}
        className={`absolute top-1/2 -translate-y-1/2 flex items-center z-0 hidden md:flex ${
          isEven ? 'right-[95%] flex-row' : 'left-[95%] flex-row-reverse'
        }`}
      >
        <div className="w-16 h-2 bg-[#1abc9c] rounded-full shadow-[0_0_8px_rgba(26,188,156,0.6)]" />
        <div className="w-6 h-2 bg-[#1abc9c] rounded-full shadow-[0_0_8px_rgba(26,188,156,0.6)]" />
        <div className="w-2 h-2 bg-[#1abc9c] rounded-full shadow-[0_0_8px_rgba(26,188,156,0.6)]" />
      </motion.div>

      {/* The Card */}
      <motion.div 
        initial={{ x: isEven ? -200 : 200 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 12, mass: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-colors"
      >
        <div className="relative w-full md:w-1/3 h-64 bg-primary-light rounded-xl flex items-center justify-center text-4xl text-primary font-bold text-center overflow-hidden">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          ) : (
            <span className="p-4">{service.title.split(' ')[0]}</span>
          )}
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold font-heading mb-4">{service.title}</h2>
          <p className="text-gray-600 text-lg mb-6">{service.desc}</p>
          <div className="flex items-center justify-end">
            <Link href="/register">
              <button className="px-6 py-2 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Services Hero Section */}
        <section 
          className="py-32 bg-cover bg-center bg-no-repeat text-center flex items-center justify-center min-h-[50vh]"
          style={{ backgroundImage: "url('/images/programs-hero-bg.jpg')" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-gray-900 drop-shadow-md">Our Programs</h1>
            <p className="text-xl text-gray-800 font-medium max-w-2xl mx-auto drop-shadow-sm">
              Discover a world of engaging educational and extracurricular activities designed to build confidence, creativity, and language mastery.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section 
          className="py-20 bg-repeat bg-center overflow-x-hidden"
          style={{ backgroundImage: "url('/images/screen.png')", backgroundSize: "688px" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {[
                { 
                  title: "Arabic for Native Speakers", 
                  desc: "An advanced curriculum designed to help native speakers master reading, writing, and speaking in a fun and interactive environment.", 
                  price: "Learn More",
                  image: "/images/native_arabic_speakers.jpg"
                },
                { 
                  title: "Arabic for Non-Speakers", 
                  desc: "A welcoming, immersive introductory class that makes learning Arabic accessible and exciting for completely new speakers.", 
                  price: "Learn More",
                  image: "/images/Gemini_Generated_Image_vwzmmxvwzmmxvwzm.png"
                },
                { 
                  title: "STEM & Robotics", 
                  desc: "Hands-on building, coding, and problem-solving to prepare kids for the future while having a blast.", 
                  price: "Learn More",
                  image: "/images/096d4575-d688-4721-ab44-ff480a7199d5.jpg"
                },
                { 
                  title: "Sports & Extracurriculars", 
                  desc: "Keep kids active and creative with our diverse offerings including soccer, stitching, arts, and crafts.", 
                  price: "Learn More",
                  image: "/images/835a7955-18e1-459e-a20f-bc61263f3705.jpg"
                },
                { 
                  title: "Other Activities", 
                  desc: "We offer a variety of other engaging activities tailored to your child's interests and developmental needs. Contact us to learn more!", 
                  price: "Learn More", 
                  image: "/images/other_activities.jpg"
                }
              ].map((service, idx) => (
                <AnimatedProgramCard key={idx} service={service} idx={idx} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
