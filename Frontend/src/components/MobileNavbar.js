import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function MobileNavbar() {
	const [isMobileLinksVisible, setIsMobileLinksVisible] = useState(false);

	const toggleMobileLinks = () => {
		setIsMobileLinksVisible(!isMobileLinksVisible);
	};

	return (
		<nav id="mobile-navbar">
			<Link to="/home" id="mobile-navbar-title">
				<img
					alt="navbar title"
					src="/assets/images/GT-logo.png"
					className="navbar-logo-img"></img>
			</Link>

			{/*Button to toggle links to other pages.*/}
			<div id="toggle-button" onClick={toggleMobileLinks}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>

			{/*Links from navbar to all pages on app*/}
			<div
				id="navbar-mobile-links-container"
				style={{ display: isMobileLinksVisible ? "flex" : "none" }}>
				<ul className="navbar-mobile-link-list" onClick={toggleMobileLinks}>
					<CustomLink to="/services" className="navbar-mobile-link">
						Tjenester
					</CustomLink>
					<CustomLink to="/media" className="navbar-mobile-link">
						Media
					</CustomLink>
					<CustomLink to="/contact" className="navbar-mobile-link">
						Kontakt
					</CustomLink>
					{/* Remove this before production */}
					<CustomLink to="/GTadmin" className="navbar-mobile-link">
						Admin
					</CustomLink>
				</ul>
			</div>
		</nav>
	);
}

function CustomLink({ to, children, ...props }) {
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
