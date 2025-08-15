export default function CircularProgress({ progress, size = 200, strokeWidth = 12, color = "#4ade80" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="rotate-180">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#d1d5db"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-500 drop-shadow-xl"
      />
    </svg>
  );
}
