import { useState, useEffect, useRef } from "react";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [workMinutes, setWorkMinutes] = useState(() => Number(localStorage.getItem("workMinutes")) || 25);
  const [breakMinutes, setBreakMinutes] = useState(() => Number(localStorage.getItem("breakMinutes")) || 5);
  const [timeLeft, setTimeLeft] = useState(workMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true" || false);
  const timerRef = useRef(null);
  const beepSound = useRef(new Audio("/beep.mp3"));

  // Persist settings
  useEffect(() => {
    localStorage.setItem("workMinutes", workMinutes);
    localStorage.setItem("breakMinutes", breakMinutes);
    localStorage.setItem("darkMode", darkMode);
  }, [workMinutes, breakMinutes, darkMode]);

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

  const progress =
    ((isWorkSession ? workMinutes * 60 : breakMinutes * 60) - timeLeft) /
    (isWorkSession ? workMinutes * 60 : breakMinutes * 60) *
    100;

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white relative`}>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1 className="text-3xl font-bold mb-6">Pomodoro Timer</h1>

      <TimerDisplay isWorkSession={isWorkSession} timeLeft={timeLeft} />

      <div className="w-64 h-3 bg-gray-300 dark:bg-gray-700 rounded-full mt-6">
        <div
          className="h-full bg-green-500 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <Controls isRunning={isRunning} toggleTimer={toggleTimer} resetTimer={resetTimer} />
      <Settings workMinutes={workMinutes} breakMinutes={breakMinutes} setWorkMinutes={setWorkMinutes} setBreakMinutes={setBreakMinutes} />
    </div>
  );
}
