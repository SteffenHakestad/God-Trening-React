import React from "react";
import { Link } from "react-router-dom";
import Linkify from "linkify-react";
import { useTranslation } from "react-i18next";

export default function MediaPostPreview({ MediaTitle, MediaText, ImagePath }) {
	const { t } = useTranslation();

	return (
		<>
			<div id="preview-media-container">
				{/* Only show image if path isn't empty */}
				{ImagePath !== "" && (
					<img
						className="media-preview-image"
						alt="media"
						src={`${ImagePath}`}
					/>
				)}
				<h1 id="preview-title">{MediaTitle}</h1>
				<div id="limit-preview-container">
					<Linkify>
						<p id="preview-text">{MediaText}</p>
					</Linkify>
				</div>

				<Link to="/media">
					<button className="std-btn readmore-btn">{t("read-more")}..</button>
				</Link>
			</div>
		</>
	);
}
