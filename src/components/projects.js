import React from "react";
import styled from "styled-components";
import MorIcon from "./app-icons/MorIcon";
import Twit2NitIcon from "./app-icons/Twit2NitIcon";
import AlerterIcon from "./app-icons/AlerterIcon";
import InvidilinkIcon from "./app-icons/InvidilinkIcon";
import { GenericLinkButton, GitHubButton, SourceHutButton } from "./buttons";
import { LabelIos, LabelOpenFin, LabelOpenSource, LabelWeb } from "./labels";

const projectData = [
  {
    name: "Mor",
    description:
      "Mor is the social calendar platform that lets you create and share events with friends.",
    repoUrl: null,
    siteUrl: null,
    ios: true,
    web: true,
    openfin: false,
    opensource: false,
  },
  {
    name: "Alerter",
    description:
      "Alerter displays real-time price target matches for traders at a capital markets bank.",
    repoUrl: null,
    siteUrl: null,
    ios: false,
    web: false,
    openfin: true,
    opensource: false,
  },
  {
    name: "twit2nit",
    description:
      "View Twitter links and users on a known good Nitter instance.",
    repoUrl: "https://sr.ht/~djlooop/twit2nit/",
    siteUrl: "https://twit2nit.xyz",
    ios: false,
    web: true,
    openfin: false,
    opensource: true,
  },
  {
    name: "invidi.link",
    description:
      "Convert YouTube links to invidious and redirect to a good instance.",
    repoUrl: "https://sr.ht/~djlooop/invidi.link/",
    siteUrl: "https://invidi.link",
    ios: false,
    web: true,
    openfin: false,
    opensource: true,
  },
  {
    name: "Termite Viewer",
    description:
      "Termite Viewer uses Natural Language Processing (NLP) to extract and analyze content from user-supplied URLs. ",
    repoUrl: "https://git.sr.ht/~djlooop/termite.moe",
    siteUrl: "https://termite.moe",
  },
  {
    name: "Hegel",
    description:
      "Hegel app guides users through the Hegelian Dialectic by asking for  1)Concept: The idea you want to evolve. 2) Negation: What the original concept is not. 3) Synthesis: An idea which encompasses both the original and its negation.",
    repoUrl: "https://git.sr.ht/~djlooop/hegel",
    siteUrl: "https://stringtalk.org/hegel",
  },
  {
    name: "Genstar",
    description:
      "Genstar is a web-based tool for interactively creating story lines including plot, conflict type, characters, character attributes and story setting. Click on any of part of the story line to replace it with a randomly generated replacement.",
    repoUrl: "https://git.sr.ht/~djlooop/genstr",
    siteUrl: "https://stringtalk.org/genstar/",
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
  padding: 0 2vw;
  background: #212121;
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
  background: #212121;
  border-radius: 0.75rem;
  border: 1px solid #424242;
  display: flex;
  flex-direction: row;
  margin: 16px 16px;
  padding: 0;
  height: 12vh;
  padding: 1.5rem;
  width: 33vw;
  box-shadow: 0px 2px 3px rgba(255, 255, 255, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Add transition properties */

  &:hover {
    box-shadow: 0px 6px 9px rgba(255, 255, 255, 0.2); /* Adjust shadow on hover */
    transform: translateY(-4px); /* Elevate the container on hover */
  }
`;
const ProjectDetails = styled.div`
  display: flex;
  margin: 8px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 444px) {
    justify-content: center;
  }
  padding-bottom: 24px;
  background: #212121;
`;

const ProjectTitle = styled.h3`
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  font-size: 24px;
  font-weight: 700;
  display: flex;
  margin: 0;
  padding-left: 16px;

  letter-spacing: -0.3px;
`;

const ProjectDescription = styled.div`
  font-size: 16px;
  height: 100%;
  margin: 0 0;
  padding: 0 16px;
  line-height: 1.25;
  letter-spacing: -0.15px;
  margin-top: 4px;
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

const ProjectIconWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 8px;
  width: 4vw;
`;

const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const LabelRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 8px;
  align-items: center;
  margin-top: 4px;
  padding-left: 16px;
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

const AppIcons = {
  twit2nit: <Twit2NitIcon />,
  Mor: <MorIcon />,
  Alerter: <AlerterIcon />,
  "invidi.link": <InvidilinkIcon />,
};

const Project = ({
  name,
  description,
  repoUrl,
  siteUrl,
  ios,
  web,
  openfin,
  opensource,
}) => (
  <ProjectContainer>
    <ProjectIconWrapper>{AppIcons[name]}</ProjectIconWrapper>
    <ProjectContentWrapper>
      <ProjectTitle>{name}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <LabelRow>
        {ios && <LabelIos />}
        {web && <LabelWeb />}
        {openfin && <LabelOpenFin />}
        {opensource && <LabelOpenSource />}
      </LabelRow>
    </ProjectContentWrapper>
  </ProjectContainer>
);

const Projects = () => (
  <ProjectsContainer>
    <ProjectsSection>Apps built with ❤️</ProjectsSection>
    <ProjectDetails>
      {projectData.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </ProjectDetails>
  </ProjectsContainer>
);

export default Projects;

/*
 <ProjectLinks>
        {repoUrl && (
          <ProjectLinkButton name={name} linkType="repoUrl" url={repoUrl} />
        )}
        {siteUrl && (
          <ProjectLinkButton name={name} linkType="siteUrl" url={siteUrl} />
        )}
      </ProjectLinks>
      */
