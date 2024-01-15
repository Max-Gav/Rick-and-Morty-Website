import React from "react";
import { Image, Modal } from "react-bootstrap";
import PopupDetails from "./PopupDetails";

const CharacterPopup = ({isModalOpen, setModalOpen, character}) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Modal show={isModalOpen} onHide={closeModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">{character.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="row">
        <Image src={character.image} className="col-lg-6" />
        <PopupDetails character={character}/>
      </Modal.Body>
    </Modal>
  );
};

export default CharacterPopup;
