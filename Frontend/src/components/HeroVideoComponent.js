import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroVideoComponent({ HeroVideoPath }) {
	const { t } = useTranslation();
	return (
		<>
			<div className="hero-video-container">
				<video
					src={process.env.PUBLIC_URL + HeroVideoPath}
					autoPlay
					loop
					className="hero-video"></video>
				<div className="hero-video-text-container">
					<h1>{t("hero-video-title")}</h1>
					<p>{t("hero-video-text")}</p>
				</div>
			</div>
		</>
	);
}
