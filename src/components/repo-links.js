import React from "react";
import styled from "styled-components";
import { GitHubButton, SourceHutButton } from "./buttons";

const SourceHutIcon = styled(SourceHutButton)`
  color: rgba(255, 255, 255, 0.78);
  height: 18px;
  width: 18px;
`;

const GitHubIcon = styled(GitHubButton)`
  color: rgba(255, 255, 255, 0.66);
  height: 18px;
  width: 18px;
`;

export const repos = {
  sourcehut: {
    name: "SourceHut",
    url: "https://sr.ht/~djlooop",
    icon: <SourceHutIcon />,
  },
  github: {
    name: "GitHub",
    url: "https://github.com/ktleary",
    icon: <GitHubIcon />,
  },
};

const Links = styled.div`
  margin: auto;
  text-align: left;
  width: 128px;
`;

const LinkRow = styled.div`
  color: rgba(255, 255, 255, 0.66);
  display: flex;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin: 16px auto;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    color: rgba(255, 255, 255, 0.87);
    padding-left: 2px;
  }
`;
const Cell = styled.div`
  align-items: center;
  display: flex;
  line-height: 24px;
  padding: 4px;
  text-align: center;
  vertical-align: middle;
`;

function RepoLink(props) {
  const { name, handleClick } = props;
  return (
    <LinkRow name={name} onClick={handleClick}>
      <Cell>{name === "GitHub" ? <GitHubButton /> : <SourceHutButton />}</Cell>
      <Cell>{name}</Cell>
    </LinkRow>
  );
}

export default function RepoLinks(props) {
  const { handleClick } = props;
  return (
    <Links>
      {Object.keys(repos).map((repo) => (
        <RepoLink
          name={repos[repo].name}
          url={repos[repo].url}
          handleClick={handleClick}
          key={repo}
        />
      ))}
    </Links>
  );
}
