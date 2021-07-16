import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Error404 from "./pages/Error404";

import Layout from "./components/Layout/Layout/Layout";
function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/article/:id">
						<Article />
					</Route>
					<Route path="*">
						<Error404 />
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
