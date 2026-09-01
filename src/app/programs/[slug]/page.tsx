import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { courses, getCourseBySlug, getAllSlugs } from '@/data/courses';
import CourseDetailClient from './CourseDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: 'Course Not Found | Avenir Souriant',
    };
  }

  const url = `https://avenirsouriant.com/programs/${course.slug}`;

  return {
    title: course.metaTitle,
    description: course.metaDescription,
    keywords: [
      course.title,
      'Arabic learning Montreal',
      'Arabic classes Saint-Laurent',
      'Children Arabic education',
      'Kids programs Montreal',
      course.category,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      url,
      type: 'website',
      images: [
        {
          url: `https://avenirsouriant.com${course.image}`,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: course.metaTitle,
      description: course.metaDescription,
      images: [`https://avenirsouriant.com${course.image}`],
    },
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Structured data (Schema.org / JSON-LD) for Course SEO & GEO
  const jsonLdCourse = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.metaDescription,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Avenir Souriant',
      sameAs: 'https://avenirsouriant.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1325 Rue Cartier',
        addressLocality: 'Saint-Laurent',
        addressRegion: 'QC',
        postalCode: 'H4L 2N6',
        addressCountry: 'CA',
      },
    },
    offers: {
      '@type': 'Offer',
      price: course.price.replace('$', ''),
      priceCurrency: 'CAD',
      availability: course.active
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
      category: course.category,
      url: `https://avenirsouriant.com/programs/${course.slug}`,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'in-person',
      location: {
        '@type': 'Place',
        name: 'Avenir Souriant Learning Center',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1325 Rue Cartier',
          addressLocality: 'Saint-Laurent',
          addressRegion: 'QC',
          postalCode: 'H4L 2N6',
          addressCountry: 'CA',
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }}
      />
      <CourseDetailClient course={course} />
    </>
  );
}
