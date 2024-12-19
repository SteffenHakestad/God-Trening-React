import { React, useState } from "react";
import { useAuth } from "../components/AuthContext";
import AdminLoginComponent from "../components/admin/AdminLoginComponent";
import AdminDashboardComponent from "../components/admin/AdminDashboardComponent";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

import axios from "axios";

export default function Admin() {
	const { t } = useTranslation();
	const [isInvalidPopup, setInvalidPopup] = useState(false);

	// Handle popup overlay
	const handlePopup = () => {
		if (isInvalidPopup === true) {
			setInvalidPopup(false);
		} else if (isInvalidPopup === false) {
			setInvalidPopup(true);
		}
	};

	const { isLoggedIn, setIsLoggedIn } = useAuth();
	const handleLogin = async (username, password) => {
		try {
			const SERVER_IP = process.env.SERVER_IP || "localhost";
			const res = await axios.post(`http://${SERVER_IP}:3001/api/auth/login`, {
				username,
				password,
			});
			localStorage.setItem("token", res.data.token);
			setIsLoggedIn(true);
		} catch (error) {
			handlePopup();
			console.log("Invalid login credenticals" + error);
		}
	};

	return (
		<>
			<Header
				HeaderHeadline={"Admin"}
				HeaderLink={"God Trening"}
				HeaderLink2={"Admin"}
				HeaderAnchor={"/"}
				HeaderAnchor2={"/admin"}
				Display1={"block"}
				Display2={"none"}
			/>

			{isLoggedIn ? (
				<AdminDashboardComponent />
			) : (
				<AdminLoginComponent onLogin={handleLogin} />
			)}

			{/*Invalid credenticals popup */}
			{isInvalidPopup && (
				<div
					className="success-failure-popup-overlay"
					onClick={() => handlePopup()}>
					<div className="success-failure-container">
						<div className="close-success-failure-popup-btn-container">
							<button
								className="close-success-failure-popup-btn"
								onClick={() => handlePopup()}>
								<img
									className="close-popup-icon"
									src={process.env.PUBLIC_URL + "/assets/icons/icon-x.svg"}
									alt="Exit-Icon"
								/>
							</button>
						</div>
						<p>{t("invalid-credentials")}</p>
						<button className="std-btn" onClick={() => handlePopup()}>
							{t("back")}
						</button>
					</div>
				</div>
			)}
		</>
	);
}
