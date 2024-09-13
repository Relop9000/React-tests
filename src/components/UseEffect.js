import { useState, useEffect } from "react";
const Challenge = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;

  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-6xl text-green-400 flex justify-center mb-[50px]">
        Challenge
      </h1>
      <p className="text-2xl text-white flex justify-center">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="flex gap-2">
        <button
          className="w-[120px] h-10 bg-green-500 border border-solid border-white rounded text-white"
          onClick={start}
        >
          Start
        </button>
        <button
          className="w-[120px] h-10 bg-red-500 border border-solid border-white rounded text-white"
          onClick={stop}
        >
          Stop
        </button>
        <button
          className="w-[120px] h-10 bg-blue-500 border border-solid border-white rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Challenge;
