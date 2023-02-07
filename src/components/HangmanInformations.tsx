import React from "react";

interface HangmanInformationsProps {
  fails: number;
  correctGuesses: string[];
}

const HangmanInformations: React.FC<HangmanInformationsProps> = ({
  fails,
  correctGuesses,
}) => {
  return (
    <div>
      <span className="text-danger">Nombres d'erreurs : {fails}</span>
      <h5 className="text-success">{correctGuesses}</h5>
    </div>
  );
};

export default HangmanInformations;
