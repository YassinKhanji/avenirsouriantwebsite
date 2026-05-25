"use client";

import React, { useRef } from 'react';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { ProgramCard } from '@/components/ProgramCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animation
    gsap.from('.hero-content > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Decorative floating elements
    gsap.to('.hero-deco', {
      y: -20,
      rotation: 10,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: 0.5,
    });

    // Sections fade-in on scroll
    const sections = gsap.utils.toArray('.scroll-section');
    sections.forEach((section: any) => {
      gsap.from(section.querySelectorAll('.fade-up'), {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-light-blue rounded-b-[4rem]">
        {/* Decorative elements */}
        <div className="hero-deco absolute top-20 left-10 w-12 h-12 bg-primary rounded-full opacity-50" />
        <div className="hero-deco absolute top-40 right-20 w-16 h-16 bg-accent-green rounded-xl rotate-12 opacity-50" />
        <div className="hero-deco absolute bottom-20 left-1/4 w-10 h-10 bg-accent-orange rounded-full opacity-50" />
        <div className="hero-deco absolute top-32 right-1/3 w-14 h-14 bg-secondary rounded-lg rotate-45 opacity-50" />

        <div className="container mx-auto px-6 relative z-10 text-center hero-content">
          <h1 className="text-5xl md:text-7xl font-extrabold text-navy leading-tight mb-6">
            Empowering the <br />
            <span className="text-primary-hover drop-shadow-sm">Next Generation</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-primary text-navy font-bold px-4 py-2 rounded-full text-sm shadow-sm">Toddlers (1-3)</span>
            <span className="bg-accent-blue text-white font-bold px-4 py-2 rounded-full text-sm shadow-sm">Preschool (3-5)</span>
            <span className="bg-accent-green text-navy font-bold px-4 py-2 rounded-full text-sm shadow-sm">School Age (5-12)</span>
          </div>
          <Button size="lg" className="mb-16">Enroll Now</Button>

          {/* Kids Image Placeholder */}
          <div className="max-w-4xl mx-auto relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
              [Hero Kids Image Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 bg-white scroll-section">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 fade-up relative">
            <div className="w-full aspect-square bg-light-teal rounded-[3rem] rotate-3 relative overflow-hidden flex items-center justify-center">
               <div className="text-gray-400 font-bold">[World of Discovery Illustration]</div>
            </div>
          </div>
          <div className="md:w-1/2 fade-up">
            <SectionHeading 
              title="A World of Discovery & Joy" 
              subtitle="About Us"
              centered={false}
            />
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Avenir Souriant is a specialized playful learning and community center dedicated to nurturing the next generation. We ensure high performing standards and useful learning experiences. Our educators are passionate about empowering children to improve their skills and develop with our support.
            </p>
            <Button variant="outline">Discover More</Button>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-24 bg-gray-50 scroll-section">
        <div className="container mx-auto px-6">
          <div className="fade-up">
            <SectionHeading title="Our Programs" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="fade-up">
              <ProgramCard 
                title="Early Explorers"
                description="Early awareness classes and magnifying horizons and explorers."
                href="/programs"
              />
            </div>
            <div className="fade-up">
              <ProgramCard 
                title="Creative Minds"
                description="We are committed to creative discoveries, art, and creative minds."
                href="/programs"
              />
            </div>
            <div className="fade-up">
              <ProgramCard 
                title="Future Leaders"
                description="We are committed to learning what matters for local future skills."
                href="/programs"
              />
            </div>
            <div className="fade-up">
              <ProgramCard 
                title="Tech & Innovation"
                description="Robot measurement tech & innovation in our community and innocents."
                href="/programs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="location" className="py-24 bg-white scroll-section">
        <div className="container mx-auto px-6">
          <div className="fade-up">
            <SectionHeading title="Location & Contact" />
          </div>
          <div className="bg-light-blue rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg fade-up">
            <div className="md:w-2/3 h-64 md:h-auto bg-gray-300 relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
                 [Map Image Placeholder]
               </div>
            </div>
            <div className="md:w-1/3 p-10 bg-white">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-light-teal text-secondary flex items-center justify-center text-xs">P</span> Phone
                  </h4>
                  <p className="text-gray-600 pl-10">+1 514 555 1234</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-light-teal text-secondary flex items-center justify-center text-xs">E</span> Email
                  </h4>
                  <p className="text-gray-600 pl-10">info@avenirsouriant.ca</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-light-teal text-secondary flex items-center justify-center text-xs">H</span> Opening Hours
                  </h4>
                  <p className="text-gray-600 pl-10">10:00 am - 2:00 pm<br/>12:00 am - 2:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-secondary scroll-section">
        <div className="container mx-auto px-6">
          <div className="fade-up">
            <SectionHeading 
              title="Testimonials" 
              className="text-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up">
            <TestimonialCard 
              quote="Our child's positive experience relieved us. We loved the welcoming and round the root teaching approach."
              author="Garent Eliesahin"
              role="Parent"
            />
            <TestimonialCard 
              quote="The team has experience. We loved the curriculum and their responsiveness."
              author="Tady Ek"
              role="Parent"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
