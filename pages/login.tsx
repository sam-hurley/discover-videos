import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
	const [email, setEmail] = useState("");
	const [userMsg, setUserMsg] = useState("");

	const router = useRouter();

	const handleOnChangeEmail = (e) => {
		setUserMsg("");
		console.log("event", e);
		const email = e.target.value;
		setEmail(email);
	};

	const handleLoginWithEmail = (e) => {
		console.log("click");
		e.preventDefault();
		if (email) {
			if (email === "samhurley@gmail.com") {
				router.push("/");
			} else {
				setUserMsg("Something went wrong logging in");
			}
		} else {
			setUserMsg("Please enter valid email address");
		}
	};

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
						onChange={handleOnChangeEmail}
					/>
					<p className={styles.userMsg}>{userMsg}</p>
					<button onClick={handleLoginWithEmail} className={styles.loginBtn}>
						Sign In
					</button>
				</div>
			</main>
		</div>
	);
}
