import React, { useState } from "react";
import Comment from "../Comment/Comment";
import { useDispatch } from "react-redux";
import { addComment } from "../../../redux/actions";

import commentSectionStyles from "./CommentSection.module.css";

const CommentSection = ({ comments, id }) => {
	const { form, inputContainer, label, input, textarea } = commentSectionStyles;
	const [comment, setComment] = useState({ name: "", email: "", comment: "" });
	const dispatch = useDispatch();
	const postComment = async (e) => {
		e.preventDefault();
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/comments",
			{
				method: "POST",
				body: JSON.stringify({
					name: comment.name,
					body: comment.comment,
					email: comment.email,
					postId: parseInt(id),
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}
		);
		const data = await response.json();
		dispatch(addComment(data));
		setComment({ name: "", email: "", comment: "" });
	};
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setComment({ ...comment, [name]: value });
	};
	return (
		<section className="section">
			<h2 className="subtitle">Not so random comments</h2>
			{comments &&
				comments.map((comment) => <Comment {...comment} key={comment.id} />)}
			<form className={form} onSubmit={(e) => postComment(e)}>
				<div className={inputContainer}>
					<label className={label} htmlFor="name">
						Name
					</label>

					<input
						className={input}
						required
						type="text"
						id="name"
						name="name"
						value={comment.name}
						onChange={handleChange}
					/>
				</div>
				<div className={inputContainer}>
					<label className={label} htmlFor="email">
						E-mail
					</label>
					<input
						className={input}
						required
						type="email"
						id="email"
						name="email"
						value={comment.email}
						onChange={handleChange}
					/>
				</div>
				<div className={inputContainer}>
					<label className={label} htmlFor="comment">
						Comment
					</label>
					<textarea
						className={textarea}
						cols="50"
						required
						id="comment"
						name="comment"
						value={comment.comment}
						onChange={handleChange}
					/>
				</div>
				<button className="btn" type="submit">
					Add comment
				</button>
			</form>
		</section>
	);
};

export default CommentSection;
