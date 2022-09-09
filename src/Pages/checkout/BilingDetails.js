import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "../../assets/css/bilingDetail.css";
import { brush, review_brush, review_img } from "../../constant";

const BilingDetails = () => {
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Checkout</h2>
							<span>Home {">"} Classes</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* Biling Details starts here */}
			<section className="Biling">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="biling-form-wrapper">
								<div className="heading-wrapper">
									<h3>Billing Details</h3>
								</div>
								<form action="/Checkout">
									<div className="form-group row">
										<div className="col-lg-6">
											<label htmlFor="">First Name</label>
											<input
												type="text"
												className="form-control"
												placeholder="John"
											/>
										</div>
										<div className="col-lg-6">
											<label htmlFor="">Last Name</label>
											<input
												type="text"
												className="form-control"
												placeholder="Doe"
											/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-lg-6">
											<label htmlFor="">Phone</label>
											<input
												type="text"
												className="form-control"
												placeholder="+1 123 456 7890"
											/>
										</div>
										<div className="col-lg-6">
											<label htmlFor="">Email</label>
											<input
												type="text"
												className="form-control"
												placeholder="Johndoe@email.com"
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="">Billing Address</label>
										<input
											type="text"
											className="form-control"
											placeholder="Your Address Here"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="">Suite, Apartment, etc </label>
										<input
											type="text"
											className="form-control"
											placeholder="# 000"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="">City</label>
										<input
											type="text"
											className="form-control"
											placeholder="Your City Here"
										/>
									</div>
									<div className="form-group row">
										<div className="col-lg-4">
											<label htmlFor="">Country/Region</label>
											<input
												type="text"
												className="form-control"
												placeholder="Country Here"
											/>
										</div>
										<div className="col-lg-4">
											<label htmlFor="">State</label>
											<input
												type="text"
												className="form-control"
												placeholder="State Here"
											/>
										</div>
										<div className="col-lg-4">
											<label htmlFor="">Zip Code</label>
											<input
												type="text"
												className="form-control"
												placeholder="Zip code Here"
											/>
										</div>
									</div>
									<div className="form-group btn-wrapper">
										<button className="btn form-control">
											Proceed to Payment
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-1"></div>
						<div className="col-lg-5">
							<div className="booking-review-wrapper">
								<div className="booking-heading-wrapper">
									<h4>Booking Review</h4>
								</div>
								<div className="review-img-and-list-wrapper">
									<div className="review-img-wrapper">
										<figure>
											<img src={review_img} className="img-fluid" alt="" />
											<img src={review_brush} className="brush" alt="" />
										</figure>
									</div>
									<div className="list-wrapper">
										<ul>
											<li>
												<span className="property">Course</span>
												<span className="value">Microblading</span>
											</li>
											<li>
												<span className="property">Trainer</span>
												<span className="value">Emily Carter</span>
											</li>
											<li>
												<span className="property">Charges</span>
												<span className="value">500$</span>
											</li>
											<li>
												<span className="property">Kit Charges</span>
												<span className="value">150$</span>
											</li>
											<li>
												<span className="property">Total Amount</span>
												<span className="value">650$</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="addition-note-wrapper">
								<div className="heading-wrapper">
									<h4>Additional Note </h4>
								</div>
								<div className="form-group">
									<input
										type="text"
										placeholder="Lorem ipsum dolor sit amet"
										className="form-control"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Biling Details ends here */}
			<Footer />
		</>
	);
};

export default BilingDetails;
