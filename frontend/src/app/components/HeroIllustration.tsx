export function HeroIllustration() {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background decorative elements */}
      <circle cx="500" cy="100" r="80" fill="url(#gradient1)" opacity="0.1" />
      <circle cx="100" cy="400" r="60" fill="url(#gradient2)" opacity="0.1" />
      
      {/* Main illustration - Book/Learning concept */}
      <g transform="translate(150, 100)">
        {/* Open book */}
        <path
          d="M50 80 L50 280 L150 260 L150 60 Z"
          fill="url(#gradient3)"
          opacity="0.9"
        />
        <path
          d="M250 80 L250 280 L150 260 L150 60 Z"
          fill="url(#gradient4)"
          opacity="0.9"
        />
        
        {/* Book pages lines */}
        <line x1="70" y1="100" x2="130" y2="95" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="70" y1="120" x2="130" y2="115" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="70" y1="140" x2="130" y2="135" stroke="white" strokeWidth="2" opacity="0.3" />
        
        <line x1="170" y1="100" x2="230" y2="95" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="170" y1="120" x2="230" y2="115" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="170" y1="140" x2="230" y2="135" stroke="white" strokeWidth="2" opacity="0.3" />
        
        {/* AI sparkles */}
        <g transform="translate(280, 50)">
          <circle cx="0" cy="0" r="4" fill="url(#gradient5)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <path d="M0 -15 L0 15 M-15 0 L15 0" stroke="url(#gradient5)" strokeWidth="2">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </path>
        </g>
        
        <g transform="translate(-40, 120)">
          <circle cx="0" cy="0" r="3" fill="url(#gradient5)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <path d="M0 -10 L0 10 M-10 0 L10 0" stroke="url(#gradient5)" strokeWidth="1.5">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
          </path>
        </g>
        
        <g transform="translate(300, 200)">
          <circle cx="0" cy="0" r="3" fill="url(#gradient5)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
          </circle>
          <path d="M0 -10 L0 10 M-10 0 L10 0" stroke="url(#gradient5)" strokeWidth="1.5">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
          </path>
        </g>
      </g>
      
      {/* Floating Arabic letters */}
      <g opacity="0.6">
        <text x="450" y="350" fontSize="40" fill="url(#gradient6)" fontWeight="bold">ع</text>
        <text x="80" y="150" fontSize="35" fill="url(#gradient6)" fontWeight="bold">ر</text>
        <text x="480" y="420" fontSize="30" fill="url(#gradient6)" fontWeight="bold">ب</text>
      </g>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}
