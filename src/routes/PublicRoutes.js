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
import Contact from "../Pages/Contact/Contact";
import News from "../Pages/News/News";
import Shop1 from "../Pages/Shop/Shop1";
import Shop2 from "../Pages/Shop/Shop2";
import ClassesDetail from "../Pages/Classes/ClassesDetail";
import Addresses from "../Pages/Profile/Addresses";
import Payment from "../Pages/Profile/Payment";
import ChangePassword from "../Pages/Profile/ChangePassword";
import Order from "../Pages/Profile/Order";
import InPerson from "../Pages/Profile/InPerson";
import HybridCourses from "../Pages/Profile/HybridCourses";
import { useEffect } from "react";
import $ from "jquery";

const PublicRoutes = () => {
	
	useEffect(() => {
		// Mobile Nav
		$("document").ready(function () {
			$("header .canvas-icon i").click(function () {
				$("header .mobile-header").addClass("show");
			});

			$("header .mobile-header .cancel").click(function () {
				$("header .mobile-header").removeClass("show");
			});
		});
		// Mobile Nav
	}, []);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/classes" element={<Classes />} />
					<Route path="/classes-detail" element={<ClassesDetail />} />
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
					<Route path="/My-Address" element={<Addresses />} />
					<Route path="/Payment" element={<Payment />} />
					<Route path="/changePassword" element={<ChangePassword />} />
					<Route path="/Myorder" element={<Myorder />} />
					<Route path="/BladingDetail" element={<BladingDetail />} />
					<Route path="/OnlineCourses" element={<OnlineCourses />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Shop1" element={<Shop1 />} />
					<Route path="/Shop2" element={<Shop2 />} />
					<Route path="/Order" element={<Order />} />
					<Route path="/InPerson" element={<InPerson />} />
					<Route path="/HybridCourses" element={<HybridCourses />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default PublicRoutes;
