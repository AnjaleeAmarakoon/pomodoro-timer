import { useEffect, useRef, useState } from "react";

export default function TimerDisplay({ isWorkSession, timeLeft }) {
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };


  // Animate timer text on session change
  const timerRef = useRef();
  const [fade, setFade] = useState(false);

  // Fade on session change
  useEffect(() => {
    if (timerRef.current) {
      timerRef.current.classList.remove("animate-timer");
      void timerRef.current.offsetWidth;
      timerRef.current.classList.add("animate-timer");
    }
  }, [isWorkSession]);

  // Fade on every tick
  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 200);
    return () => clearTimeout(timeout);
  }, [timeLeft]);

  return (
    <div className="text-center">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 transition-all duration-500 text-gray-700 dark:text-gray-200" key={isWorkSession ? "work" : "break"}>
        {isWorkSession ? "🎯 Work Session" : "☕ Break Time"}
      </h2>
      <p
        ref={timerRef}
        className={`text-5xl sm:text-6xl font-bold font-mono transition-all duration-500 tracking-tight${fade ? " fade-timer" : ""}`}
      >
        {formatTime(timeLeft)}
      </p>
    </div>
  );
}
