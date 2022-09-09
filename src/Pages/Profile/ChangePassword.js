import React, { useEffect, useState } from "react";
import $ from "jquery";
import "../../assets/css/changePassword.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar/SideBar";

const ChangePassword = () => {
	const [disabled, setDisabled] = useState(true);
	useEffect(() => {}, []);
	function handleGameClick() {
		setDisabled(!disabled);
	}
	const stopSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Course Detail</h2>
							<span>Home {">"} Profile</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			<section className="profile-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<SideBar />
						</div>
						<div className="col-lg-7">
							{/* my profile starts here */}
							<section className="myprofile changePassword">
								<div className="container">
									<div className="row">
										<div className="col-lg-10">
											<div className="profile-heading-wrapper">
												<h4>Change Password</h4>
											</div>
											<div className="profile-form-wrapper">
												<form
													className={!disabled ? "password_form" : null}
													action=""
													onSubmit={stopSubmit}
												>
													<div className="form-group row">
														<div className="col-lg-6">
															<label htmlFor="">Current Password</label>
															<input
																type="text"
																className="form-control"
																defaultValue="John"
																disabled={disabled}
															/>
														</div>
														<div className="col-lg-6">
															<label htmlFor="">New Password</label>
															<input
																type="text"
																className="form-control"
																defaultValue="John"
																disabled={disabled}
															/>
														</div>
													</div>
													<div className="form-group row">
														<div className="col-lg-6">
															<label htmlFor="">Re-enter New Password</label>
															<input
																type="text"
																className="form-control"
																defaultValue="example@mail.com"
																disabled={disabled}
															/>
														</div>
														{/* <div className="col-lg-6">
											<label htmlFor="">Phone</label>
											<input
												type="text"
												className="form-control"
												defaultValue="+00 123 456 789"
												disabled={disabled}
											/>
										</div> */}
													</div>
													<div className="form-group row">
														<div className="col-lg-6">
															<div className="btn-wrapper">
																<button
																	onClick={handleGameClick}
																	className="btn"
																>
																	{disabled ? "Edit" : "Save Changes"}
																</button>
															</div>
														</div>
														<div className="col-lg-6"></div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* my profile ends here */}
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ChangePassword;
