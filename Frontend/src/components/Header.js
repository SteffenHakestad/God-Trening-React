import React from "react";
import { Link } from "react-router-dom";

export default function Header({
	HeaderHeadline,
	HeaderLink,
	HeaderLink2,
	HeaderLink3,
	HeaderAnchor,
	HeaderAnchor2,
	HeaderAnchor3,
	Display1,
	Display2,
}) {
	return (
		<>
			<div className="header">
				<h1>{HeaderHeadline}</h1>
				<div className="header-container">
					<Link to={HeaderAnchor}>
						<div className="header-link">{HeaderLink}</div>
					</Link>
					<img
						alt="full right arrow"
						src="/assets/icons/icon-full-right-arrow.svg"
						className="right-arrow-icon"
						style={{ display: Display1 }}></img>
					<Link to={HeaderAnchor2}>
						<div className="header-link">{HeaderLink2}</div>
					</Link>
					<img
						alt="full right arrow"
						src="/assets/icons/icon-full-right-arrow.svg"
						className="right-arrow-icon"
						style={{ display: Display2 }}></img>
					<Link to={HeaderAnchor3}>
						<div className="header-link">{HeaderLink3}</div>
					</Link>
				</div>
			</div>
		</>
	);
}
