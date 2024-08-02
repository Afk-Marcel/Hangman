import React, { useState } from "react";
import { FormControl, Button } from "react-bootstrap";

// Component for letter input and submitting guesses
const LetterInput = ({ handleGuess, guessedLetters }) => {
  const [letter, setLetter] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setLetter(e.target.value.toUpperCase());
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (letter && !guessedLetters.includes(letter)) {
      handleGuess(letter);
      setLetter("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl type="text" value={letter} onChange={handleChange} maxLength="1" placeholder="Enter a letter" />
      <Button type="submit" variant="primary" className="mt-2">
        Guess
      </Button>
    </form>
  );
};

export default LetterInput;
