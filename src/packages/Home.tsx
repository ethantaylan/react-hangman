import Hangman from "../components/Hangman";
import useMediaQuery from "../hooks/useMediaQuery";
import Logo from "../assets/logo.png";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column p-5 align-items-center justify-content-center">
      <img
        className="negatif"
        src={Logo}
        alt="React Hangman icon"
      />
      <Hangman />
    </div>
  );
};

export default Home;
