import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  margin: 72px 0 0 0;
  color: rgba(255, 255, 255, 0.78);
`;

const LandingText = styled.div`
  color: ${({ textColor }) => textColor || "rgba(255, 255, 255, 0.87)"};
  text-align: center;
  font-size: 5vmin;
  margin: 4px 0;
  padding: 0;
  border-bottom: ${({ borderBottom }) => borderBottom || 0};
`;

const Underline = styled.div`
  background: rgba(255, 159, 10, 1);
  height: 2px;
  margin: 16px auto;
  width: 40vmin;
`;

const Landing = () => (
  <AboutContainer>
    <LandingText>I build innovative software</LandingText>
    <LandingText>for companies and organizations</LandingText>
    <LandingText>changing the world</LandingText>
    <Underline data-testid="underline" />
  </AboutContainer>
);

export default Landing;
