import React from "react";
import {
	about_img,
	banner_1_img,
	banner_2_img,
	banner_3_img,
	blog1,
	thirdImage,
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
	secondImage,
	tranies1,
	firstImage,
	tranies2,
	tranies3,
	video_thumb,
} from "../../constant";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const bennner_settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			<Header />
			{/* Banner starts here */}
			<section className="banner-sec">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12 px-0">
							<Slider {...bennner_settings}>
								<div
									style={{
										backgroundImage: `url(${banner_1_img})`,
									}}
									className="banner-slider-wrapper banner-slider-wrapper-1"
								>
									<div className="row">
										<div className="col-lg-2"></div>
										<div className="col-lg-5">
											<div className="banner-content-wrapper">
												<h1>
													Advanced Esthetic & <br />
													<span> Makeup Traning</span>
												</h1>
												<p>
													Lorem Ipsum is simply dummy text of the printing and
													typesetting industry. <br /> Lorem Ipsum has been the
													industry's standard dummy text ever since the 1500s.
												</p>
												<div className="btn-wrapper">
													<a href="#" className="btn">
														Read More
													</a>
													<a href="#" className="btn-text">
														Our Services
													</a>
												</div>
											</div>
										</div>
										<div className="col-lg-5"></div>
									</div>
								</div>
								<div
									style={{
										backgroundImage: `url(${banner_2_img})`,
									}}
									className="banner-slider-wrapper banner-slider-wrapper-2"
								>
									<div className="row">
										<div className="col-lg-2"></div>
										<div className="col-lg-5">
											<div className="banner-content-wrapper">
												<h1>
													Advanced Esthetic & <br />
													<span> Makeup Traning</span>
												</h1>
												<p>
													Lorem Ipsum is simply dummy text of the printing and
													typesetting industry. <br /> Lorem Ipsum has been the
													industry's standard dummy text ever since the 1500s.
												</p>
												<div className="btn-wrapper">
													<a href="#" className="btn">
														Read More
													</a>
													<a href="#" className="btn-text">
														Our Services
													</a>
												</div>
											</div>
										</div>
										<div className="col-lg-5"></div>
									</div>
								</div>
								<div
									style={{
										backgroundImage: `url(${banner_3_img})`,
									}}
									className="banner-slider-wrapper banner-slider-wrapper-3"
								>
									<div className="row">
										<div className="col-lg-2"></div>
										<div className="col-lg-5">
											<div className="banner-content-wrapper">
												<h1>
													Advanced Esthetic & <br />
													<span> Makeup Traning</span>
												</h1>
												<p>
													Lorem Ipsum is simply dummy text of the printing and
													typesetting industry. <br /> Lorem Ipsum has been the
													industry's standard dummy text ever since the 1500s.
												</p>
												<div className="btn-wrapper">
													<a href="#" className="btn">
														Read More
													</a>
													<a href="#" className="btn-text">
														Our Services
													</a>
												</div>
											</div>
										</div>
										<div className="col-lg-5"></div>
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</section>
			{/* Banner ends here */}
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
								<div className="btn-wrapper">
									<a href="#" className="btntext">
										Learn More
									</a>
								</div>
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
			{/* missionn starts here */}
			<section className="mission-sec">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="img-wrapper">
								<figure>
									<img src={mission} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-wrapper">
								<h6>Our Mission</h6>
								<h2>Train For Your Future</h2>
								<p>
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. If you are going to use a passage of
									Lorem Ipsum, All the Lorem Ipsum generators on the Internet
									tend to repeat predefined chunks as necessary
								</p>
								<div className="btn-wrapper">
									<a href="#" className="btn">
										Visit Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* missionn ends here */}
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
										<img src={firstImage} className="img-fluid" alt="" />
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
					</div>
				</div>
			</section>
			{/* meet tranies ends here */}
			{/* our classes starts here */}
			<section className="our-classses">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="img-wrapper">
								<figure>
									<img src={classes} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-lg-6 align-self-center">
							<div className="classes-content-wrapper">
								<h5>Learn From The Best</h5>
								<h2>Our Classes</h2>
							</div>
							<div className="makeup-box-wrapper">
								<div className="row">
									<div className="col-lg-4">
										<div className="boxes-wrapper">
											<img src={classes1} className="img-fluid" alt="" />
											<h6>Permanent Makeup</h6>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="boxes-wrapper">
											<img src={classes2} className="img-fluid" alt="" />
											<h6>Esthetics</h6>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="boxes-wrapper">
											<img src={classes3} className="img-fluid" alt="" />
											<h6>Massage</h6>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="boxes-wrapper">
											<img src={classes1} className="img-fluid" alt="" />
											<h6>Permanent Makeup</h6>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="boxes-wrapper">
											<img src={classes2} className="img-fluid" alt="" />
											<h6>Esthetics</h6>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="boxes-wrapper">
											<img src={classes3} className="img-fluid" alt="" />
											<h6>Massage</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* our classes ends here */}
			{/* video sec starts here */}
			<section className="video-sec">
				<div className="container">
					<div className="row pb-4">
						<div className="col-lg-2"></div>
						<div className="col-lg-8">
							<div className="content-wrapper">
								<h6>About Training</h6>
								<h2>How It Works</h2>
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
						<div className="col-lg-12">
							<div className="video-thumbnail-wrapper">
								<figure>
									<img src={secondImage} className="img-fluid" alt="" />
								</figure>
								<div className="video-play-btn">
									<button>
										<img src={play_btn} alt="" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* video sec ends here */}
			{/* Clients starts here */}
			<section className="client-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 align-self-center">
							<div className="client-heading-wrapper">
								<h2>What Client Say</h2>
							</div>
							<Slider {...settings}>
								<div className="client-slider-wrapper">
									<div className="img-rating-wrapper">
										<div className="img-wrapper">
											<figure>
												<img src={test1} alt="" />
											</figure>
										</div>
										<div className="client-name-wrapper">
											<h3>
												Laura <br /> BIRMINGHAM, MI
											</h3>
											<ul>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star-half-stroke"></i>
												</li>
											</ul>
										</div>
										<div className="quote-wrapper">
											<img src={quote} alt="" />
										</div>
									</div>

									<div className="client-content">
										<p>
											Very informative, great atmosphere, patient and perfect
											for someone with some experience also. Great instructors
											with friendly personality, and still very professional.
										</p>
									</div>
								</div>
								<div className="client-slider-wrapper">
									<div className="img-rating-wrapper">
										<div className="img-wrapper">
											<figure>
												<img src={test1} alt="" />
											</figure>
										</div>
										<div className="client-name-wrapper">
											<h3>
												Ashley P. <br />
												Grand rapids, MI
											</h3>
											<ul>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star-half-stroke"></i>
												</li>
											</ul>
										</div>
										<div className="quote-wrapper">
											<img src={quote} alt="" />
										</div>
									</div>

									<div className="client-content">
										<p>
											Absolutely loved training with Dawn! I have trained with
											many professionals and I must say she was one of the best!
											Very knowledgeable and patient. I would definitely
											recommend her to anyone looking to boost their career.
										</p>
									</div>
								</div>
								<div className="client-slider-wrapper">
									<div className="img-rating-wrapper">
										<div className="img-wrapper">
											<figure>
												<img src={test1} alt="" />
											</figure>
										</div>
										<div className="client-name-wrapper">
											<h3>
												Ashley M <br />
												Indianapolis, IN
											</h3>
											<ul>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star-half-stroke"></i>
												</li>
											</ul>
										</div>
										<div className="quote-wrapper">
											<img src={quote} alt="" />
										</div>
									</div>

									<div className="client-content">
										<p>
											My experience as an apprentice with Dawn exceeded my
											expectations, I learned so much from her. Her experience
											in the beauty industry is extensive, I feel like I can’t
											stop learning from her even after I completed my
											apprenticeship. She is very detail oriented and very
											meticulous, especially during my lash and permanent makeup
											training. I truly believe that I was more than ready to
											take on new clients thanks to her. I highly recommend her
											and her programs.Nati KI had the opportunity to learn Lash
											Extensions with Studio Pro. What an experience! They were
											patient and kind. Very thorough and ran through scenarios
											that you will actually have with real clients. The kit had
											everything you needed and they will give you a list of
											other popular items for the services you are training for!
											I have referred many of my colleagues to them for more
											training!
										</p>
									</div>
								</div>
								{/* <div className="client-slider-wrapper">
									<div className="img-rating-wrapper">
										<div className="img-wrapper">
											<figure>
												<img src={test1} alt="" />
											</figure>
										</div>
										<div className="client-name-wrapper">
											<h3>Emily Clark</h3>
											<ul>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star"></i>
												</li>
												<li>
													<i className="fa-solid fa-star-half-stroke"></i>
												</li>
											</ul>
										</div>
										<div className="quote-wrapper">
											<img src={quote} alt="" />
										</div>
									</div>
									<div className="client-content">
										<p>
											The standard chunk of Lorem Ipsum used since the 1500s is
											reproduced below for those interested. Sections 1.10.32
											and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
											are also reproduced in their exact original form,
											accompanied by English versions from the 1914 translation
											by H. Rackham.
										</p>
									</div>
								</div> */}
							</Slider>
						</div>
						<div className="col-lg-6">
							<div className="img-wrapper">
								<figure>
									<img src={client} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Clients ends here */}
			{/* blogs starts here */}
			<section className="blogs">
				<div className="container">
					<div className="row">
						<div className="col-lg-2"></div>
						<div className="col-lg-8">
							<div className="heading-content-wrapper">
								<h6>Blogs</h6>
								<h2>News & Updates</h2>
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
							<div className="blog-card-wrapper">
								<div className="blog-img-wrapper">
									<figure>
										<img src={thirdImage} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="blog-content-wrapper">
									<h3>Get A Post-Summer Glow</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut aliqua.
									</p>
									<div className="date-btn-wrapper">
										<span>26-Jan-2022</span>
										<a href="#">Read More</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="blog-card-wrapper">
								<div className="blog-img-wrapper">
									<figure>
										<img src={blog2} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="blog-content-wrapper">
									<h3>What is HydraFacial ?</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut aliqua.
									</p>
									<div className="date-btn-wrapper">
										<span>26-Jan-2022</span>
										<a href="#">Read More</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="blog-card-wrapper">
								<div className="blog-img-wrapper">
									<figure>
										<img src={blog3} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="blog-content-wrapper">
									<h3>Why Everyone Needs Skin Care?</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut aliqua.
									</p>
									<div className="date-btn-wrapper">
										<span>26-Jan-2022</span>
										<a href="#">Read More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* blogs ends here */}
			{/* Footer starts here */}
			<Footer />
			{/* Footer ends here */}
		</>
	);
};

export default Home;
