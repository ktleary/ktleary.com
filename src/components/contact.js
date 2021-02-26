import React, { useState } from "react";
import styled from "styled-components";
import { ContactHelmet } from "./helmet";
import { always, compose, curry, equals, find, prop } from "ramda";
import { nanoid } from "nanoid";
import { copyToClipboard } from "../util";
import { Cell } from "./cell-row";
import { AngelListIcon, EmailIcon, CopyIcon } from "./icons";
import { AngelListButton, EmailButton } from "./buttons";
import { COPYSTATES } from "../constants";
import { nameIsEmail, splitMailto, getNameAtt } from "../fp";

// -- Styles -------

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

const EmailContainer = styled.div`
  align-items: center;
  display: flex;
`;

const contactData = [
  {
    name: "AngelList",
    url: "https://angel.co/u/ktleary",
    icon: <AngelListIcon />,
  },
  { name: "Email", url: "mailto:kevin@ktleary.com", icon: <EmailIcon /> },
];

// -- Util ------

const getRepoEmail = (contactData) =>
  splitMailto(prop("url", find(nameIsEmail, contactData)));
const getAndCopyEmail = compose(copyToClipboard, getRepoEmail);
const contactNameEqUrl = (name, contact) => equals(prop("name", contact), name);
const curriedContactNameEqUrl = curry(contactNameEqUrl);
const contactNameEqUrlWName = (name) => curriedContactNameEqUrl(name);
const getUrl = (e) =>
  prop("url", find(contactNameEqUrlWName(getNameAtt(e)), contactData));
const getOpenUrl = compose(window.open, getUrl);

function ContactLink({ name }) {
  const [showCopy, setShowCopy] = useState(false);
  const [copyBackground, setCopyBackground] = useState(COPYSTATES.NORMAL);
  const handleShowCopy = () => setShowCopy(true);
  const handleHideCopy = () =>
    setCopyBackground("transparent", setShowCopy(false));
  const resetCopyBackground = () =>
    setCopyBackground(prop("NORMAL", COPYSTATES));
  const copyMessage = (result) =>
    setCopyBackground(result, setTimeout(resetCopyBackground, 333));

  const handleCopyEmail = async (e) => {
    e.stopPropagation();
    return (await getAndCopyEmail(contactData))
      ? copyMessage(prop("SUCCESS", COPYSTATES))
      : copyMessage(prop("FAIL", COPYSTATES));
  };

  return (
    <LinkRow
      name={name}
      onMouseOver={equals(name, "Email") ? handleShowCopy : null}
      onMouseLeave={equals(name, "Email") ? handleHideCopy : null}
      onClick={getOpenUrl}
      data-testid={`link-row-${name}`}
    >
      <Cell data-testid={`link-cell-${name}`}>
        {equals(name, "AngelList") ? (
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

const Contact = always(
  <ContactContainer>
    <ContactHelmet />
    <Links>
      {contactData.map((contact) => (
        <ContactLink name={contact.name} url={contact.url} key={nanoid()} />
      ))}
    </Links>
  </ContactContainer>
);

export default Contact;
