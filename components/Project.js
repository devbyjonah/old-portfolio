import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Project.module.css";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

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
			<h2 className={inter.className}>
				{title} <span>-&gt;</span>
			</h2>
			<p className={inter.className}>{description}</p>
		</Link>
	);
}
