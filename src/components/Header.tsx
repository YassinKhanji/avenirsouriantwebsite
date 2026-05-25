import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start">
            <Link href="/">
              <Image 
                src="/images/logo.png" 
                alt="Avenir Souriant Logo" 
                width={200} 
                height={50} 
                className="object-contain"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-primary font-medium transition-colors">
              Home Page
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-primary font-medium transition-colors">
              About Us
            </Link>
            <div className="relative group">
              <button className="text-gray-900 hover:text-primary font-medium transition-colors focus:outline-none">
                Pages
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg hidden group-hover:block">
                <Link href="/landing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Landing</Link>
                <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">FAQ</Link>
                <Link href="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Our Team</Link>
                <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Services</Link>
              </div>
            </div>
            <Link href="/contact" className="text-gray-900 hover:text-primary font-medium transition-colors">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
