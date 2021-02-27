import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { always, compose, concat, curry, toLower } from "ramda";
import {
  isActive,
  makeKey,
  idxLessLinkLength,
  getToLower,
  getName,
  mapIndexed,
} from "../fp";
import { Link } from "react-router-dom";
import { linkData } from "../constants";
const id = always(nanoid());

// -- Styles -------

const ProfileLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const ProfileRouterLink = styled(Link)`
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
  color: rgba(235, 235, 245, 0.6);
`;
const LinkContainer = styled.span``;

const Slash = ({ idx }) =>
  idxLessLinkLength(idx, linkData) ? (
    <SlashStyle>&nbsp;/&nbsp;</SlashStyle>
  ) : null;
const getDataTestId = (name) => concat("profile-link-", name);
const getDataTestIdLower = compose(getDataTestId, toLower);
const getLowerLinkName = compose(getToLower, getName);
const getNameToLower = compose(toLower, getName);
const getTestId = compose(getDataTestIdLower, getName);

const mapLinkData = (view, handleViews, data, idx) => (
  <ProfileLink
    idx={idx}
    view={view}
    handleViews={handleViews}
    link={data}
    key={makeKey(id, idx)}
  />
);

const curriedMapLinkData = curry(mapLinkData);
const mapLinkDataHandler = (view, handler) => curriedMapLinkData(view, handler);

const ProfileLink = ({ view, handleViews, link, idx }) => (
  <LinkContainer>
    <ProfileRouterLink
      to={getLowerLinkName(link)}
      name={getNameToLower(link)}
      onClick={handleViews}
      active={isActive(getName(link), view)}
      data-testid={getTestId(link)}
    >
      {getName(link)}
    </ProfileRouterLink>
    <Slash idx={idx} />
  </LinkContainer>
);

const ProfileLinks = ({ handleViews, view }) => (
  <ProfileLinksContainer>
    {mapIndexed(mapLinkDataHandler(view, handleViews), linkData)}
  </ProfileLinksContainer>
);
export default ProfileLinks;
