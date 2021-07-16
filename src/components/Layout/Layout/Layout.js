import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import layoutStyles from "./Layout.module.css";

function Layout({ children }) {
	const { container } = layoutStyles;
	return (
		<div className={container}>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
