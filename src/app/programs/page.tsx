import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Programs() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Programs Hero Section */}
        <section className="bg-primary-light py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold font-heading mb-6">Our Programs</h1>
            <p className="text-xl text-gray-600">
              Comprehensive child care programs tailored to your family's unique needs.
            </p>
          </div>
        </section>

        {/* Programs List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {[
                { title: "Standard Babysitting", desc: "Reliable and engaging care for your children while you are away. Perfect for date nights, appointments, or simply when you need a break.", price: "From $20/hr" },
                { title: "After School Care", desc: "We provide transportation from school, homework assistance, and structured activities until you finish your workday.", price: "From $25/hr" },
                { title: "Emergency Care", desc: "Unexpected schedule change? We offer on-call, last-minute babysitting services to handle life's surprises.", price: "From $35/hr" },
                { title: "Overnight Care", desc: "Rest easy knowing your child is in safe hands through the night. Ideal for business trips or weekend getaways.", price: "From $150/night" }
              ].map((program, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-full md:w-1/3 h-64 bg-primary-light rounded-xl flex items-center justify-center text-4xl text-primary font-bold">
                    {program.title.split(' ')[0]}
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold font-heading mb-4">{program.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{program.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-semibold text-primary">{program.price}</span>
                      <button className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors font-heading">
                        Book Now
                      </button>
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
