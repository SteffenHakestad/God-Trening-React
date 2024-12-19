import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
	const { i18n } = useTranslation();
	// const { t } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		togglePopup();
		toggleFlag();
	};

	const [isPopupVisible, setPopupVisibility] = useState(false);

	const togglePopup = () => {
		setPopupVisibility(!isPopupVisible);
	};

	//Hide incorrect flag.
	const toggleFlag = () => {
		if (i18n.language === "eng") {
			document.getElementById("english-flag").style.display = "block";
			document.getElementById("norwegian-flag").style.display = "none";
		} else if (i18n.language === "nor") {
			document.getElementById("english-flag").style.display = "none";
			document.getElementById("norwegian-flag").style.display = "block";
		}
	};

	return (
		<>
			{/* Visual button rendered on every page allowing switching of languages */}
			<button onClick={togglePopup} className="toggle-language-btn std-btn">
				<img
					src={process.env.PUBLIC_URL + "/assets/icons/NorwayFlag.png"}
					alt="NorwayFlag"
					id="norwegian-flag"
				/>
				<img
					src={process.env.PUBLIC_URL + "/assets/icons/EnglishFlag.png"}
					alt="EnglishFlag"
					id="english-flag"
				/>
				{/* {t("change-language")} */}
			</button>

			{isPopupVisible && (
				<div className="language-switch-container">
					<button
						onClick={() => changeLanguage("eng")}
						className="language-btn eng">
						<img
							src={process.env.PUBLIC_URL + "/assets/icons/EnglishFlag.png"}
							alt="EnglishFlag"
						/>
					</button>
					<button
						onClick={() => changeLanguage("nor")}
						className="language-btn nor">
						<img
							src={process.env.PUBLIC_URL + "/assets/icons/NorwayFlag.png"}
							alt="NorwayFlag"
						/>
					</button>
					{/* <button onClick={togglePopup} className='toggle-language-btn'>Close</button> */}
				</div>
			)}
		</>
	);
}
