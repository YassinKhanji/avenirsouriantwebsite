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
        {/* Hero Section */}
        <section className="relative py-32 flex items-center justify-center min-h-[80vh] overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          
          {/* Subtle overlay to ensure text legibility against video */}
          <div className="absolute inset-0 bg-white/40 z-0"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-8">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-8 leading-tight drop-shadow-sm">Quickly find a Babysitter</h1>
            <TransitionLink href="/register" className="inline-block px-10 py-4 bg-secondary text-white rounded-full font-bold text-xl hover:bg-opacity-90 mb-6 shadow-lg transition-transform hover:scale-105">
              Book a Babysitter
            </TransitionLink>
            <p className="text-gray-800 mb-6 font-semibold text-xl drop-shadow-sm">or</p>
            <a href="tel:+18001234567" className="text-4xl font-bold text-primary hover:text-primary-light transition-colors flex items-center justify-center drop-shadow-sm">
              <span className="mr-3">📞</span> +1-800-123-4567
            </a>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-heading mb-8">Welcome to Babysitting Agency</h2>
                <div className="relative h-96 w-full flex justify-center items-center">
                  <Image 
                    src="/images/welcome-illustration.png"
                    alt="Welcome Illustration"
                    fill
                    className="object-contain"
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
        <section 
          className="py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/section3-bg.jpg')" }}
        >
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
        <section 
          className="py-24 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[700px]"
          style={{ backgroundImage: "url('/images/section4-bg.jpg')" }}
        >
          <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8">
              <h2 className="text-3xl font-bold font-heading mb-8 text-center text-gray-900">Need a Babysitter?</h2>
              <form className="space-y-5">
                <div>
                  <input type="text" placeholder="Enter your Name" className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white/90 shadow-sm" required />
                </div>
                <div>
                  <input type="tel" placeholder="Enter your phone" className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white/90 shadow-sm" required />
                </div>
                <div>
                  <textarea placeholder="Enter your message" rows={4} className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white/90 shadow-sm" required></textarea>
                </div>
                <button type="button" className="px-8 py-4 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 w-full shadow-md transition-transform hover:scale-105">
                  Request For Call
                </button>
              </form>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center">
                <Image 
                  src="/images/every-baby-illustration.png" 
                  alt="Every Baby with Love illustration" 
                  width={350}
                  height={350}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold font-heading mb-6">Every Baby with Love & Safety</h2>
                <p className="text-gray-600 mb-8">
                  Sample text. Click to select the Text Element. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat,
                </p>
                <TransitionLink href="/programs" className="inline-block px-8 py-3 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90">
                  Learn More
                </TransitionLink>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  { val: "15", label: "Location Service" },
                  { val: "24/7", label: "Customer care" },
                  { val: "8", label: "Years Experience" },
                  { val: "1.8 M+", label: "Happy Clients" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
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
