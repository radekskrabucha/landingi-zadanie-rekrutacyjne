import React from "react";
import { Link } from "react-router-dom";
import headerStyles from "./Header.module.css";

function Header() {
	const { header, nav, logo, navList, navItem } = headerStyles;
	return (
		<header className={header}>
			<nav className={nav}>
				<Link to="/">
					<h2 className={logo}>notSoRandomBlog</h2>
				</Link>
				<ul className={navList}>
					<li className={navItem}>
						<Link to="/">Home</Link>
					</li>
					<li className={navItem}>
						<Link to="/articles">Articles</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
