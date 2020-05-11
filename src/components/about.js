import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  margin: 10vh 8px 0 8px;
  color: rgba(255, 255, 255, 0.78);
`

const changeColor = '#ff8a65'

function changeBackground() {
  document.body.classList.toggle('animated')
}

const AboutText = styled.div`
  color: ${({ textColor }) => textColor || 'rgba(255, 255, 255, 0.78)'};
  font-family: sans-serif;
  text-align: center;
  font-size: 5vw;
  margin: 4px 0;
  padding: 0;
`

export default function About() {
  return (
    <AboutContainer>
      <AboutText>I build innovative software</AboutText>
      <AboutText>for companies and organizations</AboutText>
      <AboutText textColor={changeColor} onClick={changeBackground}>
        changing the world
      </AboutText>
    </AboutContainer>
  )
}
