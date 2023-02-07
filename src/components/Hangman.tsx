import React from "react";
import HangmanInformations from "./HangmanInformations";

const words = [
  "bulles",
  "avion",
  "portable",
  "television",
  "demarreur",
  "clavier",
  "abordable",
  "adorable",
  "wagon",
  "expediteur",
  "exasperer",
];

const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const Hangman: React.FC = () => {
  const [incorrectGuesses, setIncorrectGuesses] = React.useState(0);
  const [correctGuesses, setCorrectGuesses] = React.useState<string[]>([]);
  const [selectedWord, setSelectedWord] = React.useState("");
  const [replacedWord, setReplacedWord] = React.useState<string[]>([]);
  const [usedLetters, setUsedLetters] = React.useState<string[]>([]);

  const getRandomWord = (words: string[]) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const replaceWithUnderscores = (word: string) => {
    return "_".repeat(word.length).split("");
  };

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
      console.log("you lost");
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
    </div>
  );
};

export default Hangman;
