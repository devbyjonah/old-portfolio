import Image from "next/image";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header({ darkMode, darkModeButton }) {
	return (
		<Navbar
			className={darkMode ? "text-bg-dark" : "text-bg-light"}
			fixed="top"
			expand="xl"
			style={{ opacity: 95 + "%" }}
		>
			<Container>
				<Navbar.Brand href="#home">
					<Image
						src="/profile.png"
						alt="logo"
						width={64}
						height={64}
					/>
				</Navbar.Brand>
				{darkModeButton}
				<Navbar.Toggle
					className="text-bg-light"
					aria-controls="basic-navbar-nav"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav
						className="w-100 justify-content-end"
						style={{ gap: 50 + "px" }}
					>
						<Nav.Link
							className="fs-4 fw-light text-reset"
							href="#home"
						>
							Home
						</Nav.Link>
						<Nav.Link
							className="fs-4 fw-light text-reset"
							href="#projects"
						>
							Projects
						</Nav.Link>
						<Nav.Link
							className="fs-4 fw-light text-reset"
							href="#contact"
						>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
