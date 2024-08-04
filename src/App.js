import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WordDisplay from "./components/WordDisplay";
import LetterInput from "./components/LetterInput";
import HangmanGraphic from "./components/HangmanGraphic";
import RestartButton from "./components/RestartButton";
import Help from "./components/Help";
import Dictionary from "./dictionary.txt";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  // State variables
  const [words, setWords] = useState([]);
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");

  // Fetch words from Dictionary.txt on component mount
  useEffect(() => {
    fetch(Dictionary)
      .then((response) => response.text())
      .then((text) => {
        const wordsArray = text
          .split("\n")
          .map((word) => word.trim())
          .filter((word) => word);
        setWords(wordsArray);
        startNewGame(wordsArray);
      });
  }, []);

  // Start a new game with a random word
  const startNewGame = (wordsArray) => {
    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus("playing");
  };

  // Handle user guesses and update game state
  const handleGuess = (letter) => {
    if (gameStatus !== "playing") return;

    if (word.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      if (incorrectGuesses < 10) {
        // Limit incorrect guesses to 11 states
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }

    // Check for win condition
    if (word.split("").every((l) => guessedLetters.includes(l) || l === letter)) {
      setGameStatus("won");
    }

    // Check for lose condition
    if (incorrectGuesses + 1 === 11) {
      setGameStatus("lost");
    }
  };

  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>Hangman Game</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Display the current hangman graphic */}
          <HangmanGraphic incorrectGuesses={incorrectGuesses} gameStatus={gameStatus} />
          {/* Display the word with guessed letters */}
          <WordDisplay word={word} guessedLetters={guessedLetters} />
          {/* Component to handle letter inputs */}
          <LetterInput handleGuess={handleGuess} guessedLetters={guessedLetters} />
          {/* Show messages based on game status */}
          {gameStatus === "won" && <p>Congratulations! You won!</p>}
          {gameStatus === "lost" && <p>Sorry, you lost. The word was: {word}</p>}
          {/* Button to restart the game */}
          <RestartButton startNewGame={() => startNewGame(words)} />
          {/* Help component for game rules */}
          <Help />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
