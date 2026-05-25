"use client";

import React, { useRef, useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What ages are your programs suitable for?",
    answer: "Our programs are designed for children between the ages of 1 and 12, divided into three main groups: Toddlers (1-3), Preschool (3-5), and School Age (5-12)."
  },
  {
    question: "Do I need prior experience to enroll my child?",
    answer: "No prior experience is necessary for any of our programs! We offer introductory classes that teach the fundamentals in a fun, pressure-free environment."
  },
  {
    question: "What are your class sizes?",
    answer: "We keep our class sizes small (typically 8-12 students per instructor) to ensure every child receives personalized attention and support."
  },
  {
    question: "Do you offer trial classes?",
    answer: "Yes, we offer a free trial class for new families. Please contact us to schedule a visit and see our programs in action."
  },
  {
    question: "How can I register my child?",
    answer: "You can register your child by clicking the 'Enroll Now' button on our website, or by visiting our center in person."
  }
];

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(() => {
    gsap.from('.faq-item', {
      scrollTrigger: {
        trigger: '.faq-list',
        start: 'top 80%',
      },
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" />

        <div className="faq-list mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item bg-white rounded-2xl p-6 shadow-sm border transition-all duration-300 cursor-pointer ${openIndex === index ? 'border-primary' : 'border-transparent'}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-navy text-lg">{faq.question}</h3>
                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-gray-400'}`}>
                  ▼
                </div>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
