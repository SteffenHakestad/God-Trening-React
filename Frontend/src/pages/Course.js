import React from "react";
import Header from "../components/Header";
import ServicesSidebar from "../components/ServicesSideBarComponent";

export default function Course() {
	return (
		<>
			<Header
				HeaderHeadline={"Kurs"}
				HeaderLink={"God Trening"}
				HeaderLink2={"Tjenester"}
				HeaderLink3={"Kurs"}
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
