import React from "react";
import Header from "../components/Header";
import ServicesSidebar from "../components/ServicesSideBarComponent";
import { useTranslation } from "react-i18next";

export default function Presentation() {
	const { t } = useTranslation();
	return (
		<>
			<Header
				HeaderHeadline={t("presentation")}
				HeaderLink={"God Trening"}
				HeaderLink2={t("services")}
				HeaderLink3={t("presentation")}
				HeaderAnchor={"/"}
				HeaderAnchor2={"/services"}
				HeaderAnchor3={"/presentation"}
				Display1={"block"}
				Display2={"block"}
			/>
			<ServicesSidebar />
		</>
	);
}
