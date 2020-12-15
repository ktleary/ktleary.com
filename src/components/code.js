import React from "react";
import styled from "styled-components";
import { GitHubButton, SourceHutButton } from "./buttons";

const SourceHutIcon = styled(SourceHutButton)`
  color: rgba(255, 255, 255, 0.78);
  height: 18px;
  width: 18px;
  :hover {
    color: rgba(255, 255, 255, 0.78);
  }
  &:active {
    color: rgba(255, 255, 255, 0.78);
  }
  &:visited {
    color: rgba(255, 255, 255, 0.78);
  }
  &:visited:hover {
    color: rgba(255, 255, 255, 0.78);
  }
`;

const GitHubIcon = styled(GitHubButton)`
  color: rgba(255, 255, 255, 0.66);
  height: 18px;
  width: 18px;
  :hover {
    color: rgba(255, 255, 255, 0.78);
  }
  &:active {
    color: rgba(255, 255, 255, 0.78);
  }
  &:visited {
    color: rgba(255, 255, 255, 0.78);
  }
  &:visited:hover {
    color: rgba(255, 255, 255, 0.78);
  }
`;

const CodeContainer = styled.div`
  margin: 32px auto;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.78);
`;

const CodeTitle = styled.h2`
  display: flex;
  font-family: sans-serif;
  font-size: 2vw;
  font-weight: normal;
  margin: 16px auto;
  text-align: center;
  vertical-align: middle;
`;

const FeaturedTitle = styled.h3`
  font-weight: normal;
  margin: 8px 0;
`;

const FeaturedContent = styled.div``;

const Cell = styled.div`
  align-items: center;
  display: flex;
  line-height: 24px;
  padding: 4px;
  text-align: center;
  vertical-align: middle;
`;

const Links = styled.div`
  margin: auto;
  text-align: left;
  width: 128px;
`;

const LinkRow = styled.div`
  color: rgba(255, 255, 255, 0.66);
  display: flex;
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

function RepoLink(props) {
  const { name, handleClick } = props;
  return (
    <LinkRow name={name} onClick={handleClick}>
      <Cell>{name === "GitHub" ? <GitHubButton /> : <SourceHutButton />}</Cell>
      <Cell>{name}</Cell>
    </LinkRow>
  );
}

const Projects = styled.div``;

const repos = {
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

export default function Code() {
  const handleClick = (e) => {
    if (!e || !e.currentTarget) return;
    const repoName = e.currentTarget.getAttribute("name");
    if (repoName) {
      const url = repos[repoName.toLowerCase()].url;
      window.open(url);
    }
  };

  return (
    <CodeContainer>
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
      <Projects>
        <CodeTitle>Projects</CodeTitle>
        <FeaturedTitle>invidilink</FeaturedTitle>

        <FeaturedContent>
          <p>
            invidilink is an open-source React tool used to convert URLs into
            invidious links.
          </p>
          <p>site: https://invidi.link</p>
          <p>code: https://sr.ht/djloop/sentitextarea</p>
        </FeaturedContent>
        <FeaturedTitle>SentiTextArea</FeaturedTitle>
        <FeaturedContent>
          <p>
            SentiTextArea is an open-source React component which analyzes
            sentiment as users type
          </p>
          <p>site: https://invidi.link</p>
          <p>code: https://sr.ht/djloop/sentitextarea</p>
        </FeaturedContent>
      </Projects>
    </CodeContainer>
  );
}
