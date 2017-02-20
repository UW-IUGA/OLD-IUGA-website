import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Elections from "./components/Elections";
import NotFound from "./components/NotFound";



const Routes = (props) => (
	<Router {...props} >
		<Route path="/">
			<IndexRoute component={Home} />
			<Route path="/about" component={About} />
			<Route path="/events" component={Events}>
				<Route path=":unit" component={Events} />
			</Route>
			<Route path="/elections" component={Elections}>
				<Route path=":year" component={Elections} />
			</Route>
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
);

export default Routes;
