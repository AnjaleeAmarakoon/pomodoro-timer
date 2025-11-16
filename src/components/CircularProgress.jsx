export default function CircularProgress({ progress, size = 200, strokeWidth = 12, color = "#4ade80" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="rotate-180 filter drop-shadow-2xl">
      {/* Background circle with subtle gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#e5e7eb", stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: "#d1d5db", stopOpacity: 0.3 }} />
        </linearGradient>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.7 }} />
        </linearGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#bgGradient)"
        strokeWidth={strokeWidth}
        fill="none"
        opacity="0.3"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#progressGradient)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-500"
        style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
      />
    </svg>
  );
}
