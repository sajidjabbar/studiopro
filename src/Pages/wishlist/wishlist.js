import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { pro_img } from "../../constant";
import "../../assets/css/wishlist.css";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Wishlist</h2>
							<span>Home > Wishlist</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* wishlist starts here */}
			<section className="wishlist-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-1"></div>
						<div className="col-lg-10">
							<div className="wishlist-wrapper">
								<div className="table-responsive">
									<table className="table">
										<thead>
											<tr>
												<th className="close"></th>
												<th className="pro-name">PRODUCT NAME</th>
												<th className="PRICE-name">PRICE</th>
												<th className="Avalablity-name">Avalablity</th>
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
														<img src={pro_img} className="img-fluid" alt="" />
														<h6>Your Product Name</h6>
													</div>
												</td>
												<td className="price-name">
													<h6>$158.07 </h6>
												</td>
												<td className="stock-name">
													<h6>IN STOCK</h6>
												</td>
												<td className="product-name">
													<div className="button-wrapper">
														<button className="btn">Add to cart</button>
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
														<img src={pro_img} className="img-fluid" alt="" />
														<h6>Your Product Name</h6>
													</div>
												</td>
												<td className="price-name">
													<h6>$158.07 </h6>
												</td>
												<td className="stock-name">
													<h6>IN STOCK</h6>
												</td>
												<td className="product-name">
													<div className="button-wrapper">
														<button className="btn">Add to cart</button>
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
														<img src={pro_img} className="img-fluid" alt="" />
														<h6>Your Product Name</h6>
													</div>
												</td>
												<td className="price-name">
													<h6>$158.07 </h6>
												</td>
												<td className="stock-name">
													<h6>IN STOCK</h6>
												</td>
												<td className="product-name">
													<div className="button-wrapper">
														<button className="btn">Add to cart</button>
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
														<img src={pro_img} className="img-fluid" alt="" />
														<h6>Your Product Name</h6>
													</div>
												</td>
												<td className="price-name">
													<h6>$158.07 </h6>
												</td>
												<td className="stock-name">
													<h6>IN STOCK</h6>
												</td>
												<td className="product-name">
													<div className="button-wrapper">
														<button className="btn">Add to cart</button>
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
														<img src={pro_img} className="img-fluid" alt="" />
														<h6>Your Product Name</h6>
													</div>
												</td>
												<td className="price-name">
													<h6>$158.07 </h6>
												</td>
												<td className="stock-name">
													<h6>IN STOCK</h6>
												</td>
												<td className="product-name">
													<div className="button-wrapper">
														<button className="btn">Add to cart</button>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className="btn-wrapper">
								<button
									onClick={() => navigate("/productcart")}
									className="btn"
								>
									Continue Shopping
								</button>
								<button onClick={() => navigate("/")} className="btn-Clear ">
									Clear
								</button>
							</div>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</section>
			{/* wishlist ends here */}
			<Footer />
		</>
	);
};

export default Wishlist;
