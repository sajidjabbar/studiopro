import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { beauty1, order_img } from "../../constant";
import "../../assets/css/order.css";

const Order = () => {
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>My Orders</h2>
							<span>Home {">"} Profile</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* Order starts here */}
			<section className="order">
				<div className="container">
					<div className="row">
						<div className="col-lg-3"></div>
						<div className="col-lg-6">
							<div className="order-card-wrapper">
								<div className="order-heading-wrapper">
									<h5>OrderID</h5>
									<h4>#1084598423154</h4>
								</div>
								<div className="order-product-wrapper">
									<div className="heading-wrapper">
										<h6>Product Detail</h6>
									</div>
									<div className="products-wrapper">
										<div className="single-products-wrapper">
											<div className="img-wrapper">
												<figure>
													<img src={order_img} className="img-fluid" alt="" />
												</figure>
											</div>
											<div className="product-content-wrapper">
												<h6>Your Product Name</h6>
											</div>
											<div className="price-wrapper">
												<h4>$158.07</h4>
											</div>
										</div>
										<div className="single-products-wrapper">
											<div className="img-wrapper">
												<figure>
													<img src={order_img} className="img-fluid" alt="" />
												</figure>
											</div>
											<div className="product-content-wrapper">
												<h6>Your Product Name</h6>
											</div>
											<div className="price-wrapper">
												<h4>$158.07</h4>
											</div>
										</div>
										<div className="single-products-wrapper">
											<div className="img-wrapper">
												<figure>
													<img src={order_img} className="img-fluid" alt="" />
												</figure>
											</div>
											<div className="product-content-wrapper">
												<h6>Your Product Name</h6>
											</div>
											<div className="price-wrapper">
												<h4>$158.07</h4>
											</div>
										</div>
									</div>
									<div className="order-details-wrapper">
										<div className="heading-wrapper">
											<h6>Order Detail</h6>
										</div>
										<div className="order-list-wrapper">
											<ul>
												<li>
													<span className="property">Date :</span>
													<span className="value">#10005165551651</span>
												</li>
												<li>
													<span className="property">Subtotal :</span>
													<span className="value">$785.00</span>
												</li>
												<li>
													<span className="property">Tax fee :</span>
													<span className="value">$80.00</span>
												</li>
												<li>
													<span className="property">Shipping Fee :</span>
													<span className="value">$5.00</span>
												</li>
												<li>
													<span className="property">Coupon Discount :</span>
													<span className="value">$50.00</span>
												</li>
											</ul>
										</div>
										<div className="shipment-wrapper">
											<div className="heading-wrapper">
												<h6>Shipment</h6>
											</div>
											<div className="shipment-list-wrapper">
												<ul>
													<li>
														<span className="property">Estimated Arrival:</span>
														<span className="value">24 November</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<button className="close">
									<i className="fa-solid fa-xmark"></i>
								</button>
							</div>
						</div>
						<div className="col-lg-3"></div>
					</div>
				</div>
			</section>
			{/* Order ends here */}
			<Footer />
		</>
	);
};

export default Order;
