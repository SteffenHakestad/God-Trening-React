import React from "react";

export default function HeroVideoComponent({ HeroVideoPath }) {
	return (
		<>
			<div className="hero-video-container">
				<video
					src={process.env.PUBLIC_URL + HeroVideoPath}
					// src={process.env.PUBLIC_URL + "/assets/videos/StockWorkoutVideo.mp4"}
					autoPlay
					loop
					className="hero-video"></video>
				<div className="hero-video-text-container">
					<h1>Video Title</h1>
					<p>VideoText</p>
				</div>
			</div>
		</>
	);
}
