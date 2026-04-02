interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'color' | 'white' | 'black';
  showText?: boolean;
}

export function Logo({ size = 'medium', variant = 'color', showText = true }: LogoProps) {
  const dimensions = {
    small: { icon: 40, text: 120 },
    medium: { icon: 60, text: 180 },
    large: { icon: 100, text: 300 },
  };

  const colors = {
    color: {
      primary: '#D97706',
      secondary: '#292524',
      text: '#292524',
    },
    white: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      text: '#FFFFFF',
    },
    black: {
      primary: '#292524',
      secondary: '#292524',
      text: '#292524',
    },
  };

  const iconSize = dimensions[size].icon;
  const textWidth = dimensions[size].text;
  const color = colors[variant];

  return (
    <div className="inline-flex items-center gap-4">
      {/* Logo Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke={color.primary}
          strokeWidth="2"
          fill="none"
        />
        
        {/* Stylized Wheat/Bread Icon */}
        <path
          d="M50 25 L50 75 M50 30 C45 32 42 35 42 40 M50 30 C55 32 58 35 58 40 M50 40 C45 42 42 45 42 50 M50 40 C55 42 58 45 58 50 M50 50 C45 52 42 55 42 60 M50 50 C55 52 58 55 58 60"
          stroke={color.primary}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Korean-inspired accent (simplified hangeul-like element) */}
        <circle
          cx="50"
          cy="68"
          r="4"
          fill={color.secondary}
        />
        
        {/* "Dr. J" monogram in circle */}
        <text
          x="50"
          y="52"
          fontSize="24"
          fontWeight="300"
          textAnchor="middle"
          fill={color.secondary}
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          DJ
        </text>
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col justify-center" style={{ width: textWidth }}>
          <div
            className="font-light tracking-wide"
            style={{
              fontSize: size === 'large' ? '24px' : size === 'medium' ? '16px' : '12px',
              color: color.text,
              lineHeight: 1.2,
            }}
          >
            Dr. Jang's
          </div>
          <div
            className="font-light tracking-widest"
            style={{
              fontSize: size === 'large' ? '14px' : size === 'medium' ? '10px' : '8px',
              color: color.text,
              letterSpacing: '0.15em',
            }}
          >
            BREAD FACTORY
          </div>
        </div>
      )}
    </div>
  );
}
