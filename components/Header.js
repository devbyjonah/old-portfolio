import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
	return (
		<Navbar fixed="top" expand="sm">
			<Container>
				<Navbar.Brand href="#home">
					<Image
						src="/profile.png"
						alt="logo"
						width={64}
						height={64}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav
						className="w-100 justify-content-end bg-gradient h-100"
						style={{ gap: 50 + "px" }}
					>
						<Nav.Link className="fs-4" href="#home">
							Home
						</Nav.Link>
						<Nav.Link className="fs-4" href="#projects">
							My Work
						</Nav.Link>
						<Nav.Link className="fs-4" href="#contact">
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
