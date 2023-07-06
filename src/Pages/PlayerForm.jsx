/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import PlayerContext from "../context/PlayerContext";

const PlayerForm = () => {
  const { updatePlayerName } = useContext(PlayerContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayerName(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
};

export default PlayerForm;
