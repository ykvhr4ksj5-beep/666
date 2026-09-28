import React from 'react';

export interface JayrajiLogoProps {
  /**
   * Layout format of the logo:
   * - 'full': mark with JAYRAJI GROUP typography
   * - 'mark': emblem symbol only
   * - 'badge': full logo enclosed in a clean white rounded card (ideal on dark/colored navbars)
   */
  variant?: 'full' | 'mark' | 'badge';
  /**
   * Color theme:
   * - 'color': Exact corporate branding (Cobalt #0A60B4 + Navy #002B5C)
   * - 'light': White vector lines with golden/cobalt accents for dark backgrounds
   */
  theme?: 'color' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  subtitle?: string;
}

export const JayrajiLogo: React.FC<JayrajiLogoProps> = ({
  variant = 'badge',
  theme = 'color',
  className = '',
  size = 'md',
  subtitle = 'GROUP',
}) => {
  // If variant is 'badge', we wrap the full color logo in a high-contrast pill/badge
  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl shadow-md border border-neutral-100/90 select-none group-hover:shadow-lg transition-shadow ${className}`}
      >
        {/* Vector Mark */}
        <svg
          viewBox="130 290 280 420"
          className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"
          aria-hidden="true"
        >
          <polygon points="214,304 397,304 397,375" fill="#0A60B4" />
          <path
            d="M 214,304
               L 144,500
               L 397,696
               L 397,625
               A 175 175 0 0 1 397,375
               Z"
            fill="#002B5C"
          />
        </svg>

        {/* Brand Text */}
        <div className="flex flex-col text-left leading-none">
          <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-[#002B5C] block">
            JAYRAJI
          </span>
          <span className="font-sans text-[9px] font-bold tracking-[0.32em] text-[#002B5C]/75 uppercase block mt-0.5">
            {subtitle}
          </span>
        </div>
      </div>
    );
  }

  // If mark only
  if (variant === 'mark') {
    const isLight = theme === 'light';
    return (
      <svg
        viewBox="130 290 280 420"
        className={`shrink-0 ${className}`}
        aria-label="JAYRAJI Emblem"
      >
        <polygon
          points="214,304 397,304 397,375"
          fill={isLight ? '#60A5FA' : '#0A60B4'}
        />
        <path
          d="M 214,304
             L 144,500
             L 397,696
             L 397,625
             A 175 175 0 0 1 397,375
             Z"
          fill={isLight ? '#FFFFFF' : '#002B5C'}
        />
      </svg>
    );
  }

  // Full inline SVG
  const isLight = theme === 'light';
  const primaryFill = isLight ? '#FFFFFF' : '#002B5C';
  const accentFill = isLight ? '#60A5FA' : '#0A60B4';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="130 290 750 420"
      className={`h-auto ${className}`}
      aria-label="JAYRAJI GROUP Logo"
    >
      <g id="logo-mark">
        <polygon points="214,304 397,304 397,375" fill={accentFill} />
        <path
          d="M 214,304
             L 144,500
             L 397,696
             L 397,625
             A 175 175 0 0 1 397,375
             Z"
          fill={primaryFill}
        />
      </g>

      <text
        x="330"
        y="542"
        fill={primaryFill}
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: '138px',
          letterSpacing: '-0.015em',
        }}
      >
        JAYRAJI
      </text>

      <text
        x="653"
        y="605"
        fill={primaryFill}
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: '32px',
          letterSpacing: '0.38em',
        }}
      >
        {subtitle}
      </text>
    </svg>
  );
};
