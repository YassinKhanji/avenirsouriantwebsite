"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero stagger-in
      gsap.from(".hero-anim > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Scroll-reveal for each section
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        gsap.from(section.querySelectorAll(".reveal-item"), {
          scrollTrigger: { trigger: section, start: "top 80%" },
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* ─── HEADER ─── */}
      <header className="flex justify-between items-center px-6 py-4 bg-primary-blue border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌞📖</span>
          <span className="font-black text-dark-navy leading-tight text-sm">
            Avenir
            <br />
            Souriant
          </span>
        </div>

        <nav className="hidden md:flex gap-8 font-bold text-dark-navy">
          <Link href="#about" className="hover:text-accent-teal transition-colors">About</Link>
          <Link href="#programs" className="hover:text-accent-teal transition-colors">Programs</Link>
          <Link href="#location" className="hover:text-accent-teal transition-colors">Location</Link>
          <Link href="#testimonials" className="hover:text-accent-teal transition-colors">Testimonials</Link>
        </nav>

        <div className="text-sm font-semibold text-text-grey">
          🌐 <strong className="text-dark-navy">EN</strong> | FR | AR
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="bg-primary-blue py-20 px-4 flex flex-col items-center text-center border-b border-slate-200">
        <div className="hero-anim flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-black text-dark-navy leading-tight mb-6">
            Empowering the
            <br />
            Next Generation
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-5 py-2 bg-tag-orange-bg text-tag-orange-text rounded-full font-bold text-sm">
              Toddlers (1-3)
            </span>
            <span className="px-5 py-2 bg-tag-blue-bg text-tag-blue-text rounded-full font-bold text-sm">
              Preschool (3-5)
            </span>
            <span className="px-5 py-2 bg-tag-green-bg text-tag-green-text rounded-full font-bold text-sm">
              School Age (5-12)
            </span>
          </div>

          <a
            href="#enroll"
            className="px-10 py-3 bg-accent-yellow text-dark-navy border-2 border-dark-navy rounded-full font-bold text-lg hover:-translate-y-0.5 hover:shadow-lg transition-all mb-12"
          >
            Enroll Now
          </a>

          {/* Hero Image Placeholder */}
          <div className="w-full max-w-5xl h-64 md:h-80 bg-slate-200 border border-slate-300 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-slate-400 font-bold text-lg">
              [ Hero Image: Children Sitting Together ]
            </span>
          </div>
        </div>
      </section>

      {/* ─── ABOUT US ─── */}
      <section
        id="about"
        className="py-20 px-4 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal-section"
      >
        <div className="reveal-item h-80 bg-slate-100 border border-slate-300 rounded-3xl flex items-center justify-center">
          <span className="text-6xl">⚙️ 📖 🧠</span>
        </div>

        <div className="flex flex-col gap-4 reveal-item">
          <h4 className="text-accent-teal font-extrabold text-lg">About Us</h4>
          <h2 className="text-3xl md:text-4xl font-black text-dark-navy">
            A World of Discovery & Joy
          </h2>
          <p className="text-text-grey text-lg leading-relaxed">
            Avenir Souriant is a specialized playful learning and commitment to
            state-of-the-art facilities to ensure safety and standard performing
            environments. We are committed to inspiring children and improving
            creative minds through carefully designed activities and a network of
            support.
          </p>
        </div>
      </section>

      {/* ─── OUR PROGRAMS ─── */}
      <section id="programs" className="py-20 px-4 max-w-6xl mx-auto w-full reveal-section">
        <h2 className="text-3xl md:text-4xl font-black text-center text-dark-navy mb-12 reveal-item">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🔍", title: "Early Explorers", desc: "Early explorers passions and magnifying learners and explorers." },
            { icon: "🖌️", title: "Creative Minds", desc: "We are committed to creative minds, discovery and creative skills." },
            { icon: "🚀", title: "Future Leaders", desc: "We are centered around building leadership and future skills." },
            { icon: "🤖", title: "Tech & Innovation", desc: "Robust measurement tech & innovation for our communication." },
          ].map((program) => (
            <div
              key={program.title}
              className="reveal-item border-2 border-slate-200 rounded-xl p-6 flex flex-col items-center text-center bg-white hover:-translate-y-1 hover:border-accent-teal hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-primary-blue border border-slate-200 flex items-center justify-center text-4xl mb-4">
                {program.icon}
              </div>
              <h3 className="font-extrabold text-dark-navy text-lg mb-2">{program.title}</h3>
              <p className="text-text-grey text-sm mb-6 leading-relaxed">{program.desc}</p>
              <a
                href="#"
                className="px-6 py-2 bg-accent-teal text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LOCATION & CONTACT ─── */}
      <section id="location" className="py-20 px-4 max-w-5xl mx-auto w-full reveal-section">
        <h2 className="text-3xl md:text-4xl font-black text-center text-dark-navy mb-12 reveal-item">
          Location & Contact
        </h2>

        <div className="reveal-item grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-300 rounded-xl overflow-hidden shadow-sm">
          {/* Map */}
          <div className="h-80 bg-slate-200 flex items-center justify-center relative">
            <div className="px-6 py-3 bg-white border border-slate-300 rounded-lg shadow text-center">
              <p className="font-bold text-dark-navy">Saint-Laurent, QC</p>
              <p className="text-sm text-text-grey">1325 Rue Cartier</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-primary-blue p-8 flex flex-col justify-center gap-5 border-l border-slate-300">
            <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-slate-200">
              <span className="text-accent-teal text-xl">📞</span>
              <div>
                <strong className="text-dark-navy">Phone</strong>
                <p className="text-text-grey text-sm">+1 514 555 1234</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-slate-200">
              <span className="text-accent-teal text-xl">✉️</span>
              <div>
                <strong className="text-dark-navy">Email</strong>
                <p className="text-text-grey text-sm">info@avenirsouriant.ca</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-slate-200">
              <span className="text-accent-teal text-xl">🕒</span>
              <div>
                <strong className="text-dark-navy">Opening Hours</strong>
                <p className="text-text-grey text-sm">
                  10:00 am – 2:00 pm
                  <br />
                  12:00 pm – 2:00 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        id="testimonials"
        className="bg-accent-teal py-20 px-4 text-center reveal-section"
      >
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12 reveal-item">
          Testimonials
        </h2>

        <div className="flex items-center justify-center gap-4 max-w-5xl mx-auto reveal-item">
          {/* Left arrow */}
          <button className="w-10 h-10 rounded-full bg-white/20 text-white font-bold text-xl hidden md:flex items-center justify-center hover:bg-white/30 transition-colors">
            ❮
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              {
                quote:
                  '"Our overall positive experience revolved utilizing this loving center. A highly recommended environment."',
                name: "Garent Eliesashin",
                role: "Parents Pawsso",
              },
              {
                quote:
                  '"The team earns this experience, very skilled and tactful approach."',
                name: "Tady Ek",
                role: "Parents Pawsso",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white p-6 rounded-xl flex gap-4 text-left border border-slate-200 shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-slate-200 shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-text-grey text-sm italic leading-relaxed">
                    {t.quote}
                  </p>
                  <strong className="text-dark-navy text-sm mt-2">{t.name}</strong>
                  <span className="text-text-grey text-xs">{t.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button className="w-10 h-10 rounded-full bg-white/20 text-white font-bold text-xl hidden md:flex items-center justify-center hover:bg-white/30 transition-colors">
            ❯
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2.5 h-2.5 rounded-full bg-white" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-dark-navy text-white pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌞📖</span>
              <span className="font-black leading-tight text-sm">
                Avenir
                <br />
                Souriant
              </span>
            </div>
            <p className="text-slate-400 text-sm">© 2022 – Avenir Souriant</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-slate-400 text-sm">
              <li><Link href="#about" className="hover:text-accent-teal transition-colors">About</Link></li>
              <li><Link href="#programs" className="hover:text-accent-teal transition-colors">Programs</Link></li>
              <li><Link href="#location" className="hover:text-accent-teal transition-colors">Location</Link></li>
              <li><Link href="#testimonials" className="hover:text-accent-teal transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold mb-4">Address</h4>
            <p className="text-slate-400 text-sm mb-2">📍 1325 Rue Cartier, Saint-Laurent, QC</p>
            <p className="text-slate-400 text-sm">📞 +1 514 555 1234</p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 text-lg">
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
              <span>▶️</span>
            </div>
            <div className="text-slate-400 text-sm">EN | FR | AR</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <span>© 2022 – Avenir Souriant. All rights reserved.</span>
          <span className="mt-4 md:mt-0">EN | FR | AR</span>
        </div>
      </footer>
    </div>
  );
}
