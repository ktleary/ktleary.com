import React from "react";
import styled from "styled-components";
import { always } from "ramda";
import { AboutHelmet } from "./helmet";
const AboutContainer = styled.div`
  color: rgba(255, 255, 255, 0.89);
  font-size: 16px;
  margin: 32px auto;
  max-width: 600px;
  padding: 0 32px;
`;

const Link = styled.a`
  cursor: pointer;
  color: rgba(9, 132, 255, 1);
  text-decoration: none;
  &:hover {
    color: rgba(9, 132, 255, 1);
  }
  &:visited {
    color: rgba(9, 132, 255, 1);
  }
`;

const AboutLink = ({ link, linkText }) => (
  <span>
    <Link href={link}>{linkText}</Link>
  </span>
);

const About = always(
  <AboutContainer>
    <AboutHelmet />
    <p>
      I'm a software developer focused on Javascript, with over 10 years of
      experience working on the net. Much of this time has been spent working
      with small companies serving large clients in the financial, healthcare
      and e-commerce spaces. I am also a web-standards and open-source
      enthusiast and am a member of the{" "}
      <AboutLink
        link="https://www.w3.org/community/schemaorg/"
        linkText="W3C schema.org Community Group"
      />
      .
    </p>
    <p>
      On the front-end, I am currently writing in React and have lead projects
      in Angular, as well as enterprise upgrades from legacy codebases. On the
      back-end, I typically use Node.js and Python.
    </p>
    <p>
      My roots are in writing Javascript and database applications, building a
      successful e-learning company, DigitalMed. I am a graduate of Skidmore
      College and a native of Greater Boston, though I am now based out of New
      York City and my work has brought me far and wide recently.
    </p>
    <p>
      When I'm not working, I enjoy{" "}
      <AboutLink
        link="https://www.allrecipes.com/recipe/142488/amazing-spicy-grilled-shrimp/"
        linkText="cooking"
      />
      , playing acoustic guitar, showing my Scrabble foo, and adding to a
      burgeoning{" "}
      <AboutLink link="https://zettelkasten.de/" linkText="zettelkasten" />.
    </p>
    <p>Thanks for visiting.</p>

    <p>Kevin</p>
  </AboutContainer>
);

export default About;
