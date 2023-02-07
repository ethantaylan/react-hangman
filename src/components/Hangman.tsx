import React from "react";
import HangmanInformations from "./HangmanInformations";
import { words } from "./words";

const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const Hangman: React.FC = () => {
  const [incorrectGuesses, setIncorrectGuesses] = React.useState<number>(0);
  const [correctGuesses, setCorrectGuesses] = React.useState<string[]>([]);
  const [selectedWord, setSelectedWord] = React.useState("");
  const [replacedWord, setReplacedWord] = React.useState<string[]>([]);
  const [usedLetters, setUsedLetters] = React.useState<string[]>([]);
  const [msgToUser, setMsgToUser] = React.useState<string>("");
  const [newGameBtn, setNewGameBtn] = React.useState<boolean>(false);

  const getRandomWord = (words: string[]) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const replaceWithUnderscores = (word: string) => {
    return "_".repeat(word.length).split("");
  };

  React.useEffect(() => {
    switch (incorrectGuesses) {
      case 0:
        setMsgToUser("Welcome to React Hangman :)");
        break;
      case 1:
        setMsgToUser("hmm... wrong guess");
        break;
      case 2:
        setMsgToUser("you look good, it's ok right now");
        break;
      case 3:
        setMsgToUser("ok.. you are actually fine");
        break;
      case 4:
        setMsgToUser("arf... care, another wrong guess !!");
        break;
      case 5:
        setMsgToUser("you have one more try...");
        break;
      case 6:
        setMsgToUser("You lost :(");
        break;
    }
  }, [incorrectGuesses]);

  React.useEffect(() => {
    const randomWord = getRandomWord(words).toUpperCase();
    setSelectedWord(randomWord);
    setReplacedWord(replaceWithUnderscores(randomWord));
  }, []);

  const handleLetterClick = (letter: string) => {
    if (usedLetters.includes(letter)) {
      alert("Letter already used");
      return;
    }

    if (incorrectGuesses === 6) {
      setNewGameBtn(true);
      return;
    }

    setUsedLetters((usedLetters) => [...usedLetters, letter]);

    if (selectedWord.includes(letter)) {
      setCorrectGuesses((correctGuesses) => [...correctGuesses, letter]);

      setReplacedWord((replacedWord) => {
        const newReplacedWord = [...replacedWord];
        for (let i = 0; i < selectedWord.length; i++) {
          if (selectedWord[i] === letter) {
            newReplacedWord[i] = letter;
          }
        }
        return newReplacedWord;
      });
    } else {
      setIncorrectGuesses((incorrectGuesses) => incorrectGuesses + 1);
    }
  };

  return (
    <div className="d-flex mt-5 text-white align-items-center mb-5 flex-column">
      <HangmanInformations
        fails={incorrectGuesses}
        correctGuesses={correctGuesses}
      />
      <span className="text-secondary">
        Used letters : {usedLetters?.map((letter) => letter).join(" - ")}
      </span>
      <span className="mb-5 display-6">{replacedWord.join(" ")}</span>
      <div className="d-flex justify-content-center flex-wrap w-75">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className="letter-button"
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <h1 className="mt-5">{msgToUser}</h1>
      {newGameBtn && (
        <button
          onClick={() => setNewGameBtn(false)}
          className="mt-5 btn btn-outline-primary"
        >
          Start new game
        </button>
      )}
    </div>
  );
};

export default Hangman;
