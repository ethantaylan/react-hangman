import React from "react";

interface HangmanInformationsProps {
  fails: number | string;
  correctGuesses: string[];
}

const HangmanInformations: React.FC<HangmanInformationsProps> = ({
  fails,
  correctGuesses,
}) => {
  return (
    <div>
      <span className="display-5 text-danger">Nombres d'erreurs : {fails}</span>
      <h5 className="text-success">{correctGuesses}</h5>
    </div>
  );
};

export default HangmanInformations;
