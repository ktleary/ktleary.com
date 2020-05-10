import React from 'react'
import styled from 'styled-components'

const ProfileLink = styled.a`
  font-family: "Roboto Mono";
  text-decoration: none;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.6);
  &:hover {
     color: ${({ hoverColor }) => hoverColor || 'rgba(255, 255, 255, 0.6)'};
     `

const linkData = [
  { name: 'Github', url: 'https://github.com/ktleary', color: '#fff59d' },
  { name: 'AngelList', url: 'https://angel.co/u/ktleary', color: '#64b5f6' },
  { name: 'Contact', url: 'mailto:kevin@ktleary.com', color: '#81c784' },
]

export default function ProfileLinks() {
  return linkData.map((link, i) => (
    <span>
      <ProfileLink href={link.url} hoverColor={link.color}>
        {link.name}
      </ProfileLink>
      {i + 1 < linkData.length ? ' / ' : null}
    </span>
  ))
}
