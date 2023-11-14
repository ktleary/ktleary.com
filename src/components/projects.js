import React from "react";
import styled from "styled-components";
import { useOverlay } from "../OverlayContext";
import AppIcons from "./app-icons/AppIcons";
import { GenericLinkButton, GitHubButton, SourceHutButton } from "./buttons";
import { LabelIos, LabelOpenFin, LabelOpenSource, LabelWeb } from "./labels";
import whatsAppShare from "./assets/mor/whatsapp-share.png";
import socialprofile from "./assets/mor/social-profile.jpg";
import homescreen from "./assets/mor/homescreen.jpg";
import library from "./assets/mor/library.jpg";
import alerter from "./assets/alerter/alerter.png";
import twit2nitDefault from "./assets/twit2nit/twit2nit-default.png";
import twit2nitList from "./assets/twit2nit/twit2nit-list.png";
import twit2nitNitter from "./assets/twit2nit/twit2nit-nitter.png";
import invidilinkDefault from "./assets/invidilink/invidilink-default.png";
import invidilinkList from "./assets/invidilink/invidilink-list.png";
import invidilinkInvidious from "./assets/invidilink/invidilink-invidious.png";
import red4uDefault from "./assets/red4u/red4u-default.png";
import red4uList from "./assets/red4u/red4u-list.png";
import red4uViewInstance from "./assets/red4u/red4u-viewinstance.png";
import seatgeekHome from "./assets/seatgeek/seatgeek-home.png";
import unitedplans from "./assets/optum/optum-united-plans.png";
import unitedtotals from "./assets/optum/optum-united-totals.png";
import squeebles from "./assets/squeebles/squeebles.png";
import squeeblesDetail from "./assets/squeebles/squeebles-detail.png";

