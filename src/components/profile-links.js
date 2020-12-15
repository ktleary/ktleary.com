import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const ProfileLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 18px 40px;
`;

const ProfileLink = styled.a`
  color: ${({ linkColor }) =>
    linkColor ? "rgba(255, 138, 101, 0.87)" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 4vmin;
  transition: color 0.1s;
  &:hover {
    color: ${({ linkColor }) =>
      linkColor ? "rgba(255, 138, 101, 0.87)" : "rgba(255, 255, 255, 1.0)"};
    text-decoration: none;
  }
`;

const SlashStyle = styled.span`
  font-size: 4vmin;
  color: rgba(255, 255, 255, 0.6);
`;

const slash = () => <SlashStyle>&nbsp;/&nbsp;</SlashStyle>;

const LinkContainer = styled.span``;

const linkData = [
  { name: "About", url: "https://angel.co/u/ktleary", color: "#ffeb3b" },
  { name: "Code", url: "https://github.com/ktleary", color: "#2196f3" },
  { name: "Contact", url: "mailto:kevin@ktleary.com", color: "#4caf50" },
];

export default function ProfileLinks(props) {
  const { handleViews, view } = props;
  return (
    <ProfileLinksContainer>
      {linkData.map((link, i) => (
        <LinkContainer key={nanoid()}>
          <ProfileLink
            name={link.name.toLowerCase()}
            onClick={handleViews}
            linkColor={link.name.toLowerCase() === view}
          >
            {link.name}
          </ProfileLink>
          {i < linkData.length - 1 ? slash() : null}
        </LinkContainer>
      ))}
    </ProfileLinksContainer>
  );
}
