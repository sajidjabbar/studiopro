import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "../../assets/css/Thankyou.css";

const Thankyou = () => {
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Thanks for Shopping</h2>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* Thank you note starts here */}
			<section className="thankyou-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-4"></div>
						<div className="col-lg-4">
							<div className="thankyou-note-wrapper">
								<h4>Thank You.</h4>
								<h4>Your Order has been Placed</h4>
							</div>
						</div>
						<div className="col-lg-4"></div>
					</div>
				</div>
			</section>
			{/* Thank you note ends here */}
			<Footer />
		</>
	);
};

export default Thankyou;
