import React from "react";
import styled from "styled-components";
import { GenericLinkButton, GitHubButton, SourceHutButton } from "./buttons";

const projectData = [
  {
    name: "invidi.link",
    description:
      "Invidilinks is a mobile-first tool used to convert URLs into invidio.us links. It works by fetching real-time instances data and rewriting the supplied url in the browser. It also provides an option to supply the url as a parameter.",
    repoUrl: "https://sr.ht/~djlooop/invidi.link/",
    siteUrl: "https://invidi.link",
  },
  {
    name: "Genstar",
    description:
      "Genstar is a web-based tool for interactively creating story lines including plot, conflict type, characters, character attributes and story setting. Click on any of part of the story line to replace it with a randomly generated replacement.",
    repoUrl: "https://git.sr.ht/~djlooop/genstr",
    siteUrl: "https://stringtalk.org/genstar/",
  },
  {
    name: "Days",
    description:
      "Information about current, past and present days including day of the week, year, as well as moon phase and sun sign.",
    repoUrl: "https://git.sr.ht/~djlooop/days",
    siteUrl: "https://stringtalk.org/days",
  },
  {
    name: "Summer of Letters",
    description:
      "Summer of Letters is a tool for converting letters and words to numbers and sums.",
    repoUrl: "https://git.sr.ht/~djlooop/summer-of-letters",
    siteUrl: "https://stringtalk.org/summer-of-letters",
  },
  {
    name: "Sentitext",
    description:
      "Sentiment Text Area is a React component which shows a sentiment score as you type. The NLP uses the AFINN word list approach to analysis.",
    repoUrl: "https://git.sr.ht/~djlooop/senti-textarea",
    siteUrl: "https://stringtalk.org/sentitext/",
  },
];

const GenericLinkIcon = styled(GenericLinkButton)`
  color: transparent;
  fill: rgba(255, 255, 255, 0.78);
  height: 20px;
  width: 20px;
  &:hover {
    fill: rgba(255, 255, 255, 1);
  }
`;

const SourceHutIcon = styled(SourceHutButton)`
  color: rgba(255, 255, 255, 0.78);
  height: 18px;
  width: 18px;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const GitHubIcon = styled(GitHubButton)`
  color: rgba(255, 255, 255, 0.66);
  height: 18px;
  width: 18px;
`;

const ProjectsContainer = styled.div`
  margin-top: 16px;
  padding: 0;
`;
const ProjectsSection = styled.h2`
  color: rgba(255, 255, 255, 0.78);
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 32px 0;
  padding: 16px 0 0 0;
  text-align: center;
`;
const ProjectContainer = styled.div`
  background: rgba(44, 44, 46, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 4px;
  min-width: 284px;
  max-width: 284px;
  width: 100%;
  flex: 1;
  padding: 0;
`;

const ProjectDetails = styled.div`
  display: flex;
  margin: 8px;
  flex-wrap: wrap;
  justify-content: left;
  @media (max-width: 444px) {
    justify-content: center;
  }
  padding-bottom: 24px;
`;

const ProjectTitle = styled.h3`
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  font-size: 16px;
  font-weight: normal;
  display: flex;
  margin: 0;
  padding: 8px;
  padding-left: 16px;
  vertical-align: middle;
`;

const ProjectDescription = styled.div`
  font-size: 14px;
  height: 100%;
  margin: 0 0;
  padding: 8px 16px;
`;

const ProjectLinks = styled.div`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 4px 16px;
`;

const LinkContainer = styled.div`
  cursor: pointer;
  margin-right: 8px;
  text-decoration: none;
`;

function ProjectLinkButton(props) {
  const { linkType, url } = props;
  const handleClick = (e) => {
    window.open(url);
  };
  switch (linkType) {
    case "repoUrl":
      return url.indexOf("sr.ht") > -1 ? (
        <LinkContainer title="SourceHut" onClick={handleClick}>
          <SourceHutIcon />
        </LinkContainer>
      ) : (
        <LinkContainer onClick={handleClick}>
          <GitHubIcon onClick={handleClick} />
        </LinkContainer>
      );
    case "siteUrl":
      return (
        <LinkContainer title="Demo" onClick={handleClick}>
          <GenericLinkIcon />
        </LinkContainer>
      );
    default:
      return (
        <LinkContainer onClick={handleClick}>
          <GenericLinkIcon />
        </LinkContainer>
      );
  }
}

function Project(props) {
  const { name, description, repoUrl, siteUrl } = props;

  return (
    <ProjectContainer>
      <ProjectTitle>{name}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLinks>
        {repoUrl && (
          <ProjectLinkButton name={name} linkType="repoUrl" url={repoUrl} />
        )}
        {siteUrl && (
          <ProjectLinkButton name={name} linkType="siteUrl" url={siteUrl} />
        )}
      </ProjectLinks>
    </ProjectContainer>
  );
}

export default function Projects(props) {
  return (
    <ProjectsContainer>
      <ProjectsSection>Projects</ProjectsSection>
      <ProjectDetails>
        {projectData.map((project) => (
          <Project {...project} key={project.name} />
        ))}
      </ProjectDetails>
    </ProjectsContainer>
  );
}
