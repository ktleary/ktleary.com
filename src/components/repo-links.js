import { keys, map } from "ramda";
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
  github: {
    name: "GitHub",
    url: "https://github.com/ktleary",
    icon: <GitHubIcon />,
  },
  sourcehut: {
    name: "SourceHut",
    url: "https://sr.ht/~djlooop",
    icon: <SourceHutIcon />,
  },
};

const Links = styled.div`
  margin: auto;
  text-align: left;
  width: 128px;
`;

const LinkRow = styled.div`
  color: rgba(255, 255, 255, 0.76);
  display: flex;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin: 16px auto;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    color: rgba(255, 255, 255, 1);
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
    <LinkRow
      data-testid={`repo-link-${name}`}
      name={name}
      onClick={handleClick}
    >
      <Cell>{name === "GitHub" ? <GitHubButton /> : <SourceHutButton />}</Cell>
      <Cell>{name}</Cell>
    </LinkRow>
  );
}
const makeRepoLink = (handleClick) => (repo, i) =>
  (
    <RepoLink
      name={repos[repo].name}
      url={repos[repo].url}
      handleClick={handleClick}
      key={repo}
    />
  );

const RepoLinks = ({ handleClick }) => (
  <Links>{map(makeRepoLink(handleClick), keys(repos))}</Links>
);

export default RepoLinks;
