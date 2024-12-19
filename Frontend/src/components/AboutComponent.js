import React from "react";
import { useTranslation } from "react-i18next";

export default function ServicesComponent() {
	const { t } = useTranslation();

	return (
		<>
			<div className="about-outer-container">
				<div className="about-inner-container">
					<div className="about-text-container">
						<h1>{t("about-guri")}</h1>
						<p>{t("about-text")}</p>
					</div>
					<div className="about-image-container">
						<div className="image-shell">
							<img src="/assets/images/StockPhoto.jpg" alt="about me" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
