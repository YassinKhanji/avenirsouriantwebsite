import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-slate-800 font-sans selection:bg-emerald-200">
      
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6">
        <div className="font-bold text-2xl tracking-tighter text-emerald-900">
          SonnenBloom
        </div>
        <nav className="hidden md:flex gap-8 text-emerald-900/80 font-medium">
          <Link href="#about" className="hover:text-emerald-900 transition-colors">About</Link>
          <Link href="#programs" className="hover:text-emerald-900 transition-colors">Programs</Link>
          <Link href="#testimonials" className="hover:text-emerald-900 transition-colors">Families</Link>
          <Link href="#contact" className="hover:text-emerald-900 transition-colors">Contact</Link>
        </nav>
        <Link href="#contact" className="px-6 py-2 bg-emerald-700 text-amber-50 rounded-full font-medium hover:bg-emerald-800 transition-colors">
          Book a Tour
        </Link>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-200/40 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto max-w-5xl text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-6 uppercase tracking-wider">
            Little Blooms
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-950 mb-8 leading-tight tracking-tight">
            A world of wonder, creativity, <br className="hidden md:block"/> and gentle growth awaits
          </h1>
          <p className="text-xl md:text-2xl text-emerald-800/80 max-w-2xl mx-auto mb-12">
            Welcome to SonnenBloom Kinderhaus, where your child's curiosity blossoms.
          </p>
          <Link href="#about" className="inline-block px-8 py-4 bg-yellow-400 text-yellow-950 rounded-full font-bold text-lg hover:bg-yellow-500 hover:-translate-y-1 transition-all shadow-lg shadow-yellow-400/30">
            Discover Our World
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-8">
            A Nurturing Place to Grow
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            At SonnenBloom, we believe every child is a unique individual with boundless potential. Our sunlit spaces and nature-infused curriculum provide the perfect environment for curiosity to flourish and friendships to form.
          </p>
        </div>
      </section>

      {/* FEATURES / PROGRAMS SECTION */}
      <section id="programs" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">Learning Through Joyful Discovery</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We blend structured activities with imaginative free play, focusing on emotional, social, and cognitive development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-amber-100">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-8 text-3xl">🎨</div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">Creative Expression</h3>
              <p className="text-slate-600 leading-relaxed">
                Daily art, music, and storytelling to ignite imagination and foster early social skills.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-amber-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 text-3xl">🧩</div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">Play-Based Academics</h3>
              <p className="text-slate-600 leading-relaxed">
                Introducing early literacy and numeracy through engaging games that celebrate each child's unique spirit.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-amber-100">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-8 text-3xl">🌿</div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">Nature Connection</h3>
              <p className="text-slate-600 leading-relaxed">
                Exploring the outdoors in our garden classroom to build resilience and respect for the natural world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER SECTION */}
      <section className="py-32 px-6 bg-emerald-900 text-amber-50 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">The Rhythm of Our Day</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-emerald-100/90 font-light">
            From circle time songs to garden adventures, our days are filled with <span className="text-yellow-400 font-medium">laughter and learning</span>. We balance energetic play with quiet moments, ensuring a <span className="text-yellow-400 font-medium">happy and harmonious</span> experience for all.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 bg-amber-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-emerald-950 mb-16">What Our Families Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl relative">
              <div className="text-6xl text-amber-200 absolute top-4 left-6 font-serif">"</div>
              <p className="text-slate-600 relative z-10 mb-8 italic">
                SonnenBloom is more than a school; it's a community where our daughter has truly thrived and found her spark.
              </p>
              <div className="font-bold text-emerald-900">Anouk De Vries</div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl relative">
              <div className="text-6xl text-amber-200 absolute top-4 left-6 font-serif">"</div>
              <p className="text-slate-600 relative z-10 mb-8 italic">
                A beautiful philosophy brought to life with care and intention. The team creates such a warm, nurturing environment - truly a magical place for children to grow, explore, and feel safe.
              </p>
              <div className="font-bold text-emerald-900">Clara Dubois</div>
            </div>

            <div className="bg-white p-10 rounded-3xl relative">
              <div className="text-6xl text-amber-200 absolute top-4 left-6 font-serif">"</div>
              <p className="text-slate-600 relative z-10 mb-8 italic">
                The teachers' dedication is incredible. They celebrate each child's unique spirit every single day.
              </p>
              <div className="font-bold text-emerald-900">Matteo Rossi</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PLACEHOLDER */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-12">A Sneak Peek into Our World</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-amber-100 rounded-2xl flex items-center justify-center text-amber-800/30 text-2xl font-medium">
                0{item}
              </div>
            ))}
          </div>

          <button className="px-8 py-3 rounded-full border-2 border-emerald-900 text-emerald-900 font-bold hover:bg-emerald-900 hover:text-white transition-colors">
            See Our World in Bloom
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-emerald-950 text-emerald-100 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 pb-16 border-b border-emerald-800">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start the Journey?</h2>
              <button className="px-8 py-4 bg-yellow-400 text-yellow-950 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors">
                Book a Tour
              </button>
            </div>
            
            <div className="flex flex-col gap-4 text-lg">
              <p className="font-bold text-white text-xl mb-2">Contact Us</p>
              <p>500 Terry Francine St<br/>San Francisco, CA 94158</p>
              <p>123-456-7890</p>
              <p>info@mysite.com</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white transition-colors underline decoration-emerald-500 underline-offset-4">Instagram</a>
                <a href="#" className="hover:text-white transition-colors underline decoration-emerald-500 underline-offset-4">Facebook</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-emerald-400">
            <p>Nurturing the unique spark in every child through nature, play, and creative discovery since 2035.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Accessibility Statement</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <span>&copy; 2035 by SonnenBloom.</span>
            </div>
          </div>
        </div>
      </footer>
      
    </main>
  );
}
