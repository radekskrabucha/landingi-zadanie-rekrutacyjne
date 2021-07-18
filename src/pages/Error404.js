import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
	return (
		<>
			<h1 className="title">
				Oppss...
				<br />
				Looks like you're being lost
			</h1>
			<Link className="btn" to="/">
				Take me back home
			</Link>
		</>
	);
};

export default Error404;
