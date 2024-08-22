import React from "react";
import { Link } from "react-router-dom";
import Linkify from "linkify-react";

export default function MediaPostPreview({ MediaTitle, MediaText, ImagePath }) {
	return (
		<>
			<div id="preview-media-container">
				<img className="media-preview-image" alt="media" src={`${ImagePath}`} />

				<h1 id="preview-title">{MediaTitle}</h1>
				<Linkify>
					<p id="preview-text">{MediaText}</p>
				</Linkify>
				<Link to="/media">
					<button className="std-btn readmore-btn">Les mer..</button>
				</Link>
			</div>
		</>
	);
}
