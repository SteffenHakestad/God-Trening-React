import React from "react";
import Linkify from "linkify-react";
import { useAuth } from "../components/AuthContext";

export default function MediaPost({
	MediaTitle,
	MediaText,
	ImagePath,
	VideoPath,
	createdAt,
	postId,
	onDelete, // Function passed from Media.js
}) {
	const { isLoggedIn } = useAuth();

	const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	//function to delete post.
	const handleDeletePost = () => {
		onDelete(); // Trigger the delete confirmation popup
	};

	return (
		<>
			<div className="media-container">
				<div className="media-container-date">
					<h2 className="date-display">{formattedDate}</h2>
					{isLoggedIn && (
						<button className="delete-post-btn" onClick={handleDeletePost}>
							<img
								alt="delete media post"
								src="/assets/icons/icon-delete.svg"
							/>
						</button>
					)}
				</div>
				<div id="no-padding-container">
					<div className="post-header-container">
						<div className="left-empty-space"></div>
						<h1>{MediaTitle}</h1>
					</div>

					<div className="h-media-divider"></div>
					<Linkify>
						<p className="media-text-content">{MediaText}</p>
					</Linkify>

					<div className="media-attachment-container">
						{/* Check if the ImagePath is valid, and if it ends with "/" which means it's an incomplete path 
					(For example: ImagePath = http://localhost:3001/ would fail this check)
					This is here to stop errors trying to fetch empty paths if no img or video was uploaded with the post.*/}
						{ImagePath && !ImagePath.endsWith("/") && (
							<img className="media-image" alt="media" src={ImagePath} />
						)}
						{/* Same as with image above */}
						{VideoPath && !VideoPath.endsWith("/") && (
							<video
								className="media-video"
								title="media-video"
								src={VideoPath}
								type="video/mp4"
								controls></video>
						)}
					</div>

					<div className="h-media-divider-small"></div>
				</div>
			</div>
		</>
	);
}

//src={`http://localhost:3001/${ImagePath}`}

// src={`http://localhost:3001/${ImagePath}`} Maybe use?

/* <img
    className="media-image"
    alt="media"
    src={ImagePath2}>
    </img>

    <video
    className="media-video"
    alt="media"
    title="media-video"
    src={VideoPath} 
    type="video/mp4"
    controls
    >
    </video> */
