import Hangman from "../components/Hangman";
import Logo from "../assets/logo.png";
import React from "react";

const Home: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
    console.log(loading);
  }, [loading]);

  return (
    <div className="d-flex flex-column p-5 align-items-center justify-content-center">
      {loading ? (
        "Loading..."
      ) : (
        <React.Fragment>
          <img className="negatif" src={Logo} alt="React Hangman icon" />
          <Hangman />
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
