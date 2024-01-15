import React from "react";
import ItemDetail from "../../../../components/shared/ItemDetail";

const PopupDetails = ({ character }) => {
  return (
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      <ItemDetail title={"ID"} value={character.id} />
      <ItemDetail title={"Status"} value={character.status} />
      <ItemDetail title={"Species"} value={character.species} />
      <ItemDetail title={"Gender"} value={character.gender} />
      <ItemDetail title={"Origin"} value={character.origin.name} />
      <ItemDetail title={"Location"} value={character.location.name} />
      <ItemDetail
        title={"Type"}
        value={character.type.length > 0 ? character.type : "None"}
      />
    </div>
  );
};

export default PopupDetails;
