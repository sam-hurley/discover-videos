import Link from "next/link";
import Card from "./card";
import styles from "./section-cards.module.css";

export default function SectionCards(props: { title: string }) {
	const { title, videos = [], size } = props;
	console.log({ videos });
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.cardWrapper}>
				{videos.map((video, idx) => {
					console.log({ video });
					return (
						<Link key={idx} href={`/video/${video.id}`}>
							<Card key={idx} id={idx} imgUrl={video.imgUrl} size={size} />;
						</Link>
					);
				})}
			</div>
		</section>
	);
}
