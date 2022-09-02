import React from "react";
import { auth_logo, Loginimg, logo } from "../../constant";

const SignUp = () => {
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
									<h3>let us Enhance your Beatuy</h3>
									<p>
										Not a Member ?
										<a style={{ color: "#313F2B" }} href="/signup">
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
										<div className="col-lg-6">
											<input
												type="password"
												className="form-control"
												placeholder="Password"
											/>
										</div>
										<div className="col-lg-6">
											<input
												type="password"
												className="form-control"
												placeholder="Confirm password"
											/>
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
									<figure>
										<img src={auth_logo} alt="" />
									</figure>
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
