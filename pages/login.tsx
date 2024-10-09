import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";

const handleLoginWithEmail = (e) => {
	console.log("click");
	e.preventDefault();
};

export default function Login() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix SignIn</title>
			</Head>
			<header className={styles.header}>
				<div className={styles.headerWrapper}>
					<Link className={styles.logoLink} href="/">
						<div className={styles.logoWrapper}>
							<Image
								src="/static/netflix.svg"
								alt="Netflix logo"
								width={128}
								height={34}
							/>
						</div>
					</Link>
				</div>
			</header>
			<main className={styles.main}>
				<div className={styles.mainWrapper}>
					<h1 className={styles.signinHeader}>Sign In</h1>
					<input
						type="text"
						placeholder="Email address"
						className={styles.emailInput}
					/>
					<p className={styles.userMsg}>Message</p>
					<button onClick={handleLoginWithEmail} className={styles.loginBtn}>
						Sign In
					</button>
				</div>
			</main>
		</div>
	);
}
