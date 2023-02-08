import Logo from "../assets/logo.png";
import React from "react";
import HangmanMedium from "../components/HangmanDifficulty/HangmanMedium";
import HangmanEasy from "../components/HangmanDifficulty/HangmanEasy";
import HangmanHard from "../components/HangmanDifficulty/HangmanHard";
import { AiFillGithub } from "react-icons/ai";

const Home: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = React.useState("");
  const [difficultyMenu, setDifficultyMenu] = React.useState<boolean>(true);
  const [difficultyColor, setDifficultyColor] = React.useState<string>(
    "primary" || "warning" || "danger"
  );

  const handleDifficultySelection = (difficulty: string, color: string) => {
    setSelectedDifficulty(difficulty);
    setDifficultyMenu(false);
    setDifficultyColor(color);
  };

  return (
    <div className="d-flex flex-column p-4 align-items-center justify-content-center">
      <div className="reset-difficulty">
      {selectedDifficulty && (
        <div className="d-flex flex-column">
          <small className="text-secondary">
            Difficulty :{" "}
            <span className={`text-${difficultyColor}`}>
              {selectedDifficulty}
            </span>
          </small>
        </div>
      )}
      
        <small
          onClick={() => {
            setDifficultyMenu(true);
          }}
          className="text-white cursor-pointer me-5"
        >
          
          Change difficulty
          
        </small>
        

      </div>
      <img className="negatif logo-mobile" src={Logo} alt="React Hangman logo" />


      {difficultyMenu ? (
        <React.Fragment>
          <span className="text-white mt-5">Choose difficulty:</span>
          <div className="text-white d-flex">
            <button
              onClick={() => {
                handleDifficultySelection("Easy", "primary");
              }}
              className="select-difficulty-buttons m-2 btn btn-primary"
            >
              Easy
            </button>
            <button
              onClick={() => {
                handleDifficultySelection("Medium", "warning");
              }}
              className="select-difficulty-buttons m-2 btn btn-warning"
            >
              Medium
            </button>
            <button
              onClick={() => {
                handleDifficultySelection("Hard", "danger");
              }}
              className="select-difficulty-buttons m-2 btn btn-danger"
            >
              Hard
            </button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {selectedDifficulty === "Easy" && <HangmanEasy />}
          {selectedDifficulty === "Medium" && <HangmanMedium />}
          {selectedDifficulty === "Hard" && <HangmanHard />}
        </React.Fragment>
      )}
      <small className="copyright text-secondary">
        Copyright - Rendom() <small className="bold">Ethan Taylan </small> - All
        rights reserved - Contact me{" "}
        <a
          target="_blank"
          href="https://github.com/ethantaylan"
          className="bold no-text-decoration text-secondary cursor-pointer"
        >
          here
        </a>
      </small>
    </div>
  );
};

export default Home;
