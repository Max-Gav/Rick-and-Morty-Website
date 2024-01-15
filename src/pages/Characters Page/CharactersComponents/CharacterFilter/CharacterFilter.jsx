import React, { useState } from "react";
import { CHARACTERS_API_URL } from "../../../../constants/constants";
import SelectFilter from "./SelectFilter";
import SpeciesQueryFilter from "./SpeciesQueryFilter";
import { Button } from "react-bootstrap";

const CharacterFilter = ({ setPaginationInfo, setPageNum }) => {
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  //Function to handle a value coming from one of the inputs
  const handleInput = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "Species":
        setSpecies(value);
        break;
      case "Gender":
        setGender(value);
        break;
      case "Status":
        setStatus(value);
        break;
      default:
        break;
    }
  };

  //Function to handle filter confirmation
  const handleFilter = () => {
    const url = new URL(CHARACTERS_API_URL);

    url.searchParams.set("species", species);
    url.searchParams.set("status", status);
    url.searchParams.set("gender", gender);
    const modifiedUrl = url.toString();
    
    setPageNum(1);
    setPaginationInfo((prev) => ({ ...prev, currPage: modifiedUrl }));
  };

  return (
    <div className="row justify-content-lg-start justify-content-center gap-lg-0 gap-2">
      <SpeciesQueryFilter handleInput={handleInput} />
      <SelectFilter
        label={"Status"}
        options={["Alive", "Dead", "Unknown"]}
        handleInput={handleInput}
      />
      <SelectFilter
        label={"Gender"}
        options={["Male", "Female", "Unknown"]}
        handleInput={handleInput}
      />

      <Button
        variant="dark"
        className="col-lg-1 col-4 h-50 align-self-end"
        onClick={handleFilter}
      >
        Filter
      </Button>
    </div>
  );
};

export default CharacterFilter;
