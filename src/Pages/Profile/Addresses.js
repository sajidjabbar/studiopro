import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar/SideBar";
import "../../assets/css/address.css";

const Addresses = () => {
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
							<div className="address-form-wrapper">
								<div className="heading">
									<h5>Addresses</h5>
								</div>
								<div className="form-wrapper">
									<form action="">
										<div className="form-group row">
											<div className="col-lg-6">
												<label htmlFor="">First Name</label>
												<input
													type="text"
													placeholder="John"
													className="form-control"
												/>
											</div>
											<div className="col-lg-6">
												<label htmlFor="">Last Name</label>
												<input
													type="text"
													placeholder="Doe"
													className="form-control"
												/>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-lg-6">
												<label htmlFor="">Phone</label>
												<input
													type="text"
													placeholder="example@mail.com"
													className="form-control"
												/>
											</div>
											<div className="col-lg-6">
												<label htmlFor="">Email</label>
												<input
													type="text"
													placeholder="+00 123 456 789"
													className="form-control"
												/>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-lg-6">
												<label htmlFor="">Address</label>
												<input
													type="text"
													placeholder="John"
													className="form-control"
												/>
											</div>
											<div className="col-lg-6">
												<label htmlFor="">Suit, Apartment, etc</label>
												<input
													type="text"
													placeholder="Doe"
													className="form-control"
												/>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-lg-3">
												<label htmlFor="">City</label>
												<input
													type="text"
													placeholder="New York"
													className="form-control"
												/>
											</div>
											<div className="col-lg-3">
												<label htmlFor="">State</label>
												<input
													type="text"
													placeholder="Arizona"
													className="form-control"
												/>
											</div>
											<div className="col-lg-3">
												<label htmlFor="">Country/Region</label>
												<input
													type="text"
													placeholder="USA"
													className="form-control"
												/>
											</div>
											<div className="col-lg-3">
												<label htmlFor="">Zip Code</label>
												<input
													type="text"
													placeholder="98465"
													className="form-control"
												/>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="save-address">
								<div className="heading">
									<h3>Saved Addresses</h3>
								</div>
								{/* <!-- Saved Address --> */}
								<label className="container">
									<input type="radio" checked="checked" name="radio" />
									<span className="checkmark">
										<div className="select-address">
											<div className="address-detail">
												<div className="actions">
													<a href="#" className="editAddress edit">
														<i className="fa-regular fa-pen-to-square"></i>
													</a>
													<a href="#">
														<i className="fa-solid fa-trash-can"></i>
													</a>
												</div>
												<h5>
													<span className="property">Country:</span>
													<div className="spacer"></div>
													<span className="value">United States</span>
												</h5>
												<h5>
													<span className="property">Address:</span>
													<div className="spacer"></div>
													<span className="value">
														10515 Fox Ave Fairdale, Kentucky(KY), 40118
													</span>
												</h5>
												<h5>
													<span className="property">Phone:</span>
													<div className="spacer"></div>
													<span className="value">+44-123-456-789</span>
												</h5>
												<h5>
													<span className="property">State:</span>
													<div className="spacer"></div>
													<span className="value">Texas</span>
												</h5>
												<div className="deafult">
													<h5>Use as default</h5>
													<span className="dot"></span>
												</div>
											</div>
										</div>
									</span>
								</label>
								<label className="container">
									<input type="radio" name="radio" />
									<span className="checkmark">
										<div className="select-address">
											<div className="address-detail">
												<div className="actions">
													<a href="#" className="editAddress edit">
														<i className="fa-regular fa-pen-to-square"></i>
													</a>
													<a href="#">
														<i className="fa-solid fa-trash-can"></i>
													</a>
												</div>
												<h5>
													<span className="property">Country:</span>
													<div className="spacer"></div>
													<span className="value">United States</span>
												</h5>
												<h5>
													<span className="property">Address:</span>
													<div className="spacer"></div>
													<span className="value">
														10515 Fox Ave Fairdale, Kentucky(KY), 40118
													</span>
												</h5>
												<h5>
													<span className="property">Phone:</span>
													<div className="spacer"></div>
													<span className="value">+44-123-456-789</span>
												</h5>
												<h5>
													<span className="property">State:</span>
													<div className="spacer"></div>
													<span className="value">Texas</span>
												</h5>
												<div className="deafult">
													<h5>Use as default</h5>
													<span className="dot"></span>
												</div>
											</div>
										</div>
									</span>
								</label>
								{/* <!-- Saved Address --> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Addresses;
