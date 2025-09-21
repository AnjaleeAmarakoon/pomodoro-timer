import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
export default function Controls({ isRunning, toggleTimer, resetTimer }) {
  return (
    <div className="flex gap-6 mt-8 justify-center">
      <button
        onClick={toggleTimer}
        aria-label={isRunning ? "Pause timer" : "Start timer"}
        title={isRunning ? "Pause (Space)" : "Start (Space)"}
        className="group relative flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-blue-400 rounded-lg text-white font-semibold shadow-md transition-all duration-150 transform hover:scale-105 focus-visible:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-300 overflow-hidden"
        tabIndex={0}
      >
        <span className="transition-transform duration-200 group-active:scale-90">
          {isRunning ? <FaPause size={20} /> : <FaPlay size={20} />}
        </span>
        <span className="hidden sm:inline">{isRunning ? "Pause" : "Start"}</span>
        {/* Tooltip */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10 whitespace-nowrap">
          {isRunning ? "Pause (Space)" : "Start (Space)"}
        </span>
      </button>
      <button
        onClick={resetTimer}
        aria-label="Reset timer"
        title="Reset (R)"
        className="group relative flex items-center gap-2 px-8 py-3 bg-red-500 hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-red-400 rounded-lg text-white font-semibold shadow-md transition-all duration-150 transform hover:scale-105 focus-visible:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-red-300 overflow-hidden"
        tabIndex={0}
      >
        <span className="transition-transform duration-200 group-active:scale-90">
          <FaRedo size={18} />
        </span>
        <span className="hidden sm:inline">Reset</span>
        {/* Tooltip */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10 whitespace-nowrap">
          Reset (R)
        </span>
      </button>
    </div>
  );
}
