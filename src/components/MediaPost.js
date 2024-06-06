

import React from "react";

export default function MediaPost({MediaTitle, MediaText, ImagePath1, ImagePath2, VideoPath}) {
  return (
    <>
      <div className="media-container">
        <h1>{MediaTitle}</h1>
        <div className="h-media-divider"></div>
        <p>{MediaText}</p>

        <div className="media-attachment-container">
            <img
            className="media-image"
            alt="media"
            src={ImagePath1}>
            </img>
            
            <img
            className="media-image"
            alt="media"
            src={ImagePath2}>
            </img>

            <video
            className="media-video"
            alt="media"
            title="media-video"
            src={VideoPath} 
            type="video/mp4"
            controls
            >
            
            
            </video>
        </div>

      </div>
    </>
  );
}
