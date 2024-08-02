import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

// Component to display help with game rules
const Help = () => {
  const [show, setShow] = useState(false);

  // Handle show and hide of the help modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow} className="mt-3">
        Help
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Play Hangman</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>1. A word will be selected randomly.</p>
          <p>2. Guess letters one at a time.</p>
          <p>3. Incorrect guesses will add to the hangman graphic.</p>
          <p>4. If you guess the word or run out of tries, the game ends.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Help;
