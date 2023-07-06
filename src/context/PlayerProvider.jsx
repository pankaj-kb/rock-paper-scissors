/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PlayerContext from "./PlayerContext";

const PlayerProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState("Player 1");

  const updatePlayerName = (name) => {
    setPlayerName(name);
  };

  return (
    <PlayerContext.Provider value={{ playerName, updatePlayerName }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
