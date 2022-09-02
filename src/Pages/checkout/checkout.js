import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "../../assets/css/checkout.css";
import {
	pymnt1,
	pymnt2,
	pymnt3,
	pymnt4,
	pymnt5,
	review_brush,
	review_img,
	visa,
} from "../../constant";

const Checkout = () => {
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
			{/* <!-- checkout-section starts here --> */}
			<section className="checkout">
				<div className="container">
					<form action="/Thankyou">
						<div className="row">
							<div className="col-lg-6">
								<div className="payment-details">
									<div className="heading">
										<h3>Payment Details</h3>
									</div>
									<div className="saved-payment-method">
										<h5>Use Saved Payments</h5>
										{/* <!-- Saved payments Method --> */}
										<label className="container">
											<input
												type="radio"
												checked="checked"
												name="payment-radio"
											/>
											<span className="checkmark">
												<div className="card-details">
													<div className="radio-btn">
														<span></span>
													</div>
													<div className="visa-card">
														<div className="img-box">
															<figure>
																<img src={visa} alt="No Image Found" />
															</figure>
														</div>
														<div className="input-box">
															<label for="card-number">My Personal Card</label>
															<input
																id="card-number"
																value="**********1239"
																type="text"
																readonly=""
															/>
														</div>
													</div>
													<div className="extra-btn">
														<button className="btn default disabled">
															Default
														</button>
														<div className="selection">
															<i className="fa fa-check" aria-hidden="true"></i>
														</div>
													</div>
												</div>
											</span>
										</label>

										<label className="container second-card">
											<input type="radio" name="payment-radio" />
											<span className="checkmark">
												<div className="card-details">
													<div className="radio-btn">
														<span></span>
													</div>
													<div className="visa-card">
														<div className="img-box">
															<figure>
																<img src={visa} alt="No Image Found" />
															</figure>
														</div>
														<div className="input-box">
															<label for="card-number">My Personal Card</label>
															<input
																id="card-number"
																value="**********1239"
																type="text"
																readonly=""
															/>
														</div>
													</div>
													<div className="extra-btn">
														<button className="btn default disabled">
															Default
														</button>
														<div className="selection">
															<i className="fa fa-check" aria-hidden="true"></i>
														</div>
													</div>
												</div>
											</span>
										</label>

										<div className="add-new-method">
											<div className="form-check py-3">
												<input
													type="checkbox"
													className="form-check-input"
													id="exampleCheck1"
												/>
												<label className="form-check-label" for="exampleCheck1">
													Add New Payment
												</label>
											</div>
											<div className="form-group">
												<input type="text" className="form-control" />
											</div>
											{/* <button type="button">
												Add Card <img src="img/right-arrow.svg" alt="" />
											</button> */}
										</div>
										<div className="card-type">
											<label className="container">
												<input type="radio" checked="checked" name="radio" />
												<span className="checkmark">
													<figure>
														<img src={pymnt1} className="img-fluid" />
													</figure>
												</span>
											</label>
											<label className="container">
												<input type="radio" name="radio" />
												<span className="checkmark">
													<figure>
														<img src={pymnt2} className="img-fluid" />
													</figure>
												</span>
											</label>
											<label className="container">
												<input type="radio" name="radio" />
												<span className="checkmark">
													<figure>
														<img src={pymnt3} className="img-fluid" />
													</figure>
												</span>
											</label>
											<label className="container">
												<input type="radio" name="radio" />
												<span className="checkmark">
													<figure>
														<img src={pymnt4} className="img-fluid" />
													</figure>
												</span>
											</label>
											<label className="container">
												<input type="radio" name="radio" />
												<span className="checkmark">
													<figure>
														<img src={pymnt5} className="img-fluid" />
													</figure>
												</span>
											</label>
										</div>
										{/* <!-- Saved payments Method --> */}
										<div className="btn-wrapper">
											<button className="btn">Pay Now</button>
										</div>
									</div>
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
							</div>
						</div>
					</form>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Checkout;
