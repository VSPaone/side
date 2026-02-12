import React from 'react';

interface SideLogoProps {
  className?: string;
  full?: boolean;
}

export const SideLogo: React.FC<SideLogoProps> = ({ className = "w-8 h-8", full = false }) => (
  <svg 
    viewBox="0 0 872 844" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="55" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-1754 -823)">
      <path d="M0 0 258.601 57.7579" transform="matrix(0.279795 0.96006 0.96006 -0.279795 2202.57 850.632)"/>
      <path d="M0 0 131.162 239.994" transform="matrix(0.279795 0.96006 0.96006 -0.279795 2330.38 1082.74)"/>
      <path d="M2202.57 850.632 2058.35 1073.23" />
      <path d="M0 0 24.4743 281.718" transform="matrix(-0.279795 -0.96006 -0.96006 0.279795 2059.01 1073.03)"/>
      <path d="M0 0 240.887 113.971" transform="matrix(-0.279795 -0.96006 -0.96006 0.279795 1959.17 1327.55)"/>
      <path d="M2413.3 1327.94 2598.03 1140.92" />
      <path d="M0 0 127.857 435.875" transform="matrix(-0.279795 -0.96006 -0.96006 0.279795 2413.95 1327.75)"/>
      <path d="M0 0 58.4184 214.106" transform="matrix(-1 0 0 1 2002.92 1424.5)"/>
      <path d="M0 0 239.69 120.273" transform="matrix(-1 0 0 1 2184.19 1517.5)"/>
      <path d="M2002.5 1424.5 2183.77 1518.33" />
      <path d="M2371.5 1424.5 2430.08 1638.61" />
      <path d="M2189.5 1517.5 2429.85 1637.77" />
      <path d="M0 0 181.774 93.8327" transform="matrix(-1 0 0 1 2371.27 1424.5)"/>
    </g>
    {full && (
      <text 
        x="436" 
        y="1100" 
        textAnchor="middle" 
        stroke="none" 
        fill="currentColor" 
        className="font-bold text-[120px] tracking-widest font-sans uppercase"
      >
        S.I.D.E. SCHOOL
      </text>
    )}
  </svg>
);