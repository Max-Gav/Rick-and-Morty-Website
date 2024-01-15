import React from "react";

const ItemDetail = ({ title, value }) => {
  return (
    <p>
      <span className="fw-bolder">{title}:</span> {value}
    </p>
  );
};

export default ItemDetail;
