'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { sendRegistrationEmail } from './actions';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const comment = ' I am interested in Arabic lessons';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await sendRegistrationEmail({
        name,
        email,
        phone,
        comment,
      });

      if (response.success) {
        setShowModal(true);
        setName('');
        setEmail('');
        setPhone('');
      } else {
        setErrorMsg(response.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMsg('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        <section 
          className="py-24 bg-repeat bg-center min-h-[80vh] flex items-center"
          style={{ backgroundImage: "url('/images/register_bg_pattern.png')", backgroundSize: "512px" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50">
              <div className="hidden lg:flex justify-center w-full h-full relative min-h-[400px]">
                <Image 
                  src="/images/register-photo.png" 
                  alt="Registration photo" 
                  fill
                  className="object-cover rounded-2xl shadow-inner border border-white/40"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold font-heading mb-8 text-gray-900">Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white/90" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white/90" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white/90" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Comment</label>
                    <textarea 
                      value={comment} 
                      readOnly 
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-100/80 text-gray-500 font-medium outline-none cursor-not-allowed resize-none"
                      rows={2}
                    />
                  </div>
                  {errorMsg && (
                    <p className="text-red-500 text-sm font-semibold">{errorMsg}</p>
                  )}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-transform hover:scale-[1.02] shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Registering...' : 'Register'}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
                    <a href="tel:+15145154492" className="font-bold text-primary hover:text-primary-light transition-colors">(514) 515-4492</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Registration Received!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you for registering. One of our staff members is going to contact you as soon as possible.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full py-4 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-md cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
