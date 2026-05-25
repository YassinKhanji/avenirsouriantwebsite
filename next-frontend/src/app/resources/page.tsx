"use client";

import React, { useRef } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Resources() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.resource-node', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    });
    
    gsap.from('.resource-card', {
      scrollTrigger: {
        trigger: '.resources-list',
        start: 'top 80%',
      },
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-[#fff9eb] min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Parenting Tips & Educational Resources" 
          subtitle="Content Hub"
        />

        <div className="max-w-4xl mx-auto mt-16 mb-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
            {/* Infographic SVG placeholders */}
            <div className="resource-node w-48 h-48 rounded-full border-8 border-secondary flex items-center justify-center bg-white shadow-lg z-10 text-center p-4">
              <span className="font-bold text-navy">Fostering Creativity & Critical Thinking</span>
            </div>
            <div className="resource-node w-56 h-56 rounded-full border-8 border-primary flex items-center justify-center bg-white shadow-lg z-10 text-center p-4 md:-mt-24">
              <span className="font-bold text-navy text-lg">Digital Literacy for Kids</span>
            </div>
            <div className="resource-node w-48 h-48 rounded-full border-8 border-accent-blue flex items-center justify-center bg-white shadow-lg z-10 text-center p-4">
              <span className="font-bold text-navy">Navigating Multilingual Education</span>
            </div>
            
            {/* Connecting lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gray-300 z-0" />
          </div>
        </div>

        <div className="resources-list grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />
          
          {[1, 2, 3, 4].map((item) => (
            <div key={`left-${item}`} className="resource-card bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-xl flex-shrink-0" />
              <div>
                <h4 className="font-bold text-navy text-sm mb-2">Screen Time Balance: A Guide for Parents</h4>
                <Button variant="outline" size="sm" className="py-1 px-3 text-xs">Read More</Button>
              </div>
            </div>
          ))}
          
          {[1, 2, 3, 4].map((item) => (
            <div key={`right-${item}`} className="resource-card bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-xl flex-shrink-0" />
              <div>
                <h4 className="font-bold text-navy text-sm mb-2">Top 10 Coding Apps for Beginners</h4>
                <Button variant="outline" size="sm" className="py-1 px-3 text-xs">Read More</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
           <Button size="lg">View All Guides</Button>
        </div>
      </div>
    </div>
  );
}
