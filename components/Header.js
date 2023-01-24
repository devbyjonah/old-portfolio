import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header({ darkMode, darkModeButton }) {
	return (
		<Navbar
			className={
				darkMode
					? "opacity-75 text-bg-dark"
					: "opacity-75 text-bg-light"
			}
			fixed="top"
			expand="xl"
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

// export default function Header({ linksArray, logoImage }) {
// 	const links = linksArray.map((linkTuple, index) => {
// 		let link = linkTuple[0];
// 		let label = linkTuple[1];

// 		return (
// 			<Link className="navLink" key={index} href={link}>
// 				{label}
// 			</Link>
// 		);
// 	});

// 	return (
// 		<header className={`${styles.header} ${styles.glass}`}>{links}</header>
// 	);
// }
