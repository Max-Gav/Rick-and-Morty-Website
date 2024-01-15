import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PageTitle from "../../components/shared/PageTitle";
import CharacterCard from "./CharactersComponents/CharacterCard";
import CharacterFilter from "./CharactersComponents/CharacterFilter/CharacterFilter";
import CharactersPagination from "./CharactersComponents/CharactersPagination";
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
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </Container>
  );
};

export default CharactersPage;
