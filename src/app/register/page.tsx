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
              Join us to find the perfect child care solution for your family.
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
                  src="/images/register-illustration.png" 
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
      </main>
      <Footer />
    </>
  );
}
