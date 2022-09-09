import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { brush, checkbox_img, classesDetail } from "../../constant";
import "../../assets/css/classesdetail.css";

const ClassesDetail = () => {
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
			{/* classes Detail starts here */}
			<section className="classes-detail">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="classes-img-wrapper">
								<figure>
									<img src={classesDetail} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="classes-content-wrapper">
								<div className="heading-time-wrapper">
									<h2>Microblading 101</h2>
									<h6>15:00 Hrs</h6>
								</div>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy
									<a href="#">View Details</a>
								</p>
								<div className="content-coverd-wrapper">
									<h6>Content Coverd</h6>
									<ul>
										<li>
											<img src={checkbox_img} alt="" />
											<span>Lorem Ipsum is simply | 60:00 mins</span>
										</li>
										<li>
											<img src={checkbox_img} alt="" />
											<span>Lorem Ipsum is simply | 60:00 mins</span>
										</li>
									</ul>
									<a href="#">View more</a>
								</div>
								<div className="enrollment">
									<h6>Select Enrollment Process</h6>
									<select name="" className="form-control" id="">
										<option value="Online">Online</option>
										<option value="Online">Online</option>
										<option value="Online">Online</option>
									</select>
								</div>
								<div className="kit-wrapper">
									<ul>
										<li>
											<span className="property">Mandatory Kit</span>
											<span className="value">150$</span>
										</li>
										<li>
											<span className="property">Course Charges</span>
											<span className="value">500$</span>
										</li>
									</ul>
								</div>
								<div className="btn-wrapper">
									<button className="btn">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* classes Detail ends here */}
			{/* courses details starts here */}
			<section className="courses-detail">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="text-wrapper">
								<h2>Course Details</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem Ipsum has been the
									industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make
									a type specimen book.
								</p>
							</div>
							<div className="text-wrapper">
								<h2>Lorem Ipsum Dolor Sit Amet</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem Ipsum has been the
									industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make
									a type specimen book.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-7">
							<div className="text-wrapper">
								<h2>Trainer’s Information</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s
								</p>
								<ul className="field-list-wrapper">
									<li>
										<span className="property">Name</span>
										<span className="value">John Doe</span>
									</li>
									<li>
										<span className="property">Email</span>
										<span className="value">Johndoe@email.com</span>
									</li>
									<li>
										<span className="property">Years of Experience</span>
										<span className="value">00</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="text-wrapper">
								<h2>Content Coverd</h2>
								<ul className="coverd-list">
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Microblading Theory and Practice</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Eyebrow Symmetry and Measuring (Brow Mapping!)</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Sanitation and Sterilization</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Fitzpatrick Scale</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Color Theory </span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Skin Anatomy </span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Client Consultation</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Contraindications / Contractions</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Aftercare</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Forms</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Practice on skins</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Hands on with models</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>State and County Regulations</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Business & Marketing</span>
									</li>
									<li>
										<img src={checkbox_img} className="img-fluid" alt="" />
										<span>Assessment Quiz</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* courses details ends here */}
			<Footer />
		</>
	);
};

export default ClassesDetail;
