

import React from "react";

export default function MediaPost({MediaTitle, MediaText}) {
  return (
    <>
      <div className="media-container">
        <h1>{MediaTitle}</h1>
        <div className="h-media-divider"></div>
        <p>{MediaText}</p>
        <img
          className="media-image"
          alt="media"
          src="\assets\images\UnderConstruction.png"
        ></img>
      </div>
    </>
  );
}
