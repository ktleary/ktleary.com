import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { AngelListButton, CopyButton, EmailButton } from "./buttons";
import { copyToClipboard, splitMailto } from "../util";

const AngelListIcon = styled(AngelListButton)`
  color: rgba(255, 255, 255, 0.66);
  height: 24px;
  width: 24px;
`;

const EmailIcon = styled(EmailButton)`
  color: rgba(255, 255, 255, 0.66);
  height: 24px;
  width: 24px;
`;

const CopyIcon = styled(CopyButton)`
  color: rgba(255, 255, 255, 0.66);
  height: 12px;
  width: 12px;
`;

const contactData = [
  {
    name: "AngelList",
    url: "https://angel.co/u/ktleary",
    icon: <AngelListIcon />,
  },
  { name: "Email", url: "mailto:kevin@ktleary.com", icon: <EmailIcon /> },
];

const COPYSTATES = Object.freeze({
  NORMAL: "transparent",
  SUCCESS: "rgba(3, 218, 198, 0.66)",
});

const ContactContainer = styled.div`
  margin-top: 32px;
  max-width: 600;
`;

const Links = styled.div`
  margin: auto;
  text-align: left;
  width: 128px;
`;

const LinkRow = styled.div`
  color: rgba(255, 255, 255, 0.76);
  display: flex;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin: 16px auto;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Cell = styled.div`
  align-items: center;
  display: flex;
  line-height: 24px;
  padding: 4px;
  text-align: center;
  vertical-align: middle;
`;

const EmailContainer = styled.div`
  align-items: center;
  display: flex;
`;

const copyEmail = (contactData) => {
  const address = contactData.find((contact) => contact.name === "Email")[
    "url"
  ];
  const email = splitMailto(address);
  return copyToClipboard(email);
};

function ContactLink(props) {
  const { name } = props;

  const [showCopy, setShowCopy] = useState(false);
  const [copyBackground, setCopyBackground] = useState(COPYSTATES.NORMAL);

  const handleShowCopy = () => {
    setShowCopy(true);
  };

  const handleHideCopy = () => {
    setCopyBackground("transparent");
    setShowCopy(false);
  };

  const handleCopyEmail = async (e) => {
    e.stopPropagation();
    if (copyEmail(contactData)) {
      setCopyBackground(COPYSTATES.SUCCESS);
      setTimeout(() => setCopyBackground(COPYSTATES.NORMAL), 333);
    }
  };

  const handleClick = (e) => {
    try {
      const name = e.currentTarget.getAttribute("name");
      const url = contactData.find((contact) => contact.name === name)["url"];
      window.open(url);
    } catch (e) {
      const { name, message } = e;
      console.log(`${name}: ${message}`);
    }
  };

  return (
    <LinkRow
      name={name}
      onMouseOver={name === "Email" ? handleShowCopy : null}
      onMouseLeave={name === "Email" ? handleHideCopy : null}
      onClick={handleClick}
      data-testid={`link-row-${name}`}
    >
      <Cell data-testid={`link-cell-${name}`}>
        {name === "AngelList" ? (
          <AngelListButton />
        ) : (
          <EmailContainer>
            <EmailButton />
          </EmailContainer>
        )}
      </Cell>
      <Cell>{name}</Cell>
      {name === "Email" && showCopy && (
        <Cell
          onClick={handleCopyEmail}
          style={{ background: copyBackground, borderRadius: 16 }}
        >
          <CopyIcon title="Copy" data-testid="copy-icon" />
        </Cell>
      )}
    </LinkRow>
  );
}

export default function Contact(props) {
  return (
    <ContactContainer>
      <Links>
        {contactData.map((contact) => (
          <ContactLink name={contact.name} url={contact.url} key={nanoid()} />
        ))}
      </Links>
    </ContactContainer>
  );
}
