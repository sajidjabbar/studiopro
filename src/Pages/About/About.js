import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {
	about_img,
	banner_1_img,
	banner_2_img,
	banner_3_img,
	blog1,
	blog2,
	blog3,
	brush,
	checkbox_img,
	classes,
	classes1,
	classes2,
	classes3,
	client,
	mission,
	play_btn,
	quote,
	test1,
	tranies1,
	tranies2,
	tranies3,
	tranies4,
	video_thumb,
} from "../../constant";

const About = () => {
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>About Us</h2>
							<span>Home > About Us</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* we are starts here */}
			<section className="we-are">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="we-are-content">
								<h2>Who We Are</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
								<p>
									The standard chunk of Lorem Ipsum used since the 1500s is
									reproduced below for those interested. Sections 1.10.32 and
									1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
									also reproduced in their exact original form, accompanied by
									English versions from the 1914 translation by H. Rackham.
								</p>
								<ul>
									<li>
										<img src={checkbox_img} alt="" />{" "}
										<span>
											Lorem Ipsum is simply dummy text of the printing industry.
										</span>
									</li>
									<li>
										<img src={checkbox_img} alt="" />{" "}
										<span>
											Lorem Ipsum is simply dummy text of the printing industry.
										</span>
									</li>
									<li>
										<img src={checkbox_img} alt="" />{" "}
										<span>
											Lorem Ipsum is simply dummy text of the printing industry.
										</span>
									</li>
								</ul>
								{/* <div className="btn-wrapper">
									<a href="/NewsDetail" className="btntext">
										Learn More
									</a>
								</div> */}
							</div>
						</div>
						<div className="col-lg-6">
							<div className="img-wrapper">
								<figure>
									<img src={about_img} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* we are ends here */}
			{/* meet tranies starts here */}
			<section className="meet-tranies">
				<div className="container">
					<div className="row pb-5">
						<div className="col-lg-2"></div>
						<div className="col-lg-8">
							<div className="content-wrapper">
								<h6>Trainers</h6>
								<h2>Meet Our Trainers</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
							</div>
						</div>
						<div className="col-lg-2"></div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="tranies-wrapper">
								<div className="tranies-img-wrapper">
									<figure>
										<img src={tranies1} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="tranie-content-wrapper">
									<h3>Anna Brown</h3>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tranies-wrapper">
								<div className="tranies-img-wrapper">
									<figure>
										<img src={tranies2} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="tranie-content-wrapper">
									<h3>Anna Brown</h3>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tranies-wrapper">
								<div className="tranies-img-wrapper">
									<figure>
										<img src={tranies3} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="tranie-content-wrapper">
									<h3>Anna Brown</h3>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tranies-wrapper">
								<div className="tranies-img-wrapper">
									<figure>
										<img src={tranies2} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="tranie-content-wrapper">
									<h3>Anna Brown</h3>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tranies-wrapper">
								<div className="tranies-img-wrapper">
									<figure>
										<img src={tranies4} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="tranie-content-wrapper">
									<h3>Anna Brown</h3>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tranies-wrapper">
								<div className="tranies-img-wrapper">
									<figure>
										<img src={tranies1} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="tranie-content-wrapper">
									<h3>Anna Brown</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* meet tranies ends here */}
			<Footer />
		</>
	);
};

export default About;
