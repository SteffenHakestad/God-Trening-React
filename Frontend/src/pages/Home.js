import React, { useEffect, useState } from "react";
import HeroImageComponent from "../components/HeroImageComponent";
import ServicesComponent from "../components/ServicesComponent";
import MediaPostPreviewComponent from "../components/MediaPostPreviewComponent";
import Footer from "../components/Footer";

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Fetch data from the backend
		fetch("/api/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);
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
			<MediaPostPreviewComponent
				key={posts[0]._id}
				MediaTitle={posts[0].headline}
				MediaText={posts[0].mediaText}
				ImagePath={`${posts[0].image}`}
			/>
			<Footer />
		</>
	);
}
// background: url(http://localhost:3000/static/media/StockPhoto.9a78d0ada57723114d66.jpg) no-repeat;
