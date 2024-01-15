import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import WatchedCheckBox from "./WatchedCheckBox";

const WatchlistItem = ({ episode, index, onRemove, onChecked }) => {
  const [watched, setWatched] = useState(episode.watched);

  //Function to update an episode's "Watched" property and set the local watched state
  const onWatchedChecked = (event) => {
    onChecked(index);
    setWatched(event.target.checked);
  };

  return (
    <Card className="d-flex flex-md-row flex-column border-3 p-2 align-items-center gap-2">
      <span className="col-md-9">
        {index + 1}. <span className="fw-bold">{episode.name}</span>
      </span>
      <div className="d-flex flex-md-row flex-column col-md-3 align-items-center justify-content-around gap-3">
        <Button
          variant="danger"
          onClick={() => {
            onRemove(index);
          }}
        >
          Remove
        </Button>
        <WatchedCheckBox
          onWatchedChecked={onWatchedChecked}
          watched={watched}
        />
      </div>
    </Card>
  );
};

export default WatchlistItem;
