import React from "react";
import "../../assets/css/faq.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
	return (
		<>
			<Header />
			{/* Page Header starts here */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>FAQ's</h2>
							<span>Home {">"} FAQ's</span>
						</div>
					</div>
				</div>
			</section>
			{/* Page Header ends here */}
			{/* faq sec starts here */}
			<section className="faq">
				<div className="container">
					<div className="row">
						<div className="col-lg-1"></div>
						<div className="col-lg-10">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>
										<span>
											{" "}
											Lorem ipsum dolor sit amet consectetur adipiscing elit
										</span>

										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, by injected humour, or randomised words which don't
										look even slightly believable. If you are going to use a
										passage of Lorem Ipsum, you need to be sure there isn't
										anything embarrassing hidden in the middle of text.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										<span>
											{" "}
											Lorem ipsum dolor sit amet consectetur adipiscing elit
										</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>
										<span>
											{" "}
											Lorem ipsum dolor sit amet consectetur adipiscing elit
										</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>
										<span>
											{" "}
											Lorem ipsum dolor sit amet consectetur adipiscing elit
										</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>
										<span>
											{" "}
											Lorem ipsum dolor sit amet consectetur adipiscing elit
										</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</section>
			{/* faq sec ends here */}

			<Footer />
		</>
	);
};

export default Faq;
