import React from "react";
import styled from "styled-components";
import RepoLinks, { repos } from "./repo-links";
import Projects from "./projects";

const CodeContainer = styled.div`
  color: rgba(255, 255, 255, 0.78);
  margin: 32px auto;
  max-width: 600px;

`;

export default function Code() {
  const handleClick = (e) => {
    try {
      const name = e.target.getAttribute("name").toLowerCase();
      const url = repos[name.toLowerCase()].url;
      window.open(url);
    } catch {
      return;
    }
  };

  return (
    <CodeContainer>
      <RepoLinks handleClick={handleClick} />
      <Projects />
    </CodeContainer>
  );
}
