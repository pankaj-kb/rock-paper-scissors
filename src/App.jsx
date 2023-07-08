/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import PlayerContext from "./context/PlayerContext";
import rockImg from "./assets/rock.png";
import scissorsImg from "./assets/scissors.png";
import paperImg from "./assets/paper.png";

const options = ["rock", "paper", "scissors"];

const iconMap = {
  rock: rockImg,
  paper: paperImg,
  scissors: scissorsImg,
};

const App = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [computerChoice, setComputerChoice] = useState(options[1]);

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
  };

  const handleNext = () => {
    const currentIndex = options.indexOf(selectedOption);
    const nextIndex = (currentIndex + 1) % options.length;
    setSelectedOption(options[nextIndex]);
  };

  const handleUserIconChange = () => {
    setIcon(iconMap[selectedOption]);
  };

  const handleComChoice = () => {
    const computerChoiceIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[computerChoiceIndex];
    const result = determineWinner(selectedOption, computerChoice);

    setComputerChoice(computerChoice);
    setWinner(result);

    // handleBotIconChange();

    if (result === playerName) {
      setUserScore(userScore + 1);
    } else if (result === "Bot") {
      setComScore(comScore + 1);
    }
  };

  const handleBotIconChange = () => {
    setBotIcon(iconMap[computerChoice]);
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
      return "Bot";
    }
  };

  const resetScore = () => {
    setComScore(0);
    setUserScore(0);
    setComputerChoice(rockImg);
    setSelectedOption(options[0]);
  };

  useEffect(() => {
    handleUserIconChange();
  }, [selectedOption]);

  useEffect(() => {
    handleBotIconChange();
  }, [computerChoice]);

  return (
    <div className="game">
      <h1 className="game-heading">Rock Paper Scissors</h1>
      <div className="selection">
        <div className="selection-user">
          <img src={icon} alt={selectedOption} />
          <div>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
        <div className="selection-bot">
          <img src={botIcon} alt={computerChoice} />
        </div>
      </div>
      <div className="play-button">
        <button onClick={handleComChoice}>Play</button>
      </div>
      <div>
        <h1>Winner : {winner}</h1>
      </div>
      <div>
        <div className="score-section">
          {/* <h1 className="score-title">Score</h1> */}
          <h1 className="user-score">
            {playerName}: {userScore}
          </h1>
          <h1 className="bot-score">Bot: {comScore}</h1>
        </div>
        <div className="reset-game">
        <button onClick={resetScore}>Reset Game</button>
        </div>
      </div>
    </div>
  );
};

export default App;
