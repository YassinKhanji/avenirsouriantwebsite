import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Register() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Register Hero Section */}
        <section className="bg-primary-light py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold font-heading mb-6">Register Now</h1>
            <p className="text-xl text-gray-600">
              Join Avenir Souriant and give your child the gift of language and adventure.
            </p>
          </div>
        </section>

        {/* Register Form */}
        <section 
          className="py-24 bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
          style={{ backgroundImage: "url('/images/register-bg.jpg')" }}
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
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white/90" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white/90" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white/90" required />
                  </div>
                  <button type="button" className="w-full px-8 py-4 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-transform hover:scale-[1.02] shadow-md">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="py-20 bg-gray-50">
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
      <Footer />
    </>
  );
}
