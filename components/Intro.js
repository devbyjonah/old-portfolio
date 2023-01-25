import Image from "next/image";
import profilePicture from "../public/jonahFinal.png";
import Wave from "react-wavify";

export default function Intro() {
	return (
		<>
			<div
				style={{ marginTop: 100 + "px", height: 1024 + "px" }}
				className="container-fluid"
			>
				<div className="row h-100">
					<div className="col-2 d-none d-lg-block"></div>
					<div className="col position-relative">
						<div className="w-100 d-flex flex-column flex-sm-row justify-content-center align-items-center mt-5">
							<div className="">
								<Image
									width={320}
									height={213}
									src={profilePicture}
									alt="A picture of me!"
									className="img-thumbnail rounded-circle p-1"
								/>
							</div>
							<div className="mt-3 mt-sm-auto mb-auto ms-5">
								<span className="fw-lighter p-1">
									Hello! My name is
									<h2 className="fs-1 fw-light">
										Jonah&nbsp;Wagner.
									</h2>
								</span>
								<span className="fw-lighter p-1">
									I am a creative Software Engineer&nbsp;with
								</span>
								<h2 className="fs-1 fw-light p-1">
									a passion for learning...
								</h2>
							</div>
						</div>
						<div className="m-3 mt-5"></div>
					</div>
					<div className="col-2 d-none d-lg-block"></div>
					<Wave
						fill="rgb(99, 156, 233)"
						paused={false}
						options={{
							height: 20,
							amplitude: 20,
							speed: 0.15,
							points: 3,
						}}
					/>
				</div>
			</div>
		</>
	);
}
