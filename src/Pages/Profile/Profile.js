import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { profile_img } from "../../constant";
import "../../assets/css/profile.css";
import MyProfile from "../Profile/MyProfile";
import MyCourses from "./MyCourses";
import Myorder from "./Myorder";
import ChangePassword from "./ChangePassword";
import OnlineCourses from "./OnlineCourses";
import { useNavigate } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";

const Profile = () => {
	const [state, setState] = useState(0);
	const navigate = useNavigate();
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Profile</h2>
							<span>Home {">"} Profile</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* Profile starts here */}
			<section className="profile-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<SideBar />
						</div>
						<div className="col-lg-9">
							{/* <MyProfile /> */}
							{state === 0 ? <OnlineCourses /> : null}
							{state === 1 ? <MyCourses /> : null}
							{state === 2 ? <Myorder /> : null}
							{state === 3 ? <ChangePassword /> : null}
						</div>
					</div>
				</div>
			</section>
			{/* Profile ends here */}
			<Footer />
		</>
	);
};

export default Profile;
