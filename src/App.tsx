// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";

// import * as data from "./data/data.json";
import Home from "./pages/Home";

function App() {
	const location = useLocation();
	
	return (
		<>
			<Routes location={location} key={location.pathname}>
				<Route path="/portfolio-2025" element={<Home />} />
				<Route path="/stack/:stack" element={<Home />} />
				{/* <Route path="/projects" element={<Projects />} /> */}
			</Routes>
		</>
	)
}

export default App
