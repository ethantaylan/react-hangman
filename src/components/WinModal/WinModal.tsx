import React from "react";
import Modal from "react-bootstrap/Modal";
import WinGif from "../../assets/hangman/win.gif";

interface WinModalProps {
  show: boolean;
  onHide: () => void;
  onClick: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({
  show,
  onHide,
  onClick,
}) => {
  const randomGifs = [
    WinGif,
    "https://i.giphy.com/media/xUOwGmG2pRfFZUmdVe/giphy.webp",
    "https://i.giphy.com/media/l44Q6Etd5kdSGttXa/giphy.webp",
    "https://media0.giphy.com/media/t3sZxY5zS5B0z5zMIz/giphy.gif?cid=ecf05e47qjcia3fflqemocxavqjixmz5symkuoa0xu5gz7hq&rid=giphy.gif&ct=g",
  ];

  const getRandomGif = (randomGifs: string[]) => {
    const randomIndex = Math.floor(Math.random() * randomGifs.length);

    return randomGifs[randomIndex];
  };

  console.log(getRandomGif(randomGifs));

  return (
    <React.Fragment>
      <Modal size="lg" centered={true} show={show} onHide={onHide}>
        <Modal.Body className="d-flex flex-column width-unset">
          <img src={getRandomGif(randomGifs)} className="win-gif"></img>
          <button
            className="w-100 p-3 text-white reset-game-button"
            onClick={onClick}
          >
            Reset game
          </button>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
