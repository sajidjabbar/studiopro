import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import Classes from "../Pages/Classes/Classes";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Shop1 from "../Pages/Shop/Shop1";
import Shop2 from "../Pages/Shop/Shop2";

const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/classes" element={<Classes />} />
					<Route path="/News" element={<News />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Shop1" element={<Shop1 />} />
					<Route path="/Shop2" element={<Shop2 />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default PublicRoutes;
