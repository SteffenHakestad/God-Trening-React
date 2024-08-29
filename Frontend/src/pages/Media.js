import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MediaPost from "../components/MediaPost";

export default function Media() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Fetch data from the backend
		fetch("/api/posts") //fetch("http://localhost:3001/api/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<>
			<Header
				HeaderHeadline={"Media Innlegg"}
				HeaderLink={"God Trening"}
				HeaderLink2={"Media"}
				HeaderAnchor={"/"}
				HeaderAnchor2={"/media"}
				Display1={"block"}
				Display2={"none"}
			/>

			<div className="media-posts-container">
				{posts.map((post) => (
					<MediaPost
						key={post._id}
						MediaTitle={post.headline}
						MediaText={post.mediaText}
						ImagePath={`${post.image}`}
						VideoPath={`${post.video}`}

						//ImagePath={post.image ? `uploads/${post.image}` : null}
					/>
				))}
			</div>
		</>
	);
}
