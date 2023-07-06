/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import "./App.css";
import PlayerContext from "./context/PlayerContext";

const App = () => {
  const options = ["rock", "paper", "scissors"];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [computerChoice, setComputerChoice] = useState("Press Play");

  const [winner, setWinner] = useState("");

  const [userScore, setUserScore] = useState(0);

  const [comScore, setComScore] = useState(0);

  const { playerName } = useContext(PlayerContext);

  const handlePrevious = () => {
    const currentIndex = options.indexOf(selectedOption);
    const previousIndex = (currentIndex - 1 + options.length) % options.length;
    setSelectedOption(options[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = options.indexOf(selectedOption);
    const nextIndex = (currentIndex + 1) % options.length;
    setSelectedOption(options[nextIndex]);
  };

  const handleComChoice = () => {
    const computerChoiceIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[computerChoiceIndex];
    setComputerChoice(computerChoice);
    const result = determineWinner(selectedOption, computerChoice);
    setWinner(result);
    if (result === playerName) {
      setUserScore(userScore + 1);
    } else if (result === "Bot Wins") {
      setComScore(comScore + 1);
    }
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a Draw";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return playerName;
    } else {
      return "Bot Wins";
    }
  };

  const resetScore = () => {
    setComScore(0);
    setUserScore(0);
    setComputerChoice("");
    setSelectedOption(options[0]);
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <h1>{selectedOption}</h1>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <button onClick={handleComChoice}>Play</button>
        <h2>Bot Choice: {computerChoice}</h2>
      </div>
      <div>
        <h1>Winner is : {winner}</h1>
      </div>
      <div>
        <h1>{playerName} Score : {userScore}</h1>
        <h1>Bot Score : {comScore}</h1>
        <button onClick={resetScore}>Reset Game</button>
      </div>
    </div>
  );
};

export default App;
