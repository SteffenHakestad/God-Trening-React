import React from "react";
import { Link } from "react-router-dom";

export default function MediaPostPreview({ MediaTitle, MediaText, ImagePath }) {
  return (
    <>
      <div id="preview-media-container">
        <img className="media-preview-image" alt="media" src={`${ImagePath}`} />

        <h1 id="preview-title">{MediaTitle}</h1>
        <p id="preview-text">{MediaText}</p>
        <Link to="/media">
          <button className="std-btn readmore-btn">Les mer..</button>
        </Link>
      </div>
    </>
  );
}
