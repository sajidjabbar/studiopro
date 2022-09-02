import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../../assets/css/shop.css";
import { beauty4, beauty5, review, review1, review2 } from "../../constant";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Shop2 = () => {
	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);
	const [count, setCount] = useState(1);
	const slider1 = useRef(null);
	const slider2 = useRef(null);

	useEffect(() => {
		setNav1(slider1.current);
		setNav2(slider2.current);
	}, []);

	const CountPlus = () => {
		return setCount(count + 1);
	};

	const CountMinus = () => {
		if (count < 1) {
			return setCount(1);
		}
		return setCount(count - 1);
	};

	const ParamData = [
		{
			id: 1,
			img: beauty5,
		},
		{
			id: 2,
			img: beauty5,
		},
		{
			id: 3,
			img: beauty5,
		},
		{
			id: 4,
			img: beauty5,
		},
	];
	const ParamData2 = [
		{
			id: 1,
			img: beauty4,
		},
		{
			id: 2,
			img: beauty4,
		},
		{
			id: 3,
			img: beauty4,
		},
		{
			id: 4,
			img: beauty4,
		},
	];
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Shop</h2>
							<span>Home > Shop</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* shop sec start here */}
			<section className="product-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="product-slide">
								<Slider asNavFor={nav2} ref={slider1} arrows={false}>
									{ParamData2?.map((item, index) => {
										console.log(item);
										return (
											<div
												className="product-images mainimage-container"
												key={index}
											>
												<figure>
													<img
														src={item?.img}
														alt=""
														className="image-fluid image-width"
													/>
												</figure>
											</div>
										);
									})}
								</Slider>

								<Slider
									asNavFor={nav1}
									ref={slider2}
									slidesToShow={4}
									swipeToSlide={true}
									focusOnSelect={true}
									arrows={false}
									className="slick-custom"
								>
									{ParamData?.map((item, index) => {
										console.log(item);
										return (
											<div className="inner-image-container" key={index}>
												<figure>
													<img
														src={item?.img}
														alt=""
														className="image-fluid image-width"
													/>
												</figure>
											</div>
										);
									})}
								</Slider>
							</div>
							<div className="btn-wrapper1">
								<a href="#" className="btn3">
									Products Description
								</a>
								<a href="#" className="btn2">
									Reviews
								</a>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="product-name">
								<h4>Your Product Name</h4>
								<div className="product-text">
									<p>
										<strike>$158.07 </strike> <span>$130.00 </span>
									</p>
									<i class="fa-solid fa-heart"></i>
								</div>
								<div className="five-star">
									<i className="fa-sharp fa-solid fa-star"></i>
									<i className="fa-sharp fa-solid fa-star"></i>
									<i className="fa-sharp fa-solid fa-star"></i>
									<i className="fa-regular fa-star"></i>
									<i className="fa-regular fa-star"></i>
								</div>
							</div>
							<p className="product-para">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
							<div className="stock-btn">
								<h5>Stock status </h5>
								<button className="btn5">
									{" "}
									<Link to="/">In Stock</Link>
								</button>
							</div>
							<div className="quantity">
								<h5>Quantity</h5>
								<ul>
									<li>
										<button onClick={CountPlus}>
											<i class="fa-solid fa-plus"></i>
										</button>
									</li>
									<li className="second-quantity">
										<Link to="/">{count < 1 ? count + 1 : count}</Link>
									</li>
									<li>
										<button onClick={CountMinus}>
											<i class="fa-solid fa-minus"> </i>
										</button>
									</li>
								</ul>
							</div>
							<div className="card-btn">
								<button className="btn2 btn6">
									<i class="fa-solid fa-cart-arrow-down"></i>
									<Link to="/">Add to cart</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="chat-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="review">
								<h5>Reviews</h5>
								<h5>2 Reviews</h5>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="review-chat1">
								<div className="chat-img">
									<img src={review} alt="" />
								</div>
								<div className="name-chat">
									<h5>
										Joeby Ragpa <span> - </span> 12 April, 2014 at 16:50
									</h5>
									<p>
										We possess within us two minds. So far I have written only
										of the conscious mind. I would now like to introduce you to
										your second mind, the hidden and mysterious subconscious.
										Our subconscious mind contains such power and complexity
										that it literally staggers the imagination.
									</p>
									<a href="">Reply</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-1"></div>
						<div className="col-lg-10">
							<div className="chat-wrapper">
								<div className="review-chat">
									<div className="chat-img1">
										<img src={review1} alt="" />
									</div>
									<div className="name-chat">
										<h5>
											Joeby Ragpa <span> - </span> 12 April, 2014 at 16:50
										</h5>
										<p>
											We possess within us two minds. So far I have written only
											of the conscious mind. I would now like to introduce you
											to your second mind, the hidden and mysterious
											subconscious. Our subconscious mind contains such power
											and complexity that it literally staggers the imagination.
										</p>
									</div>
								</div>
								<div className="review-chat">
									<div className="chat-img1">
										<img src={review1} alt="" />
									</div>
									<div className="name-chat">
										<h5>
											Joeby Ragpa <span> - </span> 12 April, 2014 at 16:50
										</h5>
										<p>
											We possess within us two minds. So far I have written only
											of the conscious mind. I would now like to introduce you
											to your second mind, the hidden and mysterious
											subconscious. Our subconscious mind contains such power
											and complexity that it literally staggers the imagination.
										</p>
									</div>
								</div>
								<div className="review-chat  review-chat-text ">
									<div className="chat-img1">
										<img src={review1} alt="" />
									</div>
									<div className="name-chat">
										<h5>
											Joeby Ragpa <span> - </span> 12 April, 2014 at 16:50
										</h5>
										<p>
											We possess within us two minds. So far I have written only
											of the conscious mind. I would now like to introduce you
											to your second mind, the hidden and mysterious
											subconscious. Our subconscious mind contains such power
											and complexity that it literally staggers the imagination.
										</p>
									</div>
								</div>
							</div>
							<div className="img-input">
								<div className="chat-img1">
									<img src={review2} alt="" />
								</div>
								<div class="form-group3">
									<input
										type="text"
										class="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Add reply"
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-1"></div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="review-chat1  border-chat-down">
								<div className="chat-img">
									<img src={review} alt="" />
								</div>
								<div className="name-chat">
									<h5>
										Joeby Ragpa <span> - </span> 12 April, 2014 at 16:50
									</h5>
									<p>
										We possess within us two minds. So far I have written only
										of the conscious mind. I would now like to introduce you to
										your second mind, the hidden and mysterious subconscious.
										Our subconscious mind contains such power and complexity
										that it literally staggers the imagination.
									</p>
									<a href="">Reply</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-7">
							<div className="input-contect">
								<h4>Post Your Reviews</h4>
								<div className="row">
									<div className="col-lg-6">
										<div class="form-group">
											<input
												type="name"
												class="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Name"
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div class="form-group">
											<input
												type="email"
												class="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Email"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div class="form-group">
											<textarea
												class="form-control"
												id="exampleFormControlTextarea1"
												rows="3"
												placeholder="Comment"
											></textarea>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="text-star">
											<h4>Rate the Product</h4>
											<div className="five-star">
												<i className="fa-sharp fa-solid fa-star"></i>
												<i className="fa-sharp fa-solid fa-star"></i>
												<i className="fa-sharp fa-solid fa-star"></i>
												<i className="fa-regular fa-star"></i>
												<i className="fa-regular fa-star"></i>
											</div>
										</div>
									</div>
									<div className="btn-wrapper1">
										<a href="#" className="btn2">
											Send
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* shop sec end here */}
			<Footer />
		</>
	);
};

export default Shop2;
