import React from 'react'
import styled from 'styled-components'

const ProfileLinksContainer = styled.div`
  margin: 18px 40px;
`

const ProfileLink = styled.a`
  font-family: 'Roboto Mono';
  text-decoration: none;
  font-size: 3vh;
  color: rgba(255, 255, 255, 0.6);
  transition: color 2s, font-weight 2s, transform 1s;
  &:hover {
    color: ${({ hoverColor }) => hoverColor || 'rgba(255, 255, 255, 0.6)'};

    font-weight: 600;
  
  }
`
const SlashStyle = styled.span`
  font-size: 3vh;
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
