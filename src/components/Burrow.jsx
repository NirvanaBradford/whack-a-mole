import { useContext } from "react";
import GameContext from "../Game/GameContext";

function Burrow({ hasMole }) {
  const { hop } = useContext(GameContext);
  return <li className={`hole ${hasMole ? "mole" : ""}`} onClick={hop}></li>;
}

export default Burrow;
