import React from 'react';
import './Logo.css';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 200, height = 60, className = '' }) => {
  return (
    <div className={`logo-container ${className}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 200 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
        aria-label="AI Travel Planner Logo"
      >
        {/* Removed Logo background rect */}
        
        {/* Icon container */}
        <g transform="translate(15, 10)">
          {/* Background circle */}
          <circle cx="20" cy="20" r="18" fill="#E0E7FF" stroke="#A5B4FC" strokeWidth="2"/>
          
          {/* World map/globe base */}
          <ellipse cx="20" cy="20" rx="12" ry="10" fill="#FFFFFF" stroke="#A5B4FC" strokeWidth="1"/>
          
          {/* Simplified continent shapes */}
          <path d="M12 18 Q15 17 17 18 Q18 19 20 18 Q22 17 25 18 Q26 19 28 18" 
                stroke="#4F46E5" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M14 20 Q17 19 19 20 Q20 21 22 20 Q23 19 26 20 Q27 21 29 20" 
                stroke="#4F46E5" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          
          {/* Airplane */}
          <g transform="translate(20, 12)">
            {/* Airplane body */}
            <path d="M-6 0 L6 0 L4.5 1.5 L-4.5 1.5 Z" fill="#EF4444"/>
            {/* Airplane wings */}
            <path d="M-1.5 -0.75 L-1.5 -3 L1.5 -3 L1.5 -0.75 Z" fill="#EF4444"/>
            <path d="M-1.5 0.75 L-1.5 3 L1.5 3 L1.5 0.75 Z" fill="#EF4444"/>
            {/* Airplane tail */}
            <path d="M-4.5 -1.5 L-6 -3 L-4.5 -4.5 L-3 -3 Z" fill="#EF4444"/>
          </g>
          
          {/* AI/Technology elements */}
          <g transform="translate(20, 28)">
            {/* Circuit board pattern */}
            <rect x="-4" y="-0.5" width="8" height="1" fill="#10B981" rx="0.5"/>
            <rect x="-3" y="-1.5" width="6" height="1" fill="#10B981" rx="0.5"/>
            <rect x="-1.5" y="0.5" width="3" height="1" fill="#10B981" rx="0.5"/>
            {/* Connection dots */}
            <circle cx="-4" cy="0" r="0.5" fill="#10B981"/>
            <circle cx="4" cy="0" r="0.5" fill="#10B981"/>
            <circle cx="0" cy="-1" r="0.5" fill="#10B981"/>
            <circle cx="0" cy="1" r="0.5" fill="#10B981"/>
          </g>
        </g>
        
        {/* Removed Text Logo */}
      </svg>
    </div>
  );
};

export default Logo; 