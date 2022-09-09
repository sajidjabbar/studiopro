import React from "react";
import "../../assets/css/login.css";
import { auth_logo, Loginimg, logo } from "../../constant";

const Login = () => {
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
									<h1>Sign In</h1>
								</div>

								<div className="taglines pb-3">
									<h3>Welcoming Back to TC Studio 2 pro</h3>
									<h3>let us Enhance your Beatuy</h3>
									<p>
										Not a Member ?<a href="/signup">Sign Up</a>
									</p>
								</div>
								<form action="/MyProfile">
									<div className="form-group">
										<input
											type="email"
											className="form-control"
											placeholder="Email"
										/>
									</div>
									<div className="form-group">
										<input
											type="password"
											className="form-control"
											placeholder="Password"
										/>
									</div>
									<div className="col-md-12 px-0 text-right mt-3">
										<button
											className="btn btn-secondary btnn signup-btn rounded-pill full"
											type="submit"
										>
											Sign in
										</button>
									</div>
									<div className="actionsLink py-4">
										<div className="remeberDv">
											<div className="form-group">
												<input type="checkbox" id="remember" />

												<label for="remember">Remember Me</label>
											</div>
										</div>

										<div className="forgotDv">
											<a href="/Enteremail">Forgot Password ?</a>
										</div>
									</div>
									<div className="privacyDv">
										<p>
											By Creating Account you are agree to our{" "}
											<a href="/terms"> Terms & conditions</a>
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

export default Login;
