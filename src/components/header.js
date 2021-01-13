import React from "react";
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

const TitleLink = styled.a`
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

export default function Header() {
  return (
    <TitleContainer>
      <TitleLink href="/" alt="ktleary.com">
        <Title data-testid="header-title">Kevin T Leary</Title>
      </TitleLink>
    </TitleContainer>
  );
}
