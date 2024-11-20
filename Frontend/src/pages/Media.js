import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MediaPost from "../components/MediaPost";
export default function Media() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const SERVER_IP = process.env.REACT_APP_SERVER_IP || "localhost";

		// Fetch data from the backend
		fetch(`http://${SERVER_IP}:3001/api/posts`)
			.then((response) => response.json())
			.then((data) => {
				// Normalize paths for images and videos
				const normalizedData = data.map((post) => ({
					...post,
					image: post.image?.replace(/\\/g, "/"),
					video: post.video?.replace(/\\/g, "/"),
				}));
				setPosts(normalizedData);
			})
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
						ImagePath={`http://${
							process.env.REACT_APP_SERVER_IP || "localhost"
						}:3001/${post.image}`}
						VideoPath={`http://${
							process.env.REACT_APP_SERVER_IP || "localhost"
						}:3001/${post.video}`}
						// ImagePath={`${post.image}`}
						// VideoPath={`${post.video}`}
						createdAt={post.createdAt}
					/>
				))}
			</div>
		</>
	);
}
