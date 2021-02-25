import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeHelmet } from "./components/helmet";
import Header from "./components/header";
import ProfileLinks from "./components/profile-links";
import About from "./components/about";
import Code from "./components/code";
import Contact from "./components/contact";
import Landing from "./components/landing";
import { views } from "./constants";

const AppContainer = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`;

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

function App() {
  const [view, setView] = useState(views.landing);
  const handleViews = (e) => setView(e.target.name || views.landing);

  return (
    <AppContainer>
      <Router>
        <HomeHelmet />
        <Header handleViews={handleViews} />
        <ProfileLinks handleViews={handleViews} view={view} />
        <Routes />
      </Router>
    </AppContainer>
  );
}

export default App;
