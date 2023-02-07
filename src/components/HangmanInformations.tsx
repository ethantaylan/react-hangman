import React from "react";

interface HangmanInformationsProps {
  fails: number;
  correctGuesses: string[];
}

const HangmanInformations: React.FC<HangmanInformationsProps> = ({ fails }) => {
  return (
    <div className="mt-5">
      <span className="h6 text-danger">Essais restants : {fails}</span>
    </div>
  );
};

export default HangmanInformations;
