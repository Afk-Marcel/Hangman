# Hangman Game

## Table of Contents

- [Overview](#overview)
- [Game Rules](#game-rules)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
    - [npm start](#npm-start)
    - [npm test](#npm-test)
    - [npm run build](#npm-run-build)
    - [npm run eject](#npm-run-eject)
- [License](#license)

## Overview

This is a Hangman game built using React. The game allows users to guess a randomly selected word letter-by-letter. Too many incorrect guesses result in loss of the game, depicted by a hangman graphic. The game includes features such as user interaction, state synchronization between components, and an option to restart the game.

## Game Rules

1. A random word is selected from a pre-defined dictionary.
2. The user guesses letters one at a time.
3. Correct guesses reveal the letter in the word.
4. Incorrect guesses add parts to the hangman graphic.
5. The game is lost if the hangman is fully drawn (11 incorrect guesses).
6. The game is won if the user correctly guesses all the letters in the word before the hangman is fully drawn.
7. The user can restart the game at any time.

## Installation

To install and run this application on your local machine, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Afk-Marcel/Hangman.git
    cd YOUR-REPOSITORY
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to play the game.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## License

This project is licensed under the MIT License
