import React from 'react'
import styled from 'styled-components'

const ProfileLinksContainer = styled.div`
  margin: 18px 40px;
`

const ProfileLink = styled.a`
  font-family: "Roboto Mono";
  text-decoration: none;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.6);
  &:hover {
     color: ${({ hoverColor }) => hoverColor || 'rgba(255, 255, 255, 0.6)'};
     `
const SlashStyle = styled.span`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.6);
`

const slash = () => <SlashStyle>&nbsp;/&nbsp;</SlashStyle>

const linkData = [
  { name: 'Github', url: 'https://github.com/ktleary', color: '#fff59d' },
  { name: 'Profile', url: 'https://angel.co/u/ktleary', color: '#64b5f6' },
  { name: 'Contact', url: 'mailto:kevin@ktleary.com', color: '#81c784' },
]

function generateLinks() {
  return linkData.map((link, i) => (
    <span>
      <ProfileLink href={link.url} hoverColor={link.color}>
        {link.name}
      </ProfileLink>
      {i < linkData.length - 1 ? slash() : null}
    </span>
  ))
}

export default function ProfileLinks() {
  return <ProfileLinksContainer>{generateLinks()}</ProfileLinksContainer>
}
