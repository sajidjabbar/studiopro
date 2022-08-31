import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../../assets/css/contact.css";
import { contact, homeicon, phoneicon, massageicon } from "../../constant";

const Contact = () => {
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Contact Us</h2>
							<span>Home > Contact Us</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* contact-us sec starts here */}
			<section className="contact-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-sm-6 col-12">
							<div className="contact-img">
								<figure>
									<img src={contact} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6 col-12">
							<div className="contact-form">
								<h2>Contact Us</h2>
								<form action="">
									<div class="form-group">
										<input
											type="Name"
											class="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Your Name"
										/>
									</div>
									<div class="form-group">
										<input
											type="email"
											class="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Email"
										/>
									</div>
									<div class="form-group">
										<input
											type="number"
											class="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Phone"
										/>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Subject"
										/>
									</div>
									<div class="form-group">
										<textarea
											class="form-control"
											id="exampleFormControlTextarea1"
											rows="3"
											placeholder="Message"
										></textarea>
									</div>
									<div className="btn-wrapper">
										<a href="#" className="btn1">
											Send
										</a>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-sm-4 col-12">
							<div className="box-erapper">
								<img src={homeicon} className="img-fluid" alt="" />
								<h5>
									8500 Central, New York, <br /> Wdhri West CEO 12301
								</h5>
							</div>
						</div>
						<div className="col-lg-4 col-sm-4 col-12">
							<div className="box-erapper">
								<img src={phoneicon} className="img-fluid" alt="" />
								<h5>
									+13 445 87 01 99
									<br /> +14 867 00 79 41
								</h5>
							</div>
						</div>
						<div className="col-lg-4 col-sm-4 col-12">
							<div className="box-erapper">
								<img src={massageicon} className="img-fluid" alt="" />
								<h5>
									lemon@your-site.com
									<br /> websroad@gmail.com
								</h5>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="contact-map">
								<h2>Find Us</h2>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
									width="100%"
									height="500"
									frameBorder="0"
									style={{ border: 0 }}
									allowFullScreen=""
									aria-hidden="false"
									tabIndex="0"
									filter="grayscale(100%)"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* contact-us sec end here */}
			<Footer />
		</>
	);
};

export default Contact;
