import { useState } from "react";

export function Score(props) {
  const [score, setScore] = useState(props.score);

  return (
    <div className="flex justify-between items-center border-b-2 border-gray-100 w-[466px] h-[72px] py-4">
      <div>
        <p className="text-lg font-semibold">{props.playerName}</p>
      </div>
      <div className="flex justify-between items-center w-32 h-10 rounded-[48px] bg-gray-50">
        <button
          onClick={() => setScore(score + 1)}
          className="w-10 h-10 rounded-full border border-slate-100 bg-white"
        >
          +
        </button>
        <p>{score}</p>
        <button
          onClick={() => setScore(score - 1)}
          className="w-10 h-10 rounded-full border border-slate-100 bg-white"
        >
          -
        </button>
      </div>
    </div>
  );
}
