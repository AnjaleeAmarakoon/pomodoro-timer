export default function Settings({
  workMinutes,
  breakMinutes,
  setWorkMinutes,
  setBreakMinutes,
}) {
  return (
    <div className="flex gap-6 justify-center mt-6">
      <div className="flex items-center gap-2">
        <label>Work:</label>
        <input
          type="number"
          min="1"
          value={workMinutes}
          onChange={(e) => setWorkMinutes(Number(e.target.value))}
          className="w-16 px-2 py-1 text-black rounded"
        />{" "}
        min
      </div>
      <div className="flex items-center gap-2">
        <label>Break:</label>
        <input
          type="number"
          min="1"
          value={breakMinutes}
          onChange={(e) => setBreakMinutes(Number(e.target.value))}
          className="w-16 px-2 py-1 text-black rounded"
        />{" "}
        min
      </div>
    </div>
  );
}
