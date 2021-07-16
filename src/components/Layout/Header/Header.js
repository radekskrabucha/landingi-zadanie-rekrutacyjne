import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<h2>This is header</h2>
			<Link to="/">Home</Link>
			<Link to="/article/1">Article</Link>
		</header>
	);
}

export default Header;
