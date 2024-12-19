import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import HeroImageComponent from "../components/HeroImageComponent";
import HeroVideoComponent from "../components/HeroVideoComponent";

import ServicesComponent from "../components/ServicesComponent";
import MediaPostPreviewComponent from "../components/MediaPostPreviewComponent";
import AboutComponent from "../components/AboutComponent";

export default function Home() {
	const { t } = useTranslation();
	const [posts, setPosts] = useState([]);
	const [currentPost, setCurrentPost] = useState(0);
	//Set source for Hero video.
	const HeroVideoPath = "/assets/videos/StockWorkoutVideo.mp4";

	useEffect(() => {
		//Set up Server IP as an env variable with fallback to localhost.
		//(We are using localhost so the variable is not declared in the .env file, but I just put this here just in case this changes in the future and we need to reach a remote server)
		const SERVER_IP = process.env.SERVER_IP || "localhost";

		// Fetch data from the backend
		fetch(`http://${SERVER_IP}:3001/api/posts`)
			.then((response) => response.json())
			.then((data) => {
				// Normalize paths for images and video
				const normalizedData = data.map((post) => ({
					...post,
					image: post.image?.replace(/\\/g, "/"),
					video: post.video?.replace(/\\/g, "/"),
				}));
				setPosts(normalizedData);
			})
			.catch((error) =>
				console.error("Error fetching PreviewMediaPost:", error)
			);
	}, []);

	//Function to cycle between post previews
	const CyclePost = (direction) => {
		if (posts.length === 0) return;

		if (direction === "next") {
			setCurrentPost((currentPost) => (currentPost + 1) % posts.length);
		} else if (direction === "prev") {
			setCurrentPost(
				(currentPost) => (currentPost - 1 + posts.length) % posts.length
			);
		} else {
			console.log("Next or prev?????");
		}
	};

	return (
		<>
			{/* Render HeroVideoComponent if HeroVideoPath is valid, otherwise render HeroImageComponent */}
			{HeroVideoPath ? (
				<HeroVideoComponent HeroVideoPath={HeroVideoPath} />
			) : (
				<HeroImageComponent />
			)}
			<ServicesComponent />
			<AboutComponent />
			{/* Media post preview container. Only show if post exists*/}
			{posts.length > 0 && (
				<div id="mediapost-preview-home-container">
					<div className="h-media-divider"></div>
					<h1 id="preview-header-text">{t("newest-media-post")}:</h1>

					<div id="mediapost-preview-home-inner-container">
						<button
							className="cycle-post-btn"
							onClick={() => CyclePost("prev")}>
							<img
								className="cycle-post-svg"
								alt="previous icon"
								src="\assets\icons\icon-left-arrow.svg"></img>
						</button>
						<div className="preview-container">
							<MediaPostPreviewComponent
								key={posts[currentPost]._id}
								MediaTitle={posts[currentPost].headline}
								MediaText={posts[currentPost].mediaText}
								ImagePath={`http://${
									process.env.SERVER_IP || "localhost"
								}:3001/${posts[currentPost].image}`}
								// ImagePath={`${posts[currentPost].image}`}
							/>
						</div>

						<button
							className="cycle-post-btn"
							onClick={() => CyclePost("next")}>
							<img
								className="cycle-post-svg"
								alt="next icon"
								src="\assets\icons\icon-right-arrow.svg"></img>
						</button>
					</div>

					{/* Different look on mobile, same functionality. Toggle between them in CSS*/}
					<div className="mobile-cycle-post-container">
						<button
							className="mobile-cycle-post-btn"
							onClick={() => CyclePost("prev")}>
							<img
								className="cycle-post-svg"
								alt="previous icon"
								src="\assets\icons\icon-left-arrow.svg"></img>
							<div>{t("prev-post")}</div>
						</button>
						<button
							className="mobile-cycle-post-btn"
							onClick={() => CyclePost("next")}>
							<img
								className="cycle-post-svg"
								alt="next icon"
								src="\assets\icons\icon-right-arrow.svg"></img>
							<div>{t("next-post")}</div>
						</button>
					</div>

					<div className="h-media-divider-small"></div>
				</div>
			)}
		</>
	);
}

//For a preview of the 3 newest media posts.

/* {posts.length > 0 && (
            <MediaPostPreviewComponent
              key={posts[0]._id}
              MediaTitle={posts[0].headline}
              MediaText={posts[0].mediaText}
              ImagePath={`${posts[0].image}`}
            />
          )}
          <div className="v-services-divider"></div>

          {posts.length > 1 && (
            <MediaPostPreviewComponent
              key={posts[1]._id}
              MediaTitle={posts[1].headline}
              MediaText={posts[1].mediaText}
              ImagePath={`${posts[1].image}`}
            />
          )}
          <div className="v-services-divider"></div>

          {posts.length > 2 && (
            <MediaPostPreviewComponent
              key={posts[2]._id}
              MediaTitle={posts[2].headline}
              MediaText={posts[2].mediaText}
              ImagePath={`${posts[2].image}`}
            />
          )} */

// background: url(http://localhost:3000/static/media/StockPhoto.9a78d0ada57723114d66.jpg) no-repeat;
