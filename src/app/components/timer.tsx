"use client";
import React from "react";

function timeStr(seconds: number) {
  if (seconds <= 0) {
    return "Time's up!";
  }
  let mins = Math.floor(seconds / 60);
  let s = seconds % 60;
  let strS = s < 10 ? "0" + s : s.toString();
  return mins + ":" + strS;
}

const Timer = ({ seconds }: { seconds?: number }) => {
  const start_time = seconds || 180;
  const [time, setTime] = React.useState(start_time);
  const [isRunning, setIsRunning] = React.useState(false);

  const buttonText = isRunning ? "Pause" : "Start";

  React.useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  React.useEffect(() => {
    if (time <= 0) {
      setIsRunning(false);
    }
  }, [time]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-xl">{timeStr(time)}</h1>
      <span className="flex gap-4">
        <button
          className="border-2 p-2 rounded-md"
          onClick={() => setIsRunning((isRunning) => !isRunning)}
        >
          {buttonText}
        </button>
        <button
          className="border-2 p-2 rounded-md"
          onClick={() => {
            setIsRunning(false);
            setTime(start_time);
          }}
        >
          Reset
        </button>
      </span>
    </div>
  );
};

export default Timer;
