import React from "react";
import { Link } from "react-router-dom";
import articleCardStyles from "./ArticleCard.module.css";
import AddFavourite from "../AddFavourite/AddFavourite";

const ArticleCard = ({ id, title, favourite }) => {
	const { article, articleTitle, link, readMore } = articleCardStyles;
	return (
		<Link className={link} to={`/articles/${id}`}>
			<article className={article}>
				<h2 className={articleTitle}>
					<AddFavourite id={id} favourite={favourite} />
					{title}
				</h2>
				<p className={readMore}>
					read article
					<svg
						stroke="currentColor"
						fill="none"
						strokeWidth="2"
						viewBox="0 0 24 24"
						strokeLinecap="round"
						strokeLinejoin="round"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line x1="7" y1="17" x2="17" y2="7"></line>
						<polyline points="7 7 17 7 17 17"></polyline>
					</svg>
				</p>
			</article>
		</Link>
	);
};

export default ArticleCard;
