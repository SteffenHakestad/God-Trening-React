// import SlidingImages from "../components/SlidingImages";
import React from "react";
import ServicesComponent from "../components/ServicesComponent";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<div className="hero-img-container" id="large-hero">
				<div className="hero-image-text-container">
					<h1>Big Headline 1</h1>
				</div>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/HeroImage1920x800.png"}
					alt="Slide-1"
				/>
			</div>

			<div className="hero-img-container" id="medium-hero">
				<div className="hero-image-text-container">
					<h1>Medium Headline 1</h1>
				</div>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/HeroImage1000x800.png"}
					alt="Slide-1"
				/>
			</div>

			<div className="hero-img-container" id="small-hero">
				<div className="hero-image-text-container">
					<h1>Small Headline 1</h1>
				</div>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/HeroImage600x800.png"}
					alt="Slide-1"
				/>
			</div>

			{/* <SlidingImages /> */}
			<ServicesComponent />
			<div className="about-outer-container">
				<div className="about-inner-container">
					<div className="about-text-container">
						<h1>Guri Brekke</h1>
						<p>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							varius luctus dignissim. Mauris vehicula erat id orci faucibus, ac
							porttitor mauris accumsan. Quisque tellus est, pellentesque ut
							ornare quis, posuere ornare massa. Suspendisse quis orci
							hendrerit."
						</p>
					</div>
					<div className="about-image-container">
						<div className="image-shell">
							<img src="/assets/images/StockPhoto.jpg" alt="about me" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
// background: url(http://localhost:3000/static/media/StockPhoto.9a78d0ada57723114d66.jpg) no-repeat;
