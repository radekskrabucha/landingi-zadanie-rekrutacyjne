import React from "react";
import commenstStyles from "./Comment.module.css";

import AddFavourite from "../../AddFavourite/AddFavourite";
import { addToFavouriteComment } from "../../../redux/actions";

const Comments = ({ body, email, name, id, favourite }) => {
	const { section, authorEmail, author, comment } = commenstStyles;
	return (
		<article className={section}>
			<AddFavourite
				id={id}
				favourite={favourite}
				action={addToFavouriteComment}
			/>
			<h4 className={authorEmail}>{email}</h4>
			<h3 className={author}>{name}</h3>
			<p className={comment}>{body}</p>
		</article>
	);
};

export default Comments;
