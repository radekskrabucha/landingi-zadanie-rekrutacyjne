const commentsReducer = (state = {}, action) => {
	switch (action.type) {
		case "DISPLAY_COMMENTS":
			return { ...state, ...action.payload };
		case "ADD_COMMENT":
			return {
				...state,
				comments: [...state.comments, action.payload],
			};
		case "ADD_FAVOURITE_COMMENT":
			const newComments = state.comments.map((comment) => {
				if (comment.id === action.payload) {
					return { ...comment, favourite: true };
				}
				return comment;
			});
			return { ...state, comments: newComments };
		default: {
			return state;
		}
	}
};

export default commentsReducer;
