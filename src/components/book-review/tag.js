import React from "react";

import "./styles/tag.scss";

const Tag = props => {
  const { label } = props;
  const isFictNonFict = label === "Fiction" || label === "Non-fiction";
  return (
    <div className="tag-wrapper">
      <button
        className={`button ${isFictNonFict ? "fiction_non-fiction" : ""}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Tag;
