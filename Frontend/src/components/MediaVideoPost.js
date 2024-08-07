import React from "react";
import Linkify from "linkify-react";

export default function MediaPost({ MediaTitle, MediaText, VideoPath }) {
	return (
		<>
			<div className="media-container">
				<h1>{MediaTitle}</h1>
				<div className="h-media-divider"></div>
				<Linkify>
					<p className="media-text-content">{MediaText}</p>
				</Linkify>

				<div className="media-attachment-container">
					{VideoPath && (
						<video
							className="media-video"
							alt="media"
							title="media-video"
							src={VideoPath}
							type="video/mp4"
							controls></video>
					)}
				</div>
				<div className="h-media-divider-small"></div>
			</div>
		</>
	);
}

//src={`http://localhost:3001/${ImagePath}`}

// src={`http://localhost:3001/${ImagePath}`} Maybe use?

/* <img
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
    </video> */
