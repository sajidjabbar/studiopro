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
							<p>
								10 Most Frequently Asked Questions{" "}
								<span>-Studio Pro Advanced Education Classes</span>
							</p>
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>
										<span> Does a kit come with my class?</span>

										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										Yes, all classes, whether online or in person come with a
										starter kit. Typically, these kits are enough to get you
										through 10-20 clients.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										<span> What are my refund options?</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										Once your kit has been mailed to you, there are no refund
										options available. ALL classes you will receive your kit
										PRIOR to your Live or Hybrid class, as we want you to be
										able to read through some material and come to class
										prepared for questions and procedures.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>
										<span> When is payment due?</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										For all on-line & Hybrid classes as soon as payment is
										received you will be given access to your online class and
										kit will be mailed out priority mail to address you specify.
										All LIVE classes payment is due at time of registration.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>
										<span> What is your cancellation policy?</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										Our policy makes all payments non-refundable and final, but
										can be transferable.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>
										<span>
											{" "}
											Will we receive a certification of completion for all
											classes we register for?
										</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										If you have fulfilled the requirements of the class, yes.
										All classes you receive a certification for. (Note: We do
										sell pdf version of our classes separately for those that
										are interested, but no certification comes with those).
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="5">
									<Accordion.Header>
										<span> Do we need a model?</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										Yes, even if you are taking the online classes, you will
										need a live model to practice on. Most classes require a
										test and/or videos/pictures of completed work.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="6">
									<Accordion.Header>
										<span> What if we have questions?</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										We are available via email, text or phone call during
										regular business hours. We train many people across the U.S.
										so we do ask for your patience in returning your phone call
										or emails.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="7">
									<Accordion.Header>
										<span> IS there a discount offered at all?</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										Some of our classes offer discounts if you take more than
										one class, there is a 10% discount on any future class you
										take, and there are times where we do a refer a friend
										discount.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="8">
									<Accordion.Header>
										<span> Do you travel?</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										What are the requirements? Yes, we can travel to you. We
										typically require a minimum number of students taking the
										same classes in order to NOT charge a travel fee of hotel,
										gas etc. The more people you have in a class, the more we
										can save you!
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="9">
									<Accordion.Header>
										<span>
											{" "}
											I’m interested in an apprenticeship for Esthetician, how
											do I go about that?
										</span>
										<i className="fa fa-plus"></i>
									</Accordion.Header>
									<Accordion.Body>
										We offer Apprenticeship for Esthetician in our Traverse City
										location only. Please contact us for availability and more
										information!
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
