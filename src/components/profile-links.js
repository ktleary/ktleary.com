import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { always, compose, concat, toLower } from "ramda";
import {
  isActive,
  makeKey,
  idxLessLinkLength,
  getName,
  mapIndexed,
} from "../fp";
import {
  activeColor,
  activeColorHover,
  inactiveColor,
  inactiveColorHover,
  linkData,
} from "../constants";
const id = always(nanoid());

// -- Helpers ------

const getDataTestId = (name) => concat("profile-link-", toLower(name));
const getTestId = compose(getDataTestId, getName);

// -- Styles -------

const ProfileLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const ProfileRouterLink = styled.a`
  color: ${({ active }) => (active ? activeColor : inactiveColor)};
  cursor: pointer;
  text-decoration: none;
  font-size: 4vmin;
  &:hover {
    color: ${({ active }) => (active ? activeColorHover : inactiveColorHover)};
    text-decoration: none;
  }
`;

const SlashStyle = styled.span`
  font-size: 4vmin;
  color: rgba(235, 235, 245, 0.6);
`;
const LinkContainer = styled.span``;

// Components

const Slash = ({ idx }) =>
  idxLessLinkLength(idx, linkData) ? (
    <SlashStyle>&nbsp;/&nbsp;</SlashStyle>
  ) : null;

const ProfileLink = ({ view, handleViews, link, idx }) => (
  <LinkContainer>
    <ProfileRouterLink
      name={toLower(getName(link))}
      onClick={handleViews}
      active={isActive(getName(link), view)}
      data-testid={getTestId(link)}
    >
      {getName(link)}
    </ProfileRouterLink>
    <Slash idx={idx} />
  </LinkContainer>
);

const mapLinkData = (view, handleViews) => (data, idx) => (
  <ProfileLink
    idx={idx}
    view={view}
    handleViews={handleViews}
    link={data}
    key={makeKey(id, idx)}
  />
);

// ProfileLinks:: (Fx, String) -> String
const ProfileLinks = ({ handleViews, view }) => (
  <ProfileLinksContainer>
    {mapIndexed(mapLinkData(view, handleViews), linkData)}
  </ProfileLinksContainer>
);
export default ProfileLinks;
