export const increment = (num) => {
	return {
		type: "INCREMENT",
		payload: { num },
	};
};

export const decrement = () => {
	return {
		type: "DECREMENT",
	};
};

export const toggleLoading = () => {
	return {
		type: "TOGGLE_LOADING",
	};
};

export const setArticles = (articles) => {
	return {
		type: "DISPLAY_ARTICLES",
		payload: { articles },
	};
};

export const setComments = (comments) => {
	return {
		type: "DISPLAY_COMMENTS",
		payload: { comments },
	};
};

export const setUsers = (users) => {
	return {
		type: "DISPLAY_AUTHORS",
		payload: { users },
	};
};

export const addComment = (comment) => {
	return {
		type: "ADD_COMMENT",
		payload: comment,
	};
};

export const addToFavourite = (id) => {
	return {
		type: "ADD_FAVOURITE",
		payload: id,
	};
};

export const addToFavouriteComment = (id) => {
	return {
		type: "ADD_FAVOURITE_COMMENT",
		payload: id,
	};
};
