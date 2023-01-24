import Image from "next/image";

export default function Intro() {
	return (
		<>
			<div
				style={{ marginTop: 100 + "px", height: 1024 + "px" }}
				className="container-fluid"
			>
				<div className="row h-100 w-100">
					<div className="col-2 d-none d-lg-block"></div>
					<div className="col position-relative">
						<div className="w-100 d-flex justify-content-center mt-5">
							<div>
								<Image
									width={244}
									height={244}
									src="/profile.png"
									alt="A picture of me!"
									className="float-start rounded-circle p-1"
								/>
							</div>
							<div className="mt-auto mb-auto ms-md-5">
								<span className="fw-lighter p-1">
									Hello! My name is
									<h2 className="fs-1 fw-light">
										Jonah Wagner.
									</h2>
								</span>
								<span className="fw-lighter p-1">
									I am a creative Software Engineer with
								</span>
								<h2 className="fs-1 fw-light p-1">
									a passion for learning...
								</h2>
							</div>
						</div>
						<div className="m-3 mt-5">
							<h1 className="fw-bolder">
								I am a full stack web developer using the MERN
								stack to build web apps.
							</h1>
						</div>
					</div>
					<div className="col-2 d-none d-lg-block"></div>
				</div>
			</div>
		</>
	);
}
