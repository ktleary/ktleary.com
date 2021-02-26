import React from "react";
import { CodeHelmet } from "./helmet";
import { always, compose, prop } from "ramda";
import styled from "styled-components";
import RepoLinks, { repos } from "./repo-links";
import Projects from "./projects";
import { lowerCurrentTargetName } from "../fp";

const CodeContainer = styled.div`
  color: rgba(255, 255, 255, 0.78);
  margin: 32px auto;
  max-width: 600px;
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
