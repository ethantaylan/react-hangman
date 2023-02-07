import React from "react";
import HangmanInformations from "./HangmanInformations";
import { words } from "./words";
import newgame from "../assets/hangman/new-game.png";
import a from "../assets/hangman/1.png";
import b from "../assets/hangman/2.png";
import c from "../assets/hangman/3.png";
import d from "../assets/hangman/4.png";
import e from "../assets/hangman/5.png";
import f from "../assets/hangman/6.png";
import g from "../assets/hangman/7.png";
import h from "../assets/hangman/8.png";
import i from "../assets/hangman/9.png";
import j from "../assets/hangman/10.png";
import gameover from "../assets/hangman/game-over.png";
import WinGif from "../assets/hangman/win.gif";
import useMediaQuery from "../hooks/useMediaQuery";
import { WinModal } from "./WinModal";

interface Alphabet {
  letter: string;
  disabled: boolean;
}

const Hangman: React.FC = () => {
  const [remainingTries, setRemainingTries] = React.useState<number>(11);
  const [correctGuesses, setCorrectGuesses] = React.useState<string[]>([]);
  const [selectedWord, setSelectedWord] = React.useState("");
  const [replacedWord, setReplacedWord] = React.useState<string[]>([]);
  const [newGameBtn, setNewGameBtn] = React.useState<boolean>(false);
  const [hangman, setHangman] = React.useState<string>(newgame);
  const [win, setWin] = React.useState<boolean>(false);
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const matches = useMediaQuery("(max-width:768px)");

  const defaultAlphabet = "abcdefghijklmnopqrstuvwxyz"
    .toUpperCase()
    .split("")
    .map((a) => ({ letter: a, disabled: false }));

  const [alphabet, setAlphabet] = React.useState<Alphabet[]>(defaultAlphabet);

  const getRandomWord = (words: string[]) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const randomWord = getRandomWord(words).toUpperCase();

  const replaceWithUnderscores = (word: string) => {
    return "_".repeat(word.length).split("");
  };

  const resetGame = () => {
    getRandomWord(words);
    setRemainingTries(11);
    setCorrectGuesses([""]);
    setNewGameBtn(false);
    setHangman(newgame);
    setAlphabet(defaultAlphabet);
    setReplacedWord(replaceWithUnderscores(randomWord));
  };

  React.useEffect(() => {
    setLoading(false);
    console.log(loading);
  }, [loading]);

  React.useEffect(() => {
    switch (remainingTries) {
      case 11:
        setNewGameBtn(false);
        setHangman(newgame);
        break;
      case 10:
        setHangman(a);
        break;
      case 9:
        setHangman(b);
        break;
      case 8:
        setHangman(c);
        break;
      case 7:
        setHangman(d);
        break;
      case 6:
        setHangman(e);
        break;
      case 5:
        setHangman(f);
        break;
      case 4:
        setHangman(g);
        break;
      case 3:
        setHangman(h);
        break;
      case 2:
        setHangman(i);
        break;
      case 1:
        setHangman(j);
        break;
      case 0:
        setNewGameBtn(true);
        setHangman(gameover);
        break;
    }
  }, [remainingTries]);

  React.useEffect(() => {
    setSelectedWord(randomWord);
    setReplacedWord(replaceWithUnderscores(randomWord));
  }, []);

  React.useEffect(() => {
    if (replacedWord.join("").includes(randomWord)) {
      setWin(true);
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

  return (
    <React.Fragment>
      <div className="d-flex mt-5 text-white align-items-center mb-5 flex-column">
        {show && (
          <WinModal
            onClick={() => {
              resetGame();
              setShow(false);
            }}
            show={show}
            onHide={() => setShow(false)}
          >
            {win && <img className="win-gif" src={WinGif}></img>}
          </WinModal>
        )}
        <img
          height={matches ? 200 : 220}
          width={matches ? 300 : 350}
          className="mb-5 hangman-image"
          src={hangman}
          alt=""
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
              resetGame();
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

export default Hangman;
