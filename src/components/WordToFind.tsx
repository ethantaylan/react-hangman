import React from "react";

const Words = [
  "Bulles",
  "Avion",
  "Portable",
  "Television",
  "Demarreur",
  "Clavier",
  "Abordable",
  "Adorable",
  "Wagon",
  "Expediteur",
  "Exasperer",
];

const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const WordToFind: React.FC = () => {
  const [replacedWord, setReplacedWord] = React.useState<string[]>([]);

  const getRandomWord = (words: string[]) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const replaceWithUnderscores = (word: string) => {
    return "_".repeat(word.length).split("");
  };

  const randomWord = getRandomWord(Words);
  const underscores = replaceWithUnderscores(randomWord);

  React.useEffect(() => {
    setReplacedWord(underscores);
  }, []);

  const handleLetterClick = (letter: string) => {
    let newReplacedWord = [...replacedWord];
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i].toUpperCase() === letter) {
        newReplacedWord[i] = letter;
      }
    }
    setReplacedWord(newReplacedWord);
  };

  return (
    <div className="d-flex mt-5 text-white align-items-center mb-5 flex-column">
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

export default WordToFind;
