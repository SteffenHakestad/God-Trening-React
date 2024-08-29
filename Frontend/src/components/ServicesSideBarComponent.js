import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ServicesSideBar() {
	const location = useLocation(); //Get current URL location for button style

	const isHighlight = (path) => location.pathname === path;

	return (
		<>
			<div className="sidebar-container">
				<div className="top-sidebar-container">
					<h1 className="sidebar-header">Tjenester</h1>
					<div className="horizontal-sidebar-container">
						<Link to="/presentation">
							<button
								className={`sidebar-btn ${
									isHighlight("/presentation") ? "highlight" : ""
								}`}>
								Foredrag
								<svg
									width="40"
									height="40"
									viewBox="0 0 122 122"
									fill="#4A4A4A"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M66.1952 76.245V92.7709C66.1952 94.8652 67.8981 96.5834 70.0178 96.5834C70.9735 96.5834 71.9241 96.2225 72.651 95.5362C81.6739 86.9708 97.7881 71.6852 105.164 64.6855C106.181 63.7247 106.75 62.3878 106.75 61.0001C106.75 59.6072 106.181 58.2754 105.164 57.3147C97.7881 50.3149 81.6739 35.0242 72.651 26.469C71.9241 25.7777 70.9735 25.4167 70.0178 25.4167C67.8981 25.4167 66.1952 27.1298 66.1952 29.2292V45.7552H20.3435C17.6442 45.7552 15.25 48.1443 15.25 50.8385V71.1617C15.25 73.8558 17.6442 76.245 20.3435 76.245H66.1952ZM73.8202 53.3802V38.0895L97.9711 61.0001L73.8202 83.9107V68.62H22.875V53.3802H73.8202Z" />
								</svg>
							</button>
						</Link>
					</div>
					<div className="horizontal-sidebar-container">
						<Link to="/course">
							<button
								className={`sidebar-btn ${
									isHighlight("/course") ? "highlight" : ""
								}`}>
								Kurs
								<svg
									width="40"
									height="40"
									viewBox="0 0 122 122"
									fill="#4A4A4A"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M66.1952 76.245V92.7709C66.1952 94.8652 67.8981 96.5834 70.0178 96.5834C70.9735 96.5834 71.9241 96.2225 72.651 95.5362C81.6739 86.9708 97.7881 71.6852 105.164 64.6855C106.181 63.7247 106.75 62.3878 106.75 61.0001C106.75 59.6072 106.181 58.2754 105.164 57.3147C97.7881 50.3149 81.6739 35.0242 72.651 26.469C71.9241 25.7777 70.9735 25.4167 70.0178 25.4167C67.8981 25.4167 66.1952 27.1298 66.1952 29.2292V45.7552H20.3435C17.6442 45.7552 15.25 48.1443 15.25 50.8385V71.1617C15.25 73.8558 17.6442 76.245 20.3435 76.245H66.1952ZM73.8202 53.3802V38.0895L97.9711 61.0001L73.8202 83.9107V68.62H22.875V53.3802H73.8202Z" />
								</svg>
							</button>
						</Link>
					</div>
					<div className="horizontal-sidebar-container">
						<Link to="/consultant">
							<button
								className={`sidebar-btn ${
									isHighlight("/consultant") ? "highlight" : ""
								}`}>
								Konsulenttjenester
								<svg
									width="40"
									height="40"
									viewBox="0 0 122 122"
									fill="#4A4A4A"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M66.1952 76.245V92.7709C66.1952 94.8652 67.8981 96.5834 70.0178 96.5834C70.9735 96.5834 71.9241 96.2225 72.651 95.5362C81.6739 86.9708 97.7881 71.6852 105.164 64.6855C106.181 63.7247 106.75 62.3878 106.75 61.0001C106.75 59.6072 106.181 58.2754 105.164 57.3147C97.7881 50.3149 81.6739 35.0242 72.651 26.469C71.9241 25.7777 70.9735 25.4167 70.0178 25.4167C67.8981 25.4167 66.1952 27.1298 66.1952 29.2292V45.7552H20.3435C17.6442 45.7552 15.25 48.1443 15.25 50.8385V71.1617C15.25 73.8558 17.6442 76.245 20.3435 76.245H66.1952ZM73.8202 53.3802V38.0895L97.9711 61.0001L73.8202 83.9107V68.62H22.875V53.3802H73.8202Z" />
								</svg>
							</button>
						</Link>
					</div>
					<div className="horizontal-sidebar-container">
						<Link to="/dieting">
							<button
								className={`sidebar-btn ${
									isHighlight("/dieting") ? "highlight" : ""
								}`}>
								Kostveileding
								<svg
									width="40"
									height="40"
									viewBox="0 0 122 122"
									fill="#4A4A4A"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M66.1952 76.245V92.7709C66.1952 94.8652 67.8981 96.5834 70.0178 96.5834C70.9735 96.5834 71.9241 96.2225 72.651 95.5362C81.6739 86.9708 97.7881 71.6852 105.164 64.6855C106.181 63.7247 106.75 62.3878 106.75 61.0001C106.75 59.6072 106.181 58.2754 105.164 57.3147C97.7881 50.3149 81.6739 35.0242 72.651 26.469C71.9241 25.7777 70.9735 25.4167 70.0178 25.4167C67.8981 25.4167 66.1952 27.1298 66.1952 29.2292V45.7552H20.3435C17.6442 45.7552 15.25 48.1443 15.25 50.8385V71.1617C15.25 73.8558 17.6442 76.245 20.3435 76.245H66.1952ZM73.8202 53.3802V38.0895L97.9711 61.0001L73.8202 83.9107V68.62H22.875V53.3802H73.8202Z" />
								</svg>
							</button>
						</Link>
					</div>
				</div>
				<div className="bottom-sidebar-container">
					<h1 className="sidebar-header">Tjenester</h1>
					<div>Du kan bestille følgende tjeneste ved å ta kontakt på:</div>
					<div className="service-contact-container">
						<img alt="phone icon" src="/assets/icons/icon-phone.svg"></img>
						<div>922 26 557</div>
					</div>
					<div className="service-contact-container">
						<img alt="email icon" src="/assets/icons/icon-email.svg"></img>
						<div>Godtrening@online.no</div>
					</div>
				</div>
			</div>
		</>
	);
}
