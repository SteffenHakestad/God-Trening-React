import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CustomLink({ to, children, t, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
export default function Footer() {
	const { t } = useTranslation();

	return (
		<>
			<div id="footer-container">
				<div id="footer-contact-container">
					<div id="footer-logo-container">
						<Link to="/home">
							<img
								alt="logo"
								src="/assets/images/GT-logo.png"
								className="footer-logo"></img>
						</Link>
					</div>

					<div className="horizontal-footer">
						<img
							alt="full right arrow"
							src="/assets/icons/icon-phone.svg"
							className="footer-link-icon"></img>
						<div>922 26 557</div>
					</div>
					<div className="horizontal-footer">
						<img
							alt="full right arrow"
							src="/assets/icons/icon-email.svg"
							className="footer-link-icon"></img>
						<a href="mailto:Godtrening@online.no">Godtrening@online.no</a>
					</div>
					<div className="horizontal-footer">
						<img
							alt="full right arrow"
							src="/assets/icons/icon-instagram.svg"
							className="footer-link-icon"></img>
						<a href="https://www.instagram.com/guri_brekke/" target="blank">
							@godtrening
						</a>
					</div>
				</div>

				<div id="footer-link-container">
					<div className="footer-inner-container">
						<div className="footer-link-header-container">
							<h1>{t("explore")}</h1>
							<div className="h-footer-divider"></div>
						</div>

						<div className="horizontal-index-footer">
							<CustomLink to="/home" className="footer-page-links">
								<img
									alt="full right arrow"
									src="/assets/icons/icon-full-right-arrow.svg"
									className="right-arrow-icon"></img>
								{t("home")}
							</CustomLink>
						</div>
						<div className="horizontal-index-footer">
							<CustomLink to="/services" className="footer-page-links">
								<img
									alt="full right arrow"
									src="/assets/icons/icon-full-right-arrow.svg"
									className="right-arrow-icon"></img>
								{t("services")}
							</CustomLink>
						</div>
						<div className="horizontal-index-footer">
							<CustomLink to="/media" className="footer-page-links">
								<img
									alt="full right arrow"
									src="/assets/icons/icon-full-right-arrow.svg"
									className="right-arrow-icon"></img>
								{t("media")}
							</CustomLink>
						</div>
						<div className="horizontal-index-footer">
							<CustomLink to="/contact" className="footer-page-links">
								<img
									alt="full right arrow"
									src="/assets/icons/icon-full-right-arrow.svg"
									className="right-arrow-icon"></img>
								{t("contact")}
							</CustomLink>
						</div>
					</div>

					<div className="footer-inner-container">
						<div className="footer-link-header-container">
							<h1>{t("services")}</h1>
							<div className="h-footer-divider"></div>
						</div>

						<div className="horizontal-index-footer">
							<CustomLink to="/course" className="footer-page-links">
								<img
									alt="full right arrow"
									src="/assets/icons/icon-full-right-arrow.svg"
									className="right-arrow-icon"></img>
								{t("course")}
							</CustomLink>
						</div>
						<div className="horizontal-index-footer">
							<CustomLink to="/presentation" className="footer-page-links">
								<img
									alt="full right arrow"
									src="/assets/icons/icon-full-right-arrow.svg"
									className="right-arrow-icon"></img>
								{t("presentation")}
							</CustomLink>
						</div>
						<div className="horizontal-index-footer">
							<CustomLink to="/consultant" className="footer-page-links">
								<img
									alt="full right arrow"
									src="/assets/icons/icon-full-right-arrow.svg"
									className="right-arrow-icon"></img>
								{t("consultant")}
							</CustomLink>
						</div>
						<div className="horizontal-index-footer">
							<CustomLink to="/dieting" className="footer-page-links">
								<img
									alt="full right arrow"
									src="/assets/icons/icon-full-right-arrow.svg"
									className="right-arrow-icon"></img>
								{t("diet-guidance")}
							</CustomLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
