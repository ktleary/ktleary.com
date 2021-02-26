import React from "react";
import { CodeHelmet } from "./helmet";
import { always, compose, prop, toLower } from "ramda";
import styled from "styled-components";
import RepoLinks, { repos } from "./repo-links";
import Projects from "./projects";

const CodeContainer = styled.div`
  color: rgba(255, 255, 255, 0.78);
  margin: 32px auto;
  max-width: 600px;
`;

const currentTargetName = (e) => prop("currentTarget", e).getAttribute("name");
const lowerCurrentTargetName = compose(toLower, currentTargetName);

const handleClick = (e) => {
  const url = prop("url", repos[lowerCurrentTargetName(e)]);
  return url && window.open(url);
};

const Code = always(
  <CodeContainer data-testid="code-container">
    <CodeHelmet />
    <RepoLinks handleClick={handleClick} />
    <Projects />
  </CodeContainer>
);

export default Code;
