const commentsReducer = (state = {}, action) => {
	switch (action.type) {
		case "DISPLAY_COMMENTS":
			return { ...state, ...action.payload };
		case "ADD_COMMENT":
			return {
				...state,
				comments: [...state.comments, action.payload],
			};
		default: {
			return state;
		}
	}
};

export default commentsReducer;
