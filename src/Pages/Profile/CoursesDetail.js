import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const CoursesDetail = () => {
	return (
		<>
			<Header />
			{/* courses Detail starts here */}
			<section className="coursesDetail">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-wrapper">
								<h4>My Courses</h4>
								<span>
									{">"} Online {">"} Course Videos{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* courses Detail ends here */}
			<Footer />
		</>
	);
};

export default CoursesDetail;
