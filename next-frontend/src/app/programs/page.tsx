"use client";

import React, { useRef } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.program-column', {
      scrollTrigger: {
        trigger: '.programs-grid',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-light-blue min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading title="Programs Pillar" />

        <div className="programs-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Coding Academy */}
          <div className="program-column bg-white rounded-3xl p-8 shadow-sm border-t-8 border-primary">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center text-primary font-bold">
                [Icon]
              </div>
            </div>
            <h3 className="text-2xl font-bold text-navy text-center mb-2">Coding Academy</h3>
            <p className="text-center text-sm text-gray-500 mb-8">Course Schema</p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy">Python for Kids</h4>
                  <p className="text-sm text-gray-600">Basic syntax to algorithms and simple projects.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy">Web Development</h4>
                  <p className="text-sm text-gray-600">HTML, CSS, JS to create basic websites.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy">Game Design</h4>
                  <p className="text-sm text-gray-600">Game development and logic using Scratch.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Robotics & Engineering */}
          <div className="program-column bg-white rounded-3xl p-8 shadow-sm border-t-8 border-secondary">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-light-teal rounded-full flex items-center justify-center text-secondary font-bold">
                [Icon]
              </div>
            </div>
            <h3 className="text-2xl font-bold text-navy text-center mb-2">Robotics & Engineering</h3>
            <p className="text-center text-sm text-gray-500 mb-8">Course Schema</p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy">LEGO Education</h4>
                  <p className="text-sm text-gray-600">LEGO Mindstorms, robotics foundations.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy">Arduino Basics</h4>
                  <p className="text-sm text-gray-600">Electronics, wiring, and mechanical engineering.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy">Future Innovators</h4>
                  <p className="text-sm text-gray-600">Future innovations and mechanics.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Language Arts */}
          <div className="program-column bg-white rounded-3xl p-8 shadow-sm border-t-8 border-accent-orange">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-accent-orange font-bold">
                [Icon]
              </div>
            </div>
            <h3 className="text-2xl font-bold text-navy text-center mb-2">Language Arts</h3>
            <p className="text-center text-sm text-gray-500 mb-8">Course Schema</p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-orange flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy">French Immersion</h4>
                  <p className="text-sm text-gray-600">French language immersion.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-orange flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy">Arabic for Beginners</h4>
                  <p className="text-sm text-gray-600">Arabic language fundamentals.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-orange flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy">Public Speaking</h4>
                  <p className="text-sm text-gray-600">Active listening and public speaking.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 flex gap-2 justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-white" />
              <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full" />
              <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
