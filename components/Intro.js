import Image from "next/image";
import profilePicture from "../public/jonahFinal.png";
import Wave from "react-wavify";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

export default function Intro() {
	let { darkMode } = useContext(DarkModeContext);
	return (
		<div style={{ marginTop: 100 + "px" }} className="container-fluid h-25">
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
					fill={
						darkMode ? "url(#gradientDark)" : "url(#gradientLight)"
					}
					paused={false}
					options={{
						height: 20,
						amplitude: 40,
						speed: 0.15,
						points: 3,
					}}
				>
					<defs>
						<linearGradient
							id="gradientLight"
							gradientTransform="rotate(90)"
						>
							<stop offset="10%" stopColor="rgb(102, 162, 243)" />
							<stop offset="90%" stopColor="rgb(248, 249, 250)" />
						</linearGradient>
						<linearGradient
							id="gradientDark"
							gradientTransform="rotate(90)"
						>
							<stop offset="10%" stopColor="rgb(99, 156, 233)" />
							<stop offset="90%" stopColor="rgb(34, 37, 41)" />
						</linearGradient>
					</defs>
				</Wave>
			</div>
		</div>
	);
}
