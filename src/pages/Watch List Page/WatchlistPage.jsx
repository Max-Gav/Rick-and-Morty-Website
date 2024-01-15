import React from "react";
import { Container } from "react-bootstrap";
import PageTitle from "../../components/shared/PageTitle";
import AddEpisodeForm from "./Watchlist Page Components/AddEpisodeForm";
import WatchlistItem from "./Watchlist Page Components/WatchlistItem/WatchlistItem";
import useEpisodes from "./useEpisodes";


const WatchlistPage = () => {
    const {episodes, setEpisodes} = useEpisodes();

    //Function that removes an episode from the array using his index
    const handleRemoveEpisode = (index) => {
        setEpisodes((prevEpisodes) => {
          const updatedWatchlist = [...prevEpisodes];
          updatedWatchlist.splice(index, 1);
          return updatedWatchlist;
        });
      };

    //Function that updates an episode "Watched" property using his index
    const handleWatchedChecked = (index) => {
        setEpisodes((prevEpisodes) => {
          const updatedWatchList = [...prevEpisodes];
          updatedWatchList[index].watched = !updatedWatchList[index].watched;
          return updatedWatchList
        });
      };

  return (
    <Container className="d-flex flex-column gap-2">
      <PageTitle title={"Watch List"} />
      <AddEpisodeForm episodes={episodes} setEpisodes={setEpisodes}/>

      {episodes.map((episode, index) => (
        <WatchlistItem episode={episode} key={index} index={index} onRemove={handleRemoveEpisode} onChecked={handleWatchedChecked}/>
      ))}
      
    </Container>
  );
};

export default WatchlistPage;
