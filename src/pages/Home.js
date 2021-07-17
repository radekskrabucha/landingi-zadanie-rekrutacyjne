import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard/ArticleCard";

function Home() {
	const [posts, setPosts] = useState([]);
	useEffect(async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await response.json();
		setPosts(data);
	}, []);
	return (
		<>
			<h1 className="title">
				Welcome at not so random blog.
				<br />
				Check out our newest not so random articles.
			</h1>
			<section className="section">
				{posts
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
