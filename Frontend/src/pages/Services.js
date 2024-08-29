import React from "react";
import ServicesComponent from "../components/ServicesComponent";
import Header from "../components/Header";

export default function Services() {
	return (
		<>
			<Header
				HeaderHeadline={"Tjenester"}
				HeaderLink={"God Trening"}
				HeaderLink2={"Tjenester"}
				// HeaderLink3={"Tjenester"}
				HeaderAnchor={"/"}
				HeaderAnchor2={"/services"}
				Display1={"block"}
				Display2={"none"}
			/>
			<ServicesComponent />
		</>
	);
}
