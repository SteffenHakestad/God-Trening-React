import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import { toast } from "react-hot-toast";

//Importing the gif because if I don't do it this way the gif doesn't load in time for the popup
//import loadingGif from "/assets/icons/icon-loading.gif";

export default function ContactMailToComponent() {
	const { t } = useTranslation();
	//Create and set default state of the inputs
	const [subject, setSubject] = useState("");
	const [senderName, setSenderName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const [isSendingPopup, setSendingPopup] = useState(false);

	// Handle popup overlay
	const handlePopup = () => {
		if (isSendingPopup === true) {
			setSendingPopup(false);
		} else if (isSendingPopup === false) {
			setSendingPopup(true);
		}
	};

	//Detects changes in input fields
	const handleSubjectChange = (e) => {
		setSubject(e.target.value);
	};
	const handleNameChange = (e) => {
		setSenderName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	};
	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	return (
		<>
			<div className="contact-header">
				<h1>{t("contact")}</h1>
				<div className="contact-header-container">
					<img
						alt="phone icon"
						src="/assets/icons/icon-circle-phone.svg"
						className="contact-header-icon"></img>
					<div>922 26 557</div>
				</div>
				<div className="contact-header-container">
					<img
						alt="email icon"
						src="/assets/icons/icon-circle-mail.svg"
						className="contact-header-icon"></img>
					<div>Godtrening@online.no</div>
				</div>
			</div>

			<div className="mailto-container">
				<h1>{t("contact-me")}</h1>
				<div className="contact-divider"></div>
				<form
					id="mail-form"
					action="https://formsubmit.co/5b06da5baf5c01b388ff73cdfe530242"
					method="POST">
					<div id="contact-info-container">
						<input
							className="input-field"
							name="Subject/Emne"
							type="text"
							placeholder={t("topic")}
							value={subject}
							onChange={handleSubjectChange}
							required></input>
						<input
							className="input-field"
							name="Name/Navn"
							type="text"
							placeholder={t("your-name")}
							value={senderName}
							onChange={handleNameChange}
							required></input>
						<input
							className="input-field"
							name="Email/Epost"
							type="email"
							placeholder={t("your-email")}
							value={email}
							onChange={handleEmailChange}
							required></input>
						<input
							className="input-field"
							name="Phone/Telefon"
							type="numeric"
							placeholder={t("your-phone")}
							value={phone}
							onChange={handlePhoneChange}></input>
					</div>
					<div id="contact-message-container">
						<textarea
							className="input-field"
							name="Message/Melding"
							type="text"
							placeholder={t("your-message")}
							value={message}
							onChange={handleMessageChange}
							required></textarea>
						<input
							className="submit-mail-btn std-btn"
							type="submit"
							onClick={() => handlePopup()}
							value="Send"></input>
					</div>
				</form>
			</div>
			{/*Sending post popup */}
			{isSendingPopup && (
				<div className="success-failure-popup-overlay">
					<div className="success-failure-container">
						<p>{t("sending-contact-post")}</p>
						<img
							src="/assets/icons/icon-loading.gif"
							alt="loading icon"
							id="loading-icon"
						/>
					</div>
				</div>
			)}
		</>
	);
}

//Form submit function sending data to a google apps script, which in turn sends form data from the gmail account to the support account.
//Using Formsubmit.co now instead, but keepking this code here for now.
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const contactFormData = new URLSearchParams({
//       subject: subject,
//       name: senderName,
//       email: email,
//       phone: phone,
//       message: message,
//     });

//     const url =
//       "https://script.google.com/macros/s/AKfycbx6EZerkP8AIWN6m5BsP47UIyBKeVjO8kRgAOdNLfHSqzwzt_GmWZWvWjgpExTLHP-Q/exec";

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: contactFormData,
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       });

//       if (response.ok) {
//         const jsonResponse = await response.json();
//         console.log(jsonResponse);
//         console.log("Mail sent successfully!");
//       } else {
//         console.error("Error in sending mail", response.statusText);
//       }
//     } catch (error) {
//       console.error("Network error", error);
//     }
//   };

//Code to send formdata to apps sscript, this is using xhr instrad of fetch
// const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create new form data and append values from input fields to it.
//     const contactFormData = new FormData();
//     contactFormData.append("subject", subject);
//     contactFormData.append("name", senderName);
//     contactFormData.append("email", email);
//     contactFormData.append("phone", phone);
//     contactFormData.append("message", message);

//     const url = "https://script.google.com/macros/s/AKfycbypTrtYnxc4xn2Y4sADHxbnW-TpmHzwfq8id4gOOkUeaoQ21S7U2EiCHG7-segV4uga/exec";
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             console.log(xhr.responseText);
//             console.log("Mail sent successfully!")
//         }
//     };
//     xhr.send(new URLSearchParams(contactFormData).toString());
//}
