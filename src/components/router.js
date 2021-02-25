import { BrowserRouter as Switch, Route } from "react-router-dom";

import About from "./about";
import Code from "./code";
import Contact from "./contact";
import Landing from "./landing";

const Routes = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/code">
      <Code />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/">
      <Landing />
    </Route>
  </Switch>
);

export default Routes;
