import React from 'react';
import Image from 'next/image';
import { Button } from './Button';

interface ProgramCardProps {
  title: string;
  description: string;
  iconSrc?: string;
  href?: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  iconSrc,
  href = '#',
}) => {
  return (
    <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-sm p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl duration-300">
      {iconSrc && (
        <div className="w-24 h-24 mb-6 rounded-full bg-light-blue flex items-center justify-center">
          <Image src={iconSrc} alt={title} width={64} height={64} className="object-contain" />
        </div>
      )}
      <h3 className="text-2xl font-bold text-navy mb-4">{title}</h3>
      <p className="text-gray-600 mb-8 flex-grow">{description}</p>
      <Button href={href} variant="outline" size="sm">
        Learn More
      </Button>
    </div>
  );
};
