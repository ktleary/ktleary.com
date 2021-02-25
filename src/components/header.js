import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 16px auto 8px auto;
  padding: 0;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 0.89);
  font-size: 7vmin;
  font-weight: normal;
  margin: 0;
  padding: 0;
  padding-top: 16px;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  &:hover: {
    color: rgba(255, 255, 255, 0.87);
  }
  &:visited: {
    color: rgba(255, 255, 255, 0.87);
  }

  &:visited:hover {
    color: rgba(255, 255, 255, 0.87);
  }
  &:active {
    color: rgba(255, 255, 255, 0.87);
  }
`;

const Header = ({ handleViews }) => (
  <TitleContainer>
    <TitleLink onClick={handleViews} name={'landing'} to="/" alt="ktleary.com">
      <Title data-testid="header-title">Kevin T Leary</Title>
    </TitleLink>
  </TitleContainer>
);

export default Header;
