import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../constant";

const Footer = () => {
	return (
		<>
			<footer id="footer">
				<div className="container">
					<div className="footer-newsletter-wrapper">
						<div className="row">
							<div className="col-lg-3"></div>
							<div className="col-lg-6">
								<div className="footer-logo-wrapper">
									<Link to="/">
										<img src={logo} alt="" />
									</Link>
								</div>
								<div className="footer-tagline-wrapper">
									<p>Keep always updated with our fresh blog posts</p>
								</div>
								<div className="newsletter-wrapper">
									<form action="">
										<div className="input-group">
											<input
												type="email"
												className="form-control"
												placeholder="Enter your email"
											/>
											<span className="input-group-btn">
												<button className="btn btn-theme" type="submit">
													<i class="fa-solid fa-arrow-right"></i>
												</button>
											</span>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-3"></div>
						</div>
					</div>
					<div className="footer-links-wrapper">
						<div className="row">
							<div className="col-lg-4">
								<div className="footer-widget-wrapper">
									<div className="footer-heading-wrapper">
										<h4>Contact Us</h4>
									</div>
									<div className="footer-content-wrapper">
										<p>London Oxford Street, 012 United Kingdom.</p>
										<p>Business@userthemes.net</p>
										<p>+032 3456 7890</p>
										<div className="footer-social-icons-wrapper">
											<ul>
												<li>
													<a href="#">
														<i class="fa-brands fa-facebook"></i>
													</a>
												</li>
												<li>
													<a href="#">
														<i class="fa-brands fa-twitter"></i>
													</a>
												</li>
												<li>
													<a href="#">
														<i class="fa-brands fa-instagram"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="footer-widget-wrapper">
									<div className="footer-heading-wrapper">
										<h4>About Us</h4>
									</div>
									<div className="footer-content-wrapper">
										<ul>
											<li>
												<a href="#">FAQs</a>
											</li>
											<li>
												<a href="#">News & Events</a>
											</li>
											<li>
												<a href="#">Terms & Condition</a>
											</li>
											<li>
												<a href="#">Privacy Policy</a>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="footer-widget-wrapper">
									<div className="footer-heading-wrapper">
										<h4>Recent Posts</h4>
									</div>
									<div className="footer-content-wrapper">
										<span>ADMIN | Dec 1, 2021</span>
										<p>
											Nam ac elit a ante commodo tristique. Condimentum a
											vehicula hendrerit ac nisi Lorem
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
