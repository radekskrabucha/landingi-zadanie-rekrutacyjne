import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard/ArticleCard";

function Home() {
	const posts = useSelector((state) => state.articles.articles);
	return (
		<>
			<h1 className="title">
				Welcome at not so random blog.
				<br />
				Check out our newest not so random articles.
			</h1>
			<section className="section">
				{posts &&
					posts
						.filter((post) => post.id < 11)
						.map((post) => {
							return <ArticleCard key={post.id} {...post} />;
						})}
			</section>
			<Link className="btn" to="/articles">
				See more not so random articles
			</Link>
		</>
	);
}

export default Home;
