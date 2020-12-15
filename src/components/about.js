import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  color: rgba(255, 255, 255, 0.87);
  margin: auto;
  max-width: 600px;
  padding: 8px 16px;
`;

const AboutLink = styled.a`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.87);
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 0.87);
  }
  &:visited {
    color: rgba(255, 255, 255, 0.87);
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <p>
        I'm a web developer and founder of&nbsp;
        <AboutLink alt="Broadcove" href="https://broadcove.io">
          Broadcove
        </AboutLink>
        &nbsp;with over 15 years of experience working on the net. Much of
        this time has been spent working with startups as an independent
        contractor serving clients in the financial, healthcare and e-commerce
        spaces.
      </p>
      <p>Thanks for stopping by.</p>
      <p>Kevin Leary</p>
    </AboutContainer>
  );
}
