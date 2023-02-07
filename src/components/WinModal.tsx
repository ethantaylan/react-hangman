import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface WinModalProps {
  show: boolean;
  onHide: () => void;
  children: any;
  onClick: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({
  show,
  onHide,
  onClick,
  children,
}) => {
  return (
    <React.Fragment>
      <Modal size="lg" centered={true} show={show} onHide={onHide}>
        <Modal.Body className="d-flex flex-column width-unset">
          {children}
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
