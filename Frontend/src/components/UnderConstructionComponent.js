import React from "react";

export default function UnderConstructionComponent({ setConstruction }) {
  return (
    <>
      <div id="under-construction">
        <img
          alt="under-construction"
          src="\assets\images\UnderConstruction.png"
        ></img>
        <button
          id="under-construction-btn"
          onClick={() => setConstruction(false)}
        ></button>
      </div>
    </>
  );
}
