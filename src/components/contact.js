import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { AngelListButton, EmailButton } from "./buttons";

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

function ContactLink(props) {
  const { name, handleClick } = props;
  return (
    <LinkRow name={name} onClick={handleClick}>
      <Cell>
        {name === "AngelList" ? <AngelListButton /> : <EmailButton />}
      </Cell>
      <Cell>{name}</Cell>
    </LinkRow>
  );
}

export default function Contact(props) {
  const handleClick = (e) => {
    try {
      const name = e.currentTarget.getAttribute("name");
      const url = contactData.find((contact) => contact.name === name)["url"];
      window.open(url);
    } catch (e) {
      const { name, message} = e;
      console.log(`${name}: ${message}`);
    }
  };
  return (
    <ContactContainer>
      <Links>
        {contactData.map((contact) => (
          <ContactLink
            name={contact.name}
            url={contact.url}
            handleClick={handleClick}
            key={nanoid()}
          />
        ))}
      </Links>
    </ContactContainer>
  );
}
