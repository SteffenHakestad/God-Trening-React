import React from "react";
import { Link } from "react-router-dom";

export default function MediaPostPreview({ MediaTitle, MediaText, ImagePath }) {
	return (
		<>
			<div id="preview-media-container">
				<div className="h-media-divider"></div>

				<h1 id="preview-header-text">Nyeste Media Innlegg:</h1>

				<img className="media-preview-image" alt="media" src={`${ImagePath}`} />
				<h1 id="preview-title">{MediaTitle}</h1>
				<p id="preview-text">{MediaText}</p>
				<Link to="/media">
					<button className="std-btn readmore-btn">Les mer..</button>
				</Link>
				<div className="h-media-divider-small"></div>
			</div>
		</>
	);
}
