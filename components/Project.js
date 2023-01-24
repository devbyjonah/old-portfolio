import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Project.module.css";

export default function Project({ link, image, title, description, darkMode }) {
	const theme = darkMode ? "text-light" : "text-dark";
	return (
		<Link href={link} className={styles.card}>
			<Image
				src={image}
				className={styles.projectImg}
				alt="project image"
				width={144}
				height={200}
			/>
			<h2 className={theme}>
				{title} <span>-&gt;</span>
			</h2>
			<p className={theme}>{description}</p>
		</Link>
	);
}
