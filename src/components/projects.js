import React from "react";
import styled from "styled-components";
import { GenericLinkButton, GitHubButton, SourceHutButton } from "./buttons";

const projectData = [
  {
    name: "invidi.link",
    description: "Convert URLs into invidious links. Convert URLs into invidious links.",
    repoUrl: "https://sr.ht/~djlooop/invidi.link/",
    siteUrl: "https://invidi.link",
  },
  {
    name: "Sentiment Text Area",
    description: "See a sentiment indicator while typing.",
    repoUrl: "https://git.sr.ht/~djlooop/senti-textarea",
    siteUrl: null,
  },
];

const GenericLinkIcon = styled(GenericLinkButton)`

  color: transparent;
  fill: rgba(255, 255, 255, 0.78);
  height: 20px;
  width: 20px;
  &:hover{
    fill: rgba(255, 255, 255, 1.0);
  };
`;

const SourceHutIcon = styled(SourceHutButton)`
  color: rgba(255, 255, 255, 0.78);
  height: 18px;
  width: 18px;
  &:hover{
    color: rgba(255, 255, 255, 1.0);
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
  background: rgba(39, 39, 39, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px;
  flex: 1;
  padding: 0;
`;

const ProjectDetails = styled.div`
  display: flex;
  margin: 8px;

`;

const ProjectTitle = styled.h3`
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  font-size: 2vh;
  font-weight: normal;
  display: flex;
  height: 32px;
  line-height: 32px;
  margin: 0;
  padding-left: 16px;
  vertical-align: middle;
`;

const ProjectDescription = styled.div`
  font-size: 12px;
  height: 100%;
  margin: 0 0;
  padding: 8px 16px;
`;

const ProjectLinks = styled.div`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 4px 16px;
  &:hover{
    fill: pink};
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
