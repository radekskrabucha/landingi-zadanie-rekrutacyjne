import loadingReducer from "./loading";
import commentsReducer from "./comments";
import articlesReducer from "./articles";
import authorsReducer from "./authors";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
	loading: loadingReducer,
	comments: commentsReducer,
	articles: articlesReducer,
	authors: authorsReducer,
});

export default rootReducer;
