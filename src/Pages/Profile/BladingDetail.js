import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar/SideBar";
import { blading_img, review_brush, video_btn } from "../../constant";

const BladingDetail = () => {
	return (
		<>
			<>
				<Header />
				{/* Page Header starts here */}
				<section className="page-header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h2>Course Detail</h2>
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
								<section className="mycourses onlineCourses">
									<div className="container">
										<div className="row">
											<div className="col-lg-12">
												<div className="mycourses-heading-wrapper">
													<h4>
														My Courses{" "}
														<span>> Online > Course Videos > Session 01</span>
													</h4>
												</div>
												<div className="blading-session-wrapper">
													<div className="blading-card-wrapper">
														<div className="blading-img-wrapper">
															<figure>
																<img
																	src={blading_img}
																	className="img-fluid"
																	alt=""
																/>
																<img
																	src={review_brush}
																	className="brush"
																	alt=""
																/>
																<a href="#">
																	<img src={video_btn} alt="" />
																</a>
															</figure>
															<div className="session-content-wrapper">
																<h1>01</h1>
																<h6>Session</h6>
															</div>
														</div>
														<div className="blading-content-wrapper">
															<div className="heading-date-wrapper">
																<h4>Microblading 101 | Session 01</h4>
																<h6>26-Jan-2022</h6>
															</div>
															<p>
																Lorem Ipsum is simply dummy text of the printing
																and typesetting industry. Lorem Ipsum has been
																the industry's standard dummy text ever since
																the 1500s, unknown printer took a specimen book.
															</p>
														</div>
														<div className="top-stories-wrapper">
															<h5>Topics Covered in Session </h5>
															<p>
																Lorem Ipsum is simply dummy text of the printing
																and typesetting industry. Lorem Ipsum has been
																the industry's standard dummy text ever since
																the 1500s, when an unknown printer took a galley
																of type and scrambled it to make a type specimen
																book.
															</p>
															<ul>
																<li>Lorem ipsum dolor sit amet</li>
																<li>consectetur adipiscing</li>
																<li>elit sed do eiusmod</li>
																<li>Lorem ipsum dolor sit amet</li>
																<li>consectetur adipiscing</li>
																<li>elit sed do eiusmod</li>
															</ul>
														</div>
													</div>
												</div>
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
		</>
	);
};

export default BladingDetail;
