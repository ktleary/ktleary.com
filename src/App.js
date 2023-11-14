import { prop } from "ramda";
import React, { useState } from "react";
import styled from "styled-components";
import { Backdrop } from "./Backdrop";
import { OverlayProvider } from "./OverlayContext";
import About from "./components/about";
import Code from "./components/code";
import Contact from "./components/contact";
import Header from "./components/header";
import { HomeHelmet } from "./components/helmet";
import Landing from "./components/landing";
import ProfileLinks from "./components/profile-links";
import ProjectCard from "./components/project-card";
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
    <OverlayProvider>
      <AppContainer>
        <HomeHelmet />
        <Header handleViews={handleViews} />
        <ProfileLinks handleViews={handleViews} view={view} />
        {view === views.landing && <Landing />}
        {view === views.about && <About />}
        {view === views.projects && <Code />}
        {view === views.contact && <Contact />}
        <Backdrop />
        <ProjectCard />
      </AppContainer>
    </OverlayProvider>
  );
}

export default App;
