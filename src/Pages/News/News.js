import React from "react";
import {
	brush,
	makeup12,
	makeup14,
	makeup15,
	makeup16,
	makeup6,
	makeup7,
	makeup8,
	news_img,
} from "../../constant";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "../../assets/css/News.css";

const News = () => {
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>News & Events</h2>
							<span>Home {">"} News & Events</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* News starts here */}
			<section className="news-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="img-wrapper">
								<figure>
									<img src={news_img} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-wrapper">
								<h6>Latest News</h6>
								<h2>Get A Post-Summer Glow</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem Ipsum has been the
									industry's standard dummy text ever since the 1500s
								</p>
								<span className="d-block">26-Jan-2022</span>
								<a href="/NewsDetail" className="btn">
									View Detail
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* News ends here */}
			{/* makeup sec starts here */}
			<section className="News-makeup-sec makeup-sec">
				<div className="container">
					<div className="makeup-row-wrapper">
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup14} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Get A Post-Summer Glow</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
								<a href="/NewsDetail">Read More</a>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup15} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>What is HydraFacial ?</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
								<a href="/NewsDetail">Read More</a>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup16} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Why Everyone Needs Skin Care?</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
								<a href="/NewsDetail">Read More</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* makeup sec ends here */}
			{/* makeup sec starts here */}
			<section className="makeup-sec pt-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-1"></div>
						<div className="col-lg-10">
							<div className="content-wrapper">
								<h2>Events</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type.
								</p>
							</div>
						</div>
						<div className="col-lg-1"></div>
					</div>
					<div className="makeup-row-wrapper">
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup14} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Get A Post-Summer Glow</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
								<a href="/NewsDetail">Read More</a>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup15} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>What is HydraFacial ?</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
								<a href="/NewsDetail">Read More</a>
							</div>
						</div>
						<div className="makeup-card-wrapper">
							<div className="makeup-img-wrapper">
								<figure>
									<img src={makeup16} className="img-fluid" alt="" />
									<img src={brush} className="brush" alt="" />
								</figure>
							</div>
							<div className="makepup-content-wrapper">
								<h3>Why Everyone Needs Skin Care?</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
								<span>26-Jan-2022</span>
								<a href="/NewsDetail">Read More</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* makeup sec ends here */}
			<Footer />
		</>
	);
};

export default News;
