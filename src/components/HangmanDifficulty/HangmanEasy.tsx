import React from "react";
import HangmanInformations from "../HangmanInformations/HangmanInformations";
import useMediaQuery from "../../hooks/useMediaQuery";
import { WinModal } from "../WinModal/WinModal";

import { easyWords } from "../Words/easy";
import { Alphabet } from "../alphabet";
import { hangmanImages } from "../hangman-images";

const HangmanEasy: React.FC = () => {
  const [remainingTries, setRemainingTries] = React.useState<number>(11);
  const [correctGuesses, setCorrectGuesses] = React.useState<string[]>([]);
  const [selectedWord, setSelectedWord] = React.useState("");
  const [replacedWord, setReplacedWord] = React.useState<string[]>([]);
  const [newGameBtn, setNewGameBtn] = React.useState<boolean>(false);
  const [hangman, setHangman] = React.useState<string>(hangmanImages[11]);
  const [show, setShow] = React.useState<boolean>(false);

  const matches = useMediaQuery("(max-width:768px)");

  const defaultAlphabet = "abcdefghijklmnopqrstuvwxyz"
    .toUpperCase()
    .split("")
    .map((a) => ({ letter: a, disabled: false }));

  const [alphabet, setAlphabet] = React.useState<Alphabet[]>(defaultAlphabet);

  const getRandomEasyWord = (easyWords: string[]) => {
    const randomIndex = Math.floor(Math.random() * easyWords.length);
    return easyWords[randomIndex];
  };
  const [randomEasyWord, setrandomEasyWord] = React.useState<string>(
    getRandomEasyWord(easyWords).toUpperCase()
  );

  const replaceWithUnderscores = (word: string) => {
    return "_".repeat(word.length).split("");
  };

  const resetEasyDifficultyGame = () => {
    const randomEasyWord = getRandomEasyWord(easyWords).toUpperCase();
    setrandomEasyWord(randomEasyWord);
    setSelectedWord(randomEasyWord);
    setRemainingTries(11);
    setCorrectGuesses([""]);
    setNewGameBtn(false);
    setHangman(hangmanImages[11]);
    setAlphabet(defaultAlphabet);
    setReplacedWord(replaceWithUnderscores(randomEasyWord));
  };

  const handleHangmanImage = (tries: number) => {
    setHangman(hangmanImages[tries]);
    setNewGameBtn(tries === 0);
  };

  React.useEffect(() => {
    handleHangmanImage(remainingTries);
  }, [remainingTries]);

  React.useEffect(() => {
    if (replacedWord.join("").includes(randomEasyWord)) {
      setShow(true);
    }
  }, [replacedWord]);

  const handleLetterClick = (letter: string) => {
    if (remainingTries === 11) {
      setNewGameBtn(false);
    }

    if (remainingTries === 0) {
      return;
    }

    const index = alphabet.findIndex((l) => l.letter === letter);
    const element = alphabet[index];
    element.disabled = true;

    alphabet.splice(index, 1, element);

    if (selectedWord.includes(letter)) {
      setCorrectGuesses([...correctGuesses, letter]);
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
      setRemainingTries(remainingTries - 1);
    }
  };

  React.useEffect(() => {
    setReplacedWord(replaceWithUnderscores(randomEasyWord));
    setSelectedWord(randomEasyWord);
  }, [selectedWord]);

  return (
    <React.Fragment>
      <div className="d-flex mt-5 text-white align-items-center mb-5 flex-column">
        {show && (
          <WinModal
            onClick={() => {
              resetEasyDifficultyGame();
              setShow(false);
            }}
            show={show}
            onHide={() => setShow(false)}
            />
        )}
          <img
            height={matches ? 200 : 220}
            width={matches ? 300 : 350}
            className='mb-5 hangman-image'
            src={hangman}
            alt="Hangman"
          />

        <HangmanInformations
          fails={remainingTries}
          correctGuesses={correctGuesses}
        />
        <span className="mb-5 display-6">{replacedWord.join(" ")}</span>
        <div
          className={`d-flex justify-content-center flex-wrap ${
            matches ? "w-100" : "w-50"
          }`}
        >
          {alphabet.map(({ letter, disabled }, index: number) => (
            <button
              key={index}
              className={`${disabled ? "disabled-letter" : "letter-button"}`}
              onClick={() => handleLetterClick(letter)}
              disabled={disabled}
            >
              {letter}
            </button>
          ))}
        </div>
        {newGameBtn && (
          <button
            onClick={() => {
              resetEasyDifficultyGame();
            }}
            className="mt-5 btn btn-outline-secondary"
          >
            Start new game
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default HangmanEasy;
