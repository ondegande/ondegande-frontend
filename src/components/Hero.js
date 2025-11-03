import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="w-full h-96 md:h-[500px] flex items-center justify-center px-4">
        <svg viewBox="0 0 1200 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Sky Gradient */}
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#E0F6FF" />
            </linearGradient>
            <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4DB8FF" />
              <stop offset="100%" stopColor="#2E95D9" />
            </linearGradient>
          </defs>

          {/* Sky */}
          <rect width="1200" height="200" fill="url(#skyGradient)" />

          {/* Water */}
          <rect y="200" width="1200" height="220" fill="url(#waterGradient)" />

          {/* Clouds - cute style */}
          <g fill="#FFFFFF" opacity="0.8">
            <circle cx="150" cy="60" r="25" />
            <circle cx="185" cy="55" r="30" />
            <circle cx="220" cy="65" r="20" />
          </g>
          <g fill="#FFFFFF" opacity="0.7">
            <circle cx="950" cy="40" r="20" />
            <circle cx="980" cy="35" r="25" />
            <circle cx="1010" cy="45" r="18" />
          </g>

          {/* Sun */}
          <circle cx="100" cy="80" r="45" fill="#FFD700" opacity="0.9" />
          <circle cx="100" cy="80" r="50" fill="#FFE066" opacity="0.3" />

          {/* Busan Skyline - cute buildings */}
          <g fill="#3B5998">
            <rect x="850" y="140" width="70" height="160" rx="5" />
            <rect x="850" y="150" width="10" height="10" fill="#FFE082" />
            <rect x="870" y="150" width="10" height="10" fill="#FFE082" />
            <rect x="850" y="175" width="10" height="10" fill="#FFE082" />
            <rect x="870" y="175" width="10" height="10" fill="#FFE082" />
            <rect x="850" y="200" width="10" height="10" fill="#FFE082" />
            <rect x="870" y="200" width="10" height="10" fill="#FFE082" />
          </g>

          <g fill="#2E5090">
            <rect x="950" y="80" width="90" height="220" rx="5" />
            <rect x="960" y="100" width="12" height="12" fill="#FFE082" />
            <rect x="980" y="100" width="12" height="12" fill="#FFE082" />
            <rect x="1000" y="100" width="12" height="12" fill="#FFE082" />
            <rect x="960" y="130" width="12" height="12" fill="#FFE082" />
            <rect x="980" y="130" width="12" height="12" fill="#FFE082" />
            <rect x="1000" y="130" width="12" height="12" fill="#FFE082" />
            <rect x="960" y="160" width="12" height="12" fill="#FFE082" />
            <rect x="980" y="160" width="12" height="12" fill="#FFE082" />
            <rect x="1000" y="160" width="12" height="12" fill="#FFE082" />
            <rect x="960" y="190" width="12" height="12" fill="#FFE082" />
            <rect x="980" y="190" width="12" height="12" fill="#FFE082" />
            <rect x="1000" y="190" width="12" height="12" fill="#FFE082" />
          </g>

          <g fill="#1F3A93">
            <rect x="1080" y="160" width="70" height="180" rx="5" />
            <rect x="1090" y="180" width="10" height="10" fill="#FFE082" />
            <rect x="1110" y="180" width="10" height="10" fill="#FFE082" />
            <rect x="1090" y="210" width="10" height="10" fill="#FFE082" />
            <rect x="1110" y="210" width="10" height="10" fill="#FFE082" />
            <rect x="1090" y="240" width="10" height="10" fill="#FFE082" />
            <rect x="1110" y="240" width="10" height="10" fill="#FFE082" />
          </g>

          {/* Bridge - Gwangan Bridge style */}
          <g stroke="#8B7355" strokeWidth="6" fill="none" strokeLinecap="round">
            <path d="M 400 180 Q 600 150 800 180" />
          </g>
          <g stroke="#D4A574" strokeWidth="3">
            <line x1="420" y1="180" x2="420" y2="200" />
            <line x1="480" y1="175" x2="480" y2="200" />
            <line x1="540" y1="170" x2="540" y2="200" />
            <line x1="600" y1="168" x2="600" y2="200" />
            <line x1="660" y1="170" x2="660" y2="200" />
            <line x1="720" y1="175" x2="720" y2="200" />
            <line x1="780" y1="180" x2="780" y2="200" />
          </g>

          {/* Animated Boats */}
          <g className="animate-float">
            {/* Boat 1 */}
            <ellipse cx="300" cy="310" rx="40" ry="25" fill="#FF6B6B" />
            <path d="M 270 310 L 280 280 L 320 280 L 330 310" fill="#FF6B6B" />
            <circle cx="300" cy="275" r="8" fill="#FFD700" opacity="0.7" />
            <path d="M 300 290 L 300 320" stroke="#8B4513" strokeWidth="2" />
            <path d="M 295 295 L 305 295" stroke="#8B4513" strokeWidth="1" />
          </g>

          <g className="animate-float-delayed">
            {/* Boat 2 */}
            <ellipse cx="750" cy="350" rx="35" ry="20" fill="#4DB8FF" />
            <path d="M 720 350 L 730 325 L 770 325 L 780 350" fill="#4DB8FF" />
            <circle cx="750" cy="320" r="6" fill="#FFD700" opacity="0.7" />
            <path d="M 750 335 L 750 360" stroke="#8B4513" strokeWidth="2" />
          </g>

          {/* Animated Seagulls */}
          <g className="animate-fly">
            <path d="M 200 120 L 215 115 L 225 120 L 220 125 L 210 123 Z" fill="#FFFFFF" opacity="0.8" />
            <path d="M 190 135 L 200 130 L 210 135 L 205 140 L 195 138 Z" fill="#FFFFFF" opacity="0.8" />
          </g>

          <g className="animate-fly-delayed">
            <path d="M 1050 100 L 1065 95 L 1075 100 L 1070 105 L 1060 103 Z" fill="#FFFFFF" opacity="0.7" />
            <path d="M 1100 115 L 1115 110 L 1125 115 L 1120 120 L 1110 118 Z" fill="#FFFFFF" opacity="0.7" />
          </g>

          {/* Water waves - decorative */}
          <g stroke="#E0F6FF" strokeWidth="2" fill="none" opacity="0.6">
            <path d="M 0 250 Q 50 245 100 250 T 200 250 T 300 250 T 400 250 T 500 250 T 600 250 T 700 250 T 800 250 T 900 250 T 1000 250 T 1100 250 T 1200 250" />
            <path d="M 0 300 Q 50 295 100 300 T 200 300 T 300 300 T 400 300 T 500 300 T 600 300 T 700 300 T 800 300 T 900 300 T 1000 300 T 1100 300 T 1200 300" />
          </g>
        </svg>
      </div>
    </section>
  );
}
