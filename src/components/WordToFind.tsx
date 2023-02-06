interface WordToFindProps {
  WordToFind: string;
}

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

const WordToFind: React.FC<WordToFindProps> = ({ WordToFind }) => {
  return (
    <div className="d-flex text-white flex-column">
        {Words.map((word) => (
          <span>{word}</span>
        ))}
    </div>
  );
};

export default WordToFind;
