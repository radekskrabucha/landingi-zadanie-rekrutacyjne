import React from "react";
import { useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard/ArticleCard";

const Articles = () => {
	const posts = useSelector((state) => state.articles.articles);

	return (
		<>
			<h1 className="title">
				Feel free to read all of our not so random articles.
			</h1>
			<section className="section">
				{posts &&
					posts.map((post) => {
						return <ArticleCard key={post.id} {...post} />;
					})}
			</section>
		</>
	);
};

export default Articles;
