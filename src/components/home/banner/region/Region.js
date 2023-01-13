import React from "react";
import "./region.css";

const Region = ({ region }) => {
  return (
    <div id="region">
      <h2 className="text-2xl">{region}</h2>
    </div>
  );
};

export default Region;
