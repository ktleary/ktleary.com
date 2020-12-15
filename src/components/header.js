import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  align-items: center;
  color: rgba(255, 255, 255, 0.76);
  font-family: sans-serif;
  font-size: 7vmin;
  font-weight: normal;
  margin: 24px auto 0 auto;
  padding: 0;
`;

const TitleLink = styled.a`
  text-decoration: none;
  &:hover: {
    color: rgba(255, 255, 255, 0.66);
  }
  &:visited: {
    color: rgba(255, 255, 255, 0.66);
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
        <Title data-testid="header-title">ktleary</Title>
      </TitleLink>
    </TitleContainer>
  );
}
