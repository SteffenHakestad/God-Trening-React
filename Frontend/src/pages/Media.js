import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MediaPost from "../components/MediaPost";
import { useTranslation } from "react-i18next";

export default function Media() {
	const { t } = useTranslation();
	const [posts, setPosts] = useState([]);
	const [selectedPostId, setSelectedPostId] = useState(null);

	//State for success/failure popup
	let [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

	let [isPostDeleted, setIsPostDeleted] = useState(false);

	useEffect(() => {
		const SERVER_IP = process.env.SERVER_IP || "localhost";

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

	// Function to delete a post
	const deletePost = async (postId) => {
		const SERVER_IP = process.env.SERVER_IP || "localhost";

		try {
			const response = await fetch(
				`http://${SERVER_IP}:3001/api/posts/${postId}`,
				{
					method: "DELETE",
				}
			);

			if (response.ok) {
				setIsPostDeleted(true);
				// Update the state to remove the deleted post
				setPosts((prevPosts) =>
					prevPosts.filter((post) => post._id !== postId)
				);
			} else {
				const error = await response.json();
				alert(`Failed to delete post: ${error.message}`);
			}
		} catch (err) {
			console.error("Error deleting post:", err);
			alert("An error occurred while trying to delete the post.");
		}
		setIsConfirmPopupOpen(false); // Close popup after action
	};

	const handleDeletePopup = (postId = null) => {
		setSelectedPostId(postId); // Set post ID for deletion or reset it
		setIsConfirmPopupOpen(postId !== null); // Open dialog only if postId is provided
	};

	return (
		<>
			<Header
				HeaderHeadline={t("media-post")}
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
						postId={post._id} // Used for identifying post for deletion
						MediaTitle={post.headline}
						MediaText={post.mediaText}
						ImagePath={`http://${process.env.SERVER_IP || "localhost"}:3001/${
							post.image
						}`}
						VideoPath={`http://${process.env.SERVER_IP || "localhost"}:3001/${
							post.video
						}`}
						createdAt={post.createdAt}
						onDelete={() => handleDeletePopup(post._id)} // Open confirmation dialog
					/>
				))}
			</div>

			{/*Confirm deletion popup*/}
			{isConfirmPopupOpen && (
				<div
					className="success-failure-popup-overlay"
					onClick={() => handleDeletePopup(null)}>
					<div className="success-failure-container">
						<div className="close-success-failure-popup-btn-container">
							<button
								className="close-success-failure-popup-btn"
								onClick={() => handleDeletePopup("close")}>
								<img
									className="close-popup-icon"
									src={process.env.PUBLIC_URL + "/assets/icons/icon-x.svg"}
									alt="Exit-Icon"
								/>
							</button>
						</div>
						<p>{t("delete-confirm")}</p>
						<div className="lower-popup-btn-container">
							<button
								className="std-btn delete-post-confirm-btn"
								onClick={() => handleDeletePopup(null)}>
								{t("no")}
							</button>
							<button
								className="std-btn delete-post-confirm-btn"
								onClick={() => {
									deletePost(selectedPostId); // Delete the selected post
								}}>
								{t("yes")}
							</button>
						</div>
					</div>
				</div>
			)}
			{/*Post is deleted popup*/}
			{isPostDeleted && (
				<div
					className="success-failure-popup-overlay"
					onClick={() => setIsPostDeleted(false)}>
					<div className="success-failure-container">
						<div className="close-success-failure-popup-btn-container">
							<button
								className="close-success-failure-popup-btn"
								onClick={() => setIsPostDeleted(false)}>
								<img
									className="close-popup-icon"
									src={process.env.PUBLIC_URL + "/assets/icons/icon-x.svg"}
									alt="Exit-Icon"
								/>
							</button>
						</div>
						<p>{t("post-deleted")}</p>
					</div>
				</div>
			)}
		</>
	);
}
