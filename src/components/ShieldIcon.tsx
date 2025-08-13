const ShieldIcon = ({ className = "", size = 120 }: { className?: string; size?: number }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-shield-glow rounded-full blur-xl opacity-60 animate-pulse"></div>
      
      {/* Shield SVG */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 120 120" 
        className="relative z-10"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield outline with gradient */}
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" />
            <stop offset="100%" stopColor="hsl(199 89% 48%)" />
          </linearGradient>
        </defs>
        
        <path
          d="M60 10 C30 10, 15 25, 15 40 C15 70, 35 95, 60 110 C85 95, 105 70, 105 40 C105 25, 90 10, 60 10 Z"
          stroke="url(#shieldGradient)"
          strokeWidth="3"
          fill="rgba(59, 130, 246, 0.1)"
          className="drop-shadow-lg"
        />
        
        {/* Checkmark */}
        <path
          d="M40 60 L52 72 L80 44"
          stroke="hsl(217 91% 60%)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            strokeDasharray: "50",
            strokeDashoffset: "50",
            animation: "draw 1s ease-in-out 0.5s forwards"
          }}
        />
      </svg>
      
    </div>
  );
};

export default ShieldIcon;