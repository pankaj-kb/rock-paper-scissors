/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

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

  const handleComChoise = () => {
    setComputerChoice(options[Math.floor(Math.random() * options.length)]);
    handleWinner();
  };

  const handleWinner = () => {
    if (
      (selectedOption == options[0] && computerChoice == options[2]) ||
      (selectedOption == options[1] && computerChoice == options[0]) ||
      (selectedOption == options[2] && computerChoice == options[1])
    ) {
      setWinner("You");
    }
    if (
      (selectedOption == options[0] && computerChoice == options[1]) ||
      (selectedOption == options[1] && computerChoice == options[2]) ||
      (selectedOption == options[2] && computerChoice == options[0])
    ) {
      setWinner("Computer");
    }
    if (selectedOption == computerChoice) {
      setWinner("Draw");
    }
  };

  // useEffect({handleWinner},[]);

  // const comSelect = () => {
  //   const comChoise = Math.random(options[])
  // }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <span>{selectedOption}</span>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <button onClick={handleComChoise}>Play</button>
        <h2>Computer Choice: {computerChoice}</h2>
      </div>
      <div>
        <h1>Winner is : {winner}</h1>
      </div>
    </div>
  );
};

export default App;
