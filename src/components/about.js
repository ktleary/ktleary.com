import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  color: rgba(255, 255, 255, 0.87);
  margin: 32px auto;
  max-width: 500px;
  padding: 0 16px;
`;

const AboutLink = styled.a`
  cursor: pointer;
  color: rgba(3, 218, 198, 0.76);
  text-decoration: none;
  &:hover {
    color: rgba(3, 218, 198, 1);
  }
  &:visited {
    color: rgba(3, 218, 198, 0.76);
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
        &nbsp;with over 15 years of experience working on the net. Much of this
        time has been spent working with startups as an independent contractor
        serving clients in the financial, healthcare and e-commerce spaces. I am
        a web standards and open-source enthusiast and am a member of the &nbsp;
        <AboutLink href="https://www.w3.org/community/schemaorg/">
          W3C schema.org Working Group
        </AboutLink>
      </p>
      <p>
        On the front-end, I am currently using React and have lead projects in
        Angular, as well as enterprise upgrades from legacy codebases. My roots
        are in the dot-com days where I helped build a successful e-learning
        company, DigitalMed. I am a graduate of Skidemore College and a native
        of Greater Boston, though my work brings me&nbsp;
        <AboutLink href="https://nomadlist.com/@kethle">
          far and wide
        </AboutLink>{" "}
        these days.
      </p>
      <p>Thanks for stopping by.</p>

      <p>Kevin</p>
    </AboutContainer>
  );
}
