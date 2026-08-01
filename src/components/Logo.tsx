import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'on-dark' | 'symbol-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'default',
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20'
  };

  const isDark = variant === 'on-dark';
  const textColor = isDark ? '#FFFFFF' : '#303033';
  const subTextColor = isDark ? '#E5E7EB' : '#4B4B4D';

  if (variant === 'symbol-only') {
    return (
      <svg 
        viewBox="0 0 400 320" 
        className={`${sizeClasses[size]} w-auto ${className}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bslTopWing" x1="20" y1="20" x2="380" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2CC2A5" />
            <stop offset="40%" stopColor="#33C98C" />
            <stop offset="75%" stopColor="#9EDB45" />
            <stop offset="100%" stopColor="#F8D61D" />
          </linearGradient>

          <linearGradient id="bslBirdHead" x1="200" y1="80" x2="410" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#33C98C" />
            <stop offset="100%" stopColor="#2CC2A5" />
          </linearGradient>

          <linearGradient id="bslYellowCurve" x1="120" y1="140" x2="320" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9EDB45" />
            <stop offset="60%" stopColor="#F8D61D" />
            <stop offset="100%" stopColor="#F8D61D" />
          </linearGradient>

          <linearGradient id="bslBottomLeaf" x1="10" y1="210" x2="300" y2="310" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#33C98C" />
            <stop offset="60%" stopColor="#2CC2A5" />
            <stop offset="100%" stopColor="#33C98C" />
          </linearGradient>
        </defs>

        {/* Top sweeping wing curve */}
        <path 
          d="M 12,18 C 30,105 105,175 220,185 C 290,190 325,160 348,110 C 315,145 265,160 195,148 C 140,138 85,95 12,18 Z" 
          fill="url(#bslTopWing)" 
        />

        {/* Bird Head / Upper Beak Extension */}
        <path 
          d="M 298,118 C 312,110 330,110 355,112 C 400,115 410,135 365,188 C 345,212 335,180 300,172 C 285,168 280,140 298,118 Z" 
          fill="url(#bslBirdHead)" 
        />

        {/* Inner Yellow Accent Feather/Curve */}
        <path 
          d="M 125,152 C 158,162 230,182 320,230 C 275,225 210,205 160,188 C 138,180 128,165 125,152 Z" 
          fill="url(#bslYellowCurve)" 
        />

        {/* Bottom Sweeping Leaf Curve */}
        <path 
          d="M 2,308 C 55,270 120,230 280,225 C 295,225 305,240 290,270 C 255,300 160,305 75,295 C 45,292 20,305 2,308 Z" 
          fill="url(#bslBottomLeaf)" 
        />

        {/* Inner Leaf Accent Layer */}
        <path 
          d="M 45,268 C 110,238 185,220 270,226 C 240,248 160,258 75,262 C 60,263 50,265 45,268 Z" 
          fill="#FFFFFF" 
          opacity="0.25"
        />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Symbol SVG */}
      <svg 
        viewBox="0 0 400 320" 
        className={`${sizeClasses[size]} w-auto flex-shrink-0`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bslTopWingMain" x1="20" y1="20" x2="380" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2CC2A5" />
            <stop offset="35%" stopColor="#33C98C" />
            <stop offset="70%" stopColor="#9EDB45" />
            <stop offset="100%" stopColor="#F8D61D" />
          </linearGradient>

          <linearGradient id="bslBirdHeadMain" x1="280" y1="100" x2="410" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#33C98C" />
            <stop offset="100%" stopColor="#2CC2A5" />
          </linearGradient>

          <linearGradient id="bslYellowCurveMain" x1="120" y1="140" x2="330" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9EDB45" />
            <stop offset="50%" stopColor="#F8D61D" />
            <stop offset="100%" stopColor="#F8D61D" />
          </linearGradient>

          <linearGradient id="bslBottomLeafMain" x1="10" y1="210" x2="300" y2="310" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#33C98C" />
            <stop offset="70%" stopColor="#2CC2A5" />
            <stop offset="100%" stopColor="#33C98C" />
          </linearGradient>
        </defs>

        {/* Top sweeping wing curve */}
        <path 
          d="M 12,18 C 30,105 105,175 220,185 C 290,190 325,160 348,110 C 315,145 265,160 195,148 C 140,138 85,95 12,18 Z" 
          fill="url(#bslTopWingMain)" 
        />

        {/* Bird Head / Upper Beak Extension */}
        <path 
          d="M 298,118 C 312,110 330,110 355,112 C 400,115 410,135 365,188 C 345,212 335,180 300,172 C 285,168 280,140 298,118 Z" 
          fill="url(#bslBirdHeadMain)" 
        />

        {/* Inner Yellow Accent Feather/Curve */}
        <path 
          d="M 125,152 C 158,162 230,182 320,230 C 275,225 210,205 160,188 C 138,180 128,165 125,152 Z" 
          fill="url(#bslYellowCurveMain)" 
        />

        {/* Bottom Sweeping Leaf Curve */}
        <path 
          d="M 2,308 C 55,270 120,230 280,225 C 295,225 305,240 290,270 C 255,300 160,305 75,295 C 45,292 20,305 2,308 Z" 
          fill="url(#bslBottomLeafMain)" 
        />

        {/* Inner Leaf Accent Layer */}
        <path 
          d="M 45,268 C 110,238 185,220 270,226 C 240,248 160,258 75,262 C 60,263 50,265 45,268 Z" 
          fill="#FFFFFF" 
          opacity="0.25"
        />
      </svg>

      {/* Typography: BSL and Bhartiya Skills LLP */}
      <div className="flex flex-col justify-center leading-none">
        <span 
          className="font-display font-black tracking-tight italic"
          style={{ 
            color: textColor,
            fontSize: size === 'sm' ? '1.1rem' : size === 'md' ? '1.45rem' : size === 'lg' ? '1.85rem' : '2.4rem',
            lineHeight: 1
          }}
        >
          BSL
        </span>
        <span 
          className="font-display font-bold italic tracking-tight mt-0.5"
          style={{ 
            color: subTextColor,
            fontSize: size === 'sm' ? '0.65rem' : size === 'md' ? '0.82rem' : size === 'lg' ? '1.05rem' : '1.35rem',
            lineHeight: 1.15
          }}
        >
          Bhartiya Skills LLP
        </span>
      </div>
    </div>
  );
};
