import React from 'react';

interface BrandLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
  showTagline = true,
}) => {
  const isDark = theme === 'dark';

  const brandGold = '#D89B2B';
  const textColor = isDark ? '#FFFFFF' : '#123038';
  const subtextColor = isDark ? '#D1D5DB' : '#64748B';

  const sizeStyles = {
    sm: {
      dest: 'text-xl tracking-tight',
      cafe: 'text-[9px] tracking-[0.25em]',
      tagline: 'text-[8px] tracking-[0.2em]',
      leafSize: 'w-3.5 h-3.5 -top-2 left-[4px]',
    },
    md: {
      dest: 'text-2xl sm:text-3xl tracking-tight',
      cafe: 'text-[10px] sm:text-[11px] tracking-[0.28em]',
      tagline: 'text-[9px] sm:text-[10px] tracking-[0.22em]',
      leafSize: 'w-4 h-4 sm:w-5 sm:h-5 -top-2.5 sm:-top-3 left-[5px] sm:left-[6px]',
    },
    lg: {
      dest: 'text-4xl sm:text-5xl tracking-tight',
      cafe: 'text-xs sm:text-sm tracking-[0.32em]',
      tagline: 'text-[11px] sm:text-xs tracking-[0.26em]',
      leafSize: 'w-6 h-6 sm:w-7 sm:h-7 -top-4 sm:-top-4.5 left-[8px] sm:left-[10px]',
    },
  }[size];

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      {/* Brand Name with stylized i-leaf */}
      <div className="flex items-baseline font-bold font-brand leading-none">
        <span style={{ color: brandGold }} className={sizeStyles.dest}>
          DEST
        </span>
        
        {/* Custom stylized 'i' with leaf motif */}
        <span className="relative inline-flex flex-col items-center mx-[1px]">
          {/* Leaf as the dot of the 'i' */}
          <svg
            className={`absolute ${sizeStyles.leafSize} text-[#D89B2B] transform -rotate-12 transition-transform hover:rotate-6`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill="#D89B2B" fillOpacity="0.25" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <span
            style={{ color: brandGold }}
            className={`${sizeStyles.dest} lowercase font-bold`}
          >
            i
          </span>
        </span>

        <span style={{ color: brandGold }} className={sizeStyles.dest}>
          N
        </span>
      </div>

      {/* CAFÉ & RESTAURANT sub-heading */}
      <span
        style={{ color: brandGold }}
        className={`font-semibold uppercase ${sizeStyles.cafe} mt-1`}
      >
        CAFÉ & RESTAURANT
      </span>

      {/* Slogan */}
      {showTagline && (
        <span
          style={{ color: brandGold }}
          className={`font-medium uppercase ${sizeStyles.tagline} mt-0.5 opacity-90`}
        >
          SAVOUR YOUR STORY
        </span>
      )}
    </div>
  );
};
