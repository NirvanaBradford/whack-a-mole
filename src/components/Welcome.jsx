import { useContext } from "react";
import GameContext from "../Game/GameContext";

function Welcome() {
  const { start } = useContext(GameContext);
  return (
    <>
      <section className="welcome">
        <p>Welcome to Whack a Mole!</p>
        <p>Whack a mole to earn points.</p>
        <p>How many can you get?</p>
        <button onClick={start}>play</button>
      </section>
      <section className="highscore">
        <h2>High Score</h2>
      </section>
    </>
  );
}

export default Welcome;
