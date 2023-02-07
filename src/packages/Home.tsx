import Hangman from "../components/Hangman";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column pt-3 align-items-center justify-content-center">
      <h1 className="text-white">React Hangman</h1>
      <Hangman />
    </div>
  );
};

export default Home;
