import React, { useEffect, useState } from "react";
import $ from "jquery";
import SideBar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const MyProfile = () => {
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
							<h2>Profile</h2>
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
						<div className="col-lg-9">
							{/* my profile starts here */}
							<section className="myprofile">
								<div className="container">
									<div className="row">
										<div className="col-lg-10">
											<div className="profile-heading-wrapper">
												<h4>My Profile</h4>
											</div>
											<div className="profile-form-wrapper">
												<form action="" onSubmit={stopSubmit}>
													<div className="form-group row">
														<div className="col-lg-6">
															<label htmlFor="">First Name</label>
															<input
																type="text"
																className="form-control"
																defaultValue="John"
																disabled={disabled}
															/>
														</div>
														<div className="col-lg-6">
															<label htmlFor="">First Name</label>
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
															<label htmlFor="">Email</label>
															<input
																type="text"
																className="form-control"
																defaultValue="example@mail.com"
																disabled={disabled}
															/>
														</div>
														<div className="col-lg-6">
															<label htmlFor="">Phone</label>
															<input
																type="text"
																className="form-control"
																defaultValue="+00 123 456 789"
																disabled={disabled}
															/>
														</div>
													</div>
													<div className="form-group row">
														<div className="col-lg-6"></div>
														<div className="col-lg-6">
															<div className="btn-wrapper text-right">
																<button
																	onClick={handleGameClick}
																	className="btn"
																>
																	{disabled ? "Edit" : "Save"}
																</button>
															</div>
														</div>
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

export default MyProfile;