const projectData = [
  {
    name: "Mor Life",
    description: "Discover events with friends.",
    repoUrl: null,
    siteUrl: null,
    ios: true,
    web: true,
    openfin: false,
    opensource: false,
    screenshots: [
      {
        src: homescreen,
        alt: "Mor Life Homescreen",
        caption: "Mor Life Homescreen",
        title: "Day View",
        imageType: "mobile",
      },
      {
        src: library,
        alt: "Mor Life Library",
        caption: "Mor Life Library",
        title: "Library",
        imageType: "mobile",
      },
      {
        src: socialprofile,
        alt: "Social Profile",
        caption: "Social Profile",
        title: "Social Profile",
        imageType: "mobile",
      },
      {
        src: whatsAppShare,
        //"./assets/mor/whatsapp-share.png", // <-- could I add a required image here?
        alt: "Share on WhatsApp",
        caption: "Share on WhatsApp",
        title: "Share on WhatsApp",
        imageType: "mobile",
      },
    ],
  },
  {
    name: "SeatGeek Home",
    description: "2019",
    repoUrl: null,
    siteUrl: null,
    ios: false,
    web: true,
    openfin: false,
    opensource: false,
    screenshots: [
      {
        src: seatgeekHome,
        alt: "SeatGeek Home",
        caption: "SeatGeek Home",
        title: "Home Screen",
        imageType: "desktop",
      },
    ],
  },
  {
    name: "Alerter",
    description: "Real-time price alerts for bond traders.",
    repoUrl: null,
    siteUrl: null,
    ios: false,
    web: false,
    openfin: true,
    opensource: false,
    screenshots: [
      {
        src: alerter,
        alt: "Alerter",
        caption: "Alerter",
        title: "Alerter with toast notification",
        imageType: "desktop",
      },
    ],
  },
  {
    name: "UnitedHealth AARP",
    description: "UnitedHealth's AARP Medicare app.",
    repoUrl: null,
    siteUrl: null,
    ios: false,
    web: true,
    openfin: false,
    opensource: false,
    screenshots: [
      {
        src: unitedplans,
        alt: "UnitedHealth AARP",
        caption: "UnitedHealth AARP Plans",
        title: "Plans",
        imageType: "mobile",
      },
      {
        src: unitedtotals,
        alt: "UnitedHealth AARP",
        caption: "UnitedHealth AARP Totals",
        title: "Details",
        imageType: "mobile",
      },
    ],
  },
  {
    name: "Squeebles",
    description: "A viral video site created for Cogo Labs.",
    repoUrl: null,
    siteUrl: null,
    ios: false,
    web: true,
    openfin: false,
    opensource: false,
    screenshots: [
      {
        src: squeebles,
        alt: "Squeebles",
        caption: "Squeebles",
        title: "Squeebles Home",
        imageType: "desktop",
      },
      {
        src: squeeblesDetail,
        alt: "Squeebles",
        caption: "Squeebles",
        title: "Detail view",
        imageType: "desktop",
      },
    ],
  },
  {
    name: "twit2nit",
    description: "View Twitter links on a live Nitter instance.",
    repoUrl: "https://sr.ht/~djlooop/twit2nit/",
    siteUrl: "https://twit2nit.xyz",
    ios: false,
    web: true,
    openfin: false,
    opensource: true,
    screenshots: [
      {
        src: twit2nitDefault,
        alt: "twit2nit",
        caption: "twit2nit",
        title: "twit2nit",
        imageType: "mobile",
      },
      {
        src: twit2nitList,
        alt: "twit2nit",
        caption: "twit2nit",
        title: "twit2nit live instance list",
        imageType: "mobile",
      },
      {
        src: twit2nitNitter,
        alt: "twit2nit",
        caption: "twit2nit",
        title: "View on Nitter",
        imageType: "mobile",
      },
    ],
  },
  {
    name: "invidi.link",
    description: "View YouTube links on a live Invidious instance.",
    repoUrl: "https://sr.ht/~djlooop/invidi.link/",
    siteUrl: "https://invidi.link",
    ios: false,
    web: true,
    openfin: false,
    opensource: true,
    screenshots: [
      {
        src: invidilinkDefault,
        alt: "invidi.link",
        caption: "invidi.link",
        title: "invidi.link",
        imageType: "desktop",
      },
      {
        src: invidilinkList,
        alt: "invidi.link",
        caption: "invidi.link",
        title: "invidi.link live instance list",
        imageType: "desktop",
      },
      {
        src: invidilinkInvidious,
        alt: "invidi.link",
        caption: "invidi.link",
        title: "View on Invidious",
        imageType: "desktop",
      },
    ],
  },
  {
    name: "red4u",
    description: "View reddit links on libreddit or teddit.",
    repoUrl: "https://sr.ht/~djlooop/red4u/",
    siteUrl: "https://red4u.xyz",
    ios: false,
    web: true,
    openfin: false,
    opensource: true,
    screenshots: [
      {
        src: red4uDefault,
        alt: "red4u",
        caption: "red4u",
        title: "red4u",
        imageType: "desktop",
      },
      {
        src: red4uList,
        alt: "red4u",
        caption: "red4u",
        title: "red4u live instance list",
        imageType: "desktop",
      },
      {
        src: red4uViewInstance,
        alt: "red4u",
        caption: "red4u",
        title: "View on libreddit",
        imageType: "desktop",
      },
    ],
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
  padding: 16px;
  width: 100%;
  @media (min-width: 800px) {
    width: 33%;
  }
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
  flex-direction: column;
  justify-content: center;
  margin-right: 8px;
  width: 128px;
  min-width: 88px;
  background: #212121;
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

const Project = (projectDetails) => {
  const overlayContext = useOverlay();
  const { name, description, ios, web, openfin, opensource } = projectDetails;

  if (!overlayContext) {
    return null;
  }

  const { openOverlay } = overlayContext || {};
  const handleOpenOverlay = () => {
    openOverlay(projectDetails);
  };

  return (
    <ProjectContainer onClick={handleOpenOverlay}>
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
};

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
