export default function Settings({
  workMinutes,
  breakMinutes,
  longBreakMinutes,
  setWorkMinutes,
  setBreakMinutes,
  setLongBreakMinutes,
}) {
  return (
    <div className="flex gap-8 justify-center mt-8">
      <div className="flex items-center gap-3">
        <label htmlFor="work-minutes" className="font-medium">Work:</label>
        <input
          id="work-minutes"
          type="number"
          min="1"
          value={workMinutes}
          onChange={(e) => setWorkMinutes(Number(e.target.value))}
          className="w-20 px-3 py-2 text-pink-900 bg-pink-100 rounded-lg border border-pink-200 focus-visible:outline-2 focus-visible:outline-pink-300 focus-visible:ring-2 focus-visible:ring-pink-200 transition-all duration-150 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus-visible:outline-gray-500 dark:focus-visible:ring-gray-600"
          aria-label="Work minutes"
        />
        <span className="text-sm text-gray-500">min</span>
      </div>
      <div className="flex items-center gap-3">
        <label htmlFor="break-minutes" className="font-medium">Break:</label>
        <input
          id="break-minutes"
          type="number"
          min="1"
          value={breakMinutes}
          onChange={(e) => setBreakMinutes(Number(e.target.value))}
          className="w-20 px-3 py-2 text-yellow-900 bg-yellow-100 rounded-lg border border-yellow-200 focus-visible:outline-2 focus-visible:outline-yellow-300 focus-visible:ring-2 focus-visible:ring-yellow-200 transition-all duration-150 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus-visible:outline-gray-500 dark:focus-visible:ring-gray-600"
          aria-label="Break minutes"
        />
        <span className="text-sm text-gray-500">min</span>
      </div>
      <div className="flex items-center gap-3">
        <label htmlFor="long-break-minutes" className="font-medium">Long Break:</label>
        <input
          id="long-break-minutes"
          type="number"
          min="1"
          value={longBreakMinutes}
          onChange={(e) => setLongBreakMinutes(Number(e.target.value))}
          className="w-24 px-3 py-2 text-purple-900 bg-purple-100 rounded-lg border border-purple-200 focus-visible:outline-2 focus-visible:outline-purple-300 focus-visible:ring-2 focus-visible:ring-purple-200 transition-all duration-150 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus-visible:outline-gray-500 dark:focus-visible:ring-gray-600"
          aria-label="Long break minutes"
        />
        <span className="text-sm text-gray-500">min</span>
      </div>
    </div>
  );
}
