import React from "react";

interface HangmanInformationsProps {
  fails: number | string;
  correctGuesses: string[];
}

const HangmanInformations: React.FC<HangmanInformationsProps> = ({
  fails,
}) => {
  return (
    <div className="mt-5">
      <span className="h3 text-danger">Nombres d'erreurs : {fails}</span>
    </div>
  );
};

export default HangmanInformations;
