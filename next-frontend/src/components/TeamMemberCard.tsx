import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  description,
  imageSrc,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg group">
      <div className="h-64 w-full bg-gray-200 relative overflow-hidden">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-1">{name}</h3>
        <p className="text-sm font-bold text-secondary uppercase mb-4 tracking-wider">{role}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};
