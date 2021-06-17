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
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`;

function App() {
  const [view, setView] = useState(views.landing);
  const handleViews = (event) => setView(prop("name", event.target));

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
