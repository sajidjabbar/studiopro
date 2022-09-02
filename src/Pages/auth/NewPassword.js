import React from "react";
import { auth_logo, Loginimg, logo } from "../../constant";
import "../../assets/css/newpassword.css";

const NewPassword = () => {
	return (
		<>
			{/* <!-- Sign In Page Start Here --> */}
			<section className="signinSec NewPassword p-0">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-1"></div>
						<div className="col-lg-4 col-md-6 p-0">
							<div className="signInBox">
								<div className="title text-center">
									<h1>New Password</h1>
								</div>

								<div className="taglines pb-3 text-center">
									<h4>Create a new Password</h4>
								</div>
								<form>
									<div className="form-group">
										<input
											type="email"
											className="form-control"
											placeholder="New Password"
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control"
											placeholder="Re-enter New Password"
										/>
									</div>
									<div className="col-md-12 px-0 text-right mt-3">
										<button className="btn" type="button">
											Continue
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

export default NewPassword;
