import React from "react";
import loadingStyles from "./Loading.module.css";
import loading from "../../assets/loading.svg";

function Loading() {
	const { container, logo } = loadingStyles;
	return (
		<div className={container}>
			<h2 className="title">Loading...</h2>
			<img src={loading} alt="" />
			<h1 className={logo}>notSoRandomBlog</h1>
		</div>
	);
}

export default Loading;
