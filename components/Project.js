import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Project.module.css";

export default function Project({ link, image, title, description }) {
	return (
		<Link href={link} className={styles.card}>
			<Image
				src={image}
				className={styles.projectImg}
				alt="project image"
				width={144}
				height={200}
			/>
			<h2>
				{title} <span>-&gt;</span>
			</h2>
			<p>{description}</p>
		</Link>
	);
}
