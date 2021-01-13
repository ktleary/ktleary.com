import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const linkData = [
  { name: "About", url: "https://angel.co/u/ktleary", color: "#ffeb3b" },
  { name: "Code", url: "https://github.com/ktleary", color: "#2196f3" },
  { name: "Contact", url: "mailto:kevin@ktleary.com", color: "#4caf50" },
];

const ProfileLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const ProfileLink = styled.a`
  color: ${({ active }) =>
    active ? "rgba(255.0, 149.0, 0.0, 1.0)" : "rgba(235.0, 235.0, 245.0, 0.6)"};
  cursor: pointer;
  text-decoration: none;
  font-size: 4vmin;
  &:hover {
    color: ${({ active }) =>
      active ? "rgba(255.0, 149.0, 0.0, 1.0)" : "rgba(255, 255, 255, 1.0)"};
    text-decoration: none;
  }
`;

const SlashStyle = styled.span`
  font-size: 4vmin;
  color: rgba(235.0, 235.0, 245.0, 0.6);
`;

const slash = () => <SlashStyle>&nbsp;/&nbsp;</SlashStyle>;

const LinkContainer = styled.span``;

const id = nanoid();

const ProfileLinks = ({ handleViews, view }) => (
  <ProfileLinksContainer>
    {linkData.map((link, i) => (
      <LinkContainer key={`link-${id}-${i}`}>
        <ProfileLink
          name={link.name.toLowerCase()}
          onClick={handleViews}
          active={link.name.toLowerCase() === view}
          data-testid={`profile-link-${link.name.toLowerCase()}`}
        >
          {link.name}
        </ProfileLink>
        {i < linkData.length - 1 ? slash() : null}
      </LinkContainer>
    ))}
  </ProfileLinksContainer>
);
export default ProfileLinks;
