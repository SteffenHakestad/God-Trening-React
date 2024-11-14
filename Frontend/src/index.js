import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTopComponent from "./components/ScrollToTopComponent";

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTopComponent />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
