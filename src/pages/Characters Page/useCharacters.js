import { useState, useEffect } from "react";
import { CHARACTERS_API_URL } from "../../constants/constants";
import { fetchData } from "../../utils/fetchData";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({
    currPage: CHARACTERS_API_URL,
    nextPage: null,
    prevPage: null,
  });

  //Fetching the current page information and passing the results to the states
  useEffect(() => {
    fetchData(paginationInfo.currPage).then((data) => {
      setCharacters(data.results);
      setPaginationInfo({
        ...paginationInfo,
        nextPage: data.info.next,
        prevPage: data.info.prev,
      });
    }).catch(err=>{console.log(err);});
  }, [paginationInfo.currPage]);

  return { characters, paginationInfo, setPaginationInfo };
};

export default useCharacters;
