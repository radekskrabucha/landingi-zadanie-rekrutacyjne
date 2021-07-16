import React, { useEffect, useState } from "react";

function Home() {
	const [posts, setPosts] = useState([]);
	useEffect(async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await response.json();
		console.log(data);
		setPosts(data);
	}, []);
	return (
		<div>
			<h1>Hello from home page!</h1>
		</div>
	);
}

export default Home;
