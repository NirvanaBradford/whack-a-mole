import { createContext, useEffect, useState, useRef } from "react";

const NUM_BURROWS = 9;
const TIME_LIMIT = 10;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [burrows, setBurrows] = useState();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(TIME_LIMIT);
  const [playing, setPlaying] = useState(false);
  const timer = useRef();

  // Keeps track of the game time, it ends by calling stop[]
  useEffect(() => {
    if (time <= 0 && playing) {
      stop();
    }
  }, [time, playing]);

  const start = () => {
    setScore(0);
    setPlaying(true);
    setBurrows(makeBurrows());
    timer.current = setInterval(
      () => setTime((prevTime) => prevTime - 1),
      1000
    );
  };

  // stops the game
  //sets playing to false
  // reset the timer
  const stop = () => {
    setPlaying(false);
    clearInterval(timer.current);
    setTime(TIME_LIMIT);
  };

  const hop = () => {
    setScore((prevScore) => prevScore + 1);
    setBurrows(makeBurrows(burrows));
  };

  const value = {
    burrows,
    score,
    time,
    timelimit: TIME_LIMIT,
    playing,
    start,
    stop,
    hop,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

function makeBurrows(prev = []) {
  const newField = Array(NUM_BURROWS).fill(false);
  let Mole = Math.floor(Math.random() * NUM_BURROWS);

  while (prev[Mole]) {
    Mole = Math.floor(Math.random() * NUM_BURROWS);
  }

  newField[Mole] = true;
  return newField;
}

export default GameContext;
