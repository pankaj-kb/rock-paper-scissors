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
