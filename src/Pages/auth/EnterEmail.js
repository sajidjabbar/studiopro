import React from "react";
import "../../assets/css/login.css";
import { auth_logo, Loginimg, logo } from "../../constant";

const EnterEmail = () => {
	return (
		<>
			{/* <!-- Sign In Page Start Here --> */}
			<section className="signinSec p-0">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-1"></div>
						<div className="col-lg-4 col-md-6 p-0">
							<div className="signInBox">
								<div className="title text-center">
									<h1 style={{ color: "#000000" }}>Enter Email</h1>
								</div>

								<div className="taglines pb-3 text-center">
									<h3>A link will be sent your provided email</h3>
								</div>
								<form>
									<div className="form-group">
										<input
											type="email"
											className="form-control"
											placeholder="Enter Email"
										/>
									</div>
									<div className="col-md-12 px-0 text-right mt-3">
										<button className="btn" type="button">
											Submit
										</button>
									</div>
									<div className="privacyDv mt-5 pt-5">
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

export default EnterEmail;
