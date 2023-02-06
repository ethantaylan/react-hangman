import HangmanInformations from "../components/HangmanInformations";
import WordToFind from "../components/WordToFind";

const Home = () => {
  return (
    <div className="d-flex flex-column pt-3 align-items-center justify-content-center">
      <h1 className="text-white">React Pendu</h1>
      <WordToFind />
      <div className="d-flex align-items-center flex-column">
        <HangmanInformations />
      </div>
    </div>
  );
};

export default Home;
