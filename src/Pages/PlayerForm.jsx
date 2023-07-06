/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerContext from "../context/PlayerContext";

const PlayerForm = () => {
  const { updatePlayerName } = useContext(PlayerContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayerName(name);
    navigate("/game");
  };

  return (
    <div className="player-form-container">
      <form className="player-name-form" onSubmit={handleSubmit}>
        <input
          className="player-name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Player 1"
        />
        <button type="submit">/Game</button>
      </form>
    </div>
  );
};

export default PlayerForm;
