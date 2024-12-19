import React from "react";
import ContactMailToComponent from "../components/ContactMailToComponent";
import { Toaster } from "react-hot-toast";

export default function Contact() {
	return (
		<>
			<Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
			<ContactMailToComponent />
		</>
	);
}
