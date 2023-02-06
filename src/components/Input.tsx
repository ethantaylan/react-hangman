import React from "react";

interface InputProps {
  errorsTitle: string;
  lettersUsed: string;
}

const Input: React.FC<InputProps> = ({ errorsTitle, lettersUsed }) => {
  return (
    <div className="mt-5">
      {errorsTitle && <span className="text-danger">{errorsTitle}</span>}
      {lettersUsed && <h5 className="text-white">Lettres utilisées : {lettersUsed}</h5>}
    </div>
  );
};

export default Input;
