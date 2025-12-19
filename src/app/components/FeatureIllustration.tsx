interface FeatureIllustrationProps {
  type: 'ai' | 'soccer' | 'robotics';
}

export function FeatureIllustration({ type }: FeatureIllustrationProps) {
  if (type === 'ai') {
    return (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="80" fill="url(#aiGrad1)" opacity="0.1" />
        <circle cx="100" cy="100" r="60" fill="url(#aiGrad2)" opacity="0.15" />
        
        {/* Brain/AI nodes */}
        <circle cx="100" cy="80" r="8" fill="url(#aiGrad3)" />
        <circle cx="70" cy="100" r="6" fill="url(#aiGrad3)" />
        <circle cx="130" cy="100" r="6" fill="url(#aiGrad3)" />
        <circle cx="85" cy="130" r="5" fill="url(#aiGrad3)" />
        <circle cx="115" cy="130" r="5" fill="url(#aiGrad3)" />
        
        {/* Connecting lines */}
        <line x1="100" y1="80" x2="70" y2="100" stroke="url(#aiGrad3)" strokeWidth="2" opacity="0.6" />
        <line x1="100" y1="80" x2="130" y2="100" stroke="url(#aiGrad3)" strokeWidth="2" opacity="0.6" />
        <line x1="70" y1="100" x2="85" y2="130" stroke="url(#aiGrad3)" strokeWidth="2" opacity="0.6" />
        <line x1="130" y1="100" x2="115" y2="130" stroke="url(#aiGrad3)" strokeWidth="2" opacity="0.6" />
        
        <defs>
          <linearGradient id="aiGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="aiGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="aiGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  if (type === 'soccer') {
    return (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="80" fill="url(#soccerGrad1)" opacity="0.1" />
        
        {/* Soccer ball */}
        <circle cx="100" cy="100" r="45" fill="white" stroke="url(#soccerGrad2)" strokeWidth="3" />
        
        {/* Pentagon pattern */}
        <polygon points="100,65 115,80 107,100 93,100 85,80" fill="url(#soccerGrad2)" />
        <polygon points="115,80 130,90 125,110 107,100" fill="url(#soccerGrad2)" opacity="0.7" />
        <polygon points="85,80 70,90 75,110 93,100" fill="url(#soccerGrad2)" opacity="0.7" />
        
        <defs>
          <linearGradient id="soccerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="soccerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  // Robotics
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="100" cy="100" r="80" fill="url(#robotGrad1)" opacity="0.1" />
      
      {/* Robot head */}
      <rect x="75" y="70" width="50" height="45" rx="8" fill="url(#robotGrad2)" />
      
      {/* Eyes */}
      <circle cx="88" cy="88" r="6" fill="white" />
      <circle cx="112" cy="88" r="6" fill="white" />
      <circle cx="88" cy="88" r="3" fill="#1F2937" />
      <circle cx="112" cy="88" r="3" fill="#1F2937" />
      
      {/* Antenna */}
      <line x1="100" y1="70" x2="100" y2="55" stroke="url(#robotGrad2)" strokeWidth="3" />
      <circle cx="100" cy="52" r="4" fill="url(#robotGrad3)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
      </circle>
      
      {/* Mouth */}
      <line x1="85" y1="105" x2="115" y2="105" stroke="white" strokeWidth="2" strokeLinecap="round" />
      
      {/* Body */}
      <rect x="80" y="120" width="40" height="35" rx="6" fill="url(#robotGrad2)" opacity="0.8" />
      
      {/* Buttons */}
      <circle cx="100" cy="132" r="3" fill="#EF4444" />
      <circle cx="100" cy="143" r="3" fill="#3B82F6" />
      
      <defs>
        <linearGradient id="robotGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="robotGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
        <linearGradient id="robotGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
