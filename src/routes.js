import React from "react";
import {Route, IndexRoute} from "react-router";

import Layout from "./components/Layout";
import About from "./components/About";
import Events from "./components/Events";
import Elections from "./components/Elections";
import NotFound from "./components/NotFound";

const Routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={About} />
    <Route path="/events" component={Events}>
      <Route path=":unit" component={Events} />
    </Route>
    <Route path="/elections" component={Elections}>
      <Route path=":year" component={Elections} />
    </Route>
    <Route path="/waiver" component={() => window.location.href="https://goo.gl/forms/AQqEp64JYHqN0cCw1"} />
    <Route path="/waiver2" component={() => window.location.href="https://goo.gl/forms/pyAWvJEJOQP00UxV2"} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default Routes;
