import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 36px 0 0 0;
  vertical-align: middle;
  width: 100%;
`

const Title = styled.h1`
  font-family: monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 7vmin;
  padding: 0;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
`

export default function Header() {
  return (
    <TitleContainer>
      <Title>ktleary</Title>
    </TitleContainer>
  )
}
