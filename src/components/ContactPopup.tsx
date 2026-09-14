'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });
  const [error, setError] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    // Check if popup was already shown in this session
    if (sessionStorage.getItem('contactPopupShown')) {
      return;
    }

    const showPopup = () => {
      setIsOpen(true);
      sessionStorage.setItem('contactPopupShown', 'true');
    };

    // --- TIME TRIGGER: 15 SECONDS TOTAL ---
    let startTime = sessionStorage.getItem('siteStartTime');
    if (!startTime) {
      startTime = Date.now().toString();
      sessionStorage.setItem('siteStartTime', startTime);
    }

    const timeElapsed = Date.now() - parseInt(startTime, 10);
    const timeRemaining = Math.max(15000 - timeElapsed, 0);

    const timeTimer = setTimeout(() => {
      if (!sessionStorage.getItem('contactPopupShown')) {
        showPopup();
      }
    }, timeRemaining);

    // --- SCROLL TRIGGER: 3RD SECTION OF HOME PAGE ---
    const handleScroll = () => {
      if (pathname === '/' && !sessionStorage.getItem('contactPopupShown')) {
        const thirdSection = document.getElementById('third-section');
        if (thirdSection) {
          const rect = thirdSection.getBoundingClientRect();
          // Trigger when the 3rd section is in view
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            showPopup();
            window.removeEventListener('scroll', handleScroll);
          }
        }
      }
    };

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Check immediately in case they load halfway down the page
      handleScroll();
    }

    return () => {
      clearTimeout(timeTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send-email/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          comment: formData.comment,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to send message. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Show confirmation modal state
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', comment: '' });
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-lg w-full p-5 sm:p-8 relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 rtl:right-auto rtl:left-3 rtl:sm:left-4 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-5 sm:mb-6 pt-2">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-2">Want to register?</h2>
              <p className="text-gray-600 text-sm sm:text-base">Leave your details and our team will get in touch with you!</p>
            </div>

            <form className="space-y-3 sm:space-y-4 text-start" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-gray-50 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-gray-50 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-gray-50 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Comment</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="My student is eager to begin their Arabic learning journey with Avenir Souriant!"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-gray-50 text-gray-900 resize-none"
                  rows={3}
                />
              </div>

              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-transform hover:scale-[1.02] shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Request'
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">
              Thank You!
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Your message has been sent successfully. One of our staff members will contact you <strong>in the next 24 hours</strong>.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-md cursor-pointer"
            >
              Got it!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
