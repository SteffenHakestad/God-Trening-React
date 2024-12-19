import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import engTranslation from "./locales/eng.json";
import norTranslation from "./locales/nor.json";

const resources = {
	eng: {
		translation: engTranslation,
	},
	nor: {
		translation: norTranslation,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "nor", // Default language
	keySeparator: false, // Allow using '.' in keys
	interpolation: {
		escapeValue: false, // React already safely escapes interpolated values
	},
});

export default i18n;
