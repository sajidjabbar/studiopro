import React, { useState } from "react";
import "../../assets/css/MyCourses.css";
import {
	blading_img,
	brush,
	make1,
	make2,
	make3,
	pdf_img,
	profile_img2,
	review_brush,
	upload_img,
	video_btn,
} from "../../constant";
import "../../assets/css/OnlineCourses.css";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import SideBar from "../../Components/SideBar/SideBar";

const OnlineCourses = () => {
	const [statetab, setStatetab] = useState(0);
	const [bladingtab, setbladingtab] = useState(0);
	const uploader = new Uploader({
		apiKey: "free",
	});
	return (
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
													My Courses <span>> Online > Course Videos</span>
												</h4>
											</div>
											<div className="courses-tabs-list-wrapper mt-5">
												<ul>
													<li>
														<a
															onClick={() => {
																setStatetab(0);
															}}
															className="nav-item active"
															href="javascript:void(0)"
														>
															Course Videos
														</a>
													</li>
													<li>
														<a
															onClick={() => {
																setStatetab(1);
															}}
															className="nav-item"
															href="javascript:void(0)"
														>
															Course Materials
														</a>
													</li>
													<li>
														<a
															onClick={() => {
																setStatetab(2);
															}}
															className="nav-item"
															href="javascript:void(0)"
														>
															Assessments
														</a>
													</li>
													<li>
														<a
															onClick={() => {
																setStatetab(3);
															}}
															className="nav-item"
															href="javascript:void(0)"
														>
															Assignment
														</a>
													</li>
												</ul>
											</div>
											{statetab === 0 ? (
												<>
													<div className="blading-session-wrapper">
														<div className="blading-card-wrapper">
															<a href="/BladingDetail">
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
															</a>
															<div className="blading-content-wrapper">
																<div className="heading-date-wrapper">
																	<h4>Microblading 101 | Session 01</h4>
																	<h6>26-Jan-2022</h6>
																</div>
																<p>
																	Lorem Ipsum is simply dummy text of the
																	printing and typesetting industry. Lorem Ipsum
																	has been the industry's standard dummy text
																	ever since the 1500s, unknown printer took a
																	specimen book.
																</p>
															</div>
														</div>
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
																	<h1>02</h1>
																	<h6>Session</h6>
																</div>
															</div>
															<div className="blading-content-wrapper">
																<div className="heading-date-wrapper">
																	<h4>Microblading 101 | Session 01</h4>
																	<h6>26-Jan-2022</h6>
																</div>
																<p>
																	Lorem Ipsum is simply dummy text of the
																	printing and typesetting industry. Lorem Ipsum
																	has been the industry's standard dummy text
																	ever since the 1500s, unknown printer took a
																	specimen book.
																</p>
															</div>
														</div>
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
																	<h1>03</h1>
																	<h6>Session</h6>
																</div>
															</div>
															<div className="blading-content-wrapper">
																<div className="heading-date-wrapper">
																	<h4>Microblading 101 | Session 01</h4>
																	<h6>26-Jan-2022</h6>
																</div>
																<p>
																	Lorem Ipsum is simply dummy text of the
																	printing and typesetting industry. Lorem Ipsum
																	has been the industry's standard dummy text
																	ever since the 1500s, unknown printer took a
																	specimen book.
																</p>
															</div>
														</div>
													</div>
												</>
											) : null}
											{statetab === 1 ? (
												<>
													{/* Courses Material starts here */}
													<section className="coursesMaterial">
														<div className="pdf-card-wrapper">
															<div className="pdf-img-wrapper">
																<img
																	src={pdf_img}
																	className="img-fluid"
																	alt=""
																/>
															</div>
															<div className="pdf-content-wrapper">
																<h6>Microblading C1</h6>
															</div>
														</div>
														<div className="pdf-card-wrapper">
															<div className="pdf-img-wrapper">
																<img
																	src={pdf_img}
																	className="img-fluid"
																	alt=""
																/>
															</div>
															<div className="pdf-content-wrapper">
																<h6>Microblading C2</h6>
															</div>
														</div>
														<div className="pdf-card-wrapper">
															<div className="pdf-img-wrapper">
																<img
																	src={pdf_img}
																	className="img-fluid"
																	alt=""
																/>
															</div>
															<div className="pdf-content-wrapper">
																<h6>Microblading C3</h6>
															</div>
														</div>
														<div className="pdf-card-wrapper">
															<div className="pdf-img-wrapper">
																<img
																	src={pdf_img}
																	className="img-fluid"
																	alt=""
																/>
															</div>
															<div className="pdf-content-wrapper">
																<h6>Microblading C4</h6>
															</div>
														</div>
														<div className="pdf-card-wrapper">
															<div className="pdf-img-wrapper">
																<img
																	src={pdf_img}
																	className="img-fluid"
																	alt=""
																/>
															</div>
															<div className="pdf-content-wrapper">
																<h6>Microblading C5</h6>
															</div>
														</div>
														<div className="pdf-card-wrapper">
															<div className="pdf-img-wrapper">
																<img
																	src={pdf_img}
																	className="img-fluid"
																	alt=""
																/>
															</div>
															<div className="pdf-content-wrapper">
																<h6>Microblading C6</h6>
															</div>
														</div>
														<div className="pdf-card-wrapper">
															<div className="pdf-img-wrapper">
																<img
																	src={pdf_img}
																	className="img-fluid"
																	alt=""
																/>
															</div>
															<div className="pdf-content-wrapper">
																<h6>Microblading C7</h6>
															</div>
														</div>
														<div className="pdf-card-wrapper">
															<div className="pdf-img-wrapper">
																<img
																	src={pdf_img}
																	className="img-fluid"
																	alt=""
																/>
															</div>
															<div className="pdf-content-wrapper">
																<h6>Microblading C8</h6>
															</div>
														</div>
														<div className="pdf-card-wrapper">
															<div className="pdf-img-wrapper">
																<img
																	src={pdf_img}
																	className="img-fluid"
																	alt=""
																/>
															</div>
															<div className="pdf-content-wrapper">
																<h6>Microblading C9</h6>
															</div>
														</div>
														<div className="pdf-card-wrapper">
															<div className="pdf-img-wrapper">
																<img
																	src={pdf_img}
																	className="img-fluid"
																	alt=""
																/>
															</div>
															<div className="pdf-content-wrapper">
																<h6>Microblading C10</h6>
															</div>
														</div>
													</section>
													{/* Courses Material ends here */}
												</>
											) : null}
											{statetab === 2 ? (
												<>
													<section className="question-and-answer-wrapper">
														<div className="row">
															<div className="col-lg-8">
																<div className="assesment-wrapper">
																	<div className="assesment-question-wrapper">
																		<div className="question-wrapper">
																			<h6>
																				Lorem ipsum dolor sit amet, consectetur?
																			</h6>
																		</div>
																		<div className="options-wrapper">
																			<div className="single-option-wrapper">
																				<p>(A) Lorem Ipsum</p>
																			</div>
																			<div className="single-option-wrapper">
																				<p>(B) Lorem Ipsum</p>
																			</div>
																			<div className="single-option-wrapper">
																				<p>(C) Lorem Ipsum</p>
																			</div>
																			<div className="single-option-wrapper">
																				<p>(D) Lorem Ipsum</p>
																			</div>
																		</div>
																	</div>
																	<div className="assesment-question-wrapper">
																		<div className="question-wrapper">
																			<h6>
																				Lorem ipsum dolor sit amet, consectetur?
																			</h6>
																		</div>
																		<div className="options-wrapper">
																			<div className="single-option-wrapper">
																				<p>(A) Lorem Ipsum</p>
																			</div>
																			<div className="single-option-wrapper">
																				<p>(B) Lorem Ipsum</p>
																			</div>
																			<div className="single-option-wrapper">
																				<p>(C) Lorem Ipsum</p>
																			</div>
																			<div className="single-option-wrapper">
																				<p>(D) Lorem Ipsum</p>
																			</div>
																		</div>
																	</div>
																	<div className="assesment-question-wrapper">
																		<div className="question-wrapper">
																			<h6>
																				Lorem ipsum dolor sit amet, consectetur?
																			</h6>
																		</div>
																		<div className="options-wrapper">
																			<div className="single-option-wrapper">
																				<p>(A) Lorem Ipsum</p>
																			</div>
																			<div className="single-option-wrapper">
																				<p>(B) Lorem Ipsum</p>
																			</div>
																			<div className="single-option-wrapper">
																				<p>(C) Lorem Ipsum</p>
																			</div>
																			<div className="single-option-wrapper">
																				<p>(D) Lorem Ipsum</p>
																			</div>
																		</div>
																	</div>
																	<div className="btn-wrapper">
																		<button className="btn">Submit</button>
																	</div>
																</div>
															</div>
														</div>
													</section>
												</>
											) : null}
											{statetab === 3 ? (
												<>
													<section className="upload-wrapper">
														<UploadButton
															uploader={uploader}
															options={{ multi: true }}
															onComplete={(files) => console.log(files)}
														>
															{({ onClick }) => (
																<button className="btn" onClick={onClick}>
																	<img src={upload_img} alt="" /> Upload
																</button>
															)}
														</UploadButton>
														<div className="upload-content-wrapper">
															<p>
																*Lorem Ipsum is simply dummy text of the
																printing
															</p>
														</div>
													</section>
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

export default OnlineCourses;
