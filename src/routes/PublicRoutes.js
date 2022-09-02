import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import EnterEmail from "../Pages/auth/EnterEmail";
import Login from "../Pages/auth/Login";
import NewPassword from "../Pages/auth/NewPassword";
import SignUp from "../Pages/auth/SignUp";
import BilingDetails from "../Pages/checkout/BilingDetails";
import Checkout from "../Pages/checkout/checkout";
import Classes from "../Pages/Classes/Classes";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import NewsDetail from "../Pages/News/NewsDetail";
import Privacy from "../Pages/Privacy/Privacy";
import Terms from "../Pages/Privacy/Terms";
import ProductCart from "../Pages/ProductCart/ProductCart";
import BladingDetail from "../Pages/Profile/BladingDetail";
import MyCourses from "../Pages/Profile/MyCourses";
import Myorder from "../Pages/Profile/Myorder";
import MyProfile from "../Pages/Profile/MyProfile";
import OnlineCourses from "../Pages/Profile/OnlineCourses";
import Profile from "../Pages/Profile/Profile";
import Thankyou from "../Pages/Thankyou/Thankyou";
import Wishlist from "../Pages/wishlist/wishlist";

const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/classes" element={<Classes />} />
					<Route path="/News" element={<News />} />
					<Route path="/NewsDetail" element={<NewsDetail />} />
					<Route path="/Privacy" element={<Privacy />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/productcart" element={<ProductCart />} />
					<Route path="/bilingDetail" element={<BilingDetails />} />
					<Route path="/Checkout" element={<Checkout />} />
					<Route path="/Thankyou" element={<Thankyou />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Enteremail" element={<EnterEmail />} />
					<Route path="/NewPassword" element={<NewPassword />} />
					<Route path="/Signup" element={<SignUp />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/my-courses" element={<MyCourses />} />
					<Route path="/MyProfile" element={<MyProfile />} />
					<Route path="/Myorder" element={<Myorder />} />
					<Route path="/BladingDetail" element={<BladingDetail />} />
					<Route path="/OnlineCourses" element={<OnlineCourses />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default PublicRoutes;
