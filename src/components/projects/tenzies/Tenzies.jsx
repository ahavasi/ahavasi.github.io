import React, { useEffect, useState } from "react";
import "./Tenzies.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Die from "./Die";

export default function Tenzies() {
  const [dice, setDice] = useState(allNewDice);

  const [tenzies, setTenzies] = useState(false);

  const [rolls, setRolls] = useState(0);

  const [stopwatch, setStopwatch] = useState(0);

  const [highscore, setHighscore] = useState(
    JSON.parse(localStorage.getItem("highscore")) || { rolls: 0, time: 0 }
  );

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allSameValue = dice.every((die) => die.value === dice[0].value);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [dice]);

  useEffect(() => {
    const counter = setInterval(() => {
      if (rolls > 0 && !tenzies) {
        setStopwatch((prevState) => prevState + 1);
      }
    }, 1000);
    return () => clearInterval(counter);
  }, [rolls]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
      setRolls(0);
      setStopwatch(0);
      if (stopwatch < highscore.time) {
        const score = { rolls: rolls, time: stopwatch };
        setHighscore(score);
        localStorage.setItem("highscore", JSON.stringify(score));
      }
    } else {
      setDice((prevDice) =>
        prevDice.map((die) => (die.isHeld ? die : generateNewDie()))
      );
      setRolls((prevRolls) => prevRolls + 1);
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main className="tenzies-main">
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice--container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
      <div className="game--info">
        <p>Number of Rolls: {rolls}</p>
        <p>Time: {stopwatch} s</p>
        <p>
          High Score: {highscore.rolls} rolls in {highscore.time} seconds
        </p>
      </div>
    </main>
  );
}
