import React from "react";
import Comment from "./Comment";

function CommentSection({ comments }) {
	return (
		<section className="section">
			<h2 className="subtitle">Not so random comments</h2>
			{comments.map((comment) => (
				<Comment {...comment} key={comment.id} />
			))}
			<h3>
				////
				<br />
				add comment here
			</h3>
		</section>
	);
}

export default CommentSection;
