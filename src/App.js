import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Error404 from "./pages/Error404";

import Layout from "./components/Layout/Layout/Layout";
import ArticleCard from "./components/ArticleCard/ArticleCard";
function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/articles">
						<Articles />
					</Route>
					<Route path="/articles/:id">
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
