import React from "react";
import { admin, bookmark, logo, shopping_bag } from "../constant";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header id="top">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-3">
							<div className="logo-wrapper">
								<a href="/">
									<img src={logo} className="img-fluid" alt="" />
								</a>
							</div>
						</div>
						<div className="col-6">
							<div className="navbar-wrapper">
								<ul className="navbar-nav">
									<li className="nav-item">
										<Link className="nav-link" to="/">
											Home
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/about-us">
											About Us
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/classes">
											Classes
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/Shop1">
											Shop
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/Contact">
											Contact Us
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-3">
							<div className="nav-icons-wrapper">
								<ul>
									<li>
										<Link to="/Login">
											<img src={admin} alt="" />
										</Link>
									</li>
									<li>
										<Link to="/wishlist">
											<img src={bookmark} alt="" />
										</Link>
									</li>
									<li>
										<Link to="/productcart">
											<img src={shopping_bag} alt="" />
										</Link>
									</li>
								</ul>
							</div>
							<div className="canvas-icon text-white">
								<i className="fa fa-bars" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="mobile-header">
					<div className="cancel">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							fill="currentColor"
							className="bi bi-x"
							viewBox="0 0 16 16"
						>
							<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
					<ul className="mobile-nav">
						<li className="nav-item">
							<a href="/">Home</a>
						</li>
						<li className="nav-item">
							<a href="/about-us">About Us</a>
						</li>
						<li className="nav-item">
							<a href="/classes">Classes</a>
						</li>
						<li className="nav-item">
							<a href="/Shop1"> Shop</a>
						</li>
						<li className="nav-item">
							<a href="/Contact">Contact Us</a>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
};

export default Header;
