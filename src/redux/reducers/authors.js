const authorsReducer = (state = {}, action) => {
	switch (action.type) {
		case "DISPLAY_AUTHORS":
			return { ...state, ...action.payload };
		default: {
			return state;
		}
	}
};

export default authorsReducer;
