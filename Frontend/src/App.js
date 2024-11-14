import { useState } from "react";

import Navbar from "./components/Navbar.js";
import MobileNavbar from "./components/MobileNavbar.js";

import Footer from "./components/Footer.js";

import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Media from "./pages/Media.js";
import Contact from "./pages/Contact.js";
import Admin from "./pages/Admin.js";
import Course from "./pages/Course.js";
import Presentation from "./pages/Presentation.js";
import Consultant from "./pages/Consultant.js";
import Dieting from "./pages/Dieting.js";

import { Route, Routes } from "react-router-dom";

import UnderConstructionComponent from "./components/UnderConstructionComponent.js";
import ScrollToTop from "./components/ScrollToTopComponent.js";

export default function App() {
	const [construction, setConstruction] = useState(false); //Set this to true to add "underConstructionComp"

	return (
		<>
			{/* If construction is true display the "UnderConstructionComponent", if not display everything else. */}
			{construction ? (
				<>
					<UnderConstructionComponent setConstruction={setConstruction} />
				</>
			) : (
				<>
					<Navbar />
					<MobileNavbar />
					<div className="container">
						<ScrollToTop />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/home" element={<Home />} />
							<Route path="/services" element={<Services />} />
							<Route path="/media" element={<Media />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/GTadmin" element={<Admin />} />

							<Route path="/course" element={<Course />} />
							<Route path="/presentation" element={<Presentation />} />
							<Route path="/consultant" element={<Consultant />} />
							<Route path="/dieting" element={<Dieting />} />
						</Routes>
						<Footer />
					</div>
				</>
			)}
		</>
	);
}
