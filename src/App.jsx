import { useState, useEffect, useRef } from "react";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import CircularProgress from "./components/CircularProgress";

export default function App() {
  // Settings
  const [workMinutes, setWorkMinutes] = useState(
    () => Number(localStorage.getItem("workMinutes")) || 25
  );
  const [breakMinutes, setBreakMinutes] = useState(
    () => Number(localStorage.getItem("breakMinutes")) || 5
  );

  // Timer state
  const [timeLeft, setTimeLeft] = useState(workMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  // Dark mode
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true" || false
  );

  // Refs
  const timerRef = useRef(null);
  const beepSound = useRef(new Audio("/beep.mp3"));

  // Persist settings
  useEffect(() => {
    localStorage.setItem("workMinutes", workMinutes);
    localStorage.setItem("breakMinutes", breakMinutes);
    localStorage.setItem("darkMode", darkMode);
  }, [workMinutes, breakMinutes, darkMode]);

  // Apply dark mode to full page
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  // Update timer when session type or settings change
  useEffect(() => {
    setTimeLeft(isWorkSession ? workMinutes * 60 : breakMinutes * 60);
  }, [workMinutes, breakMinutes, isWorkSession]);

  // Timer tick
  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            beepSound.current.play();
            clearInterval(timerRef.current);
            setIsWorkSession(!isWorkSession);
            return !isWorkSession ? workMinutes * 60 : breakMinutes * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimeLeft(isWorkSession ? workMinutes * 60 : breakMinutes * 60);
  };

  // Progress bar
  const progress =
    ((isWorkSession ? workMinutes * 60 : breakMinutes * 60) - timeLeft) /
    (isWorkSession ? workMinutes * 60 : breakMinutes * 60) *
    100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white relative transition-colors duration-300">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded transition-colors duration-200"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1 className="text-3xl font-bold mb-6">Pomodoro Timer</h1>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="relative">
          <CircularProgress progress={progress} size={200} strokeWidth={12} />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <TimerDisplay isWorkSession={isWorkSession} timeLeft={timeLeft} />
          </div>
        </div>
      </div>

      {/* Controls */}
      <Controls
        isRunning={isRunning}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />

      {/* Settings */}
      <Settings
        workMinutes={workMinutes}
        breakMinutes={breakMinutes}
        setWorkMinutes={setWorkMinutes}
        setBreakMinutes={setBreakMinutes}
      />
    </div>
  );
}
