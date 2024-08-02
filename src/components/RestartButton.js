import React from "react";
import { Button } from "react-bootstrap";

// Component to restart the game
const RestartButton = ({ startNewGame }) => {
  return (
    <Button variant="danger" onClick={startNewGame} className="mt-3">
      Restart Game
    </Button>
  );
};

export default RestartButton;
