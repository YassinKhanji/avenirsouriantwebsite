import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { TransitionLink } from '@/components/TransitionLink';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <h1 className="text-5xl font-bold font-heading text-gray-900 mb-6">Quickly find a Babysitter</h1>
                <TransitionLink href="/register" className="inline-block px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-opacity-90 mb-4">
                  Book a Babysitter
                </TransitionLink>
                <p className="text-gray-500 mb-4">or</p>
                <a href="tel:+18001234567" className="text-2xl font-semibold text-primary hover:text-primary flex items-center justify-center lg:justify-start">
                  <span className="mr-2">📞</span> +1-800-123-4567
                </a>
                <p className="mt-6 text-gray-600">Sample text. Click to select the Text Element.</p>
              </div>
              <div className="order-1 lg:order-2 h-96 bg-gray-200 rounded-lg overflow-hidden relative">
                {/* Fallback color if image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Hero Image Placeholder</div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-heading mb-8">Welcome to Babysitting Agency</h2>
                <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/images/mother-playing-with-little-daughter-home_1157-26185.jpg"
                    alt="Mother playing with daughter"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-8 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-primary mr-3">✔</span> Social and Emotional Development for Children
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-primary mr-3">✔</span> Enhancing Communication Skills
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-primary mr-3">✔</span> Learning New Skills and Interests
                  </li>
                </ul>
                <TransitionLink href="/programs" className="inline-block px-8 py-3 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90">
                  Learn More
                </TransitionLink>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-primary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-heading mb-4">What We Offer</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Babysitting", desc: "Ut enim ad minim veniam" },
                { title: "Child Care", desc: "Ut enim ad minim veniam" },
                { title: "After School Care", desc: "Ut enim ad minim veniam" },
                { title: "Emergency Care", desc: "Ut enim ad minim veniam" }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-2 border-primary border-opacity-20 flex flex-col items-center justify-center min-h-[250px]">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Need a Babysitter & Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h2 className="text-3xl font-bold font-heading mb-6">Need a Babysitter?</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" placeholder="Enter your Name" className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-primary focus:border-primary outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" placeholder="Enter your phone" className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-primary focus:border-primary outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea placeholder="Enter your message" rows={4} className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-primary focus:border-primary outline-none" required></textarea>
                  </div>
                  <button type="button" className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 w-full md:w-auto">
                    Request For Call
                  </button>
                </form>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="space-y-8">
                  {[
                    { num: "01", text: "Baby Care Solutions" },
                    { num: "02", text: "Child Care Professionals" },
                    { num: "03", text: "We give children a big boost on learning" },
                    { num: "04", text: "For children 5 months to 6 years of age" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-4xl font-bold text-primary mr-6">{item.num}</span>
                      <h5 className="text-xl font-semibold mt-1">{item.text}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Clients Say */}
        <section className="py-20 bg-primary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-heading mb-12">What Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Celia Almeda", quote: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus." },
                { name: "Frank Kinney", quote: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus." },
                { name: "Marry Larson", quote: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus." }
              ].map((client, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border-2 border-primary border-opacity-20 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl">❝</span>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{client.quote}</p>
                  <h5 className="font-bold text-lg">{client.name}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-heading mb-6">Every Baby with Love & Safety</h2>
                <p className="text-gray-600 mb-8">
                  Sample text. Click to select the Text Element. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat,
                </p>
                <TransitionLink href="/programs" className="inline-block px-8 py-3 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90">
                  Learn More
                </TransitionLink>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "15", label: "Location Service" },
                  { val: "24/7", label: "Customer care" },
                  { val: "8", label: "Years Experience" },
                  { val: "1.8 M+", label: "Happy Clients" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <p className="text-3xl font-bold text-primary mb-2">{stat.val}</p>
                    <h6 className="font-semibold text-sm">{stat.label}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
