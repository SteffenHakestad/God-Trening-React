import React from "react";

export default function Header() {
	return (
		<>
			<div className="hero-img-container" id="large-hero">
				<div className="hero-image-text-container">
					<h1>Big Headline 1</h1>
					<p>
						Minim pariatur tempor do non qui laborum nisi incididunt eu sit enim
						aute.
					</p>
				</div>
				<div className="image-overlay">
					<img
						src={
							process.env.PUBLIC_URL + "/assets/images/HeroImage1920x800.png"
						}
						alt="hero-1"
					/>
				</div>
			</div>

			<div className="hero-img-container" id="medium-hero">
				<div className="hero-image-text-container">
					<h1>Medium Headline 1</h1>
					<p>
						Minim pariatur tempor do non qui laborum nisi incididunt eu sit enim
						aute.
					</p>
				</div>

				<div className="image-overlay">
					<img
						src={
							process.env.PUBLIC_URL + "/assets/images/HeroImage1000x800.png"
						}
						alt="hero-2"
					/>
				</div>
			</div>

			<div className="hero-img-container" id="small-hero">
				<div className="hero-image-text-container">
					<h1>Small Headline 1</h1>
					<p>
						Minim pariatur tempor do non qui laborum nisi incididunt eu sit enim
						aute.
					</p>
				</div>
				<div className="image-overlay">
					<img
						src={process.env.PUBLIC_URL + "/assets/images/HeroImage600x800.png"}
						alt="hero-3"
					/>
				</div>
			</div>
		</>
	);
}
