import { useRouter } from "next/router";
import styles from "../../styles/Video.module.css";
import Modal from "react-modal";
Modal.setAppElement("#__next");

export default function Video() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<Modal
				isOpen={true}
				contentLabel="Watch the video"
				onRequestClose={() => router.back()}
				overlayClassName={styles.overlay}
				className={styles.modal}
			>
				<div>Modal Body</div>
			</Modal>
		</div>
	);
}
