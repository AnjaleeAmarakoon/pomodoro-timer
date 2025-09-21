export default function Settings({
  workMinutes,
  breakMinutes,
  setWorkMinutes,
  setBreakMinutes,
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
          className="w-20 px-3 py-2 text-black rounded-lg border border-gray-300 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-300 transition-all duration-150 shadow-sm"
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
          className="w-20 px-3 py-2 text-black rounded-lg border border-gray-300 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-300 transition-all duration-150 shadow-sm"
          aria-label="Break minutes"
        />
        <span className="text-sm text-gray-500">min</span>
      </div>
    </div>
  );
}
