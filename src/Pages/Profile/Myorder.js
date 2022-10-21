import React from "react";
import { makeimg, pro_img } from "../../constant";
import "../../assets/css/myorder.css";
import SideBar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Myorder = () => {
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Course Detail</h2>
							<span>Home {">"} Profile</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			<section className="profile-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<SideBar />
						</div>
						<div className="col-lg-9">
							{/* wishlist starts here */}
							<section className="wishlist-sec pt-0 order-wrap">
								<div className="container">
									<div className="row">
										<div className="mycourses-heading-wrapper">
											<h4>My Orders</h4>
										</div>
										<div className="col-lg-12">
											<div className="wishlist-wrapper">
												<div className="table-responsive">
													<table className="table">
														<thead>
															<tr>
																<th className="close"></th>
																<th className="pro-name">Order ID</th>
																<th className="PRICE-name">Date</th>
																<th className="Avalablity-name">Total</th>
																<th className="Action-name">Status</th>
																<th className="Action-name">Action</th>
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
																		<img
																			src={makeimg}
																			className="img-fluid"
																			alt=""
																		/>
																		<h6>#143569</h6>
																	</div>
																</td>
																<td className="price-name">
																	<h6>31-5-22</h6>
																</td>
																<td className="stock-name">
																	<h6>$158.07 </h6>
																</td>
																<td className="stock-name">
																	<h6>Pending</h6>
																</td>
																<td className="product-name">
																	<div className="button-wrapper">
																		<a href="/Order" className="btn">
																			View Detail
																		</a>
																	</div>
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
																		<img
																			src={makeimg}
																			className="img-fluid"
																			alt=""
																		/>
																		<h6>#143569</h6>
																	</div>
																</td>
																<td className="price-name">
																	<h6>31-5-22</h6>
																</td>
																<td className="stock-name">
																	<h6>$158.07 </h6>
																</td>
																<td className="stock-name">
																	<h6>Pending</h6>
																</td>
																<td className="product-name">
																	<div className="button-wrapper">
																		<a href="/Order" className="btn">
																			View Detail
																		</a>
																	</div>
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
																		<img
																			src={makeimg}
																			className="img-fluid"
																			alt=""
																		/>
																		<h6>#143569</h6>
																	</div>
																</td>
																<td className="price-name">
																	<h6>31-5-22</h6>
																</td>
																<td className="stock-name">
																	<h6>$158.07 </h6>
																</td>
																<td className="stock-name">
																	<h6>Pending</h6>
																</td>
																<td className="product-name">
																	<div className="button-wrapper">
																		<a href="/Order" className="btn">
																			View Detail
																		</a>
																	</div>
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
																		<img
																			src={makeimg}
																			className="img-fluid"
																			alt=""
																		/>
																		<h6>#143569</h6>
																	</div>
																</td>
																<td className="price-name">
																	<h6>31-5-22</h6>
																</td>
																<td className="stock-name">
																	<h6>$158.07 </h6>
																</td>
																<td className="stock-name">
																	<h6>Pending</h6>
																</td>
																<td className="product-name">
																	<div className="button-wrapper">
																		<a href="/Order" className="btn">
																			View Detail
																		</a>
																	</div>
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
																		<img
																			src={makeimg}
																			className="img-fluid"
																			alt=""
																		/>
																		<h6>#143569</h6>
																	</div>
																</td>
																<td className="price-name">
																	<h6>31-5-22</h6>
																</td>
																<td className="stock-name">
																	<h6>$158.07 </h6>
																</td>
																<td className="stock-name">
																	<h6>Pending</h6>
																</td>
																<td className="product-name">
																	<div className="button-wrapper">
																		<a href="/Order" className="btn">
																			View Detail
																		</a>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
											<div className="btn-wrapper">
												<button className="btn">Continue Shopping</button>
												<button className="btn-Clear ">Clear</button>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* wishlist ends here */}
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Myorder;
