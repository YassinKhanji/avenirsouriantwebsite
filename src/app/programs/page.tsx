import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Services Hero Section */}
        <section 
          className="py-32 bg-cover bg-center bg-no-repeat text-center flex items-center justify-center min-h-[50vh]"
          style={{ backgroundImage: "url('/images/programs-hero-bg.jpg')" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-gray-900 drop-shadow-md">Our Programs</h1>
            <p className="text-xl text-gray-800 font-medium max-w-2xl mx-auto drop-shadow-sm">
              Discover a world of engaging educational and extracurricular activities designed to build confidence, creativity, and language mastery.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {[
                { title: "Arabic for Native Speakers", desc: "An advanced curriculum designed to help native speakers master reading, writing, and speaking in a fun and interactive environment.", price: "Learn More" },
                { title: "Arabic for Non-Speakers", desc: "A welcoming, immersive introductory class that makes learning Arabic accessible and exciting for completely new speakers.", price: "Learn More" },
                { title: "STEM & Robotics", desc: "Hands-on building, coding, and problem-solving to prepare kids for the future while having a blast.", price: "Learn More" },
                { title: "Sports & Extracurriculars", desc: "Keep kids active and creative with our diverse offerings including soccer, stitching, arts, and crafts.", price: "Learn More" }
              ].map((service, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                  <div className="w-full md:w-1/3 h-64 bg-primary-light rounded-xl flex items-center justify-center text-4xl text-primary font-bold text-center p-4">
                    {service.title.split(' ')[0]}
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold font-heading mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{service.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-semibold text-primary">{service.price}</span>
                      <Link href="/register">
                        <button className="px-6 py-2 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors">
                          Enroll Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
