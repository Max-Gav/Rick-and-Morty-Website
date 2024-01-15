import React from "react";
import { Button } from "react-bootstrap";

const CharactersPagination = ({
  paginationInfo,
  setPaginationInfo,
  setPageNum,
}) => {

  //Function to handle page switching
  const goToPage = (direction) => {
    const targetPage = direction === "prev" ? paginationInfo.prevPage : paginationInfo.nextPage;
  
    if (targetPage) {
      setPaginationInfo((prev) => ({ ...prev, currPage: targetPage }));
      setPageNum((prev) => (direction === "prev" ? prev - 1 : prev + 1));
    }
  };

  return (
    <div className="d-flex gap-2">
      <Button
        variant="dark"
        className={`col-lg-2 ${!paginationInfo.prevPage && "opacity-25"}`}
        onClick={() => goToPage("prev")}
      >
        {"< Prev"}
      </Button>

      <Button
        variant="dark"
        className={`col-lg-2 ${!paginationInfo.nextPage && "opacity-25"}`}
        onClick={() => goToPage("next")}
      >
        {"Next >"}
      </Button>
    </div>
  );
};

export default CharactersPagination;
