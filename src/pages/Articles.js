import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";

function Articles() {
	const [posts, setPosts] = useState([]);
	useEffect(async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await response.json();
		console.log(data);
		setPosts(data);
	}, []);
	return (
		<>
			<h1 className="title">
				Feel free to read all of our not so random articles.
			</h1>
			<section className="section">
				{posts.map((post) => {
					return <ArticleCard key={post.id} {...post} />;
				})}
			</section>
		</>
	);
}

export default Articles;
