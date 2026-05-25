export function generateStaticParams() { return [{slug: 'example'}]; }

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center min-h-[60vh] bg-gray-50">
        <h1 className="text-4xl font-bold font-heading text-gray-800">Blog Post</h1>
      </main>
      <Footer />
    </>
  );
}
