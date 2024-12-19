import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AdminDashboardComponent() {
	const { t } = useTranslation();
	//Get ref to DOM elements
	const publishContainer = useRef(null);
	const supportContainer = useRef(null);
	const previewContainer = useRef(null);

	//State for collapse/expand buttons
	const [publishState, setPublishState] = useState("expand");
	const [supportState, setSupportState] = useState("expand");

	//State for new media post input fields
	const [headline, setHeadline] = useState("");
	const [mediaText, setMediaText] = useState("");
	const [mediaImage, setMediaImage] = useState(null);
	const [mediaVideo, setMediaVideo] = useState(null);

	//State for image preview
	const [previewUrl, setPreviewUrl] = useState(null);

	//State for success/failure popup
	const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
	const [isFailurePopupOpen, setFailurePopupOpen] = useState(false);

	//State for new media post input field changes
	const handleHeadlineChange = (e) => {
		setHeadline(e.target.value);
	};
	const handleMediaTextChange = (e) => {
		setMediaText(e.target.value);
	};
	const handleMediaImageChange = (e) => {
		const file = e.target.files[0];
		setMediaImage(file);

		if (file) {
			previewContainer.current.style.display = "block";
			const url = URL.createObjectURL(file);
			setPreviewUrl(url);
		}
	};
	const handleMediaVideoChange = (e) => {
		const file = e.target.files[0];
		setMediaVideo(file);
	};

	//Ref for file input. HandleButtonClick clicks the file input button. Called from the styled button .upload-image-button
	const imageInputRef = useRef(null);
	const handleImageButtonClick = () => {
		imageInputRef.current.click();
	};

	//Ref for file input. HandleButtonClick clicks the file input button. Called from the styled button .upload-image-button
	const videoInputRef = useRef(null);
	const handleVideoButtonClick = () => {
		videoInputRef.current.click();
	};

	//Function to remove seleceted image and hide the image preview
	const removeSelectedImage = () => {
		setMediaImage(null);
		setPreviewUrl(null);
		previewContainer.current.style.display = "none";
	};

	//Function to expand/collapse the different collapse menus based on user input.
	const expandInfo = (btn) => {
		switch (btn) {
			case "Publish":
				setPublishState((prevState) => {
					const newState = prevState === "collapse" ? "expand" : "collapse";
					publishContainer.current.style.display =
						newState === "expand" ? "none" : "block";
					return newState;
				});
				break;
			case "Support":
				setSupportState((prevState) => {
					const newState = prevState === "collapse" ? "expand" : "collapse";
					supportContainer.current.style.display =
						newState === "expand" ? "none" : "block";
					return newState;
				});
				break;
			default:
				console.log("Error: Button not found");
				break;
		}
	};

	useEffect(() => {
		publishContainer.current.style.display = "none";
		supportContainer.current.style.display = "none";
	}, []);

	//Function to handle media post submit to DB
	const HandleMediaSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("headline", headline);
		formData.append("mediaText", mediaText);
		formData.append("image", mediaImage);
		formData.append("video", mediaVideo);

		// //Loops and logs all formdata entries.
		// for (let [key, value] of formData.entries()) {
		// 	console.log(`${key}:`, value);
		// }

		try {
			const response = await axios.post(
				`http://localhost:3001/api/posts`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			console.log("Post created:", response.data);

			handleSuccess();
		} catch (error) {
			console.error("There was an error creating the post!", error);
			handleFailure();
		}
	};

	//Trigger success/failure popup based on post status
	const handleSuccess = () => {
		setSuccessPopupOpen(true);
		setHeadline("");
		setMediaText("");
		setMediaImage(null);
		setPreviewUrl(null);
		setMediaVideo(null);
		previewContainer.current.style.display = "none";
	};
	const handleFailure = () => {
		setFailurePopupOpen(true);
	};

	// Close popup overlay
	const handlePopupClose = () => {
		setSuccessPopupOpen(false);
		setFailurePopupOpen(false);
	};

	return (
		<div id="admin-dashboard">
			<h1>{t("admin-dashboard")}</h1>
			<div className="admin-divider"></div>

			<button
				className="dashboard-collapse-btn"
				onClick={() => expandInfo("Publish")}>
				{t("publish-new")}
				<img
					alt="expand icon"
					src="/assets/icons/icon-right-arrow.svg"
					className="expand-icon"
					style={{
						display: publishState === "expand" ? "block" : "none",
					}}></img>
				<img
					alt="collapse icon"
					src="/assets/icons/icon-down-arrow.svg"
					className="collapse-icon"
					style={{
						display: publishState === "collapse" ? "block" : "none",
					}}></img>
			</button>

			{/* First collapse menu, handles new media posts. */}
			<div
				className="dashboard-collapse-container"
				id="collapse-1"
				ref={publishContainer}>
				<form onSubmit={HandleMediaSubmit}>
					<input
						className="input-field"
						name="headline-input"
						type="text"
						placeholder={t("media-headline")}
						value={headline}
						onChange={handleHeadlineChange}
						maxLength="50"
						required></input>
					<textarea
						className="input-field"
						name="message-input"
						type="text"
						placeholder={t("media-text")}
						value={mediaText}
						onChange={handleMediaTextChange}
						required></textarea>

					<div id="file-upload-container">
						{/* IMAGE UPLOAD */}
						<div className="image-upload-container">
							<label htmlFor="media-image-upload">{t("upload-pic")}</label>
							<input
								type="file"
								name="media-image-upload"
								accept="image/*"
								ref={imageInputRef}
								onChange={handleMediaImageChange}
								style={{ display: "none" }}></input>

							<div className="selected-image-container">
								<button
									className="upload-image-button std-btn"
									type="button"
									onClick={handleImageButtonClick}>
									<img
										alt="upload icon"
										src="/assets/icons/icon-upload-image.svg"></img>
								</button>
								<div
									className="preview-upload-image-container"
									ref={previewContainer}
									style={{ display: "none" }}>
									<button
										className="remove-image-button"
										type="button"
										onClick={removeSelectedImage}>
										<img
											src="/assets/icons/icon-x.svg"
											alt="remove-selected"></img>
									</button>
									{previewUrl && (
										<img
											src={previewUrl}
											className="preview-upload-image"
											alt="Preview"
										/>
									)}
								</div>
							</div>
							{/*Gets the file text from the type="file" button*/}
							<p className="selected-file-text">
								{mediaImage ? mediaImage.name : t("no-file-chosen")}
							</p>
						</div>
						<div className="v-upload-divider"></div>

						{/* VIDEO UPLOAD */}
						<div className="image-upload-container">
							<label htmlFor="media-video-upload">{t("upload-video")}</label>
							<input
								type="file"
								name="media-video-upload"
								accept="video/*"
								ref={videoInputRef}
								onChange={handleMediaVideoChange}
								style={{ display: "none" }}></input>

							<div className="selected-image-container">
								<button
									className="upload-image-button std-btn"
									type="button"
									onClick={handleVideoButtonClick}>
									<img
										alt="upload icon"
										src="/assets/icons/icon-upload-video.svg"></img>
								</button>
							</div>

							{/*Gets the file text from the type="file" button*/}
							<p className="selected-file-text">
								{mediaVideo ? mediaVideo.name : t("no-file-chosen")}
							</p>
						</div>
					</div>
					<button type="submit" className="std-btn">
						{t("publish-media")}
					</button>
				</form>
			</div>

			<button
				className="dashboard-collapse-btn"
				onClick={() => expandInfo("Support")}>
				{t("technical-support")}
				<img
					alt="expand icon"
					src="/assets/icons/icon-right-arrow.svg"
					className="expand-icon"
					style={{
						display: supportState === "expand" ? "block" : "none",
					}}></img>
				<img
					alt="collapse icon"
					src="/assets/icons/icon-down-arrow.svg"
					className="collapse-icon"
					style={{
						display: supportState === "collapse" ? "block" : "none",
					}}></img>
			</button>

			<div
				className="dashboard-collapse-container"
				id="collapse-3"
				ref={supportContainer}>
				<div>{t("technical-contact")}</div>
				<div id="collapse-3-container">
					<img alt="email icon" src="/assets/icons/icon-email.svg"></img>
					<div>
						Steffen.hakestad@bbvisuals.no<br></br>
						Magne.brekke@bbvisuals.no
					</div>
				</div>
				<div id="collapse-3-container">
					<img alt="phone icon" src="/assets/icons/icon-phone.svg"></img>
					<div>468 95 371 - Steffen Hakestad (Utvikler)</div>
				</div>
			</div>

			{/* Media Post Success Popup */}
			{isSuccessPopupOpen && (
				<div
					className="success-failure-popup-overlay"
					onClick={handlePopupClose}>
					<div className="success-failure-container">
						<div className="close-success-failure-popup-btn-container">
							<button
								className="close-success-failure-popup-btn"
								onClick={handlePopupClose}>
								<img
									className="close-popup-icon"
									src={process.env.PUBLIC_URL + "/assets/icons/icon-x.svg"}
									alt="Exit-Icon"
								/>
							</button>
						</div>
						<p>{t("media-uploaded")}</p>
						<Link to="/media">
							<button className="std-btn">{t("goto-media")}</button>
						</Link>
					</div>
				</div>
			)}
			{/* Media Post Failure Popup */}
			{isFailurePopupOpen && (
				<div
					className="success-failure-popup-overlay"
					onClick={handlePopupClose}>
					<div className="success-failure-container">
						<div className="close-success-failure-popup-btn-container">
							<button
								className="close-success-failure-popup-btn"
								onClick={handlePopupClose}>
								<img
									className="close-popup-icon"
									src={process.env.PUBLIC_URL + "/assets/icons/icon-x.svg"}
									alt="Exit-Icon"
								/>
							</button>
						</div>
						<p>{t("media-uploaded-failed")}</p>
					</div>
				</div>
			)}
		</div>
	);
}

/* <div className='dashboard-collapse-container'>
<input className="media-headline-input" type="text" id="media-headline" name="media-headline" placeholder='Overskrift'/>
<input className="media-body-input" type="text" id="media-body" name="media-body" placeholder='Media Tekst'/>
<button id="publish-btn" type="submit">Publisér</button>
</div> */
