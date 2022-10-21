import React, { useState } from "react";
import { auth_logo, Loginimg, logo } from "../../constant";

const SignUp = () => {
	const [confimShow, setConfirmShow] = useState(false);
	const [show, setShow] = useState(false);
	const handleShow = () => {
		setShow(!show);
	};

	const handleShow2 = () => {
		setConfirmShow(!confimShow);
	};
	return (
		<>
			{/* <!-- Sign In Page Start Here --> */}
			<section className="signinSec p-0">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-1"></div>
						<div className="col-lg-4 col-md-6 p-0">
							<div className="signInBox">
								<div className="title">
									<h1>Sign up</h1>
								</div>

								<div className="taglines pb-3">
									<h3>Welcoming Back to TC Studio 2 pro</h3>
									<h3>let us Enhance your Beauty</h3>
									<p>
										Already Member ?
										<a style={{ color: "#313F2B" }} href="/login">
											Sign In
										</a>
									</p>
								</div>
								<form>
									<div className="form-group row">
										<div className="col-lg-6">
											<input
												type="email"
												className="form-control"
												placeholder="First Name"
											/>
										</div>
										<div className="col-lg-6">
											<input
												type="email"
												className="form-control"
												placeholder="Last Name"
											/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-lg-6">
											<input
												type="email"
												className="form-control"
												placeholder="Email"
											/>
										</div>
										<div className="col-lg-6">
											<input
												type="email"
												className="form-control"
												placeholder="Phone Number"
											/>
										</div>
									</div>
									<div className="form-group row">
										<div
											className="col-lg-6"
											style={{ position: "relative", width: "100%" }}
										>
											<input
												type="password"
												className="form-control"
												placeholder="Password"
											/>
											{confimShow ? (
												<i
													class="fa fa-eye"
													aria-hidden="true"
													onClick={handleShow2}
													style={{
														position: "absolute",
														top: 15,
														right: 24,
														fontSize: 18,
														cursor: "pointer",
													}}
												></i>
											) : (
												<i
													className="fa fa-eye-slash"
													aria-hidden="true"
													onClick={handleShow2}
													style={{
														position: "absolute",
														top: 15,
														right: 24,
														fontSize: 18,
														cursor: "pointer",
													}}
												></i>
											)}
										</div>
										<div
											className="col-lg-6"
											style={{ position: "relative", width: "100%" }}
										>
											<input
												type="password"
												className="form-control"
												placeholder="Confirm password"
											/>
											{show ? (
												<i
													className="fa fa-eye"
													aria-hidden="true"
													onClick={handleShow}
													style={{
														position: "absolute",
														top: 15,
														right: 24,
														fontSize: 18,
														cursor: "pointer",
													}}
												></i>
											) : (
												<i
													className="fa fa-eye-slash"
													aria-hidden="true"
													onClick={handleShow}
													style={{
														position: "absolute",
														top: 15,
														right: 24,
														fontSize: 18,
														cursor: "pointer",
													}}
												></i>
											)}
										</div>
									</div>
									<div className="col-md-12 px-0 text-right mt-3">
										<button
											className="btn btn-secondary btnn signup-btn rounded-pill full"
											type="button"
										>
											Sign Up
										</button>
									</div>
									<div className="privacyDv">
										<p>
											By Creating Account you are agree to our{" "}
											<a href="#"> Terms & conditions</a>
										</p>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-1"></div>
						<div className="col-lg-6 col-md-6 p-0">
							<div className="img-Dv">
								<div className="imgBox">
									<figure>
										<img src={Loginimg} alt="" />
									</figure>
								</div>

								<div className="LogoBox">
									<a href="/">
										<figure>
											<img src={auth_logo} alt="" />
										</figure>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Sign In Page End Here --> */}
		</>
	);
};

export default SignUp;
