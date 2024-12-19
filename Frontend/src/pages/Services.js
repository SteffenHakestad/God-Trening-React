import React from "react";
import ServicesComponent from "../components/ServicesComponent";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

export default function Services() {
	const { t } = useTranslation();
	return (
		<>
			<Header
				HeaderHeadline={t("services")}
				HeaderLink={"God Trening"}
				HeaderLink2={t("services")}
				HeaderAnchor={"/"}
				HeaderAnchor2={"/services"}
				Display1={"block"}
				Display2={"none"}
			/>
			<ServicesComponent />
		</>
	);
}
