import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar/SideBar";
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
import "../../assets/css/payment.css";

const Payment = () => {
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
							<section className="checkout checkout-payment">
								<div className="container">
									<form action="/Thankyou">
										<div className="row">
											<div className="col-lg-10">
												<div className="payment-details">
													<div className="heading">
														<h3>Payment</h3>
													</div>
													<div className="saved-payment-method">
														<div className="add-new-method">
															<div className="form-group">
																<input
																	type="text"
																	placeholder="Card Number"
																	className="form-control"
																/>
																<input
																	type="text"
																	placeholder="mm/yy"
																	className="form-control"
																/>
																<input
																	type="text"
																	placeholder="cvc"
																	className="form-control"
																/>
															</div>
														</div>
														<div className="type-and-card-wrapper">
															<div className="card-type">
																<label className="container">
																	<input
																		type="radio"
																		checked="checked"
																		name="radio"
																	/>
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
															</div>
															{/* <!-- Saved payments Method --> */}
															<div className="btn-wrapper">
																<button className="btn">Add Card</button>
															</div>
														</div>
													</div>
												</div>
												<div className="payment-details">
													<div className="heading">
														<h3>Saved Cards</h3>
													</div>
													<div className="saved-payment-method">
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
																			<label for="card-number">
																				My Personal Card
																			</label>
																			<input
																				id="card-number"
																				value="**********1239"
																				type="text"
																				readonly=""
																			/>
																		</div>
																	</div>
																	<div className="extra-btn">
																		<i className="fa-solid fa-trash-can"></i>
																		<div className="selection">
																			{/* <i
																				className="fa fa-check"
																				aria-hidden="true"
																			></i> */}
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
																			<label for="card-number">
																				My Personal Card
																			</label>
																			<input
																				id="card-number"
																				value="**********1239"
																				type="text"
																				readonly=""
																			/>
																		</div>
																	</div>
																	<div className="extra-btn">
																		<i className="fa-solid fa-trash-can"></i>
																		<div className="selection">
																			{/* <i
																				className="fa fa-check"
																				aria-hidden="true"
																			></i> */}
																		</div>
																	</div>
																</div>
															</span>
														</label>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</section>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Payment;
