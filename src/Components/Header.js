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
										<Link className="nav-link" to="/">
											About Us
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/">
											Classes
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/">
											Shop
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/">
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
										<Link to="/">
											<img src={admin} alt="" />
										</Link>
									</li>
									<li>
										<Link to="/">
											<img src={bookmark} alt="" />
										</Link>
									</li>
									<li>
										<Link to="/">
											<img src={shopping_bag} alt="" />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
