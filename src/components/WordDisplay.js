import React from "react";

// Component to display the current state of the word with guessed letters
const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="word-display">
      {word.split("").map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
