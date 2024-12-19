import React from "react";
import Header from "../components/Header";
import ServicesSidebar from "../components/ServicesSideBarComponent";
import { useTranslation } from "react-i18next";

export default function Course() {
	const { t } = useTranslation();
	return (
		<>
			<Header
				HeaderHeadline={t("course")}
				HeaderLink={"God Trening"}
				HeaderLink2={t("services")}
				HeaderLink3={t("course")}
				HeaderAnchor={"/"}
				HeaderAnchor2={"/services"}
				HeaderAnchor3={"/course"}
				Display1={"block"}
				Display2={"block"}
			/>
			<ServicesSidebar />
		</>
	);
}
