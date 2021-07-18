import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentSection from "../components/Comments/CommentSection";
import AddFavourite from "../components/AddFavourite/AddFavourite";

const Article = () => {
	const { id } = useParams();
	const posts = useSelector((state) => state.articles.articles);
	const authors = useSelector((state) => state.authors.users);
	const allComments = useSelector((state) => state.comments.comments);

	const post = posts && posts.find((post) => post.id == id);
	const author =
		authors && post && authors.find((author) => author.id === post.userId);
	const comments =
		allComments &&
		post &&
		allComments.filter((comments) => comments.postId === post.id);

	if (!post) {
		return (
			<>
				<h1 className="title">No such article...</h1>
				<Link className="btn" to="/articles">
					Go to articles
				</Link>
			</>
		);
	}

	return (
		<>
			<AddFavourite canClick id={post.id} favourite={post.favourite} />
			<h3>Written by: {author && author.name}</h3>
			<h1 className="title">{post && post.title}</h1>
			<p className="article">{post && post.body}</p>
			{comments && <CommentSection comments={comments} id={id} />}
		</>
	);
};

export default Article;
