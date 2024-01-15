import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ItemDetail from "../../../components/shared/ItemDetail";
import CharacterPopup from "./CharacterPopup/CharacterPopup";

const CharacterCard = ({ character }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <CharacterPopup
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        character={character}
      />

      <Card
        className="card d-flex flex-lg-row flex-col border-5"
        onClick={openModal}
      >
        <img
          src={character.image}
          className="col-lg-2 col-12"
          alt={character.name}
        />

        <Card.Body className="col-lg-10 d-flex flex-column justify-content-center">
          <ItemDetail title={"Name"} value={character.name} />
          <ItemDetail title={"Status"} value={character.status} />
          <ItemDetail title={"Species"} value={character.species} />
          <ItemDetail title={"Gender"} value={character.gender} />
        </Card.Body>
      </Card>
    </>
  );
};

export default CharacterCard;
