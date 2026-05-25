"use client";

import React, { useRef } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.team-card', {
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Meet Our Friendly & Expert Instructors" 
          subtitle="E-A-T Section"
        />

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="team-card">
            <TeamMemberCard 
              name="Nour El-Amin"
              role="Lead Educator"
              description="B.S. in Early Childhood Education with 5+ years of experience. Specializes in toddler development and play-based learning."
            />
          </div>
          <div className="team-card">
            <TeamMemberCard 
              name="David Chen"
              role="Robotics Specialist"
              description="B.S. Mechanical Engineering. FIRST Robotics Mentor. Passionate about teaching kids how to build and code their own robots."
            />
          </div>
          <div className="team-card">
            <TeamMemberCard 
              name="Amina Khalil"
              role="Language Arts Coord."
              description="B.A. in Linguistics. Certified ESL teacher. Creates immersive and engaging language programs for all age groups."
            />
          </div>
          <div className="team-card">
            <TeamMemberCard 
              name="Amira Khalil"
              role="Lead Educator"
              description="M.Ed. in Curriculum Design. Ensures all programs meet high educational standards while remaining fun and engaging."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
