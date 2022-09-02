import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../../assets/css/shop.css";
import { beauty4, beauty5 } from "../../constant";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const Shop2 = () => {
	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);
	const slider1 = useRef(null);
	const slider2 = useRef(null);

	useEffect(() => {
		setNav1(slider1.current);
		setNav2(slider2.current);
	}, []);

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
						<div className="col-lg-7">
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
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
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
