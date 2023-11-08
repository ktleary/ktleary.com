import React, { useState } from "react";
import styled from "styled-components";
import { prop } from "ramda";
import { HomeHelmet } from "./components/helmet";
import Header from "./components/header";
import ProfileLinks from "./components/profile-links";
import About from "./components/about";
import Code from "./components/code";
import Contact from "./components/contact";
import Landing from "./components/landing";
import { views } from "./constants";

const AppContainer = styled.div`
  background: #212121;
  min-height: 100vh;
  height: 100%;
  margin: 0;
  padding: 0;
`;

function App() {
  const [view, setView] = useState(views.landing);
  const handleViews = (event) => {
    let targetName =
      prop("name", event.target) || prop("name", event.currentTarget);
    setView(targetName);
  };

  return (
    <AppContainer>
      <HomeHelmet />
      <Header handleViews={handleViews} />
      <ProfileLinks handleViews={handleViews} view={view} />
      {view === views.landing && <Landing />}
      {view === views.about && <About />}
      {view === views.code && <Code />}
      {view === views.contact && <Contact />}
    </AppContainer>
  );
}

export default App;
