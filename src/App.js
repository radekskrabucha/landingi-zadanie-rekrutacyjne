import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Error404 from "./pages/Error404";

import Layout from "./components/Layout/Layout/Layout";
import Loading from "./components/Loading/Loading";
import ScrollToTop from "./components/ScrollToTop";

import { useSelector, useDispatch } from "react-redux";
import {
	toggleLoading,
	setArticles,
	setComments,
	setUsers,
} from "./redux/actions";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const App = () => {
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();

	useEffect(async () => {
		dispatch(toggleLoading());

		let [responsePosts, reponseComments, reponseUsers] = await Promise.all([
			fetch(`${BASE_URL}posts`),
			fetch(`${BASE_URL}comments`),
			fetch(`${BASE_URL}users`),
		]);
		const dataPosts = await responsePosts.json();
		const dataComments = await reponseComments.json();
		const dataUsers = await reponseUsers.json();

		dispatch(setArticles(dataPosts));
		dispatch(setComments(dataComments));
		dispatch(setUsers(dataUsers));

		dispatch(toggleLoading());
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<Router>
			<ScrollToTop />
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
};

export default App;
