import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServicesComponent() {
	const { t } = useTranslation();

	return (
		<>
			<div id="services-outer-container">
				<h1 id="services-headline">{t("services-guri")}</h1>

				<div className="h-services-divider"></div>
				<div id="services-container">
					<div className="services-btn-container">
						<Link to="/course">
							<button className="services-btn">
								<img alt="diet icon" src="\assets\icons\icon-course.svg"></img>
							</button>
						</Link>

						<h1>{t("course")}</h1>
					</div>

					<div className="v-services-divider"></div>

					<div className="services-btn-container">
						<Link to="/presentation">
							<button className="services-btn">
								<img
									alt="diet icon"
									src="\assets\icons\icon-presentation.svg"></img>
							</button>
						</Link>

						<h1>{t("presentation")}</h1>
					</div>

					<div className="v-services-divider"></div>

					<div className="services-btn-container">
						<Link to="/dieting">
							<button className="services-btn">
								<img alt="diet icon" src="\assets\icons\icon-diet.svg"></img>
							</button>
						</Link>

						<h1>{t("diet-guidance")}</h1>
					</div>

					<div className="v-services-divider"></div>

					<div className="services-btn-container">
						<Link to="/consultant">
							<button className="services-btn">
								<img
									alt="diet icon"
									src="\assets\icons\icon-consultant.svg"></img>
							</button>
						</Link>

						<h1>{t("consultant")}</h1>
					</div>
				</div>
				<div className="h-services-divider"></div>
			</div>
		</>
	);
}
