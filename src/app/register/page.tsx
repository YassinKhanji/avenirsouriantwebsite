'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');

    // Build mailto link with prefilled info
    const subject = encodeURIComponent(`New Registration - ${formData.name}`);
    const body = encodeURIComponent(
      `New Registration Request\n` +
      `========================\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Comment: ${formData.comment || 'My child is eager to begin their Arabic learning journey with Avenir Souriant!'}\n\n` +
      `---\n` +
      `Sent from Avenir Souriant Website`
    );

    // Open mailto
    window.location.href = `mailto:administration@avenirsouriant.com?subject=${subject}&body=${body}`;

    // Show confirmation modal
    setShowModal(true);
    setFormData({ name: '', email: '', phone: '', comment: '' });
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Register Hero Section */}
        <section 
          className="relative py-20 text-center bg-cover bg-left md:bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/register_hero_bg.png')" }}
        >
          <div className="absolute inset-0 bg-white/60 z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
            <h1 className="text-5xl font-bold font-heading mb-6 text-gray-900 drop-shadow-md">Register Now</h1>
            <p className="text-xl text-gray-800 font-medium drop-shadow-sm">
              Join Avenir Souriant and give your child the gift of language and adventure.
            </p>
          </div>
        </section>

        {/* Register Form */}
        <section className="py-24 bg-primary-light min-h-[80vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
              <div className="hidden lg:flex justify-center w-full h-full relative min-h-[400px]">
                <Image 
                  src="/images/register-photo.png" 
                  alt="Registration photo" 
                  fill
                  className="object-cover rounded-2xl shadow-inner border border-white/40"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold font-heading mb-8 text-gray-900">Want to register or have questions?</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white/90"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white/90"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white/90"
                      required
                    />
                  </div>

                  {/* Comment section */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Comment</label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      placeholder="My child is eager to begin their Arabic learning journey with Avenir Souriant!"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white/90 resize-none"
                      rows={3}
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm font-medium">{error}</p>
                  )}

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full px-8 py-4 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-transform hover:scale-[1.02] shadow-md"
                  >
                    Send
                  </button>
                </form>
              </div>
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
      </main>
      <Footer />

      {/* Confirmation Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-[modalIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">
              Thank You!
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              One of our staff members will contact you <strong>as soon as possible</strong> to help you get started.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-md"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Modal animation keyframes */}
      <style jsx global>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}
