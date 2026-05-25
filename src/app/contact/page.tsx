import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Contact Hero Section */}
        <section className="bg-primary-light py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold font-heading mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help you find the perfect child care solution.
            </p>
          </div>
        </section>

        {/* Contact Form & Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold font-heading mb-8">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                    <textarea placeholder="Tell us about your child care needs..." rows={5} className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" required></textarea>
                  </div>
                  <button type="button" className="w-full px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-colors shadow-md">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col justify-center space-y-12">
                <div>
                  <h3 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Get in Touch</h3>
                  <h2 className="text-4xl font-bold font-heading mb-6">We'd love to hear from you</h2>
                  <p className="text-gray-600 text-lg">
                    Whether you need immediate assistance, want to schedule a meet-and-greet, or just have some questions about our services, our team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
                      📍
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold mb-1">Our Location</h4>
                      <p className="text-gray-600">7507 Dewey Route, East Darrylville<br />ME 36932, United States</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
                      📞
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold mb-1">Phone Number</h4>
                      <p className="text-gray-600">
                        <a href="tel:+18001234567" className="hover:text-primary transition-colors">+1-800-123-4567</a>
                        <br />
                        <span className="text-sm text-gray-500">Mon-Fri 9am-6pm (24/7 for Emergencies)</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
                      ✉️
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold mb-1">Email Address</h4>
                      <p className="text-gray-600">
                        <a href="mailto:babycare@support.com" className="hover:text-primary transition-colors">babycare@support.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
