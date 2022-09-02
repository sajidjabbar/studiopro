import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profile_img } from "../../constant";

const SideBar = () => {
	const [state, setState] = useState(0);
	const navigate = useNavigate();

	return (
		<>
			<div className="profile-wrapper">
				<div className="profile-img-wrapper">
					<img src={profile_img} className="profile-img" alt="" />
					<button>
						<i className="fa-regular fa-plus"></i>
					</button>
				</div>
				<div className="profile-name-wrapper">
					<h5>Emily Carter</h5>
					<h6>User Dashboard</h6>
				</div>
			</div>
			<div className="profile-links-wrapper">
				<nav>
					<ul>
						<li className="nav-link">
							<a
								onClick={() => {
									setState(0);
									navigate("/MyProfile");
								}}
								className={state ? "nav-item" : "nav-item active"}
								href="#"
							>
								My Profile
							</a>
						</li>
						<li className="nav-link">
							<a
								onClick={() => {
									setState(1);
									navigate("/my-courses");
								}}
								className="nav-item"
								href="#"
							>
								My Courses
							</a>
						</li>
						<li className="nav-link">
							<a
								onClick={() => {
									setState(2);
									navigate("/Myorder");
								}}
								className="nav-item"
								href="#"
							>
								My Orders
							</a>
						</li>
						<li className="nav-link">
							<a
								onClick={() => {
									setState(3);
								}}
								className="nav-item"
								href="#"
							>
								Change Password
							</a>
						</li>
						<li className="nav-link">
							<a className="nav-item" href="#">
								My Address
							</a>
						</li>
						<li className="nav-link">
							<a className="nav-item" href="#">
								Saved Card
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default SideBar;
