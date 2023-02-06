import Input from "../components/Input";
import WordToFind from "../components/WordToFind";

const Home = () => {
  return (
    <div className="d-flex flex-column pt-3 align-items-center justify-content-center">
      <h1 className="text-white">React Pendu</h1>
      <WordToFind WordToFind={"C_ _ _ _ _"} />
      <div className="d-flex align-items-center flex-column">
        <Input errorsTitle="Nombres d'érreurs : " lettersUsed={"A K J"} />
      </div>
    </div>
  );
};

export default Home;
