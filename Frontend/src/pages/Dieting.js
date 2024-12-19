import React from "react";
import Header from "../components/Header";
import ServicesSidebar from "../components/ServicesSideBarComponent";
import { useTranslation } from "react-i18next";

export default function Diet() {
	const { t } = useTranslation();
	return (
		<>
			<Header
				HeaderHeadline={t("diet-guidance")}
				HeaderLink={"God Trening"}
				HeaderLink2={t("services")}
				HeaderLink3={t("diet-guidance")}
				HeaderAnchor={"/"}
				HeaderAnchor2={"/services"}
				HeaderAnchor3={"/dieting"}
				Display1={"block"}
				Display2={"block"}
			/>
			<ServicesSidebar />
		</>
	);
}
