import React, { useEffect, useState } from "react";
import HeroImageComponent from "../components/HeroImageComponent";
import ServicesComponent from "../components/ServicesComponent";
import MediaPostPreviewComponent from "../components/MediaPostPreviewComponent";
import AboutComponent from "../components/AboutComponent";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const [currentPost, setCurrentPost] = useState(0);

	useEffect(() => {
		// Fetch data from the backend
		fetch("/api/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error("Error fetching data:", error));
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
			<HeroImageComponent />
			<ServicesComponent />
			<AboutComponent />

			{/* Media post preview container. Only show if post exists*/}
			{posts.length > 0 && (
				<div id="mediapost-preview-home-container">
					<div className="h-media-divider"></div>
					<h1 id="preview-header-text">Nyeste Media Innlegg:</h1>

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
								ImagePath={`${posts[currentPost].image}`}
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
					<div className="mobile-cycle-post-container">
						<button
							className="mobile-cycle-post-btn"
							onClick={() => CyclePost("prev")}>
							<img
								className="cycle-post-svg"
								alt="previous icon"
								src="\assets\icons\icon-left-arrow.svg"></img>
							<div>Forrige Post</div>
						</button>
						<button
							className="mobile-cycle-post-btn"
							onClick={() => CyclePost("next")}>
							<img
								className="cycle-post-svg"
								alt="next icon"
								src="\assets\icons\icon-right-arrow.svg"></img>
							<div>Neste Post</div>
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
