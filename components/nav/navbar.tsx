import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { magic } from "../../lib/magic-client";

export default function NavBar() {
	const [username, setUsername] = useState("");
	useEffect(() => {
		async function getUsername() {
			try {
				const { email } = await magic.user.getMetadata();
				if (email) {
					setUsername(email);
					console.log({ email });
				}
			} catch (error) {
				console.log("Error retrieving email:", error);
			}
		}
		getUsername();
	}, []);

	const [showDropdown, setShowDropdown] = useState(false);
	const router = useRouter();

	const handleOnClickHome = (e) => {
		e.preventDefault();
		router.push("/");
	};

	const handleOnClickMyList = (e) => {
		e.preventDefault();
		router.push("/browse/my-list");
	};

	const handleShowDropdown = (e) => {
		e.preventDefault();
		setShowDropdown(!showDropdown);
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
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

				<ul className={styles.navItems}>
					<li className={styles.navItem} onClick={handleOnClickHome}>
						Home
					</li>
					<li className={styles.navItem2} onClick={handleOnClickMyList}>
						My List
					</li>
				</ul>

				<nav className={styles.navContainer}>
					<div>
						<button className={styles.usernameBtn} onClick={handleShowDropdown}>
							<p className={styles.username}>{username}</p>
							<Image
								src="/static/expand_more.svg"
								alt="Expand dropdown"
								width={24}
								height={24}
							/>
						</button>
						{showDropdown && (
							<div className={styles.navDropdown}>
								<div>
									<Link legacyBehavior href="/login">
										<a className={styles.linkName}>Sign Out</a>
									</Link>
									<div className={styles.lineWrapper}></div>
								</div>
							</div>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
}
