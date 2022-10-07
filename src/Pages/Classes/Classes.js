import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../assets/css/classes.css";
import {
	brush,
	classes_img,
	makeup1,
	makeup10,
	makeup11,
	makeup12,
	makeup13,
	makeup2,
	makeup3,
	makeup4,
	makeup5,
	makeup6,
	makeup7,
	makeup8,
	makeup9,
} from "../../constant";
import { Link } from "react-router-dom";

const Classes = () => {
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Classes</h2>
							<span>Home > Classes</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* classes sec starts here */}
			<section className="classes-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 align-self-center">
							<div className="classes-content-wrapper">
								<h2>Classes</h2>
								<h4>NOTE: ALL CLASSES WILL HAVE THE FOLLOWING OPTIONS:</h4>
								<ul>
									<li>LIVE</li>
									<li>ONLINE</li>
									<li>HYBRID</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="img-wrapper">
								<figure>
									<img src={classes_img} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* classes sec ends here */}
			{/* makeup sec starts here */}
			<section className="makeup-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper">
								<h2>Permanent Makeup</h2>
							</div>
						</div>
					</div>
					<div className="makeup-row-wrapper">
						<div className="makeup-card-wrapper">
							<Link to="/classes-detail">
								<div className="makeup-img-wrapper">
									<figure>
										<img src={makeup1} className="img-fluid" alt="" />
										<img src={brush} className="brush" alt="" />
									</figure>
								</div>
								<div className="makepup-content-wrapper">
									<h3>Microblading</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod
									</p>
									<span>26-Jan-2022</span>
								</div>
							</Link>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup2} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Shading/Ombre</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup3} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Eyeliner</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup4} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Lip Blushing</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup5} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Combo 101, 201 &Eyeliner</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
					</div>
					<div className="btncenter">
						<button className="btn ">PERMANENT MAKEUP</button>
					</div>
				</div>
			</section>
			{/* makeup sec ends here */}
			{/* makeup sec starts here */}
			<section className="makeup-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper">
								<h2>Lash Extensions</h2>
							</div>
						</div>
					</div>
					<div className="makeup-row-wrapper">
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup6} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Classic Lashes</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup7} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Volume Lashes</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup8} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Combo (Classic, Hybrid & Volume)</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
					</div>
					<div className="btncenter">
						<button className="btn ">LASH EXTENSION TRAINING</button>
					</div>
				</div>
			</section>
			{/* makeup sec ends here */}
			{/* makeup sec starts here */}
			<section className="makeup-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper">
								<h2>AdvancedEsthetics</h2>
							</div>
						</div>
					</div>
					<div className="makeup-row-wrapper">
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup9} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Dermaplaning</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup10} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Micro/NanoNeedling</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup11} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Lash Lift & Tint w/ Brow Lamination Combo Class</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup12} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Airbrush Makeup</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup13} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Dermaplaning</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
							</div>
						</div>
					</div>
					<div className="btncenter">
						<button className="btn ">ADVANCED ESTHETIC TRAINING</button>
					</div>
				</div>
			</section>
			<div className="btncenter">
				<button className="btn ">Massage Therapy Online Portion only</button>
			</div>
			{/* makeup sec ends here */}
			<Footer />
		</>
	);
};

export default Classes;
