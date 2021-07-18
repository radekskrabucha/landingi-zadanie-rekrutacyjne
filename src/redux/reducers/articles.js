const articlesReducer = (state = {}, action) => {
	switch (action.type) {
		case "DISPLAY_ARTICLES":
			return { ...state, ...action.payload };
		case "ADD_FAVOURITE":
			const newArticles = state.articles.map((article) => {
				if (article.id === action.payload) {
					return { ...article, favourite: true };
				}
				return article;
			});
			return { ...state, articles: newArticles };
		default: {
			return state;
		}
	}
};

export default articlesReducer;
