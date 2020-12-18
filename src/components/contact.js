import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { AngelListButton, CopyButton, EmailButton } from "./buttons";
import copyToClipboard from "../util";

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

const ContactContainer = styled.div`
  margin-top: 32px;
  max-width: 600;
`;

const contactData = [
  {
    name: "AngelList",
    url: "https://angel.co/u/ktleary",
    icon: <AngelListIcon />,
  },
  { name: "Email", url: "mailto:kevin@ktleary.com", icon: <EmailIcon /> },
];

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

const Links = styled.div`
  margin: auto;
  text-align: left;
  width: 128px;
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

function ContactLink(props) {
  const { name } = props;
  const [showCopy, setShowCopy] = useState(true);
  const [copyBackground, setCopyBackground] = useState("transparent");
  const handleShowCopy = (e) => {
    setShowCopy(true);
  };
  const handleHideCopy = (e) => {
    setCopyBackground("transparent");
    setShowCopy(false);
  };
  const handleCopyEmail = async (e) => {
    e.stopPropagation();
    try {
      const address = contactData
        .find((contact) => contact.name === "Email")
        ["url"].split(":")[1];
      copyToClipboard(address);
      setCopyBackground("rgba(3, 218, 198, 0.66)");
      setShowCopy(false);
      setTimeout(() => setCopyBackground("transparent"), 333);
    } catch (err) {
      const { name, message } = err;
      console.log(name, message);
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
    >
      <Cell>
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
          <CopyIcon />
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
