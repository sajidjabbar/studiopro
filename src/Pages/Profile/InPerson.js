import React, { useState } from "react";
import "../../assets/css/MyCourses.css";
import {
	blading_img,
	brush,
	brush1,
	make1,
	make2,
	make3,
	pdf_img,
	profile_img2,
	review_brush,
	schedule_img,
	upload_img,
	video_btn,
} from "../../constant";
import "../../assets/css/OnlineCourses.css";
import "../../assets/css/person.css";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import SideBar from "../../Components/SideBar/SideBar";
const InPerson = () => {
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
													My Courses <span>> In-Person > Schedule</span>
												</h4>
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
															Scheduled Sessions
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
															Course Materials
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
															Assessments
														</a>
													</li>
												</ul>
											</div>
											{statetab === 0 ? (
												<>
													<section className="ScheduledSessions">
														<div className="container">
															<div className="row">
																<div className="col-lg-6">
																	<div className="scheduled-card-wrapper">
																		<div className="scheduled-img-wrapper">
																			<figure>
																				<img
																					src={schedule_img}
																					className="img-fluid"
																					alt=""
																				/>
																				<img
																					src={brush1}
																					className="brush"
																					alt=""
																				/>
																			</figure>
																			<div className="admin-wrapper">
																				<img src={profile_img2} alt="" />
																				<h6>Emilia Carter</h6>
																			</div>
																		</div>
																		<div className="scheduled-content-wrapper">
																			<div className="headings-wrapper">
																				<h4>Microblading 101</h4>
																				<h6>26-Jan-2022</h6>
																			</div>
																			<p>
																				Lorem Ipsum is simply dummy text of the
																				printing and typesetting industry. Lorem
																				Ipsum has been the industry's standard
																				dummy text.
																			</p>
																		</div>
																	</div>
																</div>
																<div className="col-lg-6">
																	<div className="session-table-wrapper">
																		<div className="table-responsive">
																			<table className="table">
																				<thead>
																					<tr>
																						<td className="session-col">
																							Session
																						</td>
																						<td className="date-col">Date</td>
																						<td className="time-col">Time</td>
																					</tr>
																				</thead>
																				<tbody>
																					<tr>
																						<td className="session-name">
																							Session 01
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 02
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 03
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 04
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 05
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 06
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 07
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 01
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 02
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 03
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 04
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 05
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 06
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 07
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 01
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 02
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 03
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 04
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 05
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 06
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 07
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 01
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 02
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 03
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 04
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 05
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 06
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																					<tr>
																						<td className="session-name">
																							Session 07
																						</td>
																						<td className="date-name">
																							8-June
																						</td>
																						<td className="time-name">
																							03:00pm
																						</td>
																					</tr>
																				</tbody>
																			</table>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</section>
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

export default InPerson;
