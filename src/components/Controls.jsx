export default function Controls({ isRunning, toggleTimer, resetTimer }) {
  return (
    <div className="flex gap-4 mt-6 justify-center">
      <button
        onClick={toggleTimer}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-medium"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTimer}
        className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded text-white font-medium"
      >
        Reset
      </button>
    </div>
  );
}
