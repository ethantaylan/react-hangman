import Hangman from "../components/Hangman";
import Logo from "../assets/logo.png";
import React from "react";

const Home: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <div className="d-flex flex-column p-4 align-items-center justify-content-center">
      {loading ? (
        "Loading..."
      ) : (
        <React.Fragment>
          <img className="negatif" src={Logo} alt="React Hangman logo" />
          <Hangman />
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
