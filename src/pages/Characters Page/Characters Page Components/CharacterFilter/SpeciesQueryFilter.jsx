import React from "react";
import { Form } from "react-bootstrap";

const SpeciesQueryFilter = ({handleInput}) => {
  return (
    <div className="col-lg-3">
      <label>Species</label>
      <Form.Control
        type="text"
        className="col-lg-2"
        placeholder="Species"
        name="Species"
        onChange={handleInput}
      />
    </div>
  );
};

export default SpeciesQueryFilter;
