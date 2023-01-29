import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

export default function Success() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<main
			className={
				(darkMode ? "text-bg-dark" : "text-bg-light") +
				" min-vh-100 d-flex align-items-center justify-content-center"
			}
		>
			<div>
				<h1 className="text-center">Thanks for your message!</h1>
				<p className="text-center">I&apos;ll get back to you ASAP</p>
			</div>
		</main>
	);
}
