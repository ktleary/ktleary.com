import { always, compose, prop } from "ramda";
import React from "react";
import styled from "styled-components";
import { lowerCurrentTargetName } from "../fp";
import { CodeHelmet } from "./helmet";
import Projects from "./projects";
import RepoLinks, { repos } from "./repo-links";

const CodeContainer = styled.div`
  color: rgba(255, 255, 255, 0.78);
  min-height: 100vh;
  height: 100%;
  margin: 32px auto;
`;

const getUrl = (name) => prop("url", repos[name]);
const urlOpener = compose(window.open, getUrl);

const handleClick = (e) => {
  const name = lowerCurrentTargetName(e);
  return urlOpener(name);
};

const Code = always(
  <CodeContainer data-testid="code-container">
    <CodeHelmet />
    <RepoLinks handleClick={handleClick} />
    <Projects />
  </CodeContainer>
);

export default Code;
