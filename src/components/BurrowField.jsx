import { useContext } from "react";
import GameContext from "../Game/GameContext";
import Burrow from "./Burrow";

function BurrowField() {
  const { burrows } = useContext(GameContext);
  console.log("burrows", burrows);

  return (
    <ul className="field">
      {burrows.map((hasMole, index) => (
        <Burrow key={index} hasMole={hasMole} />
      ))}
    </ul>
  );
}

export default BurrowField;
