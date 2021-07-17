import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import layoutStyles from "./Layout.module.css";

function Layout({ children }) {
	const { container, main } = layoutStyles;
	return (
		<div className={container}>
			<Header />
			<main className={main}>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
