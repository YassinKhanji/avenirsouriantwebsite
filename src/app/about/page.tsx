import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* About Hero Section */}
        <section className="bg-primary-light py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold font-heading mb-6">About Us</h1>
            <p className="text-xl text-gray-600">
              We provide exceptional babysitting and child care services to give families peace of mind.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-heading mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4 text-lg">
                  Founded with a passion for helping families, Avenir Souriant Babysitting has grown into a trusted network of child care professionals. We understand that finding the right babysitter is a big decision, which is why we meticulously vet all our caregivers.
                </p>
                <p className="text-gray-600 text-lg">
                  Our mission is to create a safe, engaging, and loving environment for every child, while providing parents with the flexibility and reassurance they need to balance their busy lives.
                </p>
              </div>
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-primary opacity-10 z-10"></div>
                <Image 
                  src="/images/adorable-toddler-playing-with-toys-sitting-floor-kindergarten_839833-21197.jpg"
                  alt="Toddler playing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-heading mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-semibold mb-4">Safety First</h3>
                <p className="text-gray-100">Every caregiver undergoes rigorous background checks, CPR training, and continuous safety education to ensure your child's well-being.</p>
              </div>
              <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-2xl font-semibold mb-4">Compassion</h3>
                <p className="text-gray-100">We don't just supervise; we engage. Our babysitters are passionate about childcare and provide a loving, supportive environment.</p>
              </div>
              <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-2xl font-semibold mb-4">Reliability</h3>
                <p className="text-gray-100">Count on us when you need us. Whether it's a scheduled date night or emergency care, our team is dependable and punctual.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
