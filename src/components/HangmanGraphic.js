import React from "react";
import { Image } from "react-bootstrap";
import state1 from "../images/state1.GIF";
import state2 from "../images/state2.GIF";
import state3 from "../images/state3.GIF";
import state4 from "../images/state4.GIF";
import state5 from "../images/state5.GIF";
import state6 from "../images/state6.GIF";
import state7 from "../images/state7.GIF";
import state8 from "../images/state8.GIF";
import state9 from "../images/state9.GIF";
import state10 from "../images/state10.gif";
import state11 from "../images/state11.GIF";

// Component to display the hangman graphic based on incorrect guesses
const HangmanGraphic = ({ incorrectGuesses, gameStatus }) => {
  // Array of hangman state images
  const images = [state1, state2, state3, state4, state5, state6, state7, state8, state9, state10, state11];

  // Choose the image to display based on game status
  const imageSrc = gameStatus === "lost" ? images[10] : images[incorrectGuesses];

  return (
    <div className="hangman-graphic">
      <Image src={imageSrc} alt={`Hangman state ${incorrectGuesses + 1}`} fluid />
    </div>
  );
};

export default HangmanGraphic;
