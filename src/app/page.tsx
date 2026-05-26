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
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-8 leading-tight drop-shadow-sm">
              Discover the <span className="text-secondary">Joy</span> <br className="hidden sm:inline" /> of Learning <span className="text-secondary">Arabic</span>
            </h1>
            <TransitionLink href="/register" className="inline-block px-10 py-4 bg-secondary text-white rounded-full font-bold text-xl hover:bg-opacity-90 mb-6 shadow-lg transition-transform hover:scale-105">
              Learn More
            </TransitionLink>
            <p className="text-gray-800 mb-6 font-semibold text-xl drop-shadow-sm">or</p>
            <a href="tel:+15145154492" className="text-4xl font-bold text-white transition-all duration-300 flex items-center justify-center drop-shadow-sm group">
              <span className="mr-3 group-hover:scale-110 transition-transform">📞</span>
              <span className="group-hover:[-webkit-text-stroke:1.5px_#1abc9c] transition-all duration-300">(514) 515-4492</span>
            </a>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-heading mb-8">Welcome to Avenir Souriant</h2>
                <div className="relative aspect-[1024/558] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                  <Image 
                    src="/images/welcome-illustration.jpg"
                    alt="Welcome to Avenir Souriant"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Avenir Souriant is the Arabic learning center that flipped the script. No more boring drills, no more dreading class. We made Arabic their favorite subject — and the kids will tell you themselves. Based in Montréal, we're building the next generation of confident Arabic speakers, one smiling face at a time.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-primary mr-3">✔</span> Innovative & Interactive Learning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-primary mr-3">✔</span> Arabic for Speakers and Non-Speakers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-primary mr-3">✔</span> Diverse Activities: Robotics, Soccer, & Stitching
                  </li>
                </ul>
                <TransitionLink href="/programs" className="inline-block px-8 py-3 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90">
                  View Programs
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
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Explore our comprehensive array of educational programs and engaging extracurricular activities tailored to inspire your child.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Arabic Mastery", desc: "Advanced curriculum to perfect reading, writing, and speaking skills." },
                { title: "STEM & Robotics", desc: "Hands-on projects to build critical thinking and technical skills." },
                { title: "Sports & Soccer", desc: "Active programs focused on teamwork, health, and having fun." },
                { title: "Creative Arts", desc: "Expressive activities including stitching, crafting, and creative design." }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-2 border-primary border-opacity-20 flex flex-col items-center justify-center min-h-[250px] transition-transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Register CTA Callout Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden">
                <Image 
                  src="/images/register_callout.png"
                  alt="Register at Avenir Souriant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-4xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                  Ready to Join Avenir Souriant?
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Give your child the gift of language, creativity, and coding. Join the Avenir Souriant family and watch them build confidence, make friends, and discover the joy of learning Arabic through hands-on activities, robotics, and sports.
                </p>
                <TransitionLink 
                  href="/register" 
                  className="inline-block px-10 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer"
                >
                  Register Now
                </TransitionLink>
              </div>
            </div>
          </div>
        </section>

        {/* What Clients Say */}
        <section 
          className="relative py-20 bg-repeat bg-center"
          style={{ backgroundImage: "url('/images/geometric-pattern-bg.png')", backgroundSize: "350px" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-heading mb-12">What Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Nour Al-Sabah", quote: "My kids used to dread Arabic classes, but Avenir Souriant completely flipped the script. They come home excited to learn!" },
                { name: "Kareem Hassan", quote: "The blend of language learning with robotics and soccer is incredible. It keeps my son engaged and active all weekend." },
                { name: "Layla M.", quote: "An amazing center! The teachers are passionate, the environment is safe, and my daughter's confidence has skyrocketed." }
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
        <section className="py-20 bg-white">
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
                <h2 className="text-4xl font-bold font-heading mb-6">A New Era of Education</h2>
                <p className="text-gray-600 mb-8">
                  We believe that learning should be an adventure. Our certified instructors combine language immersion with fun activities like sports and robotics to ensure every child loves coming to class.
                </p>
                <TransitionLink href="/programs" className="inline-block px-8 py-3 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90">
                  View Programs
                </TransitionLink>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  { val: "50+", label: "Interactive Programs" },
                  { val: "100%", label: "Engagement" },
                  { val: "10", label: "Expert Instructors" },
                  { val: "1K+", label: "Happy Students" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-primary transition-colors">
                    <p className="text-3xl font-bold text-primary mb-2">{stat.val}</p>
                    <h6 className="font-semibold text-sm text-gray-700">{stat.label}</h6>
                  </div>
                ))}
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
      <Footer />
    </>
  );
}
