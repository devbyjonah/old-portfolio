import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "../styles/components/Header.module.css";

export default function Header() {
	return (
		<Navbar fixed="top" className={styles.nav} expand="sm">
			<Container>
				<Navbar.Brand href="#home">
					<Image
						src="/profile.png"
						alt="logo"
						width={86}
						height={86}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav
						className="w-100 justify-content-end"
						style={{ gap: 50 + "px" }}
					>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#projects">My Work</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
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
