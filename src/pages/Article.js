import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../components/Comments/CommentSection";

function Article() {
	const { id } = useParams();
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);
	const [author, setAuthor] = useState({});

	useEffect(async () => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		const data = await response.json();
		console.log(data);
		setPost(data);
	}, []);
	useEffect(async () => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}/comments`
		);
		const data = await response.json();
		setComments(data);
	}, []);
	useEffect(async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.json();
		const author = data.find((author) => author.id === 1);
		console.log(author);
		setAuthor(author);
	}, []);
	return (
		<>
			<h3>Post by: {author.name}</h3>
			<h1 className="title">{post.title}</h1>
			<p className="article">{post.body}</p>
			<CommentSection comments={comments} />
		</>
	);
}

export default Article;
