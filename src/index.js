import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App";

import "core-js/stable";
import "regenerator-runtime/runtime";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
