import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Header.module.css";

export default function Header({ linksArray, logoImage }) {
	const links = linksArray.map((linkTuple, index) => {
		let link = linkTuple[0];
		let label = linkTuple[1];

		return (
			<Link className="navLink" key={index} href={link}>
				{label}
			</Link>
		);
	});

	return (
		<header className={`${styles.header} ${styles.glass}`}>{links}</header>
	);
}
