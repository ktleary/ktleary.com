import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  display: flex;
  margin: 36px 40px 18px 36px;
  padding: 0;
  height: 46px;
  line-height: 46px;
  vertical-align: middle;
`

const Title = styled.h1`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: normal;
  font-size: 46px;
  line-height: 46px;
  height: 46px;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
`
const TimeDisplay = styled.div`
  display: none;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.24);
  vertical-align: bottom;
  margin-left: 16px;
  padding-top: 5px;
`
function getTimestamp() {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  const hour = date.getHours()
  const min = date.getMinutes()

  return `${year}${month}${day}${hour}${min}`
}

export default function Header() {
  const ts = getTimestamp()
  return (
    <TitleContainer>
      <Title>ktleary</Title>
      <TimeDisplay>{ts}</TimeDisplay>
    </TitleContainer>
  )
}
