import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  margin: 10vh 8px 0 8px;
  color: rgba(255, 255, 255, 0.78);
`;

const AboutText = styled.div`
  color: ${({ textColor }) => textColor || "rgba(255, 255, 255, 0.87)"};
  font-family: sans-serif;
  text-align: center;
  font-size: 5vmin;
  margin: 4px 0;
  padding: 0;
  border-bottom: ${({ borderBottom }) => borderBottom || 0};
`;

const Underline = styled.div`
  background: rgba(255, 138, 101, 0.666);
  height: 2px;
  margin: 14px auto;
  width: 40vmin;
`;

export default function About() {
  return (
    <AboutContainer>
      <AboutText>I build innovative software</AboutText>
      <AboutText>for companies and organizations</AboutText>
      <AboutText>changing the world</AboutText>
      <Underline data-testid="underline" />
    </AboutContainer>
  );
}
