"use client";

import React, { useRef } from 'react';
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

    // Sections fade-in on scroll
    const sections = gsap.utils.toArray('.scroll-section');
    sections.forEach((section: any) => {
      gsap.from(section.children, {
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
      <section className="hero">
        <div className="container hero-content">
            <h1>Empowering the<br/>Next Generation</h1>
            <div className="age-tags">
                <span className="tag tag-orange">Toddlers (1-3)</span>
                <span className="tag tag-blue">Preschool (3-5)</span>
                <span className="tag tag-green">School Age (5-12)</span>
            </div>
            <a href="#enroll" className="btn btn-yellow">Enroll Now</a>
            
            <div className="hero-image-container">
                <img src="https://via.placeholder.com/800x300/EAF6F9/EAF6F9" alt="Group of diverse smiling children" className="hero-img" />
                <div className="mock-children-image">
                    [ Hero Image: Children Sitting Together ]
                </div>
            </div>
        </div>
      </section>

      <section id="about" className="about section-padding scroll-section">
        <div className="container about-container">
            <div className="about-image">
                <div className="placeholder-illustration">⚙️ 📖 🧠</div>
            </div>
            <div className="about-text">
                <h4 className="text-teal">About Us</h4>
                <h2>A World of Discovery & Joy</h2>
                <p>Avenir Souriant is a specialized playful learning and commitment to state-of-the-art facilities to ensure safety and standard performing environments. We are committed to inspiring children and improving creative minds through carefully designed activities and a network of support.</p>
            </div>
        </div>
      </section>

      <section id="programs" className="programs section-padding scroll-section">
        <div className="container">
            <h2 className="section-title">Our Programs</h2>
            <div className="programs-grid">
                
                <div className="program-card">
                    <div className="icon">🔍</div>
                    <h3>Early Explorers</h3>
                    <p>Early explorers passions and magnifying learners and explorers.</p>
                    <a href="#" className="btn btn-teal-outline">Learn More</a>
                </div>

                <div className="program-card">
                    <div className="icon">🖌️</div>
                    <h3>Creative Minds</h3>
                    <p>We are committed to creative minds, discovery and creative skills.</p>
                    <a href="#" className="btn btn-teal-outline">Learn More</a>
                </div>

                <div className="program-card">
                    <div className="icon">🚀</div>
                    <h3>Future Leaders</h3>
                    <p>We are centered around building leadership and future skills.</p>
                    <a href="#" className="btn btn-teal-outline">Learn More</a>
                </div>

                <div className="program-card">
                    <div className="icon">🤖</div>
                    <h3>Tech & Innovation</h3>
                    <p>Robust measurement tech & innovation for our communication.</p>
                    <a href="#" className="btn btn-teal-outline">Learn More</a>
                </div>

            </div>
        </div>
      </section>

      <section id="location" className="location section-padding scroll-section">
        <div className="container">
            <h2 className="section-title">Location & Contact</h2>
            <div className="location-container">
                <div className="map-container">
                    <div className="map-placeholder">
                        🗺️ Map Placeholder<br/>
                        <strong>Saint-Laurent, QC</strong><br/>
                        1325 Rue Cartier
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-item">
                        <span className="contact-icon">📞</span>
                        <div>
                            <strong>Phone</strong><br/>
                            +1 514 555 1234
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">✉️</span>
                        <div>
                            <strong>Email</strong><br/>
                            info@avenirsouriant.ca
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">🕒</span>
                        <div>
                            <strong>Opening Hours</strong><br/>
                            10:00 am - 2:00 pm<br/>
                            12:00 pm - 2:00 pm
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials section-padding scroll-section">
        <div className="container">
            <h2>Testimonials</h2>
            <div className="testimonials-carousel">
                <button className="carousel-arrow">❮</button>
                
                <div className="testimonial-card">
                    <img src="https://via.placeholder.com/60" alt="Parent 1" className="avatar" />
                    <div className="testimonial-content">
                        <p>"Our overall positive experience revolved utilizing this loving center. A highly recommended environment."</p>
                        <strong>Garent Eliesashin</strong>
                        <span>Parents Pawsso</span>
                    </div>
                </div>

                <div className="testimonial-card">
                    <img src="https://via.placeholder.com/60" alt="Parent 2" className="avatar" />
                    <div className="testimonial-content">
                        <p>"The team earns this experience, very skilled and tactful approach."</p>
                        <strong>Tady Ek</strong>
                        <span>Parents Pawsso</span>
                    </div>
                </div>

                <button className="carousel-arrow">❯</button>
            </div>
            <div className="carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
      </section>
    </div>
  );
}
