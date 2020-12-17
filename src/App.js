import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import ProfileLinks from "./components/profile-links";
import About from "./components/about";
import Code from "./components/code";
import Landing from "./components/landing";
const views = Object.freeze({
  about: "about",
  code: "code",
  landing: "landing"
});

const AppContainer = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`;

function App() {
  const [view, setView] = useState(views.landing);
  const handleViews = (e) => {
    if (!e || !e.target) return;
    setView(e.target.name);
  };

  return (
    <AppContainer>
      <Header />
      <ProfileLinks handleViews={handleViews} view={view} />
      {
        {
          about: <About />,
          code: <Code />,
          landing: <Landing />
        }[view]
      }
    </AppContainer>
  );
}

export default App;
