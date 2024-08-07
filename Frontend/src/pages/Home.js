import HeroImageComponent from "../components/HeroImageComponent";
import React from "react";
import ServicesComponent from "../components/ServicesComponent";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<HeroImageComponent />
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
