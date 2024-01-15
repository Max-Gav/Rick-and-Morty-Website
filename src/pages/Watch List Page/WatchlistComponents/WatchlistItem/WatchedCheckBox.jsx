import React from "react";

const WatchedCheckBox = ({onWatchedChecked,watched}) => {

  return (
    <div className="d-flex gap-2 bg-light border p-2 rounded">
      <input type="checkbox" checked={watched} onChange={onWatchedChecked} />
      <label>
        <i className="fa-solid fa-eye"></i>
      </label>
    </div>
  );
};

export default WatchedCheckBox;
