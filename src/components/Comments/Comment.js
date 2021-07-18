import React from "react";
import commenstStyles from "./Comment.module.css";

const Comments = ({ body, email, name }) => {
	const { section, authorEmail, author, comment } = commenstStyles;
	return (
		<article className={section}>
			<h4 className={authorEmail}>{email}</h4>
			<h3 className={author}>{name}</h3>
			<p className={comment}>{body}</p>
		</article>
	);
};

export default Comments;
