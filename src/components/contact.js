import React, { useState } from "react";
import styled from "styled-components";
import { ContactHelmet } from "./helmet";
import { compose, curry, equals, find, prop } from "ramda";
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

const SelectedButton = ({ name }) => (
  <Cell data-testid={`link-cell-${name}`}>
    {equals(name, "AngelList") ? (
      <AngelListButton />
    ) : (
      <EmailContainer>
        <EmailButton />
      </EmailContainer>
    )}
  </Cell>
);

const CopyEmail = ({ handleCopyEmail, copyBackground }) => (
  <Cell
    onClick={handleCopyEmail}
    style={{ background: copyBackground, borderRadius: 16 }}
  >
    <CopyIcon title="Copy" data-testid="copy-icon" />
  </Cell>
);

// -- Util ------

const getRepoEmail = (contactData) =>
  splitMailto(prop("url", find(nameIsEmail, contactData)));
const getAndCopyEmail = compose(copyToClipboard, getRepoEmail);
const contactNameEqUrl = (name, contact) => equals(prop("name", contact), name);
const dontactNameEqUrlWName = curry(contactNameEqUrl);
// const contactNameEqUrlWName = (name) => curriedContactNameEqUrl(name);
const getUrl = (e) =>
  prop("url", find(dontactNameEqUrlWName(getNameAtt(e)), contactData));
const getOpenUrl = compose(window.open, getUrl);

const Contact = () => {
  const [showCopy, setShowCopy] = useState(false);
  const [copyBackground, setCopyBackground] = useState(COPYSTATES.NORMAL);

  const copyMessage = (result) =>
    setCopyBackground(
      result,
      setTimeout(() => setCopyBackground(prop("NORMAL", COPYSTATES)), 333)
    );

  const handleCopyEmail = async (e) => {
    e.stopPropagation();
    return (await getAndCopyEmail(contactData))
      ? copyMessage(prop("SUCCESS", COPYSTATES))
      : copyMessage(prop("FAIL", COPYSTATES));
  };

  const hideShowCopy = (show) =>
    show
      ? setShowCopy(true)
      : setCopyBackground("transparent", setShowCopy(false));

  const handleMouseOver = (e) => {
    console.log(equals(getNameAtt(e), "Email"));
    return equals(getNameAtt(e), "Email") ? hideShowCopy(true) : false;
  };

  const handleMouseLeave = (e) =>
    equals(getNameAtt(e), "Email") ? hideShowCopy(false) : false;

  return (
    <ContactContainer>
      <ContactHelmet />
      <Links>
        {contactData.map((contact) => (
          <LinkRow
            name={prop("name", contact)}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={getOpenUrl}
            data-testid={`link-row-${prop("name", contact)}`}
          >
            <SelectedButton name={prop("name", contact)} />
            <Cell>{prop("name", contact)}</Cell>
            {prop("name", contact) === "Email" && showCopy && (
              <CopyEmail
                handleCopyEmail={handleCopyEmail}
                copyBackground={copyBackground}
              />
            )}
          </LinkRow>
        ))}
      </Links>
    </ContactContainer>
  );
};

export default Contact;
