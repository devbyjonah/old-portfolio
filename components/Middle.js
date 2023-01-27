import Wave from "react-wavify";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

export default function Middle() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div
			className="min-vh-100 container-fluid"
			style={{ backgroundColor: "rgb(102, 162, 243)" }}
		>
			<div className="row">
				<div className="col-xxl-2 col-1 d-none d-md-block"></div>
				<div className="col p-5">
					<h2 className="p-1">
						-&gt; I&apos;m a Full-stack Web Developer
					</h2>
					<p className="mb-5">
						with a focus on the MERN tech stack (MongoDB, Express,
						React, and Node), functioning in the industry for 5+
						years. I build scalable and elegant web applications
						that create an equilibrium between user needs and
						business goals.
					</p>
					<h2 className="p-1">
						-&gt; Currently looking to join a product team.
					</h2>
					<p className="mb-5">
						I am highly intersted in any opportunity to join a
						collaborative team that prioritizes creating accessible
						web applications to enhance people&apos;s lives. Connect
						with me to discuss how my skills and experience can
						contribute to your organization&apos;s mission.
					</p>
				</div>
				<div className="col-xxl-2 col-1 d-none d-md-block"></div>
			</div>

			<Wave
				fill={darkMode ? "url(#gradientDark)" : "url(#gradientLight)"}
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
						<stop offset="90%" stopColor="rgb(102, 162, 243)" />
					</linearGradient>
					<linearGradient
						id="gradientDark"
						gradientTransform="rotate(90)"
					>
						<stop offset="10%" stopColor="rgb(102, 162, 243)" />
						<stop offset="90%" stopColor="rgb(102, 162, 243)" />
					</linearGradient>
				</defs>
			</Wave>
		</div>
	);
}
