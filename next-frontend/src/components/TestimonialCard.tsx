import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatarSrc,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4">
      {avatarSrc ? (
        <Image
          src={avatarSrc}
          alt={author}
          width={60}
          height={60}
          className="rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-[60px] h-[60px] rounded-full bg-gray-200 flex-shrink-0" />
      )}
      <div>
        <p className="text-gray-700 italic mb-4">"{quote}"</p>
        <h4 className="font-bold text-navy">{author}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};
