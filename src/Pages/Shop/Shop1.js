import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../assets/css/shop.css";
import { beauty1, beauty2, beauty3, brush1 } from "../../constant";
import $ from "jquery";
import { Link } from "react-router-dom";

const Shop1 = () => {
	useEffect(() => {
		$(document).ready(function () {
			$(".categories-tab ul li").click(function () {
				$(".categories-tab ul li").removeClass("active");
				// $(".tab").addClass("active"); // instead of this do the below
				$(this).addClass("active");
			});
		});
	}, []);
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
			{/*  Shop sec starts here */}
			<section className="shop-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-2 col-sm-2 col-12 p-0">
							<div className="categories-wrapper">
								<h3>Categories</h3>
								<div className="categories-tab">
									<ul>
										<li className="active">
											<Link to="/">Lorem Ipsum</Link>
										</li>
										<li>
											<Link to="/">Lorem Ipsum</Link>
										</li>
										<li>
											<Link to="/">Lorem Ipsum</Link>
										</li>
										<li>
											<Link to="/">Lorem Ipsum</Link>
										</li>
										<li className="border-bottom">
											<Link to="/">Lorem Ipsum</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-10 col-sm-2 col-12 ">
							<div className="beauty-img-wrapper">
								<div className="row pb-5">
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="wrapper-card">
											<Link to="/Shop2">
												<div className="beauty-img">
													<div className="big-img">
														<img src={beauty1} className="img-fluid" alt="" />
													</div>
													<div className="brush-img">
														<img src={brush1} className="img-fluid" alt="" />
													</div>
												</div>
												<div className="img-text">
													<h3>Lorem Ipsum</h3>
													<h3>$5.00</h3>
												</div>
												<div className="five-star">
													<i className="fa-sharp fa-solid fa-star"></i>
													<i className="fa-sharp fa-solid fa-star"></i>
													<i className="fa-sharp fa-solid fa-star"></i>
													<i className="fa-sharp fa-solid fa-star"></i>
													<i className="fa-sharp fa-solid fa-star"></i>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="beauty-img">
											<div className="big-img">
												<img src={beauty2} className="img-fluid" alt="" />
											</div>
											<div className="brush-img">
												<img src={brush1} className="img-fluid" alt="" />
											</div>
										</div>
										<div className="img-text">
											<h3>Lorem Ipsum</h3>
											<h3>$5.00</h3>
										</div>
										<div className="five-star">
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="beauty-img">
											<div className="big-img">
												<img src={beauty3} className="img-fluid" alt="" />
											</div>
											<div className="brush-img">
												<img src={brush1} className="img-fluid" alt="" />
											</div>
										</div>
										<div className="img-text">
											<h3>Lorem Ipsum</h3>
											<h3>$5.00</h3>
										</div>
										<div className="five-star">
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
										</div>
									</div>
								</div>
								<div className="row pb-5">
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="beauty-img">
											<div className="big-img">
												<img src={beauty1} className="img-fluid" alt="" />
											</div>
											<div className="brush-img">
												<img src={brush1} className="img-fluid" alt="" />
											</div>
										</div>
										<div className="img-text">
											<h3>Lorem Ipsum</h3>
											<h3>$5.00</h3>
										</div>
										<div className="five-star">
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="beauty-img">
											<div className="big-img">
												<img src={beauty2} className="img-fluid" alt="" />
											</div>
											<div className="brush-img">
												<img src={brush1} className="img-fluid" alt="" />
											</div>
										</div>
										<div className="img-text">
											<h3>Lorem Ipsum</h3>
											<h3>$5.00</h3>
										</div>
										<div className="five-star">
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="beauty-img">
											<div className="big-img">
												<img src={beauty3} className="img-fluid" alt="" />
											</div>
											<div className="brush-img">
												<img src={brush1} className="img-fluid" alt="" />
											</div>
										</div>
										<div className="img-text">
											<h3>Lorem Ipsum</h3>
											<h3>$5.00</h3>
										</div>
										<div className="five-star">
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
										</div>
									</div>
								</div>
								<div className="row pb-5">
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="beauty-img">
											<div className="big-img">
												<img src={beauty1} className="img-fluid" alt="" />
											</div>
											<div className="brush-img">
												<img src={brush1} className="img-fluid" alt="" />
											</div>
										</div>
										<div className="img-text">
											<h3>Lorem Ipsum</h3>
											<h3>$5.00</h3>
										</div>
										<div className="five-star">
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="beauty-img">
											<div className="big-img">
												<img src={beauty2} className="img-fluid" alt="" />
											</div>
											<div className="brush-img">
												<img src={brush1} className="img-fluid" alt="" />
											</div>
										</div>
										<div className="img-text">
											<h3>Lorem Ipsum</h3>
											<h3>$5.00</h3>
										</div>
										<div className="five-star">
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="beauty-img">
											<div className="big-img">
												<img src={beauty3} className="img-fluid" alt="" />
											</div>
											<div className="brush-img">
												<img src={brush1} className="img-fluid" alt="" />
											</div>
										</div>
										<div className="img-text">
											<h3>Lorem Ipsum</h3>
											<h3>$5.00</h3>
										</div>
										<div className="five-star">
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
											<i className="fa-sharp fa-solid fa-star"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="pagination-wrapper">
								<nav aria-label="Page navigation example">
									<ul className="pagination">
										<li className="page-item1">
											<a className="page-link" href="#" aria-label="Previous">
												<span aria-hidden="true">
													<i className="fa-solid fa-chevron-left"></i>
												</span>
												<span className="sr-only">Previous</span>
											</a>
										</li>
										<li className="page-item ">
											<a className="page-link active" href="#">
												1
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												..
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												6
											</a>
										</li>
										<li className="page-item1">
											<a className="page-link" href="#" aria-label="Next">
												<span aria-hidden="true">
													<i className="fa-solid fa-chevron-right"></i>
												</span>
												<span className="sr-only"></span>
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*  Shop sec end here */}
			<Footer />
		</>
	);
};

export default Shop1;
