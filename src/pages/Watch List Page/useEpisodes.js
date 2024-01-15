import { useEffect, useState } from "react";


const useEpisodes = () => {
    const [episodes, setEpisodes] = useState([]);
  
    //Getting the stored episodes from the local storage
    useEffect(() => {
      const storedEpisodes = localStorage.getItem('episodes');
      if (storedEpisodes) {
        setEpisodes(JSON.parse(storedEpisodes));
      }
    }, []);
  
    //Updating the stored episodes in the local storage on each change
    useEffect(() => {
      localStorage.setItem('episodes', JSON.stringify(episodes));
    }, [episodes]);

    return {episodes,setEpisodes}
}

export default useEpisodes