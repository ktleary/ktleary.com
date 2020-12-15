import React from "react";
import styled from "styled-components";

const CodeContainer = styled.div`
  margin: 10vh 8px 0 8px;
  color: rgba(255, 255, 255, 0.78);
`;

const CodeTitle = styled.h2`
  color: rgba(255, 255, 255, 0.87);
  font-family: sans-serif;
  font-size: 3vw;
  font-weight: normal;
`;

const FeaturedTitle = styled.h3`
  font-weight: normal;
`;

const FeaturedContent = styled.div``;

export default function Code() {
  return (
    <CodeContainer>
      <CodeTitle>SourceHut</CodeTitle>
      <CodeTitle>GitHub</CodeTitle>
      <CodeTitle>Featured Projects</CodeTitle>
      <FeaturedTitle>invidilink</FeaturedTitle>
      <FeaturedContent>
        <p>
          invidilink is an open-source React tool used to convert URLs into
          invidious links.
        </p>
        <p>site: https://invidi.link</p>
        <p>code: https://sr.ht/djloop/sentitextarea</p>
      </FeaturedContent>
      <FeaturedTitle>SentiTextArea</FeaturedTitle>
      <FeaturedContent>
        <p>
          SentiTextArea is an open-source React component which analyzes
          sentiment as users type
        </p>
        <p>site: https://invidi.link</p>
        <p>code: https://sr.ht/djloop/sentitextarea</p>
      </FeaturedContent>
    </CodeContainer>
  );
}
