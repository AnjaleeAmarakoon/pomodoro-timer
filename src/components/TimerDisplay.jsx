export default function TimerDisplay({ isWorkSession, timeLeft }) {
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-center">
      <h2 className="text-xl font-medium mb-2">
        {isWorkSession ? "Work Session" : "Break Time"}
      </h2>
      <p className="text-6xl font-mono">{formatTime(timeLeft)}</p>
    </div>
  );
}
