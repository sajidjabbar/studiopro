import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { pro_img, pro_img2 } from "../../constant";
import "../../assets/css/wishlist.css";

const ProductCart = () => {
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Product Cart</h2>
							<span>Home {">"} Shop</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* wishlist starts here */}
			<section className="wishlist-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="wishlist-wrapper">
								<div className="table-responsive">
									<table className="table">
										<thead>
											<tr>
												<th className="close"></th>
												<th className="pro-name">PRODUCT NAME</th>
												<th className="PRICE-name">UNIT PRICE</th>
												<th className="Avalablity-name">QUANTITY</th>
												<th className="Action-name">SUB TOTAL</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="close-col">
													<button>
														<i className="fa fa-close"></i>
													</button>
												</td>
												<td className="product-name">
													<div className="product-wrapper">
														<img src={pro_img2} className="img-fluid" alt="" />
														<h6>Your Product Name</h6>
													</div>
												</td>
												<td className="price-name">
													<h6>$158.07 </h6>
												</td>
												<td className="stock-name">
													<div className="counter-wrapper">
														<div className="counter-field-wrapper">
															<input type="number" />
														</div>
														{/* <div className="counter-btn-wrapper">
															<button className="plus">
																<i class="fa-solid fa-angle-up"></i>
															</button>
															<button className="minus">
																<i class="fa-solid fa-angle-down"></i>
															</button>
														</div> */}
													</div>
												</td>
												<td className="product-name">
													<h6>$158.07 </h6>
												</td>
											</tr>
											<tr>
												<td className="close-col">
													<button>
														<i className="fa fa-close"></i>
													</button>
												</td>
												<td className="product-name">
													<div className="product-wrapper">
														<img src={pro_img2} className="img-fluid" alt="" />
														<h6>Your Product Name</h6>
													</div>
												</td>
												<td className="price-name">
													<h6>$158.07 </h6>
												</td>
												<td className="stock-name">
													<div className="counter-wrapper">
														<div className="counter-field-wrapper">
															<input type="number" />
														</div>
														{/* <div className="counter-btn-wrapper">
															<button className="plus">
																<i class="fa-solid fa-angle-up"></i>
															</button>
															<button className="minus">
																<i class="fa-solid fa-angle-down"></i>
															</button>
														</div> */}
													</div>
												</td>
												<td className="product-name">
													<h6>$158.07 </h6>
												</td>
											</tr>
											<tr>
												<td className="close-col">
													<button>
														<i className="fa fa-close"></i>
													</button>
												</td>
												<td className="product-name">
													<div className="product-wrapper">
														<img src={pro_img2} className="img-fluid" alt="" />
														<h6>Your Product Name</h6>
													</div>
												</td>
												<td className="price-name">
													<h6>$158.07 </h6>
												</td>
												<td className="stock-name">
													<div className="counter-wrapper">
														<div className="counter-field-wrapper">
															<input type="number" />
														</div>
														{/* <div className="counter-btn-wrapper">
															<button className="plus">
																<i class="fa-solid fa-angle-up"></i>
															</button>
															<button className="minus">
																<i class="fa-solid fa-angle-down"></i>
															</button>
														</div> */}
													</div>
												</td>
												<td className="product-name">
													<h6>$158.07 </h6>
												</td>
											</tr>
											<tr>
												<td className="close-col">
													<button>
														<i className="fa fa-close"></i>
													</button>
												</td>
												<td className="product-name">
													<div className="product-wrapper">
														<img src={pro_img2} className="img-fluid" alt="" />
														<h6>Your Product Name</h6>
													</div>
												</td>
												<td className="price-name">
													<h6>$158.07 </h6>
												</td>
												<td className="stock-name">
													<div className="counter-wrapper">
														<div className="counter-field-wrapper">
															<input type="number" />
														</div>
														{/* <div className="counter-btn-wrapper">
															<button className="plus">
																<i class="fa-solid fa-angle-up"></i>
															</button>
															<button className="minus">
																<i class="fa-solid fa-angle-down"></i>
															</button>
														</div> */}
													</div>
												</td>
												<td className="product-name">
													<h6>$158.07 </h6>
												</td>
											</tr>
											<tr>
												<td className="close-col">
													<button>
														<i className="fa fa-close"></i>
													</button>
												</td>
												<td className="product-name">
													<div className="product-wrapper">
														<img src={pro_img2} className="img-fluid" alt="" />
														<h6>Your Product Name</h6>
													</div>
												</td>
												<td className="price-name">
													<h6>$158.07 </h6>
												</td>
												<td className="stock-name">
													<div className="counter-wrapper">
														<div className="counter-field-wrapper">
															<input type="number" />
														</div>
														{/* <div className="counter-btn-wrapper">
															<button className="plus">
																<i class="fa-solid fa-angle-up"></i>
															</button>
															<button className="minus">
																<i class="fa-solid fa-angle-down"></i>
															</button>
														</div> */}
													</div>
												</td>
												<td className="product-name">
													<h6>$158.07 </h6>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="discount-row-wrapper">
									<div className="row">
										<div className="col-lg-6">
											<div className="copon-wrapper">
												<label htmlFor="">Discount codes</label>
												<div class="input-group">
													<input
														type="email"
														class="form-control"
														placeholder="Enter your coupon code if you have one."
													/>
													<span class="input-group-btn">
														<button class="btn" type="submit">
															APPLY
														</button>
													</span>
												</div>
											</div>
										</div>
										<div className="col-lg-2"></div>
										<div className="col-lg-4">
											<div className="discount-wrapper">
												<div className="discount-list-wrapper">
													<ul>
														<li>
															<span className="property">Subtotal</span>
															<span className="value">$ 700.00</span>
														</li>
														<li>
															<span className="property">
																Estimated Shipping Cost
															</span>
															<span className="value">Free Shipping</span>
														</li>
													</ul>
												</div>
												<div className="total-cost-wrapper">
													<ul>
														<li>
															<span className="property"> TOTAL COST </span>
															<span className="value">$ 700.15</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<div className="btn-wrapper">
										<button className="btn">Continue Shopping</button>
										<button className="btn-Clear ">Clear</button>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="btn-wrapper text-right">
										<button className="btn">Proceed to Checkout</button>
										<p className="mt-3">
											You’ll still have a chance to review your order
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* wishlist ends here */}
			<Footer />
		</>
	);
};

export default ProductCart;
