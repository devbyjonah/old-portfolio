import Wave from "react-wavify";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

export default function Middle() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div
			className="w-100 min-vh-100"
			style={{ backgroundColor: "rgb(102, 162, 243)" }}
		>
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
