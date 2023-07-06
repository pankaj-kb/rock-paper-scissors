/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import "./App.css";
import PlayerContext from "./context/PlayerContext";
import rockImg from "./assets/rock.png";
import scissorsImg from "./assets/scissors.png";
import paperImg from "./assets/paper.png";

const App = () => {
  const options = ["rock", "paper", "scissors"];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [computerChoice, setComputerChoice] = useState(rockImg);

  const [winner, setWinner] = useState("");

  const [userScore, setUserScore] = useState(0);

  const [comScore, setComScore] = useState(0);

  const [icon, setIcon] = useState(rockImg);

  const [botIcon, setBotIcon] = useState(rockImg);

  const { playerName } = useContext(PlayerContext);

  const handlePrevious = () => {
    const currentIndex = options.indexOf(selectedOption);
    const previousIndex = (currentIndex - 1 + options.length) % options.length;
    setSelectedOption(options[previousIndex]);
    handleUserIconChange();
  };

  const handleNext = () => {
    const currentIndex = options.indexOf(selectedOption);
    const nextIndex = (currentIndex + 1) % options.length;
    setSelectedOption(options[nextIndex]);
    handleUserIconChange();
  };

  const handleUserIconChange = () => {
    if (selectedOption === options[0]) {
      setIcon(rockImg);
    }
    if (selectedOption === options[1]) {
      setIcon(paperImg);
    }
    if (selectedOption === options[2]) {
      setIcon(scissorsImg);
    }
  };

  const handleComChoice = () => {
    const computerChoiceIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[computerChoiceIndex];
    handleBotIconChange()
    setComputerChoice(computerChoice);
    const result = determineWinner(selectedOption, computerChoice);
    setWinner(result);
    if (result === playerName) {
      setUserScore(userScore + 1);
    } else if (result === "Bot Wins") {
      setComScore(comScore + 1);
    }
  };

  const handleBotIconChange = () => {
    if (computerChoice === options[0]) {
      setBotIcon(rockImg);
    }
    if (computerChoice === options[1]) {
      setBotIcon(paperImg);
    }
    if (computerChoice === options[2]) {
      setBotIcon(scissorsImg);
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
    <div className="game">
      <h1 className="game-heading">Rock Paper Scissors</h1>
      <div>
        <img src={icon} alt="" />
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <img src={botIcon} alt="" />
      </div>
      <div>
        <button onClick={handleComChoice}>Play</button>
      </div>
      <div>
        <h1>Winner : {winner}</h1>
      </div>
      <div>
        <div>
          <h1>Score</h1>
          <h1>
            {playerName}: {userScore}
          </h1>
          <h1>Bot: {comScore}</h1>
        </div>
        <button onClick={resetScore}>Reset Game</button>
      </div>
    </div>
  );
};

export default App;
