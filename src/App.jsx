/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./App.css";

const App = () => {
  const options = ["rock", "paper", "scissors"];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [computerChoice, setComputerChoice] = useState("Press Play");

  const [winner, setWinner] = useState("");

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
    if (result === "You !!") {
      console.log("you won")
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
      return "You !!";
    } else {
      return "Bot Wins";
    }
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <span>{selectedOption}</span>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <button onClick={handleComChoice}>Play</button>
        <h2>Computer Choice: {computerChoice}</h2>
      </div>
      <div>
        <h1>Winner is : {winner}</h1>
      </div>
    </div>
  );
};

export default App;
