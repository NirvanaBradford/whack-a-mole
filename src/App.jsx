import { useContext } from "react";
import GameContext from "./Game/GameContext";
import ScorePanel from "./components/ScorePanel";
import Welcome from "./components/Welcome";
import BurrowField from "./components/BurrowField";

import "./index.css";

export default function App() {
  const { playing } = useContext(GameContext);
  console.log("playing", playing);

  return (
    <>
      <h1>Whack-a-Mole</h1>
      {playing ? (
        <>
          <ScorePanel />
          <BurrowField />
        </>
      ) : (
        <>
          <Welcome />
        </>
      )}
    </>
  );
}
