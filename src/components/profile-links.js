import React from 'react'
import styled from 'styled-components'

const ProfileLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 18px 40px;
`

const ProfileLink = styled.a`
  font-family: monospace;
  text-decoration: none;
  font-size: 4vmin;
  color: rgba(255, 255, 255, 0.79);
  transition: color 0.1s;
  &:hover {
    color: ${({ hoverColor }) => hoverColor || 'rgba(255, 255, 255, 0.6)'};
  }
`

const SlashStyle = styled.span`
  font-size: 4vmin;
  color: rgba(255, 255, 255, 0.6);
`

const slash = () => <SlashStyle>&nbsp;/&nbsp;</SlashStyle>

const linkData = [
  { name: 'Github', url: 'https://github.com/ktleary', color: '#2196f3' },
  { name: 'Profile', url: 'https://angel.co/u/ktleary', color: '#ffeb3b' },
  { name: 'Contact', url: 'mailto:kevin@ktleary.com', color: '#4caf50' },
]

function generateLinks() {
  return linkData.map((link, i) => (
    <div key={link.url}>
      <ProfileLink href={link.url} hoverColor={link.color}>
        {link.name}
      </ProfileLink>
      {i < linkData.length - 1 ? slash() : null}
    </div>
  ))
}

export default function ProfileLinks() {
  return <ProfileLinksContainer>{generateLinks()}</ProfileLinksContainer>
}
