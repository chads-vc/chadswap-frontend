import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Container from '../../../components/Container'

const PageHeader = () => (
  <Container size="lg">
    <StyledPageHeader>
      <StyledTitle>
        <StyledText color="#DE43CF" fontSize={133}>Stake and burn</StyledText>
      </StyledTitle>
      <StyledHiddenTitle>
        <StyledText color="#8015E8" fontSize={90}>Chads of Defi NFTs</StyledText>
      </StyledHiddenTitle>
      <StyledSubtitle>
        <StyledText color="#DE43CF" fontSize={60}>for stacy yield bonuses</StyledText>
      </StyledSubtitle>
      <StyledButton>
        <Button href={`https://chads.limited/`} size="xl" text="mint NFTs"/>
      </StyledButton>
    </StyledPageHeader>
  </Container>
)

const StyledButton = styled.div`
  margin-top: 80px;
  button {
    text-transform: none;
  }
`

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const StyledTitle = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: visible;
  @media (max-width: 970px) {
    div {
      font-size: 100px;
    }
  }
`

const StyledHiddenTitle = styled.h3`
  font-weight: 400;
  white-space: nowrap;
  overflow: visible;
  margin: 0;
  margin-top: -75px;
  z-index: -1;
  @media (max-width: 970px) {
    margin-top: -55px;
    div {
      font-size: 68px;
    }
  }
`

const StyledSubtitle = styled.h3`
  font-weight: 400;
  white-space: nowrap;
  overflow: visible;
  margin: 0;
  margin-top: -50px;
  @media (max-width: 970px) {
    margin-top: -40px;
    div {
      font-size: 45px;
    }
  }
`

interface StyledTextProps {
  color: string
  fontSize: number
  lineHeight?: number
}

const StyledText = styled.div<StyledTextProps>`
  font-family: 'Third-rail'; 
  color: ${(props) => props.color};
  flex:1;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight ? props.lineHeight + 'px' : '100%'};
  text-shadow: #c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px;
}
`

export default PageHeader
