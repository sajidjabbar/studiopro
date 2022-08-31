import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../../assets/css/shop.css";
import {} from "../../constant";

const Shop1 = () => {
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
						<div className="col-lg-2 col-sm-2 col-12"></div>
					</div>
				</div>
			</section>
			{/*  Shop sec end here */}
			<Footer />
		</>
	);
};

export default Shop1;
