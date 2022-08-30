import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import Classes from "../Pages/Classes/Classes";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/classes" element={<Classes />} />
					<Route path="/News" element={<News />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default PublicRoutes;
