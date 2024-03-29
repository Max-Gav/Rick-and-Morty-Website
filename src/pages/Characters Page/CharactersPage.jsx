import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PageTitle from "../../components/shared/PageTitle";
import CharacterCard from "./Characters Page Components/CharacterCard";
import CharacterFilter from "./Characters Page Components/CharacterFilter/CharacterFilter";
import CharactersPagination from "./Characters Page Components/CharactersPagination";
import useCharacters from "./useCharacters";

const CharactersPage = () => {
  const { characters, paginationInfo, setPaginationInfo } = useCharacters();
  const [pageNum, setPageNum] = useState(1);

  return (
    <Container className="d-flex flex-column gap-2 my-2">
      <PageTitle title={"Characters"}/>
      <span className="fw-bold fs-4">Page {pageNum}</span>
      <CharactersPagination
        paginationInfo={paginationInfo}
        setPaginationInfo={setPaginationInfo}
        setPageNum={setPageNum}
      />
      <CharacterFilter
        paginationInfo={paginationInfo}
        setPaginationInfo={setPaginationInfo}
        setPageNum={setPageNum}
      />
      {characters.length != 0 ?characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      )): <span className="fw-bold text-center fs-2 my-5">No results</span>}
    </Container>
  );
};

export default CharactersPage;
