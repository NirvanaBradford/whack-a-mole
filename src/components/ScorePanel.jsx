import { useContext } from "react";
import GameContext from "../Game/GameContext";

function ScorePanel() {
  const { score, time, stop } = useContext(GameContext);

  return (
    <section className="scoreboard">
      <div>
        score <strong>{score}</strong>
      </div>
      <div>
        time <strong>{time}</strong>
      </div>
      <button onClick={stop}>Resart</button>
    </section>
  );
}

export default ScorePanel;
