import { useRouter } from "next/router";
import styles from "../../styles/Video.module.css";
import Modal from "react-modal";
Modal.setAppElement("#__next");

export default function Video() {
	const router = useRouter();
	console.log(router.query);
	return (
		<div>
			video page {router.query.videoId}
			<Modal
				isOpen={true}
				contentLabel="Watch the video"
				onRequestClose={() => router.back()}
				overlayClassName={styles.overlay}
			>
				<div>Modal Body</div>
			</Modal>
		</div>
	);
}
