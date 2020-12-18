import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  color: rgba(255, 255, 255, 0.87);
  margin: 32px auto;
  max-width: 500px;
  padding: 0 32px;
`;

const Link = styled.a`
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

const AboutLink = (props) => {
  const { link, linkText } = props;
  return (
    <span>
      {" "}
      <Link href={link}>{linkText}</Link>{" "}
    </span>
  );
};

export default function About() {
  return (
    <AboutContainer>
      <p>
        I'm a web developer and founder of
        <AboutLink link="https://broadcove.io" linkText="Broadcove" />
        with over 15 years of experience working on the net. Much of this time
        has been spent working with startups as an independent contractor
        serving clients in the financial, healthcare and e-commerce spaces. I am
        a web-standards and open-source enthusiast and am a member of the
        <AboutLink
          link="https://www.w3.org/community/schemaorg/"
          linkText="W3C schema.org Working Group"
        />
      </p>
      <p>
        On the front-end, I am currently writing in React and have lead projects
        in Angular, as well as enterprise upgrades from legacy codebases. On the
        back-end, I typically use Node.js and Python and spent several years
        implementing{" "}
        <AboutLink
          link="https://web.archive.org/web/20090123034204/http://170systems.com/"
          linkText="a third party front-end for Oracle Applications"
        />
        .
      </p>
      <p>
        My roots are in writing Javascript and database applications in the
        dot-com days when I helped build a successful e-learning company,
        DigitalMed. I am a graduate of Skidmore College and a native of Greater
        Boston, though I am now based out of New York City and my work has
        brought me
        <AboutLink
          link="https://nomadlist.com/@kethle"
          linkText="far and wide"
        />{" "}
        recently.
      </p>
      <p>
        When I'm not working, I enjoy{" "}
        <AboutLink
          link="https://www.allrecipes.com/recipe/142488/amazing-spicy-grilled-shrimp/"
          linkText="cooking"
        />
        , playing acoustic guitar, showing my Scrabble foo, and adding to a burgeoning{" "}
        <AboutLink link="https://zettelkasten.de/" linkText="zettelkasten" />.
      </p>
      <p>Thanks for visiting.</p>

      <p>Kevin</p>
    </AboutContainer>
  );
}
