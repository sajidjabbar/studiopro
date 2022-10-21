import React, { useState } from "react";
import "../../assets/css/MyCourses.css";
import {
	make1,
	make2,
	make3,
	profile_img2,
	review_brush,
} from "../../constant";
import { Link } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const MyCourses = () => {
	const [statetab, setStatetab] = useState(0);
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>My Course</h2>
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
						<div className="col-lg-9">
							<section className="mycourses">
								<div className="container">
									<div className="row">
										<div className="col-lg-12">
											<div className="mycourses-heading-wrapper">
												<h4>My Courses</h4>
											</div>
											<div className="courses-tabs-list-wrapper mt-5">
												<ul>
													<li>
														<a
															onClick={() => {
																setStatetab(0);
															}}
															className={
																statetab === 0 ? "nav-item active" : "nav-item"
															}
															href="javascript:void(0)"
														>
															Online
														</a>
													</li>
													<li>
														<a
															onClick={() => {
																setStatetab(1);
															}}
															className={
																statetab === 1 ? "nav-item active" : "nav-item"
															}
															href="javascript:void(0)"
														>
															In-Person
														</a>
													</li>
													<li>
														<a
															onClick={() => {
																setStatetab(2);
															}}
															className={
																statetab === 2 ? "nav-item active" : "nav-item"
															}
															href="javascript:void(0)"
														>
															Hybrid
														</a>
													</li>
												</ul>
											</div>
											{statetab === 0 ? (
												<>
													<div className="course-tabs-wrapper">
														<div className="makeup-category-wrapper">
															<div className="heading">
																<h6>Permanent Makeup</h6>
															</div>
															<div className="row">
																<div className="col-lg-4">
																	<div className="makeup-card-wrapper">
																		<div className="makeup-img-wrapper">
																			<Link to="/OnlineCourses">
																				<figure>
																					<img
																						src={make1}
																						className="img-fluid"
																						alt=""
																					/>
																					<img
																						src={review_brush}
																						className="brush"
																						alt=""
																					/>
																				</figure>
																			</Link>
																			<div className="profile-name-wrapper">
																				<img
																					src={profile_img2}
																					className="profile-img"
																					alt=""
																				/>
																				<h6>Emilia Carter</h6>
																			</div>
																		</div>
																		<div className="makeup-content-wrapper">
																			<h6>Microblading 101</h6>
																			<p>Lorem ipsum dolor sit amet, consec</p>
																			<span>26-Jan-2022</span>
																		</div>
																	</div>
																</div>
																<div className="col-lg-4">
																	<div className="makeup-card-wrapper">
																		<div className="makeup-img-wrapper">
																			<figure>
																				<img
																					src={make2}
																					className="img-fluid"
																					alt=""
																				/>
																				<img
																					src={review_brush}
																					className="brush"
																					alt=""
																				/>
																			</figure>
																			<div className="profile-name-wrapper">
																				<img
																					src={profile_img2}
																					className="profile-img"
																					alt=""
																				/>
																				<h6>Emilia Carter</h6>
																			</div>
																		</div>
																		<div className="makeup-content-wrapper">
																			<h6>Microblading 101</h6>
																			<p>Lorem ipsum dolor sit amet, consec</p>
																			<span>26-Jan-2022</span>
																		</div>
																	</div>
																</div>
																<div className="col-lg-4">
																	<div className="makeup-card-wrapper">
																		<div className="makeup-img-wrapper">
																			<figure>
																				<img
																					src={make3}
																					className="img-fluid"
																					alt=""
																				/>
																				<img
																					src={review_brush}
																					className="brush"
																					alt=""
																				/>
																			</figure>
																			<div className="profile-name-wrapper">
																				<img
																					src={profile_img2}
																					className="profile-img"
																					alt=""
																				/>
																				<h6>Emilia Carter</h6>
																			</div>
																		</div>
																		<div className="makeup-content-wrapper">
																			<h6>Microblading 101</h6>
																			<p>Lorem ipsum dolor sit amet, consec</p>
																			<span>26-Jan-2022</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="course-tabs-wrapper mt-4">
														<div className="makeup-category-wrapper">
															<div className="heading">
																<h6>Lash Extensions</h6>
															</div>
															<div className="row">
																<div className="col-lg-4">
																	<div className="makeup-card-wrapper">
																		<div className="makeup-img-wrapper">
																			<figure>
																				<img
																					src={make1}
																					className="img-fluid"
																					alt=""
																				/>
																				<img
																					src={review_brush}
																					className="brush"
																					alt=""
																				/>
																			</figure>
																			<div className="profile-name-wrapper">
																				<img
																					src={profile_img2}
																					className="profile-img"
																					alt=""
																				/>
																				<h6>Emilia Carter</h6>
																			</div>
																		</div>
																		<div className="makeup-content-wrapper">
																			<h6>Microblading 101</h6>
																			<p>Lorem ipsum dolor sit amet, consec</p>
																			<span>26-Jan-2022</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</>
											) : null}
											{statetab === 1 ? (
												<>
													<div className="course-tabs-wrapper">
														<div className="makeup-category-wrapper">
															<div className="heading">
																<h6>Permanent Makeup</h6>
															</div>
															<div className="row">
																<div className="col-lg-4">
																	<div className="makeup-card-wrapper">
																		<a href="/InPerson">
																			<div className="makeup-img-wrapper">
																				<figure>
																					<img
																						src={make1}
																						className="img-fluid"
																						alt=""
																					/>
																					<img
																						src={review_brush}
																						className="brush"
																						alt=""
																					/>
																				</figure>
																				<div className="profile-name-wrapper">
																					<img
																						src={profile_img2}
																						className="profile-img"
																						alt=""
																					/>
																					<h6>Emilia Carter</h6>
																				</div>
																			</div>
																			<div className="makeup-content-wrapper">
																				<h6>Microblading 101</h6>
																				<p>
																					Lorem ipsum dolor sit amet, consec
																				</p>
																				<span>26-Jan-2022</span>
																			</div>
																		</a>
																	</div>
																</div>
																<div className="col-lg-4">
																	<div className="makeup-card-wrapper">
																		<div className="makeup-img-wrapper">
																			<figure>
																				<img
																					src={make2}
																					className="img-fluid"
																					alt=""
																				/>
																				<img
																					src={review_brush}
																					className="brush"
																					alt=""
																				/>
																			</figure>
																			<div className="profile-name-wrapper">
																				<img
																					src={profile_img2}
																					className="profile-img"
																					alt=""
																				/>
																				<h6>Emilia Carter</h6>
																			</div>
																		</div>
																		<div className="makeup-content-wrapper">
																			<h6>Microblading 101</h6>
																			<p>Lorem ipsum dolor sit amet, consec</p>
																			<span>26-Jan-2022</span>
																		</div>
																	</div>
																</div>
																<div className="col-lg-4">
																	<div className="makeup-card-wrapper">
																		<div className="makeup-img-wrapper">
																			<figure>
																				<img
																					src={make3}
																					className="img-fluid"
																					alt=""
																				/>
																				<img
																					src={review_brush}
																					className="brush"
																					alt=""
																				/>
																			</figure>
																			<div className="profile-name-wrapper">
																				<img
																					src={profile_img2}
																					className="profile-img"
																					alt=""
																				/>
																				<h6>Emilia Carter</h6>
																			</div>
																		</div>
																		<div className="makeup-content-wrapper">
																			<h6>Microblading 101</h6>
																			<p>Lorem ipsum dolor sit amet, consec</p>
																			<span>26-Jan-2022</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</>
											) : null}
											{statetab === 2 ? (
												<>
													<div className="course-tabs-wrapper">
														<div className="makeup-category-wrapper">
															<div className="heading">
																<h6>Permanent Makeup</h6>
															</div>
															<div className="row">
																<div className="col-lg-4">
																	<div className="makeup-card-wrapper">
																		<a href="/HybridCourses">
																			<div className="makeup-img-wrapper">
																				<figure>
																					<img
																						src={make1}
																						className="img-fluid"
																						alt=""
																					/>
																					<img
																						src={review_brush}
																						className="brush"
																						alt=""
																					/>
																				</figure>
																				<div className="profile-name-wrapper">
																					<img
																						src={profile_img2}
																						className="profile-img"
																						alt=""
																					/>
																					<h6>Emilia Carter</h6>
																				</div>
																			</div>
																			<div className="makeup-content-wrapper">
																				<h6>Microblading 101</h6>
																				<p>
																					Lorem ipsum dolor sit amet, consec
																				</p>
																				<span>26-Jan-2022</span>
																			</div>
																		</a>
																	</div>
																</div>
																<div className="col-lg-4">
																	<div className="makeup-card-wrapper">
																		<div className="makeup-img-wrapper">
																			<figure>
																				<img
																					src={make2}
																					className="img-fluid"
																					alt=""
																				/>
																				<img
																					src={review_brush}
																					className="brush"
																					alt=""
																				/>
																			</figure>
																			<div className="profile-name-wrapper">
																				<img
																					src={profile_img2}
																					className="profile-img"
																					alt=""
																				/>
																				<h6>Emilia Carter</h6>
																			</div>
																		</div>
																		<div className="makeup-content-wrapper">
																			<h6>Microblading 101</h6>
																			<p>Lorem ipsum dolor sit amet, consec</p>
																			<span>26-Jan-2022</span>
																		</div>
																	</div>
																</div>
																<div className="col-lg-4">
																	<div className="makeup-card-wrapper">
																		<div className="makeup-img-wrapper">
																			<figure>
																				<img
																					src={make3}
																					className="img-fluid"
																					alt=""
																				/>
																				<img
																					src={review_brush}
																					className="brush"
																					alt=""
																				/>
																			</figure>
																			<div className="profile-name-wrapper">
																				<img
																					src={profile_img2}
																					className="profile-img"
																					alt=""
																				/>
																				<h6>Emilia Carter</h6>
																			</div>
																		</div>
																		<div className="makeup-content-wrapper">
																			<h6>Microblading 101</h6>
																			<p>Lorem ipsum dolor sit amet, consec</p>
																			<span>26-Jan-2022</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</>
											) : null}
										</div>
									</div>
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

export default MyCourses;
