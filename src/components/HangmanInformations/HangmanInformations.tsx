import React from "react";

interface HangmanInformationsProps {
  fails: number;
  correctGuesses: string[];
}

const HangmanInformations: React.FC<HangmanInformationsProps> = ({ fails }) => {
  return (
    <div className="mt-5">
      <small className="text-danger">Remaining tries : <span className="bold">{fails}</span></small>
    </div>
  );
};

export default HangmanInformations;
