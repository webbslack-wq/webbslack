interface CaseStudyImageProps {
  domainTag: string;
  className?: string;
}

export default function CaseStudyImage({ domainTag, className = "" }: CaseStudyImageProps) {
  const illustrations: Record<string, JSX.Element> = {
    RESTAURANT: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="rest-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#rest-grad)" />
        {/* Plate */}
        <circle cx="100" cy="100" r="50" fill="white" opacity="0.1" />
        <circle cx="100" cy="100" r="45" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
        {/* Fork */}
        <line x1="65" y1="60" x2="65" y2="140" stroke="white" strokeWidth="3" />
        <circle cx="55" cy="55" r="5" fill="white" />
        <circle cx="65" cy="55" r="5" fill="white" />
        <circle cx="75" cy="55" r="5" fill="white" />
        {/* Knife */}
        <line x1="130" y1="60" x2="130" y2="140" stroke="white" strokeWidth="3" />
        <polygon points="125,55 135,55 130,45" fill="white" />
        {/* Food items */}
        <circle cx="100" cy="85" r="8" fill="white" opacity="0.4" />
        <circle cx="90" cy="105" r="7" fill="white" opacity="0.3" />
        <circle cx="110" cy="110" r="6" fill="white" opacity="0.35" />
        {/* Decorative elements */}
        <path d="M 70 160 Q 100 170 130 160" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
      </svg>
    ),
    SALON: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="salon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#salon-grad)" />
        {/* Head */}
        <circle cx="100" cy="70" r="25" fill="white" opacity="0.2" />
        {/* Hair */}
        <path d="M 75 60 Q 75 40 100 35 Q 125 40 125 60" fill="white" opacity="0.4" />
        {/* Face */}
        <circle cx="95" cy="70" r="3" fill="white" />
        <circle cx="105" cy="70" r="3" fill="white" />
        <line x1="95" y1="80" x2="105" y2="80" stroke="white" strokeWidth="1" opacity="0.5" />
        {/* Scissors */}
        <g opacity="0.3">
          <circle cx="70" cy="100" r="4" />
          <circle cx="130" cy="100" r="4" />
          <path d="M 74 98 L 126 102" stroke="white" strokeWidth="2" />
        </g>
        {/* Hair strands */}
        <line x1="80" y1="95" x2="75" y2="130" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="95" y1="92" x2="93" y2="135" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="105" y1="92" x2="107" y2="135" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="120" y1="95" x2="125" y2="130" stroke="white" strokeWidth="2" opacity="0.3" />
        {/* Shine effect */}
        <ellipse cx="85" cy="55" rx="8" ry="6" fill="white" opacity="0.2" />
      </svg>
    ),
    FINTECH: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="fintech-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#fintech-grad)" />
        {/* Credit Card */}
        <rect x="50" y="60" width="100" height="60" rx="4" fill="white" opacity="0.15" stroke="white" strokeWidth="2" />
        {/* Chip */}
        <rect x="60" y="70" width="20" height="20" fill="white" opacity="0.3" />
        <line x1="65" y1="72" x2="75" y2="72" stroke="white" strokeWidth="1" opacity="0.5" />
        <line x1="65" y1="78" x2="75" y2="78" stroke="white" strokeWidth="1" opacity="0.5" />
        {/* Number dots */}
        <circle cx="130" cy="78" r="2" fill="white" opacity="0.4" />
        <circle cx="140" cy="78" r="2" fill="white" opacity="0.4" />
        <circle cx="150" cy="78" r="2" fill="white" opacity="0.4" />
        {/* Hologram */}
        <ellipse cx="75" cy="108" rx="8" ry="6" fill="white" opacity="0.2" />
        {/* Currency symbols */}
        <text x="100" y="145" fontSize="24" fill="white" opacity="0.2" textAnchor="middle">₹</text>
        {/* Upward arrow (profit) */}
        <path d="M 150 140 L 150 120 M 145 125 L 150 120 L 155 125" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
      </svg>
    ),
    BLOCKCHAIN: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="blockchain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#blockchain-grad)" />
        {/* Blocks */}
        <rect x="50" y="50" width="40" height="40" fill="white" opacity="0.2" stroke="white" strokeWidth="2" />
        <rect x="110" y="50" width="40" height="40" fill="white" opacity="0.15" stroke="white" strokeWidth="2" />
        <rect x="80" y="110" width="40" height="40" fill="white" opacity="0.2" stroke="white" strokeWidth="2" />
        {/* Chains/links */}
        <line x1="90" y1="70" x2="110" y2="70" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="130" y1="90" x2="100" y2="110" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="70" y1="90" x2="100" y2="110" stroke="white" strokeWidth="2" opacity="0.3" />
        {/* Circles for nodes */}
        <circle cx="70" cy="70" r="2" fill="white" opacity="0.5" />
        <circle cx="130" cy="70" r="2" fill="white" opacity="0.5" />
        <circle cx="100" cy="130" r="2" fill="white" opacity="0.5" />
        {/* Lock symbol */}
        <rect x="95" y="135" width="10" height="12" fill="none" stroke="white" strokeWidth="1" opacity="0.3" rx="1" />
        <path d="M 97 135 Q 97 130 100 130 Q 103 130 103 135" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    TRADING: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="trading-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#trading-grad)" />
        {/* Chart axes */}
        <line x1="40" y1="150" x2="160" y2="150" stroke="white" strokeWidth="2" opacity="0.4" />
        <line x1="40" y1="150" x2="40" y2="50" stroke="white" strokeWidth="2" opacity="0.4" />
        {/* Candlestick chart */}
        <line x1="60" y1="130" x2="60" y2="80" stroke="white" strokeWidth="3" opacity="0.4" />
        <rect x="55" y="100" width="10" height="20" fill="white" opacity="0.3" />
        <line x1="90" y1="140" x2="90" y2="70" stroke="white" strokeWidth="3" opacity="0.4" />
        <rect x="85" y="95" width="10" height="25" fill="white" opacity="0.35" />
        <line x1="120" y1="125" x2="120" y2="60" stroke="white" strokeWidth="3" opacity="0.4" />
        <rect x="115" y="85" width="10" height="30" fill="white" opacity="0.3" />
        <line x1="150" y1="110" x2="150" y2="75" stroke="white" strokeWidth="3" opacity="0.4" />
        <rect x="145" y="80" width="10" height="25" fill="white" opacity="0.3" />
        {/* Uptrend arrow */}
        <path d="M 170 145 L 170 120" stroke="white" strokeWidth="2" opacity="0.4" />
        <path d="M 165 125 L 170 120 L 175 125" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
      </svg>
    ),
    DEVOPS: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="devops-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#devops-grad)" />
        {/* Gears/Cogs */}
        <circle cx="80" cy="80" r="20" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
        <circle cx="80" cy="80" r="8" fill="white" opacity="0.2" />
        <rect x="76" y="55" width="8" height="8" fill="white" opacity="0.3" />
        <rect x="76" y="97" width="8" height="8" fill="white" opacity="0.3" />
        <rect x="55" y="76" width="8" height="8" fill="white" opacity="0.3" />
        <rect x="97" y="76" width="8" height="8" fill="white" opacity="0.3" />

        <circle cx="130" cy="110" r="18" fill="none" stroke="white" strokeWidth="2" opacity="0.25" />
        <circle cx="130" cy="110" r="7" fill="white" opacity="0.15" />
        <rect x="126" y="88" width="8" height="8" fill="white" opacity="0.25" />
        <rect x="126" y="124" width="8" height="8" fill="white" opacity="0.25" />

        {/* Connecting line */}
        <line x1="100" y1="85" x2="115" y2="105" stroke="white" strokeWidth="2" opacity="0.2" />
        {/* Rocket */}
        <path d="M 60 140 L 60 160 L 70 155 L 70 140 Z" fill="white" opacity="0.3" />
        <circle cx="65" cy="138" r="3" fill="white" opacity="0.4" />
      </svg>
    ),
    HEALTHCARE: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="health-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#health-grad)" />
        {/* Medical Cross */}
        <rect x="90" y="60" width="20" height="60" fill="white" opacity="0.3" />
        <rect x="70" y="80" width="60" height="20" fill="white" opacity="0.3" />
        {/* Heartbeat line */}
        <path d="M 40 130 L 60 130 L 70 110 L 80 140 L 90 120 L 100 130 L 140 130 L 160 130"
              stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
        {/* Heart symbol */}
        <path d="M 50 115 Q 45 105 50 100 Q 55 105 50 115 Q 45 120 40 115 Q 35 110 40 105 Q 45 100 50 115"
              fill="white" opacity="0.25" />
        {/* Pulse points */}
        <circle cx="90" cy="130" r="2" fill="white" opacity="0.5" />
        <circle cx="100" cy="130" r="2" fill="white" opacity="0.5" />
      </svg>
    ),
    MARKETPLACE: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="marketplace-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#marketplace-grad)" />
        {/* People/Users */}
        <circle cx="60" cy="60" r="12" fill="white" opacity="0.3" />
        <path d="M 48 80 Q 48 70 60 70 Q 72 70 72 80" fill="white" opacity="0.25" />

        <circle cx="140" cy="60" r="12" fill="white" opacity="0.3" />
        <path d="M 128 80 Q 128 70 140 70 Q 152 70 152 80" fill="white" opacity="0.25" />

        <circle cx="100" cy="110" r="14" fill="white" opacity="0.3" />
        <path d="M 86 135 Q 86 122 100 122 Q 114 122 114 135" fill="white" opacity="0.25" />
        {/* Connecting lines (network) */}
        <line x1="72" y1="75" x2="100" y2="110" stroke="white" strokeWidth="1" opacity="0.2" />
        <line x1="128" y1="75" x2="100" y2="110" stroke="white" strokeWidth="1" opacity="0.2" />
        {/* Handshake */}
        <path d="M 70 150 Q 80 145 90 150" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M 130 150 Q 120 145 110 150" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
      </svg>
    ),
    ANALYTICS: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="analytics-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#analytics-grad)" />
        {/* Bar chart */}
        <rect x="50" y="120" width="15" height="40" fill="white" opacity="0.3" />
        <rect x="75" y="100" width="15" height="60" fill="white" opacity="0.35" />
        <rect x="100" y="110" width="15" height="50" fill="white" opacity="0.3" />
        <rect x="125" y="85" width="15" height="75" fill="white" opacity="0.35" />
        {/* Axis */}
        <line x1="45" y1="165" x2="150" y2="165" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="45" y1="165" x2="45" y2="50" stroke="white" strokeWidth="2" opacity="0.3" />
        {/* Data points */}
        <circle cx="57" cy="118" r="2" fill="white" opacity="0.5" />
        <circle cx="82" cy="98" r="2" fill="white" opacity="0.5" />
        <circle cx="107" cy="108" r="2" fill="white" opacity="0.5" />
        <circle cx="132" cy="83" r="2" fill="white" opacity="0.5" />
        {/* Trend line */}
        <path d="M 57 118 L 82 98 L 107 108 L 132 83" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
        {/* Magnifying glass */}
        <circle cx="160" cy="60" r="15" fill="none" stroke="white" strokeWidth="2" opacity="0.25" />
        <line x1="170" y1="70" x2="180" y2="80" stroke="white" strokeWidth="2" opacity="0.25" />
      </svg>
    ),
  };

  return illustrations[domainTag] || illustrations.ANALYTICS;
}
