export default function Settings({
  workMinutes,
  breakMinutes,
  longBreakMinutes,
  setWorkMinutes,
  setBreakMinutes,
  setLongBreakMinutes,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mt-8 px-4">
      <div className="flex items-center justify-between sm:justify-start gap-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-pink-200/50 dark:border-gray-700/50 shadow-sm">
        <label htmlFor="work-minutes" className="font-medium text-sm">Work:</label>
        <div className="flex items-center gap-2">
          <input
            id="work-minutes"
            type="number"
            min="1"
            value={workMinutes}
            onChange={(e) => setWorkMinutes(Number(e.target.value))}
            className="w-16 px-2 py-2 text-pink-900 bg-pink-100 rounded-lg border border-pink-200 focus-visible:outline-2 focus-visible:outline-pink-300 focus-visible:ring-2 focus-visible:ring-pink-200 transition-all duration-150 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus-visible:outline-gray-500 dark:focus-visible:ring-gray-600 text-center font-semibold"
            aria-label="Work minutes"
          />
          <span className="text-xs text-gray-500 dark:text-gray-400">min</span>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-start gap-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-yellow-200/50 dark:border-gray-700/50 shadow-sm">
        <label htmlFor="break-minutes" className="font-medium text-sm">Break:</label>
        <div className="flex items-center gap-2">
          <input
            id="break-minutes"
            type="number"
            min="1"
            value={breakMinutes}
            onChange={(e) => setBreakMinutes(Number(e.target.value))}
            className="w-16 px-2 py-2 text-yellow-900 bg-yellow-100 rounded-lg border border-yellow-200 focus-visible:outline-2 focus-visible:outline-yellow-300 focus-visible:ring-2 focus-visible:ring-yellow-200 transition-all duration-150 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus-visible:outline-gray-500 dark:focus-visible:ring-gray-600 text-center font-semibold"
            aria-label="Break minutes"
          />
          <span className="text-xs text-gray-500 dark:text-gray-400">min</span>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-start gap-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-purple-200/50 dark:border-gray-700/50 shadow-sm">
        <label htmlFor="long-break-minutes" className="font-medium text-sm">Long Break:</label>
        <div className="flex items-center gap-2">
          <input
            id="long-break-minutes"
            type="number"
            min="1"
            value={longBreakMinutes}
            onChange={(e) => setLongBreakMinutes(Number(e.target.value))}
            className="w-16 px-2 py-2 text-purple-900 bg-purple-100 rounded-lg border border-purple-200 focus-visible:outline-2 focus-visible:outline-purple-300 focus-visible:ring-2 focus-visible:ring-purple-200 transition-all duration-150 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus-visible:outline-gray-500 dark:focus-visible:ring-gray-600 text-center font-semibold"
            aria-label="Long break minutes"
          />
          <span className="text-xs text-gray-500 dark:text-gray-400">min</span>
        </div>
      </div>
    </div>
  );
}
