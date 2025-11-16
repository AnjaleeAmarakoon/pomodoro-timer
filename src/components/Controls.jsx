import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
export default function Controls({ isRunning, toggleTimer, resetTimer }) {
  return (
    <div className="flex gap-4 sm:gap-6 mt-8 justify-center px-4">
      <button
        onClick={toggleTimer}
        aria-label={isRunning ? "Pause timer" : "Start timer"}
        title={isRunning ? "Pause (Space)" : "Start (Space)"}
        className="group relative flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-pink-300 hover:bg-pink-400 focus-visible:outline-2 focus-visible:outline-pink-400 rounded-xl text-pink-900 font-semibold shadow-lg transition-all duration-150 transform hover:scale-105 focus-visible:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-pink-200 overflow-hidden dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus-visible:outline-gray-500 dark:focus-visible:ring-gray-600 min-w-[120px]"
        tabIndex={0}
      >
        <span className="transition-transform duration-200 group-active:scale-90">
          {isRunning ? <FaPause size={20} /> : <FaPlay size={20} />}
        </span>
        <span className="text-sm sm:text-base">{isRunning ? "Pause" : "Start"}</span>
        {/* Tooltip */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded-lg px-3 py-1.5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10 whitespace-nowrap shadow-lg">
          {isRunning ? "Pause (Space)" : "Start (Space)"}
        </span>
      </button>
      <button
        onClick={resetTimer}
        aria-label="Reset timer"
        title="Reset (R)"
        className="group relative flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-yellow-200 hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-yellow-300 rounded-xl text-yellow-900 font-semibold shadow-lg transition-all duration-150 transform hover:scale-105 focus-visible:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-yellow-100 overflow-hidden dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus-visible:outline-gray-500 dark:focus-visible:ring-gray-600 min-w-[120px]"
        tabIndex={0}
      >
        <span className="transition-transform duration-200 group-active:scale-90">
          <FaRedo size={18} />
        </span>
        <span className="text-sm sm:text-base">Reset</span>
        {/* Tooltip */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded-lg px-3 py-1.5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10 whitespace-nowrap shadow-lg">
          Reset (R)
        </span>
      </button>
    </div>
  );
}
