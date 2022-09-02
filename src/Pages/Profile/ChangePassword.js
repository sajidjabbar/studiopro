import React, { useEffect, useState } from "react";
import $ from "jquery";
import "../../assets/css/changePassword.css";

const ChangePassword = () => {
	const [disabled, setDisabled] = useState(true);
	useEffect(() => {}, []);
	function handleGameClick() {
		setDisabled(!disabled);
	}
	const stopSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<>
			{/* my profile starts here */}
			<section className="myprofile changePassword">
				<div className="container">
					<div className="row">
						<div className="col-lg-10">
							<div className="profile-heading-wrapper">
								<h4>Change Password</h4>
							</div>
							<div className="profile-form-wrapper">
								<form
									className={!disabled ? "password_form" : null}
									action=""
									onSubmit={stopSubmit}
								>
									<div className="form-group row">
										<div className="col-lg-6">
											<label htmlFor="">Current Password</label>
											<input
												type="text"
												className="form-control"
												defaultValue="John"
												disabled={disabled}
											/>
										</div>
										<div className="col-lg-6">
											<label htmlFor="">New Password</label>
											<input
												type="text"
												className="form-control"
												defaultValue="John"
												disabled={disabled}
											/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-lg-6">
											<label htmlFor="">Re-enter New Password</label>
											<input
												type="text"
												className="form-control"
												defaultValue="example@mail.com"
												disabled={disabled}
											/>
										</div>
										{/* <div className="col-lg-6">
											<label htmlFor="">Phone</label>
											<input
												type="text"
												className="form-control"
												defaultValue="+00 123 456 789"
												disabled={disabled}
											/>
										</div> */}
									</div>
									<div className="form-group row">
										<div className="col-lg-6">
											<div className="btn-wrapper">
												<button onClick={handleGameClick} className="btn">
													{disabled ? "Edit" : "Save Changes"}
												</button>
											</div>
										</div>
										<div className="col-lg-6"></div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* my profile ends here */}
		</>
	);
};

export default ChangePassword;
