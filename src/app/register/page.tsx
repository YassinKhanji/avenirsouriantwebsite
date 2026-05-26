import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold font-heading mb-8">Create an Account</h2>
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
                <button type="button" className="w-full px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-colors shadow-md">
                  Register
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
