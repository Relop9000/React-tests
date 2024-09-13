import { useState } from "react";
import Trophy from "./icons/Trophy";
import { Score } from "./Score";

const players = [
  {
    id: 1,
    playerName: "John Cena",
    playerScore: 10,
  },
  {
    id: 2,
    playerName: "John John",
    playerScore: 8,
  },
  {
    id: 3,
    playerName: "John Kena",
    playerScore: 5,
  },
];

const PlayerScore = () => {
  const [score, setScore] = useState(players);

  const clear = () => {
    setScore([...players]);
  };

  return (
    <div className="w-[530px] h-[533px] border border-solid rounded-3xl p-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[28px] font-bold">Play Score</p>
          <p className="text-base font-medium text-black">
            Hidden in the middle of text
          </p>
        </div>
        <div>
          <Trophy />
        </div>
      </div>
      {players.map((player) => {
        return (
          <Score
            key={player.id}
            playerName={player.playerName}
            score={player.playerScore}
          />
        );
      })}
      <div className="flex justify-end mt-12">
        <button
          onClick={clear}
          className="bg-emerald-500 w-[120px] h-14 text-white p-4 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default PlayerScore;
