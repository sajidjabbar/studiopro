import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {
	brush,
	makeup14,
	makeup15,
	makeup16,
	NewsDetailImg,
} from "../../constant";
import "../../assets/css/NewsDetail.css";

const NewsDetail = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>News & Events</h2>
							<span>Home > News & Events > Detail</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* News detail starts here */}
			<section className="NewsDetail">
				<div className="container">
					<div className="row">
						<div className="col-lg-9">
							<div className="newsDetail-wrapper">
								<div className="news-detail-img">
									<figure>
										<img src={NewsDetailImg} className="img-fluid" alt="" />
										<img src={brush} className="brush" alt="" />
									</figure>
								</div>
								<div className="news-content-wrapper">
									<h6 className="date">May 11, 2022</h6>
									<div className="heading-wrapper">
										<h3>
											Contrary to popular belief, Lorem Ipsum is not simply
											random text. Contrary to popular belief, Lorem Ipsum is
											not simply random text.
										</h3>
									</div>
									<div className="news-paragraphy-wrapper">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Bibendum est ultricies integer quis. Iaculis urna
											id volutpat lacus laoreet. Mauris vitae ultricies leo
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Bibendum est ultricies integer quis. Iaculis urna
											id volutpat lacus laoreet. Mauris vitae ultricies leoLorem
											ipsum dolor sit amet, consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Bibendum est ultricies integer quis. Iaculis urna
											id volutpat lacus laoreet. Mauris vitae ultricies leoLorem
											ipsum dolor sit amet, consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Bibendum est ultricies integer quis. Iaculis urna
											id volutpat lacus laoreet. Mauris vitae ultricies leoLorem
											ipsum dolor sit amet, consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Bibendum Lorem ipsum dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod tempor incididunt ut
											labore et dolore magna aliqua. Bibendum est ultricies
											integer quis. Iaculis urna id volutpat lacus laoreet.
											Mauris vitae ultricies leo Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqua. Bibendum est
											ultricies integer quis. Iaculis urna id volutpat lacus
											laoreet. Mauris vitae ultricies leoLorem ipsum dolor sit
											amet, consectetur adipiscing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqua.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Bibendum est ultricies integer quis. Iaculis urna
											id volutpat lacus laoreet. Mauris vitae ultricies leo
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
										</p>
									</div>
								</div>
							</div>
							<div className="review-upload-wrapper">
								<div className="row">
									<div className="col-lg-7">
										<div className="heading-wrapper">
											<h3>Leave a Comment</h3>
										</div>
										<form action="">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Name"
													name=""
													id=""
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Email"
													name=""
													id=""
												/>
											</div>
											<div className="form-group">
												<textarea
													name=""
													className="form-control"
													placeholder="Your Comment"
													id=""
													cols="30"
													rows="5"
												></textarea>
											</div>
											<div className="form-group">
												<button type="submit" className="btn">
													Send
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="recomanded-wrapper">
								<div className="heading-wrapper">
									<h2>Reccomended</h2>
								</div>
								<div className="more-blog-wrapper">
									<div className="card-wrapper">
										<div className="img-wrapper">
											<figure>
												<img src={makeup15} className="img-fluid" alt="" />
											</figure>
										</div>
										<div className="card-content-wrapper">
											<h4>What is HydraFacial ?</h4>
											<h6>May 11, 2022</h6>
										</div>
									</div>
									<div className="card-wrapper">
										<div className="img-wrapper">
											<figure>
												<img src={makeup16} className="img-fluid" alt="" />
											</figure>
										</div>
										<div className="card-content-wrapper">
											<h4>What is HydraFacial ?</h4>
											<h6>May 11, 2022</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* News detail ends here */}
			<Footer />
		</>
	);
};

export default NewsDetail;
