import React from "react";
import Header from "../components/Header";
import ServicesSidebar from "../components/ServicesSideBarComponent";
import { useTranslation } from "react-i18next";

export default function Consultant() {
	const { t } = useTranslation();
	return (
		<>
			<Header
				HeaderHeadline={t("consultant")}
				HeaderLink={"God Trening"}
				HeaderLink2={t("services")}
				HeaderLink3={t("consultant")}
				HeaderAnchor={"/"}
				HeaderAnchor2={"/services"}
				HeaderAnchor3={"/consultant"}
				Display1={"block"}
				Display2={"block"}
			/>
			<ServicesSidebar />
		</>
	);
}
