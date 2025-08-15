import { useState, useEffect, useRef } from "react";
import CircularProgress from "./components/CircularProgress";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import { FaMoon, FaSun, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function App() {
  // Timer Settings
  const [workMinutes, setWorkMinutes] = useState(
    () => Number(localStorage.getItem("workMinutes")) || 25
  );
  const [breakMinutes, setBreakMinutes] = useState(
    () => Number(localStorage.getItem("breakMinutes")) || 5
  );
  const [longBreakMinutes, setLongBreakMinutes] = useState(
    () => Number(localStorage.getItem("longBreakMinutes")) || 15
  );

  // Timer state
  const [timeLeft, setTimeLeft] = useState(workMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);
  const [sessionCount, setSessionCount] = useState(
    () => Number(localStorage.getItem("sessionCount")) || 0
  );

  // Dark mode
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true" || false
  );

  // Sound
  const [soundOn, setSoundOn] = useState(true);
  const beepSound = useRef(new Audio("/beep.mp3"));

  const timerRef = useRef(null);

  // Persist settings
  useEffect(() => {
    localStorage.setItem("workMinutes", workMinutes);
    localStorage.setItem("breakMinutes", breakMinutes);
    localStorage.setItem("longBreakMinutes", longBreakMinutes);
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("sessionCount", sessionCount);
  }, [workMinutes, breakMinutes, longBreakMinutes, darkMode, sessionCount]);

  // Apply dark mode to full page
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  // Update timer when session type or settings change
  useEffect(() => {
    setTimeLeft(
      isWorkSession
        ? workMinutes * 60
        : sessionCount % 4 === 0
        ? longBreakMinutes * 60
        : breakMinutes * 60
    );
  }, [workMinutes, breakMinutes, longBreakMinutes, isWorkSession, sessionCount]);

  // Timer tick
  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            if (soundOn) beepSound.current.play();
            clearInterval(timerRef.current);

            if (isWorkSession) setSessionCount((prev) => prev + 1);

            setIsWorkSession(!isWorkSession);
            return !isWorkSession
              ? workMinutes * 60
              : sessionCount % 4 === 0
              ? longBreakMinutes * 60
              : breakMinutes * 60;
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
    setTimeLeft(
      isWorkSession
        ? workMinutes * 60
        : sessionCount % 4 === 0
        ? longBreakMinutes * 60
        : breakMinutes * 60
    );
  };

  // Progress calculation
  const progress =
    ((isWorkSession
      ? workMinutes * 60
      : sessionCount % 4 === 0
      ? longBreakMinutes * 60
      : breakMinutes * 60) -
      timeLeft) /
    (isWorkSession
      ? workMinutes * 60
      : sessionCount % 4 === 0
      ? longBreakMinutes * 60
      : breakMinutes * 60) *
    100;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") toggleTimer();
      if (e.code === "KeyR") resetTimer();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isRunning, isWorkSession, timeLeft]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white relative transition-colors duration-300">
      
      {/* Top-Right Button Container */}
      <div className="absolute top-4 right-4 flex flex-col gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-200 hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Sound Toggle */}
        <button
          onClick={() => setSoundOn(!soundOn)}
          className="p-3 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-200 hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          {soundOn ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6">Pomodoro Timer</h1>

      {/* Circular Progress with Timer */}
      <div className="relative">
        <CircularProgress
          progress={progress}
          size={220}
          strokeWidth={14}
          color={isWorkSession ? "#4ade80" : "#f87171"} // green for work, red for break
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <TimerDisplay isWorkSession={isWorkSession} timeLeft={timeLeft} />
          <p className="mt-2 text-sm">
            {isWorkSession
              ? `Work Session (${sessionCount % 4 + 1}/4)`
              : sessionCount % 4 === 0
              ? "Long Break"
              : "Break"}
          </p>
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
